import { BackgroundLines } from "@/components/background";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   
    <div className="relative w-full h-screen flex justify-center items-center">
      
      <BackgroundLines
      
      className="flex justify-center items-center"
      >


      
     
      {/* <Image
        src="/animeIndex.jpg"
        alt="main background"
        fill
        className="object-cover opacity-80 p-[220px]" 
      /> */}
      

      <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl mt-[-200px]">
        <Image
          src="/logo2.png"
          alt="main logo"
          width={400} 
          height={400}
         
          className=" " 
        />
         <div className="mt-[-100px]">

          <Link 
               href="/home" 
               className="inline-block px-6 py-3 text-base font-semibold text-red-500 bg-white rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2  transition-transform transform hover:scale-105 active:scale-95"
             >
              Home
             </Link>
          <h1 className="text-6xl text-red-500 font-bold">
            Watch new anime with   
            <span className="text-white">{' '} ANISHOW</span>.
          </h1>

          </div>
        
      </div>
      </BackgroundLines>
    </div>
  );
}