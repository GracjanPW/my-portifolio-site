/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex m-auto w-[80%] h-full items-center'>
      <div className='flex flex-row items-center w-full'>
       <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/Gracjan_c654061174.jpg`} alt='Image of Gracjan Wojciechowski'
        className=' rounded-md object-cover  h-[400px] w-auto'
      />
      <div className='grow flex flex-col items-center justify-start h-full'>
        <h1>Gracjan Wojciechowski</h1>
        <h2>Web Developer</h2>
        <p></p>
      </div>
      
      </div>
      
    </div>
  )
    
}
