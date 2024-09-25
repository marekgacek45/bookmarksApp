import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Stack } from '@/sanity/lib/interface';

export function Combobox({
  allStacks,
  setStack,
  stack, // stack is the slug here
}: {
  allStacks: Stack[];
  setStack: (stack: string) => void;
  stack: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedTitle, setSelectedTitle] = React.useState(
    () => allStacks.find((s) => s.slug === stack)?.title || ''
  );

  React.useEffect(() => {
    const stackTitle = allStacks.find((s) => s.slug === stack)?.title || '';
    setSelectedTitle(stackTitle);
  }, [stack, allStacks]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          role='combobox'
          aria-expanded={open}
          className='justify-start pl-0 font-semibold text-base focus:border text-violet-700 hover:text-violet-900 dark:text-yellow-300 dark:hover:text-yellow-500'>
          {selectedTitle || 'Select a stack'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandList>
            <CommandGroup>
              {allStacks.map((item) => (
                <CommandItem
                  key={item.slug}
                  value={item.title}
                  onSelect={() => {
                    setSelectedTitle(item.title);
                    setStack(item.slug); // Set stack slug here
                    setOpen(false);
                  }}>
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4 text-violet-700 dark:text-yellow-300',
                      selectedTitle === item.title ? 'opacity-100' : 'opacity-0'
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
  );
}
