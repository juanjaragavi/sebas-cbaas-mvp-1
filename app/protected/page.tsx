import SignOut from "@/components/sign-out";
import { Widget } from '@typeform/embed-react'

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <Widget id="LROMk6Zb" style={{ width: '50%' }} />
        <SignOut />
      </div>
    </div>
  );
}
