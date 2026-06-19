"use client";

import FooterReveal from "@/components/footerReveal";
import VisionAndMission from "@/components/visionAndMission";
import Hero from "@/components/hero";
import PhotoGalleryShowcase from "@/components/photoGallery/showcase";
import KeyResponsibilities from "@/components/keyResponsibilites";
import Faq from "@/components/faq";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className="relative text-black">
      <main
        className="relative z-10 bg-[#F8F5EE] overflow-hidden"
        style={{
          borderBottomLeftRadius: "50% 120px",
          borderBottomRightRadius: "50% 120px",
        }}
      >
        <Navbar/>
        <Hero/>
        <KeyResponsibilities/>
        <VisionAndMission/>
        <PhotoGalleryShowcase/>
        <Faq/>

        <div className="relative h-[180px] bg-[#F8F5EE]">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="
                M0,0
                C300,180 1140,180 1440,0
                L1440,200
                L0,200
                Z
              "
            />
          </svg>
        </div>
      </main>

      <FooterReveal />
    </div>
  );
}