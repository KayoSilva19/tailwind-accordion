import { ElementType } from 'react'

type ButtonIconProps = {
  icon: ElementType
}

export function Icon({ icon: Icon }: ButtonIconProps) {
  return <Icon className="h-6 w-6 text-white" />
}
