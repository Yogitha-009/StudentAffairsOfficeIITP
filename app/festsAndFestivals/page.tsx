import { FlipCard } from "@/components/animate-ui/components/community/flip-card";

const allFests = [
  {
    name: "Anwesha",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a0uGgep9u0n2EbIqdjzo_Ds_ZJNdR3jlbg&s",
    flipName: "Anwesha",
    tag: "Annual Techno-Cultural Fest",
    description: "Anwesha is the Annual Techno-Cultural festival of the Indian Institute of Technology Patna. Anwesha, the quest for grandeur, opulence, creativity and perfection, since its inception in 2010 has turned out to be one of east India’s biggest and most awaited youth festivals, witnessing participation from all over the country. The previous editions have been a memorable experience to the crowd, with an escalating footfall every year."
  },
  {
    name: "Celesta",
    image: "https://static.toiimg.com/thumb/msid-127477120,imgsize-161538,width-400,height-225,resizemode-72/127477120.jpg",
    flipName: "Celesta",
    tag: "Techno-Management Hub",
    description: "Celesta is the annual techno-management festival of IIT Patna, drawing bright engineering minds from across the country to celebrate technology and innovation. Featuring competitive events like Robo Wars, AeroSprint, and exhibitions in AI and IoT, the fest bridges practical engineering with high-energy cultural showcases."
  },
  {
    name: "Infinito",
    image: "https://i.ytimg.com/vi/ETP2zo37Ge0/sddefault.jpg",
    flipName: "Infinito",
    tag: "National Sports Extravaganza",
    description: "Infinito is the premier annual national-level inter-collegiate sports festival of the Indian Institute of Technology (IIT) Patna. Established in 2016, its name originates from the Latin word Infinitus, symbolizing the infinite potential of the human body. As one of Eastern India's largest sports extravaganzas, it attracts thousands of participants and spectators with a dynamic array of sporting tournaments, including cricket, football, track and field, badminton, chess, and esports."
  },
  {
    name: "Nebula",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMP9r45XjrRX3xAJA6SjtuzFbcRecxZ12y1A&s",
    flipName: "Nebula",
    tag: "The Freshers Welcome Induction",
    description: "Nebula welcomes the freshmen into the college, providing an unparalleled platform where they can showcase their talents and skills. Meticulously fashioned to suit the interests of band geeks, music and dance maniacs, the cultural delight of the fest features the glamour of the Mr & Miss Nebula competition, the serenity of classical art forms, and the amusement of pro-nite comedy shows."
  },
  {
    name: "Reverberance",
    image: "https://www1.iitp.ac.in/hosca/img/events/reverberance/45761428_1923729217747212_3862406545320968192_n.jpg",
    flipName: "Reverberance",
    description: "Diwali is one among those festivals which is most awaited at IIT Patna. To mark and celebrate the festive spirit of Diwali, House of Socio-Cultural Affairs and House of Literature and Fine Arts presents Reverberance, the Inter-Year Cultural Tournament."
  },
  {
    name: "Garba Night",
    image: "https://www1.iitp.ac.in/hosca/img/gallery/fest/28-To3gcDhs.jpg ",
    flipName: "Garba Night",
    description: "Garba Night at IIT Patna is a vibrant cultural celebration where students take a break from their rigorous academic schedules to celebrate Navratri. Hosted at the campus Fest Arena, the event brings together the institute's diverse student body for an evening of rhythmic dancing, colorful traditional attire, and lively music under the open sky."
  },
  {
    name: "Ganesh Chaturti",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdPWmuTYxf7WCsIAMXTKvC8gpTeTK5TmpNg&s",
    flipName: "Ganesh Chaturti",
    description: "Ganesh Chaturthi at IIT Patna is a vibrant, community-led celebration that brings the campus together. Centered near the campus Sports Complex, students, faculty, and staff gather for spiritual devotion, cultural performances, and traditional prasad. Amidst rigorous academic schedules, the festivities provide a much-needed cultural pause and foster unity among the diverse student body."
  },
  {
    name: "Independence day",
    image: "https://www1.iitp.ac.in/hosca/img/events/Independence_day/DSC_0799.JPG",
    flipName: "Independence day",
    description: "The Independence Day function at IIT Patna starts with the flag hoisting ceremony by Honorable Chief Guests. This is shortly followed up by inspiring talks by the guests. Lined up next are the jingoistic events organized by the students of IIT Patna. The intellectual minds present a mélange of cultural activities, which creates an atmosphere of national pride on the premises of the institute's campus"
  }
];

export default function FestsAndFestivals() {
  const [anwesha, celesta, infinito, nebula, reverberance, garba, ganesh, independence] = allFests;

  return (
    <div className="w-full bg-[#F8F5EE]">
    <div className="max-w-6xl mx-auto px-6 py-24 bg-[#F8F5EE] border-t border-[#B6A994]/30 space-y-24">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#B6A994]/40">
        <div className="space-y-1">
          <span className="text-xs font-bold tracking-widest text-[#6B7A52] uppercase">Student Culture</span>
          <h2 className="text-4xl font-black tracking-tight text-[#3D2B1F] uppercase lg:text-5xl">
            Fests & Festivals
          </h2>
        </div>
        <p className="text-base text-[#5A4B3A] max-w-md font-normal leading-relaxed">
          The heartbeat of campus integration, ranging from massive national technical symposia to traditional community celebrations.
        </p>
      </div>

      <div className="space-y-8">
        <span className="text-xs font-bold tracking-widest uppercase text-[#6B7A52]">01 / Grand Innovations</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Anwesha */}
          <div className="bg-[#F5F1E8] border border-[#B6A994] rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center min-h-[260px]">
            <div className="md:w-1/2 space-y-3">
              <span className="text-xs font-bold text-[#6B7A52] uppercase tracking-wide">{anwesha.tag}</span>
              <h3 className="text-2xl font-black text-[#3D2B1F] tracking-tight">{anwesha.name}</h3>
              <p className="text-sm text-[#5A4B3A] line-clamp-4 leading-relaxed">{anwesha.description}</p>
            </div>
            <div className="md:w-1/2 w-full aspect-[4/3] max-w-[240px] rounded-2xl overflow-hidden [&>div]:w-full [&>div]:h-full">
              <FlipCard data={anwesha} />
            </div>
          </div>

          {/* Celesta */}
          <div className="bg-[#F5F1E8] border border-[#B6A994] rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center min-h-[260px]">
            <div className="md:w-1/2 space-y-3">
              <span className="text-xs font-bold text-[#6B7A52] uppercase tracking-wide">{celesta.tag}</span>
              <h3 className="text-2xl font-black text-[#3D2B1F] tracking-tight">{celesta.name}</h3>
              <p className="text-sm text-[#5A4B3A] line-clamp-4 leading-relaxed">{celesta.description}</p>
            </div>
            <div className="md:w-1/2 w-full aspect-[4/3] max-w-[240px] rounded-2xl overflow-hidden [&>div]:w-full [&>div]:h-full">
              <FlipCard data={celesta} />
            </div>
          </div>

        </div>
      </div>

      {/* Nebula */}
      <div className="space-y-8">
        <span className="text-xs font-bold tracking-widest uppercase text-[#6B7A52]">02 / Campus Entrance Focus</span>
        <div className="bg-gradient-to-br from-[#DCE4F2] via-[#E8D6BE] to-[#B6C89D] border border-white/40 shadow-md rounded-3xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between min-h-[300px]">
          <div className="lg:w-3/5 space-y-4">
            <span className="text-xs font-bold text-[#3D2B1F]/60 uppercase tracking-wide">{nebula.tag}</span>
            <h3 className="text-3xl font-black text-[#3D2B1F] tracking-tight uppercase">{nebula.name}</h3>
            <p className="text-base text-[#5A4B3A] leading-relaxed font-normal">{nebula.description}</p>
          </div>
          <div className="lg:w-2/5 w-full flex justify-center lg:justify-end">
            <div className="w-full aspect-[4/3] max-w-[320px] rounded-2xl overflow-hidden border border-white/40 bg-[#F8F5EE] p-2 shadow-inner [&>div]:w-full [&>div]:h-full">
              <FlipCard data={nebula} />
            </div>
          </div>
        </div>
      </div>

      {/* other fests */}
      <div className="space-y-8">
        <span className="text-xs font-bold tracking-widest uppercase text-[#6B7A52]">03 / Institutional Traditions</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#F5F1E8] border border-[#B6A994] rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
            <div className="space-y-3">
              <h4 className="text-2xl font-black text-[#3D2B1F] uppercase tracking-tight">{infinito.name}</h4>
              <p className="text-base text-[#5A4B3A] leading-relaxed font-normal">{infinito.description}</p>
            </div>
            <span className="text-xs font-bold font-mono tracking-wider text-[#6B7A52]/60 mt-4">— INTER-COLLEGIATE CHAMPIONSHIP</span>
          </div>

          <div className="bg-[#F5F1E8] border border-[#B6A994] rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
            <div className="space-y-3">
              <h4 className="text-2xl font-black text-[#3D2B1F] uppercase tracking-tight">{independence.name}</h4>
              <p className="text-base text-[#5A4B3A] leading-relaxed font-normal">{independence.description}</p>
            </div>
            <span className="text-xs font-bold font-mono tracking-wider text-[#6B7A52]/60 mt-4">— NATIONAL PRIDE CELEBRATION</span>
          </div>

        </div>
      </div>

      {/* festivals*/}
      <div className="space-y-8">
        <span className="text-xs font-bold tracking-widest uppercase text-[#6B7A52]">04 / Cultural Festivities</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Garba Night*/}
          <div className="bg-[#F5F1E8] border border-[#B6A994] rounded-2xl p-4 flex flex-col justify-between space-y-4">
            <h4 className="text-lg font-black text-[#3D2B1F] uppercase tracking-tight">{garba.name}</h4>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden [&>div]:w-full [&>div]:h-full">
              <FlipCard data={garba} />
            </div>
          </div>

          {/* Reverberance */}
          <div className="bg-[#F5F1E8] border border-[#B6A994] rounded-2xl p-4 flex flex-col justify-between space-y-4">
            <h4 className="text-lg font-black text-[#3D2B1F] uppercase tracking-tight">{reverberance.name}</h4>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden [&>div]:w-full [&>div]:h-full">
              <FlipCard data={reverberance} />
            </div>
          </div>

          {/* Ganesh Chaturthi*/}
          <div className="bg-[#F5F1E8] border border-[#B6A994] rounded-2xl p-4 flex flex-col justify-between space-y-4">
            <h4 className="text-lg font-black text-[#3D2B1F] uppercase tracking-tight">{ganesh.name}</h4>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden [&>div]:w-full [&>div]:h-full">
              <FlipCard data={ganesh} />
            </div>
          </div>

        </div>
      </div>

    </div>
    </div>
  );
}