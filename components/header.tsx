import Link from 'next/link'
import React from 'react'

import { YoutubeIcon, Sun } from 'lucide-react'
import { ModeToggle } from './ui/mode-toggler'

const Header = () => {
	return (
		<header className='fixed lg:relative left-0 right-0 top-0  py-4 bg-white dark:bg-slate-900  border-b border-gray-400 z-10 '>
			<div className='flex justify-end lg:justify-between items-center max-w-screen-2xl mx-auto px-4 sm:px-6 2xl:px-0 '>

				<Link
					href='/'
					className='absolute lg:relative  left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 text-xl text-violet-900 dark:text-yellow-300  font-semibold tracking-wide hover:text-violet-700 hover:dark:text-yellow-500'>
					BOOKMARKS.<span className='text-sm font-thin tracking-normal '>marekgacekdev.pl</span>
				</Link>

				<div className='flex items-center  gap-4'>

					<div className=' hidden lg:block text-sm'>
						<span className='text-gray-600 dark:text-gray-400'>suggest:</span>{' '}
						<a
							href='mailto:marekgacekdev@gmail.com'
							className='text-violet-900 dark:text-yellow-300 hover:text-violet-700 hover:dark:text-yellow-500'>
							marekgacekdev.gmail.com
						</a>
					</div>

					<Link
						href='https://youtube.com/@marekgacekdev'
						target='_blank'
						rel='noreferrer nofollow'
						className='hidden sm:block'
						aria-label='Youtube'>
						<YoutubeIcon className='size-7 text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-300' />
					</Link>

					<ModeToggle />
					
				</div>
			</div>
		</header>
	)
}

export default Header
