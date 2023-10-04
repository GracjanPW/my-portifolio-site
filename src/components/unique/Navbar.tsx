import Link from 'next/link'
import { usePathname} from 'next/navigation';
import React from 'react'

export default function Navbar() {

  
  const path = usePathname()
  return (
    <nav className='flex md:justify-end justify-center w-[100%] space-x-reverse space-x-6 text-lg text-navbar-text bg-navbar-bg p-4 border-y border-y-black'>
      <Link href="/" className={path ==="/"?" text-link-active-light font-semibold mr-6":"mr-6"}>Home</Link>
      <Link href="/projects" className={/^\/projects/.test(path)?" text-link-active-light font-semibold":""}>Projects</Link>
      <Link href="/blog" className={/^\/blog/.test(path)?" text-link-active-light font-semibold":""}>Blog</Link>
      <Link href="/contact" className={path ==="/contact"?" text-link-active-light font-semibold":""}>Contact</Link>
      <Link href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${process.env.NEXT_PUBLIC_CV_URL}`}>View CV</Link>
    </nav>
  )
}



