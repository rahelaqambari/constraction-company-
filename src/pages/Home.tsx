import Aboutus from "@/mycomponents/Aboutus"
import FAQ from "@/mycomponents/FAQ"
import Footer from "@/mycomponents/Footer"
import Hero from "@/mycomponents/Hero"
import Ideas from "@/mycomponents/Ideas"
export default function Home (){
    return(
        <div>
            <Hero />
            <Aboutus />
            <Ideas />
            <FAQ />
            <Footer />
        </div>
    )
}