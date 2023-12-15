import SignOut from "@/components/sign-out";

export default function Home() {
  return (
    <div className="min-w-full min-h-full bg-white">
      <iframe
        src="https://juanjaramilloai.typeform.com/to/LROMk6Zb"
        title="Typeform Onboarding Form"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="min-w-full min-h-full"
      ></iframe>
      <SignOut />
    </div>
  );
}
