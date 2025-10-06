import { div } from "framer-motion/client";
import { Hammer } from "lucide-react";

export default function Servicshero(){
    return(
        <div className="h-screen w-full flex justify-center space-x-10 bg-neutral-700 ">
                <div className="w-1/2 flex flex-col justify-center h-full items-center gap-4">
                <h1 className="text-4xl text-white font-medium">Services Collection</h1>
                <img className=" h-[70%] w-full rounded-l-md " src="/images/bg1.jfif" alt="" />
                </div>
                <div className="w-[40%] h-full grid grid-cols-2">
                    <div className="w-64 h-60 flex flex-col justify-center items-center rounded-2xl">
                        <img className="w-44 h-40 rounded-2xl" src="/images/bkg.jfif" alt="" />
                        <h1 className="text-2xl text-white">Constraction Building</h1>
                    </div>
                    <div className="w-64 h-60 flex flex-col justify-center items-center  rounded-2xl">
                        <img className="w-44 h-40 rounded-2xl" src="/images/images.jfif" alt="" />
                        <h1 className="text-2xl text-white">Disining</h1>
                    </div>
                    <div className="w-64 h-60 flex flex-col justify-center items-center rounded-2xl">
                        <img className="w-44 h-40 rounded-2xl" src="/images/images (17).jfif" alt="" />
                        <h1 className="text-2xl text-white">Disining</h1>
                    </div>
                    <div className="w-64 h-60 flex flex-col justify-center items-center rounded-2xl">
                        <img className="w-44 h-40 rounded-2xl" src="/images/images (26).jfif" alt="" />
                        <h1 className="text-2xl text-white">Disining</h1>
                    </div>
                    
                </div>
            </div>
    )
}