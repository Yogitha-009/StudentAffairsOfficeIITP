"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function FooterReveal() {
  return (
    <footer
      className="
        relative
        lg:sticky
        bottom-0
        w-full
        h-auto
        lg:h-screen
        bg-[#0A0A0A]
        text-white
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-blue-500/10 blur-[80px] md:blur-[120px] pointer-events-none" />
      </div>

      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[120px]"
        >
          <path
            fill="#0A0A0A"
            d="
              M0,220
              C300,40 1140,40 1440,220
              L1440,220
              L0,220
              Z
            "
          />
        </svg>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          max-w-7xl
          mx-auto
          pt-20
          pb-10
          md:pt-40
          md:pb-0
          px-6
          md:px-10
          flex
          flex-col
          justify-between
          h-full
        "
      >
        {/* Top Header Block */}
        <motion.div variants={item} className="w-full">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            Student Affairs
          </h2>

          <p className="mt-4 md:mt-6 text-white/70 max-w-xl text-base">
            Empowering students beyond academics through
            welfare, leadership, engagement and support.
          </p>
        </motion.div>

        {/* Links & Resources Content Grid */}
        <motion.div
          variants={item}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            md:gap-12
            mt-12
            md:mt-16
            lg:mt-20
          "
        >
          {/* Quick Links & Resources grouped closely to fit mobile heights perfectly */}
          <div className="grid grid-cols-2 gap-4 sm:col-span-1 lg:contents">
            <div>
              <h3 className="font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <div className="space-y-3 text-white/70 flex flex-col">
                <Link href="/" className="hover:text-blue-400 transition-colors duration-200 w-fit">Home</Link>
                <Link href="/aboutUs" className="hover:text-blue-400 transition-colors duration-200 w-fit">About</Link>
                <Link href="/campusLife" className="hover:text-blue-400 transition-colors duration-200 w-fit">Campus Life</Link>
                <Link href="/" className="hover:text-blue-400 transition-colors duration-200 w-fit">Resources</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">
                Resources
              </h3>
              <ul className="space-y-3 text-white/70">
                <li>Student Welfare</li>
                <li>Scholarships</li>
                <li>Counselling</li>
                <li>Career Support</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="break-all">office@iitp.ac.in</li>
              <li>+91 XXXXX XXXXX</li>
              <li>Patna, Bihar</li>
            </ul>
          </div>

          <div>
            <div
              className="
                border
                border-white/10
                rounded-2xl
                p-5
                bg-white/[0.03]
                backdrop-blur
                w-full
              "
            >
              <h3 className="font-semibold mb-3 text-white">
                Emergency Contact
              </h3>

              <p className="text-xl md:text-2xl font-bold whitespace-nowrap">
                +91 XXXXX XXXXX
              </p>

              <p className="text-sm text-white/60 mt-2">
                Available 24×7
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Base Copy Block */}
        <motion.div
          variants={item}
          className="
            mt-12
            md:mt-16
            lg:mt-20
            border-t
            border-white/10
            pt-6
            pb-4
            flex
            flex-col
            sm:flex-row
            justify-between
            gap-4
            w-full
          "
        >
          <p className="text-white/50 text-sm order-2 sm:order-1">
            © 2026 Student Affairs Office
          </p>

          <div className="flex gap-5 text-white/50 text-sm order-1 sm:order-2">
            <span className="cursor-pointer hover:text-white transition-colors duration-200">Instagram</span>
            <span className="cursor-pointer hover:text-white transition-colors duration-200">LinkedIn</span>
            <span className="cursor-pointer hover:text-white transition-colors duration-200">Facebook</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}