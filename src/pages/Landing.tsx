import Hero from "@/sections/Hero"
import WhatWeDo from "@/sections/WhatWeDo"
import Partners from "@/sections/Partners"
import Testimonials from "@/sections/Testimonials"
import SecurePayment from "@/sections/SecurePayment"
import Faq from "@/sections/Faq"

export default function Landing() {
  return (
    <div>
        <div className="">
            <Hero/>
            <WhatWeDo/>
            <Partners />
            <Testimonials />
            <Faq />
            <SecurePayment />
        </div>
    </div>
  )
}
