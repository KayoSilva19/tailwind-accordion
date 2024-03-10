import { ReactNode, ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
}

function Root({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="group flex h-12 items-center justify-center gap-2 rounded-sm bg-violet-500  p-2 duration-300 hover:bg-violet-800"
    >
      {children}
    </button>
  )
}

type ButtonTextProps = {
  text: string
}

function Text({ text }: ButtonTextProps) {
  return <span className="font-medium text-white">{text}</span>
}

type ButtonIconProps = {
  children: ReactNode
}

function Icon({ children }: ButtonIconProps) {
  return children
}

export const Button = {
  Root,
  Text,
  Icon,
}
