import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider  from "react-slick";
import  type {Settings} from "react-slick";
import { Button } from "@/components/ui/button";
const settings: Settings = {
    dots: false,
    infinite: true,
    speed:500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500, 
    responsive:[
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: true,
                 dots: false,
            },
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
    const images: {name: string, role: string, imgurl: string}[] = [
        {
            name:"Rahela Qambari",
            role:"Manager",
            imgurl:"/images/images (12).jfif"
        },
         {
            name:" Mohammad Qambari",
            role:"Civil Engineer",
            imgurl:"/images/download (5).jfif"
        },
         {
            name:"Ashraf Mhammadi",
            role:"Manager",
            imgurl:"/images/download (4).jfif"
        },
         {
            name:"Reza Razawe",
            role:"Juniore Engineer",
            imgurl:"/images/images (1).jfif"
        },
         {
            name:"Fida Qambari",
            role:"Manager",
            imgurl:"/images/images (19).jfif"
        },
    ]
    return(
        <div className=" bg-stone-50 w-full flex bg-cover object-cover bg-no-repeat">
            <div className="flex-1 min-w-0 flex flex-col lg:w-[20%] w-fit justify-center items-center ">
                <h1 className="moto lg:text-5xl text-3xl font-bold text-center p-6">Your Dream Our Mission, Bring Theme to Reality</h1>
                <p className="text-base text-center lg:my-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quis 
                perferendis qui minus omnis asperiores laudantium vitae?
                 Corporis, dolorum reiciendis a velit pariatur itaque qui molestiae esse,
                  iusto quae fuga?
                  </p>
                  <div className="flex gap-3 text-white">
                <Button variant={"outline"} className="hover:bg-amber-700 bg-amber-600 hover:text-white">Services</Button>
                <Button variant={"outline"} className="hover:bg-amber-700 bg-amber-600 hover:text-white">Explore More</Button>
            </div>
            </div>
            <div className="flex-1  flex justify-center w-[30%] h-full  items-center flex-col ">
                <h1 className="text-2xl lg:text-3xl font-bold lg:mb-3">Our Expert Team</h1>
                <Slider {...settings} className ="w-full">
                    {images.map((engineer ,index)=>(
                         <div key={index} className=" lg:h-96 justify-between mx-2 w-1/2 h-80 flex relative object-cover group">
                    <img  className="w-full h-full rounded-md" src={engineer.imgurl} alt="" />
                    <div className="-bottom-full group-hover:bottom-0 h-96 w-full rounded-md  hidden transition-all duration-300 ease-linear text-2xl flex-col items-center justify-center text-white absolute top-0 left-0 bg-black/70 group-hover:flex">
                    <h1>{engineer.name}</h1>
                    <h1>{engineer.role}</h1>
                    </div>
                </div>
                    ))}                   
                </Slider>
                </div>
            </div>
    )
}