import Link from "next/link"

export default function Navbar(){
    return (
        <nav className="
        flex
        text-black 
        items-center justify-between 
        px-4 md:px-6 lg:px-8 py-2 
        gap-2 
        fixed top-4 left-1/2 -translate-x-1/2
        w-[96%] max-w-9xl
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.2)]
        z-50
        ">
            <div>
                <img src="/iitpLogo.png" alt="iitp logo" width={72} height={72}/>
            </div>
            <div className="flex gap-2 md:gap-3 lg:gap-4 cursor-pointer ">
            <Link href="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
            <Link href="/aboutUs" className="hover:text-blue-600 transition-colors duration-200">About Us</Link>
            <Link href="#photoGallery" className="hover:text-blue-600 transition-colors duration-200">Photo Gallery</Link>
            <Link href="/resources" className="hover:text-blue-600 transition-colors duration-200">Resources</Link>
            <Link href="/contactInfo" className="hover:text-blue-600 transition-colors duration-200">Contact Info</Link>
            
            </div>
        </nav>
    )
}