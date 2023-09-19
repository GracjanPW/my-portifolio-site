import React from 'react'
import { Source_Code_Pro } from 'next/font/google'

const ubuntu = Source_Code_Pro({
  subsets: ['latin']
})

export default function Header() {
  return (
    <div className={'w-[100%] text-center '+ubuntu.className}>
      <h1 className="text-[1.5rem] font-semibold">Gracjan Wojciechowski</h1>
      <h2 className='text-[1.25rem] font-medium'>Web developer</h2>
      </div>
  )
}

