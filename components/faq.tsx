"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  const faqItems = [
    {
      value: "item-1",
      question: "How are the hostel rooms allocated?",
      answer: "First-year B.Tech students usually get double-occupancy rooms to help them adjust. From the second year onward, senior students transition into single-occupancy rooms based on availability and academic seniority."
    },
    {
      value: "item-2",
      question: "What are the curfew or gate timings?",
      answer: "First-year B.Tech students usually get double-occupancy rooms to help them adjust. From the second year onward, senior students transition into single-occupancy rooms based on availability and academic seniority."
    },
    {
      value: "item-3",
      question: "What amenities are included in the room?",
      answer: "Every room comes pre-fitted with a bed, study table, chair, fan, cupboard, locker, and access to encrypted campus high-speed Wi-Fi using academic login credentials."
    },
    {
      value: "item-4",
      question: "How does the mess system work?",
      answer: "The hostels operate a democratic, student-run mess system. Mess secretaries rotate the multi-cuisine menu monthly to provide healthy, diverse meals."
    },
    {
      value: "item-5",
      question: "What are the major annual festivals?",
      answer: "The institute hosts two massive national fests: Anwesha (the annual techno-cultural-management festival held in February) and Celesta (the dedicated techno-management festival held in January)."
    },
    {
      value: "item-6",
      question: "Can students join multiple Gymkhana clubs?",
      answer: "Yes. Students can freely audition for and participate in various clubs under the Cultural Council and Students' Technical Council (e.g., coding, dramatics, robotics, music)."
    },
    {
      value: "item-7",
      question: "What sports facilities are available?",
      answer: "The Student Activity Center and campus grounds feature premium facilities for cricket, football, basketball, volleyball, tennis, badminton, and table tennis."
    },
    {
      value: "item-8",
      question: "What happens if a student falls sick at night?",
      answer: "The campus runs a 24/7 emergency medical response system. Students or hostel caretakers can immediately call the on-campus ambulance to transport the student to the IIT Patna Health Center or partner hospitals."
    },
    {
      value: "item-9",
      question: "How do students resolve an academic or mess grievance?",
      answer: "Students can approach their respective hostel student secretaries first. For larger issues, they can directly contact the Faculty Wardens or file a request with the main Office of Student Affairs."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h1 className="text-5xl mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="w-full">
            <AccordionTrigger className="text-xl w-full">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg h-auto w-full text-left leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}