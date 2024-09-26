import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

import { Info } from 'lucide-react'

const InfoModal = () => {

	// const hoverEffect =
	// 	"relative  w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-violet-700 after:dark:bg-yellow-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"

	return (
		<Dialog>
			<DialogTrigger className={` flex items-center gap-2 hover:text-violet-900 dark:hover:text-yellow-500 `}><Info className='size-3'/>Info</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='text-xl'>Your ultimate library for programming resources, libraries, and courses</DialogTitle>
					<DialogDescription className='pt-4 text-base'>
					Discover a curated collection of the best programming resources, libraries, and courses. From React and Laravel to modern development tools, Bookmarks offers a comprehensive library for developers of all levels. Explore, learn, and enhance your coding journey with organized and up-to-date content.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default InfoModal
