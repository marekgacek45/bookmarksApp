'use client'

import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { Item, MainCategory, SubCategory } from '@/sanity/lib/interface'
import { ResponsiveSidebar } from '@/components/responsive-sidebar'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ItemBox from '@/components/item-box'

// QUERIES
async function getStacks() {
	const query = `*[_type == "mainCategory" && count(*[_type == "item" && references(^._id)]) > 0]{
    title,
    "slug": slug.current
  }`

	const mainCategories = await client.fetch(query)
	return mainCategories
}

async function getCategories(category: string) {
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
	// STATES
	const [allStacks, setAllStacks] = useState<MainCategory[]>([])
	const [allCategories, setAllCategories] = useState<SubCategory[]>([])

	const [stack, setStack] = useState('')
	const [category, setCategory] = useState('')

	const [items, setItems] = useState<Item[]>([])

	// FETCH DATA
	// stacks
	useEffect(() => {
		const fetchStacks = async () => {
			const data = await getStacks()
			setAllStacks(data)
			if (data.length > 0) {
				setStack(data[0].slug)
			}
		}

		fetchStacks()
	}, [])

	// categories
	useEffect(() => {
		if (stack) {
			const fetchCategories = async () => {
				const data = await getCategories(stack)
				setAllCategories(data)

				if (data.length > 0) {
					setCategory(data[0].slug)
				}
			}

			fetchCategories()
		}
	}, [stack])

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
		<div>
			<Header />
			<div className='flex min-h-screen max-w-screen-2xl mx-auto px-4 sm:px-6 2xl:px-0'>
				{/* Sidebar */}
				<ResponsiveSidebar
					allStacks={allStacks}
					allCategories={allCategories}
					setStack={setStack}
					stack={stack}
					setCategory={setCategory}
					category={category}
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
