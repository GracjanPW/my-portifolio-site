import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-end w-[100%]'>
      <Link href="/">Home</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Contact</Link>
      <Link href="/">View CV</Link>
    </nav>
  )
}

