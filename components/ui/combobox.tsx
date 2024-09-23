"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  
  CommandGroup,

  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MainCategory } from "@/sanity/lib/interface"



export function Combobox({
  mainCategories,
  setCategory,
  category
}: {
  mainCategories: MainCategory[];
  setCategory: (category: string) => void;
  category:string
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(category);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className=" justify-start pl-0 font-semibold text-base focus:border text-violet-700 hover:text-violet-900 dark:text-yellow-300 dark:hover:text-yellow-500"
        >
          {value
          }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {mainCategories.map((mainCategory) => (
               <CommandItem
               key={mainCategory.title}
               value={mainCategory.title}
              
               onSelect={(currentValue) => {
                 const selectedCategory = mainCategories.find(
                   (mainCategory) => mainCategory.title === currentValue
                 );
                 
                 if (selectedCategory) {
                   setValue(currentValue === value ? '' : currentValue);
                   setCategory(selectedCategory.slug); // Set the slug as the category
                 }
             
                 setOpen(false);
               }}
             >
             
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4 text-violet-700 dark:text-yellow-300',
                      value === mainCategory.title ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {mainCategory.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

