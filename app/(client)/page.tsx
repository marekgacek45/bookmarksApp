import Header from '@/components/header'
import Footer from '@/components/footer'
import { ResponsiveSidebar } from '@/components/responsive-sidebar'
import ItemBox from '@/components/item-box'
import { client } from '@/sanity/lib/client'
import { MainCategory } from '@/sanity/lib/interface'


async function getMainCategories() {
	const query = `*[_type == "mainCategory" && count(*[_type == "item" && references(^._id)]) > 0]{
		title,
		"slug": slug.current}`

	const mainCategories = await client.fetch(query)
	return mainCategories
}


export default async function Home() {
	const  mainCategories: MainCategory[] = await getMainCategories()


	console.log(mainCategories)
	return (
		<div >
			<Header />
			<div className='flex min-h-screen max-w-screen-2xl mx-auto px-4 sm:px-6 2xl:px-0'>
			{/* Sidebar */}
				<ResponsiveSidebar  mainCategories={mainCategories} />

				{/* Main Content */}
				<main className='w-full p-6 lg:p-12 mt-20 lg:mt-0 '>
					<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12'>
						<ItemBox />
						<ItemBox />
						<ItemBox />
					
						
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}
