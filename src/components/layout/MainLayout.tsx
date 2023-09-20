import { ReactNode } from "react";
import Header from "../unique/Header";
import Footer from "../unique/Footer";
import Navbar from "../unique/Navbar";

export default function MainLayout({ children }: { children: ReactNode }){
    return (
        <div className="flex flex-col h-full">
            <Header/>
            <Navbar/>
            <main className="grow bg-background">
                {children}
            </main>
            <Footer/>
        </div>
    )
}