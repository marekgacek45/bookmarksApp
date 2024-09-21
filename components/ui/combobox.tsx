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

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function Combobox({mainCategories}: {mainCategories: MainCategory[]}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

console.log(mainCategories)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className=" justify-start pl-0 font-semibold text-base focus:border text-violet-700  hover:text-violet-900 dark:text-yellow-300 dark:hover:text-yellow-500"
        >
          {value
            ? mainCategories.find((mainCategory) => mainCategory.title === value)?.title
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search framework..." /> */}
          <CommandList>
            {/* <CommandEmpty>No framework found.</CommandEmpty> */}
            <CommandGroup>
              {mainCategories.map((mainCategory) => (
                <CommandItem
                  key={mainCategory.title}
                  value={mainCategory.title}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 text-violet-700 dark:text-yellow-300",
                      value === mainCategory.title ? "opacity-100" : "opacity-0"
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
  )
}
