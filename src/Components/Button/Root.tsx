import { ComponentProps, ReactNode } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
}

export function Root({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="group flex h-12 items-center justify-center gap-2 rounded-sm bg-violet-500  p-2 duration-300 hover:bg-violet-800"
    >
      {children}
    </button>
  )
}
