import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ItemBox = () => {
	const hoverEffect =
		"relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-violet-700 after:dark:bg-yellow-500 after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left"

	return (
		<Link href='/' target='_blank' rel='norefferer nofollow' className='space-y-3 group'>
			<div className=' flex justify-center items-center  w-full aspect-square bg-white  rounded-sm shadow-lg group-hover:-translate-y-1 duration-500'>
				<Image src='/react.png' alt='react' className='w-1/2' width={150} height={150} />
			</div>
			<div className='space-y-1'>
				<h2
					className={`text-lg font-bold text-black dark:text-white group-hover:text-violet-700 group-hover:dark:text-yellow-500 ${hoverEffect}`}>
					Lapa Ninja
				</h2>
				<p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis, tempora obcaecati nam velit molestiae
					autem ad nostrum omnis impedit. Unde, eos consequuntur?
				</p>
			</div>
		</Link>
	)
}

export default ItemBox
