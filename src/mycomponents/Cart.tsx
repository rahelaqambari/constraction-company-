import { Button } from "@/components/ui/button"
import { useState } from "react";
export default function Cart(){
        const images: {imgurl: string,name: string, h1:string, p:string}[] = [
        {
            imgurl:"/images/images.jfif",
            name:"Desining",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/bg.jfif",
            name:"Building Constraction",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/bg1.jfif",
            name:"desining",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/bg2.jfif",
            name:"Hana Hamidi",
            h1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/bg3.jfif",
            name:"Lala Jafari",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
          {
            imgurl:"/images/images (19).jfif",
            name:"Lala Jafari",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam .",
            p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
      
    ]
      const [isopin , setIsopin] = useState<number | null>(null);
        const changebtn = (index:number)=>{
            setIsopin(isopin === index ? null : index);
        }
    return(
        <div className=" h-fit w-full bg-stone-100 felx justify-center items-center">
            <div className="h-[90%] bg-stone-100 w-full grid grid-cols-3 grid-rows-2 justify-center items-center gap-8">
                 {images.map((cart ,index)=>(
                            <div key={index} className="w-full  rounded-2xl bg-gray-300 h-full">
                            <div className="w-full h-full flex flex-col items-center py-3">
                    <img  className="w-full h-full p-4 " src={cart.imgurl} alt="" />
                    <h1 className="text-2xl font-medium text-amber-700 px-9">{cart.name}</h1>
                    <p className=' w-[90%] font-medium'>{cart.h1}</p>
                     {isopin === index && (
                        <p className=' w-[90%] font-medium'>{cart.p}</p>
                      )}
                    <Button onClick={()=> changebtn(index)} className="bg-amber-700 hover:bg-amber-800  hover:cursor-pointer font-light transition-all duration-500 text-white">
                     Read more...</Button>
           
                       </div>
                    </div>    
                    ))}
            </div>
        </div>
    )
}