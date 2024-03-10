type ButtonTextProps = {
  text: string
}

export function Text({ text }: ButtonTextProps) {
  return <span className="font-medium text-white">{text}</span>
}
