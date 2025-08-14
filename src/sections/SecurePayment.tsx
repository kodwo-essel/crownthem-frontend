import securityImg from '@/assets/security/security.avif'
import visaImg from '@/assets/logos/visa.png'
import mastercardImg from '@/assets/logos/matercard.png'
import mtnMomoImg from '@/assets/logos/mtn.jpg'
import airtelTigoImg from '@/assets/logos/airteltigo.webp'
import telecelCashImg from '@/assets/logos/telecel.webp'


export default function SecurePayment() {
  const paymentMethods = [
    {
      name: 'Visa',
      image: visaImg,
    },
    {
      name: 'Mastercard',
      image: mastercardImg,
    },
    {
      name: 'MTN Momo',
      image: mtnMomoImg,
    },
    {
      name: 'Airtel Tigo',
      image: airtelTigoImg,
    },
    {
      name: 'Telecel Cash',
      image: telecelCashImg,
    },
  ]
  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 py-16 text-left flex flex-col md:flex-row md:gap-10 lg:gap-30">
        <div className='flex flex-col justify-center items-start gap-4 lg:gap-8'>
          <h1 className="text-4xl font-bold">Security & Privacy</h1>
          <p className='lg:text-lg'>
            We take your security and privacy very seriously. We use the latest
            technology to ensure that your data is safe and secure. We also
            comply with all relevant laws and regulations and integrate with accredited third party payment processors.
          </p>
          <div className='w-full gap-2 flex items-start'>
            {paymentMethods.map((method) => (
              <img key={method.name} src={method.image} alt={method.name} className='w-8 h-8 mb-4 lg:w-16 lg:h-16 object-contain' />
            ))}
          </div>
        </div>
        <div className='rounded-sm md:rounded-lg overflow-hidden md:min-w-90 lg:min-w-120 w-full'>
          <img className='w-full rounded-2xl object-cover object-top' src={securityImg} alt="" />
        </div>
      </div>
    </div>
  )
}
