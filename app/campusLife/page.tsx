import Navbar from "@/components/navbar";
import Link from "next/link";

export default function CampusLife() {
  return (
    <main className="bg-[#F8F5EE] text-[#2D2D2D]">
    <Navbar/>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 lg:px-16 py-20 gap-12">

        <div className="flex-1 space-y-8">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            IIT PATNA
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Life Beyond <br />
            Classrooms
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Discover the festivals, hostels, sports facilities and
            student clubs that shape the IIT Patna experience.
          </p>
          <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Life at IIT Patna ↓
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://preview.redd.it/my-first-year-at-iit-patna-the-tech-tale-v0-g7gkmpxavw1f1.jpg?width=739&format=pjpg&auto=webp&s=cbceb812e5b3deb8dda30ecb5d03533bb6b837bf"
            alt=""
            className="w-full h-[550px] object-cover rounded-[32px] shadow-2xl"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 lg:px-16 py-24 space-y-32">

        {/* Fests */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="https://www1.iitp.ac.in/hosca/img/Welcome.jpg"
            alt=""
            className="w-full h-[450px] object-cover rounded-[28px] shadow-lg hover:scale-[1.02] transition duration-500"
          />

          <div className="space-y-6">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Campus Events
            </span>

            <h2 className="text-4xl font-bold">
              Fests & Festivals
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              The fests of IIT Patna are among the institute's most
              celebrated traditions, each offering a unique blend of
              experiences and opportunities. From large-scale cultural
              showcases and technical competitions to sports events and
              interactive workshops, every fest has its own identity and
              purpose.
            </p>

            <Link href="/festsAndFestivals" className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
              Know More
            </Link>
          </div>
        </div>

        {/* Hostel */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Student Living
            </span>

            <h2 className="text-4xl font-bold">
              Hostel Life
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              The hostels of IIT Patna are more than just residences—
              they are the heart of student life on campus. They provide
              an environment that fosters friendship, collaboration and
              personal growth while ensuring comfort and convenience.
            </p>

            <Link href="/hostelLife" className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
              Know More
            </Link>
          </div>

          <img
            src="https://www.iitp.ac.in/images/campus/1717356924152.jpg"
            alt=""
            className="w-full h-[450px] object-cover rounded-[28px] shadow-lg hover:scale-[1.02] transition duration-500 order-1 lg:order-2"
          />
        </div>

        {/* Sports */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYeDS69tjFMzoohBhTVr9_ZbOrKA9SpconA4IsdYAB-w&s=10"
            alt=""
            className="w-full h-[450px] object-cover rounded-[28px] shadow-lg hover:scale-[1.02] transition duration-500"
          />

          <div className="space-y-6">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Athletics
            </span>

            <h2 className="text-4xl font-bold">
              Sports Culture
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Sports play a vital role in creating a balanced and
              enriching student experience at IIT Patna. Whether
              competing at a high level, pursuing fitness goals, or
              simply playing for enjoyment, students have access to
              facilities and opportunities that support their interests.
            </p>

            <Link href="/sportsLife" className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
              Know More
            </Link>
          </div>
        </div>

        {/* Clubs */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Student Communities
            </span>

            <h2 className="text-4xl font-bold">
              Cultural & Technical Clubs
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              The clubs of IIT Patna form the backbone of a vibrant and
              engaging student community. From cultural clubs that
              celebrate creativity and artistic expression to technical
              clubs that foster innovation and problem-solving.
            </p>

            <Link href="/clubs" className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
              Know More
            </Link>
          </div>

          <img
            src="https://www1.iitp.ac.in/sports/photo/image2.jpg"
            alt=""
            className="w-full h-[450px] object-cover rounded-[28px] shadow-lg hover:scale-[1.02] transition duration-500 order-1 lg:order-2"
          />
        </div>

      </section>
    </main>
  );
}