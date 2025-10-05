  import { useEffect, useState } from "react"

export default function Clock(){
          const [Clock, setClock] = useState (new Date().toLocaleDateString());
        useEffect(()=>{
          const timer =   setInterval(() => {
                setClock(new Date().toLocaleTimeString());
            }, 1000);
            return ()=> clearInterval(timer)
        },[]);
        return(
            <div className="h-32 w-full flex flex-col items-center justify-center">
                <div className="bg-orange-400 shadow-2xs shadow-orange-900  py-4 px-5 rounded-md">
                    <h1 className="text-3xl">{Clock}</h1>
                </div>
            </div>
        )
    }