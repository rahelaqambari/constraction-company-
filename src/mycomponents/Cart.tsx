import { Button } from "@/components/ui/button"
import { div, h1, img } from "framer-motion/client";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
export default function Cart(){
        const Allservices: {imgurl: string,title: string, h1:string, Description:string}[] = [
        {
            imgurl:"/images/4.jpg",
            title:"Residential Construction",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/bg.jfif",
            title:"Building Constraction",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/bg1.jfif",
            title:"Commercial Construction",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/bg2.jfif",
            title:"Renovation & Remodling",
            h1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/bg3.jfif",
            title:"Project Managemant",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam.",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
          {
            imgurl:"/images/images (26).jfif",
            title:"Interior Design",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam .",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
          {
            imgurl:"/images/slider04-800x400.jpg",
            title:"Civil Engineering & Infrastructure",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam .",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
          {
            imgurl:"/images/images (26).jfif",
            title:"Electrical & Plumbing",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam .",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
          {
            imgurl:"/images/3-1.jpg",
            title:"Painting & Finishing",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam .",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/slider03.jpg",
            title:"Demolition & Site Prep",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam .",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/1-1.jpg",
            title:"Building  Maintenace",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam .",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
         {
            imgurl:"/images/2-1.jpg",
            title:"Painting & Finishing",
            h1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore optio animi.Lorem ipsum dolor sit amet conse, tempore error vitae omnis earum deserunt ipsam .",
            Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum quidem similique a recusandae culpa modi aut sapiente libero temporibus neque, tempore error vitae omnis earum deserunt ipsam, asperiores perspiciatis!"
        },
        ];
        const [text, settext] = useState ("");
        const [filteredservices, setFilteredservices] = useState(Allservices);
        useEffect(()=>{
            if(text.trim()===""){
                setFilteredservices(Allservices)
            }
            else{
                const newarray =
                Allservices.filter(item=>{
                    return item.title.toLowerCase().includes(text.toLowerCase())})
                    setFilteredservices(newarray);
                }           
        },
        [text,Allservices]);

    return(
        <div className=" h-fit min-h-screen w-full bg-stone-100 felx justify-center items-center">
             <div className="h-64 bg-stone-100 w-full flex items-center justify-center">
              <Search className="text-amber-700 absolute left-[26%] " size={26} />
                <input value={text} onChange={(e)=>settext(e.target.value)} className="h-16 w-[50%] focus:outline-0 border rounded-full px-14 border-amber-700 relative" type="text" placeholder="Search here" />
        </div>
            
            <div className="h-[90%] bg-stone-100 w-full grid grid-cols-3 grid-rows-2 justify-center items-center gap-8">
                 {filteredservices.length>0?filteredservices.map((cart ,index)=>(
                            <div key={index} className="w-full  rounded-2xl bg-gray-300 h-full">
                            <div className="w-full h-full flex flex-col items-center py-3">
                    <img  className="w-full h-full p-4 " src={cart.imgurl} alt="" />
                    <h1 className="text-2xl font-medium text-amber-700 px-9">{cart.title}</h1>
                    <p className=' w-[90%] font-medium'>{cart.h1}</p>
                    <Button  className="bg-amber-700 mt-auto mr-2 ml-auto hover:bg-amber-800  hover:cursor-pointer font-light transition-all duration-500 text-white">
                     Read more...</Button>
                      </div>
                    </div>    
                    )):
                <h1 className=" bg-stone-200 border border-stone-300 shadow p-7 text-center ml-56">No Services Found!</h1>
                    }
            </div>
        </div>
    )
}