import SignOut from "@/components/sign-out";
import { PopupButton } from '@typeform/embed-react'

const Onboarding = () => {
  return (
    <PopupButton id="<form-id>" style={{ fontSize: 20 }} className="my-button">
      click to open form in popup
    </PopupButton>
  )
}

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-full h-full flex flex-col space-y-5 justify-center items-center">
        <Onboarding/>
        <iframe
          src="https://juanjaramilloai.typeform.com/to/LROMk6Zb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
        <SignOut />
      </div>
    </div>
  );
}
