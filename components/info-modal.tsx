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
					<DialogTitle>Here I am writing some</DialogTitle>
					<DialogDescription>
						About idea of this page bla bla bla
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default InfoModal
