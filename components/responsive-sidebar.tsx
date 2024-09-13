'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Home, Settings, HelpCircle } from 'lucide-react'
import { ComboboxDemo } from './ui/combobox'

export function ResponsiveSidebar() {
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

	const NavItems = () => (
		<nav className='flex flex-col space-y-4'>
			<Link href='/' className='flex items-center space-x-2 text-gray-700 hover:text-gray-900'>
				<Home className='h-5 w-5' />
				<span>Home</span>
			</Link>
			<Link href='/settings' className='flex items-center space-x-2 text-gray-700 hover:text-gray-900'>
				<Settings className='h-5 w-5' />
				<span>Settings</span>
			</Link>
			<Link href='/help' className='flex items-center space-x-2 text-gray-700 hover:text-gray-900'>
				<HelpCircle className='h-5 w-5' />
				<span>Help</span>
			</Link>
		</nav>
	)

	if (isMobile) {
		return (
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button variant='ghost' size='icon' className='fixed top-[10px] left-4 z-50 lg:hidden  focus:border'>
						<Menu className='size-7 text-gray-600' />
						<span className='sr-only'>Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left' className='w-[240px] sm:w-[300px]'>
					<div className='py-4'>
						<ComboboxDemo />
						<NavItems />
					</div>
				</SheetContent>
			</Sheet>
		)
	}

	return (
		<aside className='hidden md:flex flex-col h-screen bg-pink-400 p-4 sticky top-0'>
			<ComboboxDemo />
			<NavItems />
		</aside>
	)
}
