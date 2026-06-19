import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Hero(){
    return(
        <section 
          className="h-screen flex  text-white" 
          style={{backgroundImage:"url('/image.png')", backgroundSize:"cover", backgroundPosition:"center"}}
        >
          <Navbar/>
          <div className="w-xl mx-4 md:mx-6 lg:mx-8 my-60">
            <h1 className="text-6xl">Student Affairs Office</h1>
            <br />
            <br />
            <h2 className="text-xl">Empowering Student Growth,Welfare, and Campus Engagement</h2>
            <p className="text-lg w-lg">The Student Affairs Office serves as a bridge between excellence and a vibrant campus experience, ensuring every student has access to opportunities, support, and resources</p>
            <br />
            <div
              className="
              group
              relative
              overflow-hidden
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              rounded-xl
              shadow-lg
              w-fit
              "
            >
              <button
                className="
                  relative
                  z-10
                  text-2xl
                  cursor-pointer
                  px-10
                  py-3
                  text-white
                ">
                  <Link href={"/campusLife"}>Explore Campus Life</Link>
              </button>
        
              <span
                className="
                  absolute
                  top-0
                  -left-24
                  h-full
                  w-12
                  rotate-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/60
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />
            </div>
          </div>
        </section>
    )
}