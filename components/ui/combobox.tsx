import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { MainCategory } from '@/sanity/lib/interface'

export function Combobox({
	allStacks,
	setStack,
	stack,
}: {
	allStacks: MainCategory[]
	setStack: (stack: string) => void
	stack: string
}) {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState(stack)

 const  capitalize = (string: string) => {
    if (!string) return ''; 
    return string.charAt(0).toUpperCase() + string.slice(1);
}


	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='ghost'
					role='combobox'
					aria-expanded={open}
					className=' justify-start pl-0 font-semibold text-base focus:border text-violet-700 hover:text-violet-900 dark:text-yellow-300 dark:hover:text-yellow-500'>
					{value || capitalize(stack)}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandList>
						<CommandGroup>
							{allStacks.map((item) => (
								<CommandItem
									key={item.title}
									value={item.title}
									onSelect={(currentValue) => {
										const selectedCategory = allStacks.find((s) => s.title === currentValue)

										if (selectedCategory) {
											setValue(currentValue === value ? '' : currentValue)
											setStack(selectedCategory.slug)
										}

										setOpen(false)
									}}>
									<Check
										className={cn(
											'mr-2 h-4 w-4 text-violet-700 dark:text-yellow-300',
											value === item.title ? 'opacity-100' : 'opacity-0'
										)}
									/>
									{item.title}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
