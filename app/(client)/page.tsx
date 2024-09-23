'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ResponsiveSidebar } from '@/components/responsive-sidebar'
import ItemBox from '@/components/item-box'
import { client } from '@/sanity/lib/client'
import { Item, MainCategory, SubCategory } from '@/sanity/lib/interface'
import { get } from 'http'
import { set } from 'sanity'

async function getMainCategories() {
	const query = `*[_type == "mainCategory" && count(*[_type == "item" && references(^._id)]) > 0]{
    title,
    "slug": slug.current
  }`

	const mainCategories = await client.fetch(query)
	return mainCategories
}

async function getSubCategories(category: string) {
	const query = `*[_type == "subCategory" && count(*[_type == "item" && references(^._id) && references(*[_type == "mainCategory" && slug.current == "${category}"]._id)]) > 0] {
	  title,
	  "slug": slug.current,
	}`

	const subCategories = await client.fetch(query)
	return subCategories
}

async function getItems(category: string) {
	const query = `*[_type == "item" && references(*[_type == "subCategory" && slug.current == "${category}"]._id)]  {
    title,
    "slug": slug.current,
  }`

	const items = await client.fetch(query)
	return items
}

export default function Home() {
	const [category, setCategory] = useState('react') // Default category
	
	const [mainCategories, setMainCategories] = useState<MainCategory[]>([])
	const [subCategories, setSubCategories] = useState<SubCategory[]>([])
	const [items, setItems] = useState<Item[]>([])

	// Fetch main categories once on initial render
	useEffect(() => {
		const fetchMainCategories = async () => {
			const mainCategoriesData = await getMainCategories()
			setMainCategories(mainCategoriesData)
		}

		fetchMainCategories()
	}, [])

	
	useEffect(() => {
		const fetchItems = async () => {
			const data = await getItems(category)
			setItems(data)
		}

		fetchItems()
	}, [category])

	useEffect(() => {
		const fetchSubCategories = async () => {
			const data = await getSubCategories(category)
			setSubCategories(data)
		}

		fetchSubCategories()
	}, [category])

	return (
		<div>
			<Header />
			<div className='flex min-h-screen max-w-screen-2xl mx-auto px-4 sm:px-6 2xl:px-0'>
				{/* Sidebar */}
				<ResponsiveSidebar
					mainCategories={mainCategories}
					subCategories={subCategories}
					setCategory={setCategory}
					category={category} // Pass setCategory to update category
				/>

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
		</div>
	)
}
