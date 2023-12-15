import { Widget } from "@typeform/embed-react";
import SignOut from "@/components/sign-out";

export default function Home() {
  return (
    <div className="flex w-full h-full bg-white">
      <div className="w-full h-full flex flex-col space-y-5 justify-center items-center">
        <Widget
          id="LROMk6Zb"
          style={{ width: "500px", height: "400px" }}
          className="my-form"
        />
        <SignOut />
      </div>
    </div>
  );
}
