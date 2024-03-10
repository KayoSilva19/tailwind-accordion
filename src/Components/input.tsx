import { ComponentProps } from 'react'

type inputProps = ComponentProps<'input'>
export function Input({ ...rest }: inputProps) {
  return (
    <input
      {...rest}
      className="group h-12 flex-1 rounded-sm border border-zinc-200 p-2 text-zinc-900 shadow-sm outline-none focus-within:border-violet-400"
      type="text"
      placeholder="www.website.com.br"
    />
  )
}
