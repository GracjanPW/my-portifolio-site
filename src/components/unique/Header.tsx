import React from "react";
import { Source_Code_Pro } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Header() {
  const path = usePathname();
  const [showNav, setShowNav] = React.useState(false);
  return (
    <div
      className={
        "relative text-header-text bg-header-bg mobile:bg-opacity-70 mobile:shadow-md w-full py-6 flex lg:flex-row flex-col items-center sm:justify-between xl:items-center lg:px-16 lg:items-start  z-10" 
      }
    
    >
      <div className="mobile:flex mobile:flex-row mobile:justify-between mobile:w-full mobile:px-5 ">
        <h1 className="sm:text-[1.5rem] text-[1.2rem] leading-[1.4rem] whitespace-normal sm:text-center lg:text-left ">
          <span className="font-bold whitespace-nowrap xl:inline block mr-0 lg:mr-4">
            Gracjan Wojciechowski
          </span>
          <span className="font-normal whitespace-nowrap lg:block xl:inline inline-block">
            Web Developer
          </span>
        </h1>
        <button className="border border-black p-2 px-4 rounded sm:hidden" onClick={e=>setShowNav(prev=>!prev)}>=</button>
      </div>

      <div className="mobile:w-full ">
        <nav className={"sm:flex sm:flex-row lg:justify-around text-navbar-text bg-navbar-bg text-[1.4rem] leading-[1.4rem] sm:space-x-6 justify-center mt-4 lg:mt-0 " + (showNav ? "absolute bg-header-bg mt-0 top-[100%] flex flex-col justify-center align-middle text-center mobile:w-full mobile:shadow-md" : "hidden") }>
          <Link
            href="/"
            className={
              (path === "/"
                ? " text-link-active-light font-semibold"
                :"font-light"
              ) +" mobile:hover:bg-stone-400 mobile:hover:bg-opacity-70 mobile:hover:text-white mobile:w-full mobile:block mobile:p-3"
            }
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={
              (/^\/projects/.test(path)
                ? " text-link-active-light font-semibold"
                : "font-light") +" mobile:hover:bg-stone-400 mobile:hover:bg-opacity-70 mobile:hover:text-white mobile:w-full mobile:block mobile:p-3"
            }
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={
              (/^\/blog/.test(path)
                ? " text-link-active-light font-semibold"
                : "font-light") +" mobile:hover:bg-stone-400 mobile:hover:bg-opacity-70 mobile:hover:text-white mobile:w-full mobile:block mobile:p-3"
            }
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={
              (/^\/contact/.test(path) ? " text-link-active-light font-semibold" : "font-light") +" mobile:hover:bg-stone-500 mobile:hover:bg-opacity-70 mobile:hover:text-white mobile:w-full mobile:block mobile:p-3"
            }
          >
            Contact
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${process.env.NEXT_PUBLIC_CV_URL}`}
            className={"whitespace-nowrap font-light" + " mobile:hover:bg-stone-600 mobile:hover:bg-opacity-70 mobile:hover:text-white mobile:w-full mobile:block mobile:p-3"}
          >
            View CV
          </Link>
        </nav>
      </div>
    </div>
  );
}
