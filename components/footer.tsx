import Link from 'next/link'
import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {

  const currentYear = new Date().getFullYear()

	return (
		<footer className='border-t py-4 border-gray-400 '>
			<div className='flex flex-col md:flex-row  md:justify-between items-center gap-2 md:gap-0 max-w-screen-2xl mx-auto px-4 sm:px-6 2xl:px-0'>
				<div className=' text-sm'>
					
					<Link
						href='https://www.marekgacekdev.pl'
						target='_blank'
						
						className='text-violet-900 dark:text-yellow-300 hover:text-violet-700 hover:dark:text-yellow-500'>
						marekgacekdev.pl
					</Link>
				</div>

				<div className=' text-sm flex items-center'>
					<span className='text-gray-600 dark:text-gray-400'>design & inspiration:</span>{' '}
					<Link
						href='https://www.bookmarks.design'
						target='_blank'
						rel='noreferrer nofollow'
						className='text-violet-900 dark:text-yellow-300 hover:text-violet-700 hover:dark:text-yellow-500'>
						bookmarks.design
					</Link>
          <Heart className='size-3 text-red-600 fill-red-600 ml-1'/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
