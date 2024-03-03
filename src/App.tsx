import { Accordion } from './Components/Accordion'

export function App() {
  return (
    <main className="flex h-screen flex-col items-center gap-6 bg-violet-500 px-10 pt-16">
      <Accordion title="Tailwind Teste" />
      <Accordion title="React Test" />
    </main>
  )
}
