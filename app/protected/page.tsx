import SignOut from "@/components/sign-out";


export default function Home() {

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <iframe
          src="https://juanjaramilloai.typeform.com/to/LROMk6Zb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-screen-lg h-screen"
        ></iframe>
        <SignOut />
      </div>
    </div>
  );
}
