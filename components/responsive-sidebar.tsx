'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Combobox } from './ui/combobox'
import InfoModal from './info-modal'
import { Stack, Category } from '@/sanity/lib/interface'

export function ResponsiveSidebar({
	allStacks,
	allCategories,
	setStack,
	stack,
	setCategory,
	category,
}: {
	allStacks: Stack[]
	allCategories: Category[]
	setStack: (stack: string) => void
	stack: string
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

	const  capitalize = (string: string) => {
		if (!string) return ''; 
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	

	const NavItems = () => (
		<nav className='flex flex-col  space-y-4 mt-2 text-black dark:text-white'>
			<InfoModal />
			{allCategories.map(item => (
				<button
					key={item.title}
					onClick={() => handleClick(item.slug)}
					className={`hover:text-violet-900 dark:hover:text-yellow-500 self-start ${hoverEffect} ${category == item.slug ? 'text-violet-700 dark:text-yellow-300 font-semibold' : ''} `}>
					{capitalize(item.title)}
				</button>
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
						<Combobox allStacks={allStacks} setStack={setStack} stack={stack} />
						<NavItems />
					</div>
				</SheetContent>
			</Sheet>
		)
	}

	return (
		<aside className='hidden md:flex flex-col h-screen p-4 sticky top-[20px] min-w-[200px] overflow-scroll px-0'>
			<Combobox allStacks={allStacks} setStack={setStack} stack={stack} />
			<NavItems />
		</aside>
	)
}
