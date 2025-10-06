import { motion} from "framer-motion";
import { Building, Building2, Check, LucideDrill, Pickaxe } from "lucide-react";
// import { Building2,} from "lucide-react";

export default function Aboutus(){
    return(
        <div className="h-screen flex w-full mt-5 items-center justify-center  ">
            <div className="w-[80%] h-full flex lg:flex-row flex-col items-center lg:justify-between ">
                <div className="lg:w-[30%] w-[50%] h-fit relative lg:bottom-36 " >
                    <img className="h-72 lg:w-96 w-full z-40 absolute rounded-md " src="/images/images (4).jfif" alt="" />
                    <motion.div className=" absolute top-28 left-32 h-72 w-72 p-4 "
                    initial={{rotate:0}}
                    animate={{rotate:360}}
                    transition={{duration: 20, ease:"linear",repeat:Infinity}}
                    >
                      <div className="relative text-5xl">
                         <div className=" h-14 w-14  absolute top-24 -left-12 bg-stone-200 border rounded-md flex items-center justify-center border-stone-500  ">
                         <Building className="h-9 w-9" />
                       </div>
                        <div className="h-14 w-14 absolute -top-12 left-24 bg-stone-200 border rounded-md flex items-center justify-center border-stone-500">
                         <LucideDrill  className="h-9 w-9"/>
                       </div>
                        <div className="h-14 w-14 absolute top-24 left-56 bg-stone-200 border rounded-md flex items-center justify-center border-stone-500">
                       <Pickaxe className="h-9 w-9" />
                       </div>
                        <div className="h-14 w-14 absolute top-60 left-24 bg-stone-200 border rounded-md flex items-center justify-center border-stone-500">
                        
                         <Building2 className="h-9 w-9" />
                       </div>
                      </div>
                       
                    </motion.div>
                </div>
                <div className=" lg:w-[50%] w-full lg:flex flex-col items-center lg:mt-0 mt-[80%]">
                    <div className="h-60 w-[80%] flex flex-col items-center ">
                        <h1 className="text-4xl text-amber-700 pb-4 font-bold underline">About Us</h1>
                        <h1 className="text-3xl text-neutral-700 font-medium">Your Dream Our Mission,Try With Us The  best! </h1>                         
                             <p className="text-neutral-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste excepturi commodi vitae nemo delectus, possimus, sed deleniti et numquam repudiandae itaque, tempore ullam rerum maiores adipisci vel debitis eligendi!</p>
                                                
                        </div>
                       <div className="h-full w-[80%] flex flex-col lg:space-y-6">
                         <div className="h-full w-full lg:space-x-1.5 flex">
                        <Check className="text-amber-700" />
                            <h1 className="text-neutral-700 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            </div> 
                             <div className="h-full w-full lg:space-x-1.5 flex">
                        <Check className="text-amber-700" />
                            <h1 className="text-neutral-700 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            </div> 
                             <div className="h-full w-full space-x-1.5 flex">
                        <Check className="text-amber-700" />
                            <h1 className="text-neutral-700 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            </div> 
                        
                       </div>
                                   
                </div>
            </div>
        </div>
    )
}