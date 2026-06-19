import { FlipCard } from "@/components/animate-ui/components/community/flip-card"

const allCulturalClubs=[
  {
    name:"Yavanika",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9akDefSd01pRorFaFUjU9Bmfk0plAZrWR6w&s",
    flipName:"Yavanika",
    description:"Yavanika is the dramatics society and one of the oldest clubs of IIT Patna. With talent, feeling like of a movie actor and achievements leading to goosebumps, it makes the journey superexcited and memorable."
  },
  {
    name:"Aria",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEkEuGhOuNS6K-DS9XTYIdCRQdVu7GdwLlA&s",
    flipName:"Aria",
    description:"Aria, standing for melody in Italian, is the music society of IIT Patna. It aims to foster musical talent and bring people together through their love for music. Acoustic nights , concerts and performances are regularly conducted.It has not only become a venue for like-minded individuals to portray their talents , but also offer the audience a shot at catharsis and de-stressing themselves."
  },
  {
    name:"Exousia",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHREScqMgspu4HOhJ8KqcLXWI5EeC6VKSMw&s",
    flipName:"Exousia",
    description:"Exousia is the official dance club of IIT Patna. Initiated as a platform to promote dance culture in students, it has bloomed into a full-fledged society of dancers skilled in various dance styles ranging from classical to fusion to western. Exousia caters to a variety of intra and inter college dance competitions including solo, duet, street battles and many other categories.The club hosts a tasteful series of events namely FlipToe, HeelTurn, Beat It Off, Hookstep, Rhythm and many more."
  },
  {
    name:"Pixxel",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FJ-U7kYAZqC65wJSYjQVI_b26pt3_LX1KQ&s",
    flipName:"Pixxel",
    description:"Pixxel is IIT Patna's own photography and videography club. Pixxel is responsible for developing interest in photography and videography and various editing related to it among the students of IITP and also creating a plateform where they can showcase their talent and imagination which it has been successfull in the consequent years. The club carries out nearly all of the photography and videography works in IIT Patna , it is omnipresent in all the fests and events conducted in IIT Patna."
  },
  {
    name:"Hoot",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Nlt4j-jBk4sAKKTikpstlkhd0C1n_yVI7w&s",
    flipName:"Hoot",
    description:"The House of Oratory Talents is the speaking arts club of IIT Patna. HOOT is an engaging club where an individual finds his way to speak his mind out. We at HOOT deal with current affairs, get to know where the world is going and ponder on how we can improvise our thought process too. The club conducts events running from PD,MUN,JAM and lots more to allow the young minds to see the world through a better perspective. The club practices the art of articulation and this is where team bonding is celebrated."
  },
  {
    name:"Quiz Club",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfwz5SwCrNGOs5PFu2ve8E5MEIelMK-Cvog&s",
    flipName:"Quiz Club",
    description:"The Quiz Club, IIT Patna believes that the most important thing is having fun (and ofc quizzing xd). One doesn't need to mug up random nerdy facts to attend quizzes, all one needs is a keen eye for the things that surround us. The Quiz Club organizes weekly quizzes made up of fun and deducible questions that have no pre-requisites and thus anyone can attend them. The Quiz Club has been trying to inculcate a quizzing culture in and around Patna by organizing various events like Knockout, Quest-ion, and Pan India Quizzing fest PARAKH annually."
  },
  {
    name:"Syahi",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNY8lDluUPUoGaOEbQz5X9msua_AH7HmWJlw&s",
    flipName:"Syahi",
    description:"Syahi is the literary club of IIT Patna. Syahi aims to provide a platform to nurture the writing talents of people and help them to grown in their journies.It organizes various on-campus as well as inter-college Compitions for people to connect through their writing talents with a major audience.The main motto of the club is to express what one feels, introspect it and grow as a human in the process."
  },
  {
    name:"Vincestroke",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcT017yzNdFim3DCalbLZtovD8MIE8v1MJAQ&s",
    flipName:"Vincestroke",
    description:"Vincetroke is the fine arts club of IIT Patna. Vincetroke encourages practicing artists to express themselves, and their inner creativity through various visual art forms, all the while honing in on their skills. The club provides an opportunity for the students to let their imagination run wild and provides them with the sight to see things in a different way."
  },
  {
    name:"Anime Club",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckZjjVfDVQzRrqKi-TElmiNRl77R5yubpyg&s",
    flipName:"Anime Club",
    description:"Hajimemashite Minna San! The Anime Club is the only purely recreational club of IIT Patna. Jokes apart, the Anime Club is a hub for everyone from veteran weebs to budding enthusiasts and provides a unique platform for people to get together, engage in active discussions and showcase their emotions and creativity about anything related to the animanga world. Various events, with their own quirks & gimmicks are conducted to encourage interaction and cultural enrichment. So hop right on to have an unforgettable experience!"
  },
  {
    name:"Hexachrome",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavrWXjHuoo5T2yoIAn-Ib402ur8Ulv24gUA&s",
    flipName:"Hexachrome",
    description:"The Hexachrome Club aims to provide a platform for students to learn and improve in solving puzzles such as Rubik's Cube, Cryptograms, Crosswords, Scrabble, etc. Puzzle-solving has many benefits, including cognitive development, stress relief, and improved critical thinking skills. The club will allow students to engage in a fun and challenging activity while developing these skills. It is an effective way of reducing stress and anxiety."
  }
]

const allTechnicalClubs=[
  {
    name:"NJACK",
    image:"https://stc.iitp.ac.in/images/NJACK.png",
    flipName:"NJACK",
    description:"NJACK is the coding club of IIT Patna. We aim to flourish a group of hardcore coding enthusiasts through productive sessions and fun events. We will continue the legacy of unconditionally guiding fellow students of the IIT Patna fraternity across the various domains of Computer Science."
  },
  {
    name:"MoodBoard",
    image:"https://stc.iitp.ac.in/images/MoodBoard.png",
    flipName:"MoodBoard",
    description:"MoodBoard Design Club at IIT Patna is a dynamic community that fosters creativity and design skills among students. Throughout the year, the club engages in various workshops, collaborative projects, and exhibitions to enhance members' visual communication and design thinking abilities. The club serves as a platform for students to explore various facets of design, from graphic design and photo manipulation to 3D animation and user experience design."
  },
  {
    name:"AP Club",
    image:"https://media.licdn.com/dms/image/v2/C560BAQHtxszi1ewwOw/company-logo_200_200/company-logo_200_200/0/1630654239704?e=2147483647&v=beta&t=oTYnH8gn5HrXsDVHfOFByifvAw_SDoXB7HMYmhwAX18",
    flipName:"AP Club",
    description:"Astronomy and Particle Physics (AP) Club is a team of enthusiastic people who share a common goal of exploring, studying, and experimenting with a wide variety of Astronomy and Particle Physics related topics, facts, and new discoveries. We have been trying to make people aware of scintillating stuff right from the nano-level world to the vastness of the cosmos!"
  },
  {
    name:"SCME",
    image:"https://stc.iitp.ac.in/images/scmelogo.jpg",
    flipName:"SCME",
    description:"SCME was founded with the motive of engaging and encouraging Mechanical Engineering discipline related activities in IIT Patna. Since its inception, SCME has been conducting events, lectures and workshops round the year for the benefit of mechanical engineering students."
  },
  {
    name:"MaTES",
    image:"https://stc.iitp.ac.in/images/MaTESlogo.png",
    flipName:"MaTES",
    description:"MaTES is a combined step of students and faculty of IIT PATNA to create an environment of inquisitiveness about metallurgy and materials through various interesting events, informative workshops and inquisitive guest lectures. Our organization's aim is to promote creativity, potency, morals in students and boost awareness about materials in the society."
  },
  {
    name:"ChessX",
    image:"https://stc.iitp.ac.in/images/ChESSxLogo.jpg",
    flipName:"ChessX",
    description:"ChESSx aims at providing the needed support to produce the best chemical engineering graduates of tomorrow. It aims at making the students familiar with the scientific and industrial know-how and well equipping them to handle real-world problems so that they can better adapt themselves at their workplace once they graduate."
  },
  {
    name:"Sparkonics",
    image:"https://stc.iitp.ac.in/images/Sparkonics.png",
    flipName:"Sparkonics",
    description:"Sparkonics is the Electrical engineering society of IIT Patna which aims to make students aware and better equipped to handle real-world problems related to Electrical engineering and related interdisciplinary fields by the means of projects and various workshops and guest lectures."
  },
  {
    name:"Phoenix",
    image:"	https://stc.iitp.ac.in/images/phoenix.jpg",
    flipName:"Phoenix",
    description:"Team Phoenix IIT Patna is the official robotics contingent of IIT Patna in ABU Robocon. We seek passionate individuals and offer diverse learning opportunities in robotics through workshops, hackathons, and mentorship programs, including participation in the MathWorks Simulation contest."
  },
  {
    name:"Tinkerers' Club",
    image:"https://stc.iitp.ac.in/images/tinkerers.png",
    flipName:"Tinkerers' Club",
    description:"Tinkerer's Lab at IIT Patna allows you to build things on your own, from scratch. This gives you practical and hands-on experience. The lab is almost entirely student-run. The lack of deadlines and pressure allows you to tinker and develop your ideas with full freedom."
  },
  {
    name:"ACE",
    image:"https://stc.iitp.ac.in/images/ACElogo.png",
    flipName:"ACE",
    description:"The Association of Civil Engineers is an official club of the Department of Civil and Environmental Engineering at IIT Patna. It aims to facilitate student-faculty interaction, provide a platform for showcasing work and knowledge, and enhance abilities through workshops and events."
  },
  {
    name:"RNA Club",
    image:"https://stc.iitp.ac.in/images/RnAlogo.png",
    flipName:"RNA Club",
    description:"RnA or Robotics and Aviation Club of IIT Patna is a newly formed club that focuses on drones, MAVs (Micro Air Vehicles), and aviation robotics. Here in RnA club, we all are family without any partiality.",
  },
  {
    name:"TIC",
    image:"https://stc.iitp.ac.in/images/TIClogo.jpg",
    flipName:"The Trading and Investment Club at IIT Patna is rapidly growing and emphasizes consulting, investing, marketing, and product management. With a focus on winning competitions, creating opportunities, and skill-building, the club aims to establish a lasting finance legacy and become a top student-run club in India.",
    description:"The stock market plays a central role in the growth of an economy. This is a major reason why it is so closely monitored by governments, central banks, companies, and even the general public. The increasing importance of this section of finance has intrigued us a lot. Hence, the Trading and Investment club of IIT Patna is solely dedicated to capital market operations, where we discuss various events and techniques. We conduct informative sessions, quizzes, expert talks, and virtual trading and portfolio management competitions."
  },
  {
    name:"Ecell",
    image:"https://stc.iitp.ac.in/images/ecelllogo.jpg",
    flipName:"Ecell",
    description:"Welcome to the Entrepreneurship Cell (E-Cell) at IIT Patna, a vibrant community dedicated to fostering innovation, entrepreneurship, and leadership among students. Our mission is to inspire and empower the next generation of entrepreneurs through various workshops, events, and mentorship opportunities. E-Cell provides a platform for budding entrepreneurs to transform their ideas into successful ventures."
  },
  {
    name:"Quantum Technology Club",
    image:"https://stc.iitp.ac.in/images/quantum_technology_club_logo.jpeg",
    flipName:"Quantum Technology Club",
    description:"Quantum Technology Club looks forward to bring all the quantum enthusiasts under a common hood and spread awareness about the fast growing quantum technology among the student community. The club tries to solve different problems using quantum computing techniques in such a time which is much less than that taken by a classical computer."
  },
]


export default function FestsAndFestivals() {
  return (
    <div className="px-8 py-10 bg-[#F8F5EE]">
      <h1 className="text-4xl font-bold text-center mb-10">
        Major Technical Clubs of IIT Patna
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allTechnicalClubs.map((club) => (
          <FlipCard
            key={club.name}
            data={{
              name: club.name,
              image: club.image,
              flipName: club.flipName,
              description: club.description,
            }}
          />
        ))}
      </div>
      <h1 className="text-4xl font-bold text-center mb-10">
        Major Cultural Clubs of IIT Patna
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allCulturalClubs.map((club) => (
          <FlipCard
            key={club.name}
            data={{
              name: club.name,
              image: club.image,
              flipName: club.flipName,
              description: club.description,
            }}
          />
        ))}
      </div>
    </div>
  );
}