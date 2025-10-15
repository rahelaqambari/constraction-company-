import { div } from "framer-motion/client";
import { Home, LucideBookText, PlayCircle } from "lucide-react";

export default function Aboutstory(){
    return(
         <div className="h-fit w-full bg-stone-50 ">
             <div className='h-fit space-x-8 lg:justify-between p-12 mx-auto flex md:w-full'>
                <div className='h-[85vh] shadow-lg  shadow-gray-400 w-[430px] bg-[#D83054] relative flex justify-start p-12 items-end'>
            <img src="/images/row2.jpg" className='h-[65vh] w-[290px] absolute -top-14 left-12 hover:-top-16 transition-all duration-700' alt="" />
            <img src="/images/flower1.jpg" className='h-[65vh] w-[290px] absolute top-16 hover:top-14 transition-all duration-700 -right-56' alt="" />
            <div className="flex gap-2 text-white">
                <PlayCircle size={36}/>
                 <h1 className='text-3xl font-Headeing text-white'>PLAY VIDEO</h1>
            </div>
        </div>
            <div className='h-full w-[40%] flex flex-col gap-3 '>
            <h2 className='text-[#D83054] text-xl'>Our story</h2>
            <h1 className='text-4xl font-Headeing'>We Provide Various Types of Flowers For You</h1>
            <p className='text-gray-400 font-Headeing'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti, accusamus error dolores, iste modi nostrum alias neque ipsum consectetur expedita ducimus recusandae veniam molestias! In excepturi vel minima recusandae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='text-gray-400 font-Headeing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas id fugiat aspernatur obcaecati velit unde enim repellendus. Ea minima temporibus nesciunt nulla totam omnis ipsa magni, commodi sit doloribus.</p>
            <div className="flex justify-between mt-8">
            <div className="flex items-center text-[#D83054] gap-2 ">
                 <LucideBookText size={50} />
            <div className="flex flex-col items-center">
                   <h1 className='text-4xl font-Headeing'>975<sup>+</sup></h1>
                            <span>Bouqout Project</span>
                            </div>
            </div>
             <div className="flex items-center text-[#D83054] gap-2 ">
                 <Home size={50} />
            <div className="flex flex-col items-center">
                   <h1 className='text-4xl font-Headeing'>25 <sup>+</sup></h1>
                            <span>Years Experience</span>
                            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}