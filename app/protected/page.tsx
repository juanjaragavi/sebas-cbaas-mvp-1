import SignOut from "@/components/sign-out";


export default function Home() {

  return (
    <div className="flex w-full h-full bg-white">
      <div className="w-full h-full flex flex-col space-y-5 justify-center items-center">
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
