'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Combobox } from './ui/combobox'
import InfoModal from './info-modal'
import { MainCategory, SubCategory } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'
import { set } from 'sanity'

export function ResponsiveSidebar({
	mainCategories,
	subCategories,
	setCategory,
	category
}: {
	mainCategories: MainCategory[]
	subCategories: SubCategory[]
	setCategory: (category: string) => void
	category: string
}) {
	const hoverEffect =
		"relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-violet-700 after:dark:bg-yellow-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"

	const [isMobile, setIsMobile] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 1024)
		}
		checkIsMobile()
		window.addEventListener('resize', checkIsMobile)
		return () => window.removeEventListener('resize', checkIsMobile)
	}, [])

	const handleClick = (category: string) => {
		setCategory(category)
		setIsOpen(false)
	}

	const NavItems = () => (
		<nav className='flex flex-col  space-y-4 mt-2 text-black dark:text-white'>
			<InfoModal />
			{subCategories.map(mainCategory => (
				<Button
					 variant="link"
					key={mainCategory.title}
					onClick={() => handleClick(mainCategory.slug)}
					
					
					className={`hover:text-violet-900 dark:hover:text-yellow-500 self-start`}>
					{mainCategory.title}
				</Button>
			))}
		</nav>
	)

	if (isMobile) {
		return (
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button variant='ghost' size='icon' className='fixed top-[15px] left-4 z-50 lg:hidden focus:border'>
						<Menu className='size-7 text-violet-900 dark:text-yellow-500' />
						<span className='sr-only'>Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left' className='w-[240px] sm:w-[250px] bg-gray-100 dark:bg-slate-900'>
					<div className='py-4'>
						<Combobox mainCategories={mainCategories} setCategory={setCategory} category={category} />
						<NavItems />
					</div>
				</SheetContent>
			</Sheet>
		)
	}

	return (
		<aside className='hidden md:flex flex-col h-screen p-4 sticky top-[20px] min-w-[200px] overflow-scroll px-0'>
			<Combobox mainCategories={mainCategories} setCategory={setCategory} category={category} />
			<NavItems />
		</aside>
	)
}
