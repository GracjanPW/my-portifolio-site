import { ReactNode } from "react";
import Header from "../unique/Header";
import Footer from "../unique/Footer";
import { Source_Code_Pro } from 'next/font/google';

const SourceCodePro = Source_Code_Pro({subsets:['latin']});

export default function MainLayout({ children }: { children: ReactNode }){
    return (
        <div className={"flex flex-col h-full " + SourceCodePro.className}>
            <Header/>
            <main className="grow bg-background">
                {children}
            </main>
            <Footer/>
        </div>
    )
}