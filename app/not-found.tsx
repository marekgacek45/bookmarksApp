import Footer from '@/components/footer'
import Header from '@/components/header'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {

const hoverEffect =
		"relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-violet-700 after:dark:bg-yellow-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"

  return (
    <div className="min-h-screen flex flex-col justify-between">
    <Header />
    <div className='lg:hidden'></div>
    <div className='flex h-full max-w-screen-2xl mx-auto px-4 sm:px-6 2xl:px-0'>
      {/* Sidebar */}
     

      {/* Main Content */}
      <main className='w-full h-full p-6 lg:p-12 mt-20 lg:mt-0 flex flex-col justify-center items-center text-center text-black dark:text-white'>
       <h1 className='text-5xl'>404 </h1>
       <h2 className='text-3xl mt-2'>Page not found</h2>

       <Link href="/" className={ `text-violet-900 dark:text-yellow-300 hover:text-violet-700 dark:hover:text-yellow-500 mt-12 ${hoverEffect}`}>comeback home</Link>

      </main>
    </div>
    <Footer />
  </div>
  )
}

export default NotFound