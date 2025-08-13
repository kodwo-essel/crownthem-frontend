import bgImage from '@/assets/exports/Background.png'
import phoneImage from '@/assets/exports/Phone.png'
import { Button } from '@/components/ui/button'
import { ThumbsUp, CircleCheck, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div>
        <div className="w-full bg-cover bg-center flex py-20 px-4 md:px-20 lg:px-30 items-center justify-between"
        style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className='max-w-125 flex flex-col gap-8 items-start'>
                <Button className='flex gap-2 rounded-full bg-transparent cursor-pointer hover:bg-transparent border border-gray-500 shadow-md'><CircleCheck /> Vote, Buy Tickets & Manage your events.</Button>
                <div className='text-left text-white flex flex-col gap-4'>
                    <h1 className='text-3xl md:text-4xl lg:text-7xl font-extrabold'>Host. Vote. Celebrate.</h1>
                    <p className='lg:text-xl text-gray-300'>Plan, promote, sell tickets, collect votes, and manage every detail of your event. Whether it’s a music festival, corporate conference, or community award night, we’ve got you covered from start to finish.</p>
                </div>
                <div className='flex gap-2 md:gap-4'>
                    <a href="/voting-events">
                    <Button className='flex gap-2 md:text-lg !px-4 md:!px-8 !py-3 md:!py-5 rounded-full bg-accent cursor-pointer hover:bg-accent transition-all duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105'>
                        Vote <ThumbsUp className='' />
                    </Button></a>
                    <Button className='flex gap-2 md:text-lg !px-4 md:!px-8 !py-3 md:!py-5 rounded-full bg-transparent cursor-pointer hover:bg-transparent border border-gray-300 shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105'>Create Event <ArrowRight /></Button>
                </div>
            </div>
            <div>
                <img className='w-full hidden md:block' src={phoneImage} alt="phone" />
            </div>
        </div>
    </div>
  )
}
