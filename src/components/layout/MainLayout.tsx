import { ReactNode } from "react";
import Header from "../unique/Header";
import Footer from "../unique/Footer";
import Navbar from "../unique/Navbar";

export default function MainLayout({ children }: { children: ReactNode }){
    return (
        <header>
            <Header/>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </header>
    )
}