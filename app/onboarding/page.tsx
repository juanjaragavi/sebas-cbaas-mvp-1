import SignOut from "@/components/sign-out";
import { Popover } from '@typeform/embed-react'

const formId = 'crNvgGG2'

export default function Home() {
  return (
    <div className="min-w-full h-screen flex flex-col justify-center items-center bg-white">
      <Popover
          id={formId}
          autoClose
        />
      <iframe
        src="https://juanjaramilloai.typeform.com/to/LROMk6Zb"
        title="¡Hola, Soy Sebas y te voy a ayudar a configurar tu Bot!"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="min-w-full h-screen"
      ></iframe>
      <SignOut />
    </div>
  );
}
