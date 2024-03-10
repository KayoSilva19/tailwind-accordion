import { Input } from './input'
import { Button } from './Button'
import { QrCodeIcon } from 'lucide-react'
import { useState, ChangeEvent } from 'react'

export function QrCode() {
  const [inputLink, setInputLink] = useState<string>('')
  const [apiCode, setApiCode] = useState<string>('')
  const [validator, setValidator] = useState<boolean>(true)

  const API = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

  function hangleChange(link: ChangeEvent<HTMLInputElement>) {
    const newLink = link.target.value
    setInputLink(newLink)
  }

  function handleGenerateQRCode() {
    const API_QR_CODE = `${API}${inputLink}`
    setApiCode('')

    if (inputLink === '') {
      return setValidator(false)
    }

    setValidator(true)
    setApiCode(API_QR_CODE)
  }

  return (
    <div className="flex w-full max-w-3xl flex-col rounded-sm bg-white p-5">
      <span className="text-lg font-bold text-violet-500">
        Gerador de QR CODE
      </span>
      <div className="mt-4 flex items-center justify-center gap-2">
        <Input value={inputLink} onChange={hangleChange} />
        <Button.Root onClick={handleGenerateQRCode}>
          <Button.Text text="Gerar" />
          <Button.Icon icon={QrCodeIcon} />
        </Button.Root>
      </div>

      <div className="flex justify-center">
        {validator === false && (
          <span className="mt-6 font-medium text-red-500">Insira um link</span>
        )}

        {apiCode && (
          <img
            className="mt-6 rounded-md bg-violet-500 p-2 shadow-lg"
            src={apiCode}
          />
        )}
      </div>
    </div>
  )
}
