import Faq from "@/sections/Faq"
import Partners from "@/sections/Partners"
import WhyChooseUs from "@/sections/WhyChooseUs"
import Hero from "@/sections/Hero"

export default function Landing() {
  return (
    <div>
        <div className="">
            <Hero/>
            <WhyChooseUs />
            <Partners />
            <Faq />
        </div>
    </div>
  )
}
