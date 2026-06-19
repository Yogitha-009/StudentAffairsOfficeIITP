export default function KeyResponsibilities() {
  const responsibilities = [
    {
      title: "Student Welfare & Wellbeing",
      description: "The office operates under a formalized Standard Operating Procedure (SOP) for Mental Well-being. This clinical framework coordinates prevention, early intervention, and emergency response across three main levels. Student Affairs acts as the administrative oversight body linking residential blocks to the central medical framework.",
      useGradient: true,
    },
    {
      title: "Student Clubs & Activities",
      description: "The Office of Student Affairs at IIT Patna shapes the co-curricular environment. It translates institutional resources into dynamic ecosystems. It oversees the apex student governance body, the Students' Gymkhana, IIT Patna. The office ensures student-run clubs operate with strategic administrative support, clear funding, and safety compliance.",
      useGradient: false,
    },
    {
      title: "Campus Engagement",
      description: "The Office of Student Affairs at IIT Patna is responsible for cultivating a cohesive and collaborative institutional community. It designs frameworks that bridge the gap between academic instruction, peer-to-peer relationships, professional networks, and community development.",
      useGradient: false,
    },
    {
      title: "Leadership Development",
      description: "The Office of Student Affairs at IIT Patna plays a pivotal role in identifying, grooming, and nurturing institutional leadership. Rather than treating leadership as a theoretical subject, the office embeds it directly into campus operations. It tasks students with managing substantial administrative responsibilities, professional ecosystems, and real-world executive challenges.",
      useGradient: true,
    },
    {
      title: "Community & Inclusion",
      description: "Building a welcoming, supportive, and completely inclusive campus environment that values diversity and respects equitable student growth.",
      useGradient: false,
    },
    {
      title: "Student Support Services",
      description: "Helping students seamlessly access institutional academic resources, legal guidance, medical insurance, and critical day-to-day emergency networks.",
      useGradient: false,
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-[#F8F5EE] border-t border-[#B6A994]/30">
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 md:pb-8 border-b border-[#B6A994]/40">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#3D2B1F] uppercase lg:text-5xl">
              Key Responsibilities
            </h2>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {responsibilities.map((item, index) => {

            const gridSpans = [
              "md:col-span-7", "md:col-span-5",
              "md:col-span-5", "md:col-span-7",
              "md:col-span-6", "md:col-span-6"
            ];

            return (
              <div
                key={index}
                className={`
                  ${gridSpans[index % 6]}
                  rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[260px] md:min-h-[300px] border transition-all duration-300
                  ${item.useGradient 
                    ? "bg-gradient-to-br from-[#DCE4F2] via-[#E8D6BE] to-[#B6C89D] border-white/40 shadow-lg" 
                    : "bg-[#F5F1E8] border-[#B6A994] shadow-sm"
                  }
                `}
              >
                <div className="space-y-4 md:space-y-6 z-10">
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#3D2B1F]">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-lg leading-relaxed font-normal text-[#5A4B3A]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="w-12 md:w-16 h-1 rounded-full mt-4 md:mt-6 bg-[#6B7A52] shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}