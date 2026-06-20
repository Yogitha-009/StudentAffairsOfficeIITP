export default function SportsFacilities() {
  const allSports = [
    {
      name: "Students Gymkhana",
      image: "https://content3.jdmagicbox.com/comp/patna/d9/0612px612.x612.220212002724.m2d9/catalogue/iitp-gymkhana-patna-sports-clubs-GFHJfZcTkn.jpg",
      tag: "Indoor Hub & Fitness",
      highlights: [
        "Indoor Sports: Dedicated badminton hall with 4 courts, squash courts, table tennis, chess, and carrom.",
        "Fitness Centers: Features both a fully equipped indoor weights gymnasium and a newly inaugurated open-air gym."
      ],
    },
    {
      name: "Sports Complex",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgntMcTI5WwoAnZER8kc16DxhoLsM1epRM2Q&s",
      tag: "Outdoor Arenas & Tracks",
      highlights: [
        "Main Grounds: Full-sized cricket field and expansive grass football pitch hosting institute tournaments.",
        "Courts & Tracks: Hardcourts for Basketball, Volleyball, Lawn Tennis, alongside a dedicated Athletics Track."
      ],
    }
  ];

  return (
    <div className="w-full bg-[#F8F5EE] h-screen">
    <div className="max-w-6xl mx-auto px-6 py-24 border-t border-[#B6A994]/30 space-y-16">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#B6A994]/40">
        <div className="space-y-1">
          <span className="text-xs font-bold tracking-widest text-[#6B7A52] uppercase">Athletic Infrastructure</span>
          <h2 className="text-4xl font-black tracking-tight text-[#3D2B1F] uppercase lg:text-5xl">
            Sports & Physical Welfare
          </h2>
        </div>
        <p className="text-base text-[#5A4B3A] max-w-md font-normal leading-relaxed">
          State-of-the-art indoor hubs and sweeping outdoor complexes serving varsity teams and general fitness enthusiasts at IIT Patna.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {allSports.map((sport, idx) => (
          <div 
            key={idx} 
            className="bg-[#F5F1E8] border border-[#B6A994] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between min-h-[320px] shadow-sm transition-all duration-300 hover:shadow-md"
          >
            
            <div className="md:w-1/2 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#6B7A52] uppercase tracking-wider">{sport.tag}</span>
                <h3 className="text-2xl font-black text-[#3D2B1F] tracking-tight">{sport.name}</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#5A4B3A] leading-relaxed list-none pl-0">
                {sport.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="relative pl-4 font-normal">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#6B7A52]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            
            <div className="md:w-1/2 w-full aspect-[4/3] max-w-[260px] rounded-2xl border border-[#B6A994]/40 overflow-hidden relative shadow-inner">
              <img 
                src={sport.image} 
                alt={sport.name} 
                className="w-full h-full object-cover contrast-[105%]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}