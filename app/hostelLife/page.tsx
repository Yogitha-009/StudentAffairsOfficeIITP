import { FlipCard } from "@/components/animate-ui/components/community/flip-card"


const allHostels=[
  {
    name:"Aryabhatta Hostel",
    image:"https://www.iitp.ac.in/images/campus/1717356924152.jpg",
    flipName:"Aryabhatta Hostel",
    description:"The boys' hostel building is a 8-storey structure divided into 4 blocks viz. A,B,C,D. It's spread onto an area of 28849 Sqm. It has 912 rooms, all with a balcony, window, cupboard, and enough niches.The girls hostel is a 5-storey building with 2 blocks, A and B. There are total 108 rooms in the girls' hostel with each room being spacious and having 2 cupboards and a window. "
  },
  {
    name:"C.V Raman Hostel",
    image:"https://www.iitp.ac.in/images/campus/1717356924469.jpg",
    flipName:"C.V Raman",
    description:"Staying in the campus is particularly attractive because resident students have access to several facilities. IITP has presently three boy’s hostel and one girl’s hostel that provides comfortable accommodation and are located close to the academic area."
  },
  {
    name:"Kalam Hostel",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFD17O8TDr0fQNtCgnBHJZeBSipQdt4tZKLA&s",
    flipName:"Kalama Hostel",
    description:"APJ Abdul Kalam Hostel is one of the premier on-campus residence halls for unmarried male students at the Indian Institute of Technology (IIT) Patna. Located inside the permanent 501-acre campus in Bihta, Bihar, it offers a vibrant residential community equipped with modern facilities."
  },
  {
    name:"Asima Hostel",
    image:"https://i.ytimg.com/vi/BEK_WoLFG9U/sddefault.jpg",
    flipName:"Asima Hostel",
    description:"Asima Hostel (also spelled Ashima Hostel) is the dedicated in-campus girls' hostel at the Indian Institute of Technology (IIT) Patna. Located within the primary residential zone of the IIT Patna Main Campus in Bihta, it provides a secure and comfortable living environment for female undergraduate, postgraduate, and research scholars."
  },
  {
    name:"Married Hostel",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7EZdLeDxoZ_CMbiX7Dt8Jhlc3pPFBdW3UyGh-oajNmuJNf6gRfk1qzyp&s=10",
    flipName:"Married Hostel",
    description:"Married Scholar's Apartments: IIT Patna provides two dedicated married scholar's apartments (often referred to as the Married Research Scholar's Hostel or MRSH) tailored for Master's and PhD students living with their spouses."
  }
]

export default function FestsAndFestivals() {
  return (
    <div className="px-8 py-10 bg-[#F8F5EE]">
      <h1 className="text-4xl font-bold text-center mb-10">
       Current Hostels of IIT Patna
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allHostels.map((hostel) => (
          <FlipCard
            key={hostel.name}
            data={{
              name: hostel.name,
              image: hostel.image,
              flipName: hostel.flipName,
              description: hostel.description,
            }}
          />
        ))}
      </div>
    </div>
  );
}