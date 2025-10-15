import React, { useEffect, useState } from 'react';

export default function Counter() {
    const [counts , setCounts] = useState([20, 970, 1929, 30]);
    const stopAt = [25, 975, 1934, 35]; // عدد توقف برای هر کانتر

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prevCounts => {
                const newCounts = prevCounts.map((num, i) => 
                    num < stopAt[i] ? num + 1 : num
                );

                // اگر همه کانترها به مقدار توقف رسیدند، interval را پاک کن
                if (newCounts.every((num, i) => num >= stopAt[i])) {
                    clearInterval(interval);
                }

                return newCounts;
            });
        },1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full h-[60vh] bg-cover bg-no-repeat mb-32 bg-center bg-[url(/images/1-1.jpg)]'>
            <div className='text-white h-full relative w-full font-Headeing justify-center items-center gap-6 flex flex-col bg-black/10 '>
                <h3 className='text-amber-700 text-2xl font-medium'>Our Project</h3>
                <h1 className='text-4xl font-medium'>We Provide Efactive Solation In Constraction</h1>
                <p className='w-[50%] text-center font-Heading'>Donec feugiat lectus mi, nec scelerisque massa viverrac. Vivamus vestibulum ornare imperdiet. Nam etsagittis diam. Maecenas maximus fringilla viverra etsagittis diam ornare viverrac.</p>
                <div className='w-[80%] absolute -bottom-12 h-fit py-8 bg-amber-700 text-white flex justify-between px-6 items-center gap-12'>
                    {counts.map((count,index) => (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <h1 className='text-4xl font-Headeing'>{count} <sup>+</sup></h1>
                            <span>Years Experience</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

