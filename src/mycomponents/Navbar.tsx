import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navbar(){
    const navlist = [
        {
            title:"Home",
            href:"/Home"
        },
         {
            title:"Service",
            href:"/Service"
        },
         {
            title:"Blog",
            href:"/Blog"
        },
         { 
            title:"Contact",
            href:"/Contact"
        },
         {
            title:"About",
            href:"/About"
        },
         {
            title:"Weather",
            href:"/Weather"
        },
    ];
    const [isopen ,setisopen] = useState (false);
    return(
        <div className=" sticky top-0 left-0 w-full bg-stone-50 z-50 h-32 ">
            <div className="flex justify-between items-center">
            <div>
                <img className="h-20 w-28" src="/images/download.png" alt="" />
            </div>
            <div className="lg:flex hidden bg-stone-100 p-2 lg:text-base text-4xl rounded-md backdrop:blur-in-sm space-x-6">
                {navlist.map((item, idx)=>(
                     <a
                     key={idx}
                      className=" after:content-[''] after:bg-amber-700  after:bottom-0 after:w-full after:h-px after:absolute after:hidden hover:after:block after:left-0  relative hover:text-amber-700 " href={item.href}>
                         {item.title}
                         </a>
                    
                ))}
               
        </div>
            <div className="lg:block hidden text-3xl">
                <Button className="bg-amber-600 hover:bg-amber-700 mr-5">Get Weather</Button>
            </div>
            <div className="lg:hidden block">
                <Menu className={`${!isopen? "block" :"hidden"}`} onClick={()=> setisopen (!isopen)} size={24} />
                <X className={`${isopen? "block" :"hidden"}`} onClick={()=> setisopen (!isopen)} size={24} />
            </div>
            </div>
            {/* Mobil part */}
            { isopen &&(
            <div className=" flex h-screen w-full flex-col items-center gap-4 bg-white/70 backdrop:blur-md">
                {navlist.map((item ,index)=>(
                    <a key={index} href={item.href}>{item.title}</a>
                ))}
                <div >
                <Button variant={"outline"} >Get Weather</Button>
            </div>
            </div>
)}
        </div>
    )
}