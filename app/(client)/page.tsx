'use client'

import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { Category, Item } from '@/sanity/lib/interface'
import { ResponsiveSidebar } from '@/components/responsive-sidebar'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ItemBox from '@/components/item-box'

// QUERIES
async function getCategories() {
	const query = `*[_type == "category" && count(*[_type == "item" && references(^._id)]) > 0] 
    | order(title asc) {
      title,
      "slug": slug.current,
    }`

	const subCategories = await client.fetch(query)
	return subCategories
}

async function getItems(category: string) {
	const query = `*[_type == "item" && references(*[_type == "category" && slug.current == "${category}"]._id)] 
  | order(title asc) {
    title,
    "slug": slug.current,
    icon,
    description,
    link
  }`

	const items = await client.fetch(query)
	return items
}

export default function Home() {
	// STATES
	const [allCategories, setAllCategories] = useState<Category[]>([])
	const [category, setCategory] = useState('')
	const [items, setItems] = useState<Item[]>([])

	// categories
	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getCategories()
			setAllCategories(data)

			if (data.length > 0) {
				setCategory(data[0].slug)
			}
		}

		fetchCategories()
	}, [])

	// items
	useEffect(() => {
		if (category) {
			const fetchItems = async () => {
				const data = await getItems(category)
				setItems(data)
			}

			fetchItems()
		}
	}, [category])

	return (
		<>
			<Header />
			<div className='flex min-h-screen max-w-screen-2xl mx-auto px-4 sm:px-6 2xl:px-0'>
				{/* Sidebar */}
				<ResponsiveSidebar allCategories={allCategories} setCategory={setCategory} category={category} />

				{/* Main Content */}
				<main className='w-full p-6 lg:p-12 mt-20 lg:mt-0'>
					<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12'>
						{items.map(item => (
							<ItemBox key={item.title} item={item} />
						))}
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}
