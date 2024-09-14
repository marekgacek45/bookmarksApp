import Header from '@/components/header'
import Footer from '@/components/footer'
import { ResponsiveSidebar } from '@/components/responsive-sidebar'
import ItemBox from '@/components/item-box'

export default function Home() {
	return (
		<>
			<Header />
			<div className='flex h-full max-w-screen-2xl mx-auto'>
				{/* Sidebar */}
				<ResponsiveSidebar />

				{/* Main Content */}
				<main className='w-full  p-6 lg:p-12'>
					<div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-12'>
						<ItemBox />
						
						
						
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}
