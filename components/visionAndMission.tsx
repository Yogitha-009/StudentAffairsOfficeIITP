import StatsStrip from "@/components/counter";

export default function VisionAndMission() {
  const visionItems = [
    {
      title: "Accessible Development",
      description: "Shaping an equitable, supportive learning ecosystem that removes barriers for students from diverse regular and hybrid educational verticals."
    },
    {
      title: "Empowering Leadership",
      description: "Inspiring students to govern, manage, and scale complex professional networks with high ethical standards."
    },
    {
      title: "Holistic Wellness",
      description: "Creating active safeguards for students' physical and mental health."
    },
    {
      title: "Future-Ready Mindsets",
      description: "Grooming graduates to lead global technical challenges, entrepreneurship pursuits, and modern multi-disciplinary industries."
    }
  ];

  const missionItems = [
    {
      title: "Constructing a Supportive Residential Ecosystem",
      description: "Translating student leadership into practical action by giving elected hostel secretaries full control over mess menus, facility maintenance, and hygiene codes."
    },
    {
      title: "Providing Seamless Well-being and Mental Health Systems",
      description: "Operationalizing the campus mental wellness framework through proactive peer mentoring networks and stress management systems to offset academic rigor."
    },
    {
      title: "Democratizing Multi-disciplinary Co-curricular Pathways",
      description: "Funding and managing the Students’ Gymkhana to ensure every student can access technical innovation cells, arts clubs, and structured competitive sports programs."
    }
  ];

  return (
    <section className="py-16 max-sm:py-10 px-6 max-sm:px-4 bg-[#F8F5EE] border-t border-[#B6A994]/30 space-y-12 max-sm:space-y-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 max-sm:mb-6 border-b border-[#B6A994]/40">
          <div className="space-y-1">
            <h2 className="text-4xl max-sm:text-2xl font-black tracking-tight text-[#3D2B1F] uppercase">
              Vision and Mission
            </h2>
          </div>
        </div>

        {/* Dynamic Asymmetric Container with Hover Transitions */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* VISION CARD - Left */}
          <div className="w-full lg:w-1/2 bg-linear-to-br from-[#DCE4F2] via-[#E8D6BE] to-[#B6C89D] rounded-3xl border border-white/40 shadow-md p-6 md:p-8 max-sm:p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl max-sm:text-xl font-black uppercase tracking-tight text-[#3D2B1F] border-b border-[#3D2B1F]/10 pb-3 max-sm:pb-2 mb-5 max-sm:mb-4">
              Vision
            </h3>

            <ul className="space-y-4">
              {visionItems.map((item, idx) => (
                <li key={idx} className="space-y-0.5 list-none">
                  <strong className="block text-lg max-sm:text-base font-extrabold text-[#3D2B1F] tracking-tight">
                    {item.title}
                  </strong>
                  <p className="text-md max-sm:text-sm text-[#37332f] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MISSION CARD - Right */}
          <div className="w-full lg:w-1/2 bg-linear-to-br from-[#DCE4F2] via-[#E8D6BE] to-[#B6C89D] rounded-3xl border border-white/40 shadow-lg p-6 md:p-8 max-sm:p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl max-sm:text-xl font-black uppercase tracking-tight text-[#3D2B1F] border-b border-[#3D2B1F]/10 pb-3 max-sm:pb-2 mb-5 max-sm:mb-4">
              Mission
            </h3>

            <ul className="space-y-4">
              {missionItems.map((item, idx) => (
                <li key={idx} className="space-y-0.5 list-none">
                  <strong className="block text-lg max-sm:text-base font-extrabold text-[#3D2B1F] tracking-tight">
                    {item.title}
                  </strong>
                  <p className="text-md max-sm:text-sm text-[#37332f] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Stats Counter Isolated Component */}
      <div className="w-full">
        <StatsStrip />
      </div>
    </section>
  );
}