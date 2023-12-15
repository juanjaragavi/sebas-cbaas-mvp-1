import SignOut from "@/components/sign-out";
import { Widget } from '@typeform/embed-react'


export default function Home() {
  const widgetContainerStyle = {
    width: 500,
    height: 400,
    margin: '20px auto',
  }

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <Widget
          id="LROMk6Zb"
          style={widgetContainerStyle}
          medium="demo-test"
          hidden={{ foo: 'foo value', bar: 'bar value' }}
          transitiveSearchParams={['foo', 'bar']}
          iframeProps={{ title: 'Foo Bar' }}
        />
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-screen-lg aspect-video"
        ></iframe>
        <SignOut />
      </div>
    </div>
  );
}
