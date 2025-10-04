import {ArrowDown, CircleArrowDownIcon} from 'lucide-react';
import React, { useState } from 'react'

export default function FAQ() {
    const FAQ =[
        {
            h1 : "How Many Works Do In The Same Time?",
            p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis molestias odio autem at quidem vero corporis voluptates voluptate."
        },
        {
            h1 : "Your Servises Include How Many Part? ",
            p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis molestias odio autem at quidem vero corporis voluptates voluptate."
        },
        {
            h1 : "Your Product is From Which Brand?",
            p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis molestias odio autem at quidem vero corporis voluptates voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            h1 : "Can Do Project For Other Country ?",
            p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis molestias odio autem at quidem vero corporis voluptates voluptate."
        },
    ]
    const [isopin , setIsopin] = useState<number | null>(null);
    const changebtn = (index:number)=>{
        setIsopin(isopin === index ? null : index);
    }
  return (
    <div className='w-full h-screen flex lg:flex-row flex-col  justify-between  p-12'>
        <div className='lg:w-[50%]  lg:p-6 md:px-10 p-1 w-full h-full flex items-center pt-14 bg-stone-100 '>        
        <div className='w-full h-[95%] rounded-2xl  flex flex-col items-center bg-cover bg-[url(/images/img.jfif)]'> 
        <h1 className='lg:text-5xl text-3xl text-amber-700 w-fit border-b-2 border-amber-700'>FAQ</h1>
        <h1 className='font-medium text-2xl'> The Thinges That You Should Know About  </h1>       
        <h1 className='font-medium text-2xl'> Uor Company,Products And Servises </h1>       
        </div>
        </div>
        <div className='lg:w-[50%] w-full lg:p-10 md:px-10 p-1 h-full text-black flex flex-col gap-5 justify-center backdrop-opacity-20 bg-stone-100 items-start'>
            <h1 className='lg:text-3xl text-2xl text-amber-700 text-center' >Freqently Ask Qestion</h1>          
           {FAQ.map((item,index)=>(
           <div key={index} className='w-full p-2 flex flex-col gap-4 border  border-amber-700 hover:border-0 pb-5'>
            <div  className='flex justify-between items-center w-full'>
            <h1 className='text-xl cursor-context-menu font-medium hover:text-amber-700'>{item.h1}</h1>
            <ArrowDown onClick={()=> changebtn(index)} className='text-amber-700'/>           </div>
            {isopin === index && (
            <p className=' w-[90%] '>{item.p}</p>
            )}
           </div>
           ))}
        </div>
        </div>
        )};