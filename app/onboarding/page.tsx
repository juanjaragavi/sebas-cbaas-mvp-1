import SignOut from "@/components/sign-out";

export default function Home() {
  return (
    <div className="min-w-full h-screen flex flex-col justify-center items-center bg-white">
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
