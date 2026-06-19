"use client"

import { useState, useEffect } from "react";

const resourcesData = [
  {
    id: "residential",
    num: "01",
    category: "Residential & Infrastructure",
    tagline: "Overseeing foundational living facilities on the Bihta campus.",
    items: [
      {
        title: "Halls of Residence",
        desc: "Management of multiple boys' and girls' hostel blocks equipped with high-speed, campus-wide Wi-Fi networks and dedicated reading rooms."
      },
      {
        title: "Student Activity Center (SAC)",
        desc: "A centralized campus hub housing fully equipped multi-facility gymnasium setups and indoor gaming rooms for table tennis, chess, and carom."
      },
      {
        title: "Outdoor Sports Infrastructure",
        desc: "Provisions and maintains full-scale campus fields and courts for competitive cricket, football, basketball, volleyball, tennis, and badminton."
      },
      {
        title: "Dining & Logistics",
        desc: "Coordinated student-run dining halls alongside commercial food joints and canteens located within the central campus Food Court."
      }
    ]
  },
  {
    id: "health",
    num: "02",
    category: "Health & Wellness",
    tagline: "Providing a responsive safety net and institutional counseling infrastructure.",
    items: [
      {
        title: "24/7 Emergency Dispatch",
        desc: "A round-the-clock emergency medical response system, deploying dedicated campus ambulances to move sick students directly to specialized care units."
      },
      {
        title: "On-Campus Medical Unit",
        desc: "Everyday healthcare integration through the IIT Patna Health Center, backed by fully trained medical doctors and active nursing staff."
      },
      {
        title: "Cashless Hospitalization Network",
        desc: "Managed tie-ups with major regional super-specialty network hospitals (such as Paras HMRI and Sahayog Hospital) for extended medical treatments."
      },
      {
        title: "Vidyarthi Mediclaim Insurance",
        desc: "Mandatory institutional group insurance policy enrollment for all registered students to fully absorb sudden hospitalization liabilities."
      },
      {
        title: "Professional Counseling Unit",
        desc: "A dedicated Wellness Center offering completely confidential therapy and psychiatric sessions to help students manage academic pressure and anxiety."
      }
    ]
  },
  {
    id: "financial",
    num: "03",
    category: "Financial Aid & Academic Support",
    tagline: "The central clearinghouse for processing various avenues of financial relief.",
    items: [
      {
        title: "Merit-Cum-Means (MCM) Scholarships",
        desc: "Allocation of institute stipends, tuition fee waivers, and financial aid to eligible students from economically weaker sections."
      },
      {
        title: "National Scholarship Portals",
        desc: "Administrative approval and verification pipeline for external central schemes, including the prominent PM Vidyalaxmi Scheme."
      },
      {
        title: "Hybrid Program Support Desk",
        desc: "Specialized helpdesks facilitating modern financial solutions like 0% interest EMI payment structures and seamless semester fee updates."
      }
    ]
  },
  {
    id: "governance",
    num: "04",
    category: "Governance & Co-Curricular",
    tagline: "Allocating annual administrative budgets and structural assets to student organizations.",
    items: [
      {
        title: "Gymkhana Funding",
        desc: "Supplies the financial capital required by the Students' Gymkhana to seamlessly operate over two dozen socio-cultural and technical clubs."
      },
      {
        title: "Festival Operations",
        desc: "Provisioning institutional resources, logistical permits, and venue security needed to execute the large national festivals, Anwesha and Celesta."
      },
      {
        title: "Inter-IIT Delegation Budgets",
        desc: "Funding preparation camps, equipment procurement, institutional coaches, and travel logistics for teams representing IIT Patna at the annual Inter-IIT Meets."
      }
    ]
  }
];

export default function ResourcesSection() {
  const [activeSection, setActiveSection] = useState(resourcesData[0].id);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const sec of resourcesData) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#F8F5EE] border-t border-[#B6A994]/30">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-16 border-b border-[#B6A994]/40">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#6B7A52] uppercase">Campus Assets</span>
            <h2 className="text-4xl font-black tracking-tight text-[#3D2B1F] uppercase lg:text-5xl">
              Student Resources
            </h2>
          </div>
          <p className="text-lg text-[#5A4B3A] max-w-md font-normal leading-relaxed">
            A comprehensive breakdown of facilities, support systems, and institutional allocations managed by Student Affairs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative h-full">

          <div className="hidden lg:block lg:col-span-4 sticky top-28 self-start h-auto">
            <div className="border-l-2 border-[#B6A994]/40 pl-6 space-y-6">
              {resourcesData.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`block text-left transition-all duration-300 outline-none group ${
                    activeSection === sec.id ? "translate-x-2" : "opacity-35 hover:opacity-75"
                  }`}
                >
                  <span className={`block text-xs font-mono font-bold uppercase tracking-widest ${
                    activeSection === sec.id ? "text-[#6B7A52]" : "text-[#5A4B3A]"
                  }`}>
                    Section {sec.num}
                  </span>
                  <span className="block text-xl font-black tracking-tight text-[#3D2B1F] mt-0.5">
                    {sec.category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-24">
            {resourcesData.map((sec) => (
              <div 
                key={sec.id} 
                id={sec.id}
                className="space-y-8"
              >
                
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-mono font-black text-[#6B7A52]/40">{sec.num}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-[#3D2B1F] uppercase tracking-tight">
                      {sec.category}
                    </h3>
                  </div>
                  <p className="text-md text-[#5A4B3A] font-medium italic pl-9">
                    {sec.tagline}
                  </p>
                </div>

                
                <div className="pl-9 space-y-8 border-l border-[#B6A994]/30 ml-4 md:ml-5">
                  {sec.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group relative"
                    >
                      <span className="absolute -left-[25px] top-3 w-2 h-[1px] bg-[#6B7A52] opacity-60" />
                      
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-[#3D2B1F] tracking-tight group-hover:text-[#6B7A52] transition-colors duration-200">
                          {item.title}
                        </h4>
                        <p className="text-base text-[#5A4B3A] leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}