import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-end w-[100%] space-x-reverse space-x-6 text-lg text-navbar-text bg-navbar-bg p-4 border-y'>
      <Link href="/" className='mr-6'>Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/cv">View CV</Link>
    </nav>
  )
}

