import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

type AccordionProps = {
  title: string
}

export function Accordion({ title }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [parent] = useAutoAnimate()

  function handleOpen() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div
      onClick={handleOpen}
      ref={parent}
      className="group flex w-full min-w-48 max-w-3xl cursor-pointer flex-col rounded-sm border border-transparent bg-zinc-50 p-4 shadow-sm transition-all duration-500 ease-in-out hover:border-violet-700 hover:bg-violet-50"
    >
      <div className="flex flex-1">
        <span className="text-lg font-semibold text-zinc-600 group-hover:text-violet-500">
          {title}
        </span>
        <button className="ml-auto transition-all duration-300">
          {isOpen ? (
            <ChevronUp className="h-7 w-7 cursor-pointer rounded-sm text-zinc-600 transition-all duration-300 group-hover:text-violet-500" />
          ) : (
            <ChevronDown className="h-7 w-7 cursor-pointer rounded-sm text-zinc-600 transition-all duration-300 group-hover:text-violet-500" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="pt-4 text-zinc-700">
          Description content Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Dolore officia, nisi architecto mollitia ipsam totam
          molestiae repellat quasi aliquid molestias atque. Debitis
          exercitationem quibusdam laboriosam nesciunt aliquid quis, cupiditate
          ducimus!
        </div>
      )}
    </div>
  )
}
