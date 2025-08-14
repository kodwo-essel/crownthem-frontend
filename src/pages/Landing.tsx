import Faq from "@/sections/Faq"
import Partners from "@/sections/Partners"
import WhyChooseUs from "@/sections/WhyChooseUs"
import Hero from "@/sections/Hero"
import WhatWeDo from "@/sections/WhatWeDo"
import SecurePayment from "@/sections/SecurePayment"
import Testimonials from "@/sections/Testimonials"

export default function Landing() {
  return (
    <div>
        <div className="">
            <Hero/>
            <WhatWeDo/>
            <Partners />
            <WhyChooseUs />
            <Testimonials />
            <Faq />
            <SecurePayment />
        </div>
    </div>
  )
}
