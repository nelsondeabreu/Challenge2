import Image from "next/image";
import { Header } from "./components/header";
import HeroImage from '../../public/image-hero-desktop.png'
import logo from '../../public/logo.svg'
import databiz from '../../public/client-databiz.svg'
import maker from '../../public/client-maker.svg'
import meet from '../../public/client-meet.svg'
import audiophile from '../../public/client-audiophile.svg'

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center lg:p-10 gap-8">
      <div className="h-[100%]">
        <Image src={logo} alt="logo"/>
      </div>
      <div className="flex flex-col gap-4">
        <Header/>
        <div className="flex items-center justify-center gap-28 m-auto">
          <div className="flex flex-col gap-10">
            <h1 className="text-7xl font-bold">
              Make <br/>
              remote work
            </h1>
            <p className="w-25">
              Get your team in sync. no matter your location. <br/>
              Streamline processes. create team rituals. and <br/>
              watch productivity soar. 
            </p>
            <button className="bg-black text-white w-36 p-2 rounded-lg hover:bg-white hover:text-black border border-black">
              Learn more
            </button>
            <ul className="flex gap-4">
              <li><Image src={databiz} alt="logo"/></li>
              <li><Image src={audiophile} alt="audiophile"/></li>
              <li><Image src={meet} alt="meet"/></li>
              <li><Image src={maker} alt="maker"/></li>
            </ul>
          </div>
            <div>
                <Image className="w-96" src={HeroImage} alt="image-hero"/>
            </div>
          </div>
      </div>
    </main>
  );
}
