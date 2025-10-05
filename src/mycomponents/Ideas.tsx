import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider  from "react-slick";
import  type {Settings} from "react-slick";
import { Code2 } from "lucide-react";
const settings: Settings = {
    dots: false,
    infinite: true,
    speed:500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 1500, 
    responsive:[
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false,
            },
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
        breakpoint: 480,
            settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
            },
        },
    ],
};
export default function Hero(){
    const images: {imgurl: string,name: string, idea:string}[] = [
        {
            imgurl:"/images/images (19).jfif",
            name:"Ali Ahmadi",
            idea:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
         {
            imgurl:"/images/images (19).jfif",
            name:"Alima Rahmani",
            idea:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
         {
            imgurl:"/images/images (19).jfif",
            name:"Taqi Razawi",
            idea:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
         {
            imgurl:"/images/images (19).jfif",
            name:"Hana Hamidi",
            idea:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
         {
            imgurl:"/images/images (19).jfif",
            name:"Lala Jafari",
            idea:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
      
    ]
    return(
        
        <div className=" bg-stone-50 w-full h-fit overflow-hidden">
                <h1 className="text-2xl text-center lg:text-4xl font-bold text-amber-700">TESTMONIAL</h1>
                <Slider {...settings} >
                    {images.map((engineer ,index)=>(
                         <div key={index} className="w-[20%] rounded-2xl mt-4 bg-gray-300 lg:h-full justify-between mx-2  h-80 flex ">
                            <div className="p-4">
                                <Code2 />
                            </div>
                            <div className="w-full h-full flex flex-col items-center">
                    <img  className="w-32 h-32 rounded-full" src={engineer.imgurl} alt="" />
                    <h1 className="text-2xl font-medium text-amber-700 pt-8">{engineer.name}</h1>
                    <h1 className="text-center pt-1.5 pb-20">{engineer.idea}</h1>
                    </div>
                </div>
                    ))}                   
                </Slider>
                </div>
        
    )
}