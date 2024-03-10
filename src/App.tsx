import { Button } from './Components/Button'
import { QrCodeIcon } from 'lucide-react'

export function App() {
  return (
    <main
      className="flex h-screen 
        flex-col items-center 
        gap-6 bg-zinc-800 px-10 pt-16"
    >
      <h1 className="text-center text-3xl font-medium text-white">
        React Pattern de Composição
      </h1>
      <div
        className="max-w-large flex w-full flex-col 
        gap-3 rounded-sm bg-white p-8 shadow-md"
      >
        <Button.Root onClick={() => console.log('Variação 1')}>
          <Button.Text text="Variação 1" />
          <Button.Icon icon={QrCodeIcon} />
        </Button.Root>

        <Button.Root onClick={() => console.log('Variação 2')}>
          <Button.Icon icon={QrCodeIcon} />
          <Button.Text text="Variação 2" />
        </Button.Root>

        <Button.Root onClick={() => console.log('Variação 3')}>
          <Button.Text text="Variação 3" />
        </Button.Root>

        <Button.Root onClick={() => console.log('Variação 4')}>
          <Button.Icon icon={QrCodeIcon} />
        </Button.Root>
      </div>
    </main>
  )
}
