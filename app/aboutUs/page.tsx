import { Users, Scale, Cpu, HeartPulse, Globe2, ShieldCheck, GraduationCap, LifeBuoy } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
    const whatWeDoItems = [
        {
            title: "Hostel & Governance",
            icon: ShieldCheck,
            iconClass: "p-2 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-lg",
            points: [
                "Managing residential campus facilities.",
                "Enforcing safety protocols and discipline codes.",
                "Overseeing hostel mess operations and budgets."
            ]
        },
        {
            title: "Co-Curricular Integration",
            icon: GraduationCap,
            iconClass: "p-2 bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 rounded-lg",
            points: [
                "Guiding the apex Students' Gymkhana council.",
                "Facilitating participation in marquee Inter-IIT meets."
            ]
        },
        {
            title: "Financial Aid Support",
            icon: Scale,
            iconClass: "p-2 bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg",
            points: [
                "Processing merit stipends & PM Vidyalaxmi schemes.",
                "Managing emergency grants for EWS demographics."
            ]
        },
        {
            title: "Welfare & Redressal",
            icon: LifeBuoy,
            iconClass: "p-2 bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 rounded-lg",
            points: [
                "Providing active avenues for conflict resolution.",
                "Administering health benefits and medical insurance."
            ]
        }
    ];

    const majorInitiativesItems = [
        {
            title: "Specialized Student Technical Council (STC)",
            icon: Cpu,
            iconColorClass: "text-blue-600 dark:text-blue-400",
            bgContainerClass: "bg-blue-500/10 dark:bg-blue-500/20",
            description: "In tandem with expanding academic setups, the ecosystem restructured the former Technology Club into a formalized Student Technical Council. This body coordinates industry partnerships, incubation opportunities, and technical advancements."
        },
        {
            title: "Institutionalized Mental Well-being Framework",
            icon: HeartPulse,
            iconColorClass: "text-emerald-600 dark:text-emerald-400",
            bgContainerClass: "bg-emerald-500/10 dark:bg-emerald-500/20",
            description: "Recognizing engineering pressures, the office created an explicit Standard Operating Procedure (SOP) for Mental Well-being. This framework bridges hostel caretakers, student mentors, and medical professionals seamlessly."
        },
        {
            title: "Expanding Global & Industry Linkages",
            icon: Globe2,
            iconColorClass: "text-amber-600 dark:text-amber-400",
            bgContainerClass: "bg-amber-500/10 dark:bg-amber-500/20",
            description: "The department actively supports the Center for Career Development & Corporate Relations (CCDC) to integrate year-round campus festivals, corporate hackathons, and multi-disciplinary workshops."
        }
    ];

    return (
        <div className="w-full bg-[#F8F5EE]">
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-24 ">
                
                {/* TOP SECTION: Who Are We & What We Do */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Section */}
                    <aside className="lg:col-span-5 w-full bg-card/60 dark:bg-card/40 border border-border/80 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full min-h-[480px]">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">Who are we</h2>
                            <p className="text-lg text-muted-foreground/95 leading-relaxed font-normal">
                                The Office of Student Affairs at IIT Patna serves as the central administrative hub for managing campus life, enhancing student welfare, and facilitating holistic development. 
                            </p>
                            <p className="text-lg text-muted-foreground/95 leading-relaxed font-normal">
                                Functioning under the leadership of the Dean of Students’ Affairs (DoSA), the department ensures that students have a supportive environment to balance rigorous academic demands with rich extra-curricular growth.
                            </p>
                        </div>

                        <div className="border-t border-border/80 pt-6 mt-8">
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shadow-md">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground">Students at the core</h3>
                                    <p className="text-sm text-muted-foreground/80 mt-0.5">Every decision, every initiative, and every conversation begins with students.</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Right Section */}
                    <main className="lg:col-span-7 w-full space-y-6">
                        <div className="pb-2">
                            <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-foreground uppercase">What we do</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {whatWeDoItems.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <section key={idx} className="bg-card/40 dark:bg-card/20 border border-border/60 rounded-xl p-6 shadow-sm">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={item.iconClass}>
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground leading-tight">{item.title}</h3>
                                        </div>
                                        <ul className="list-disc pl-5 space-y-2 text-md text-muted-foreground/90 font-normal">
                                            {item.points.map((point, pIdx) => (
                                                <li key={pIdx}>{point}</li>
                                            ))}
                                        </ul>
                                    </section>
                                );
                            })}
                        </div>
                    </main>
                </div>

                {/* LOWER SECTION: Major Initiatives*/}
                <section className="border-t border-border pt-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">Strategic Impact</span>
                            <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-foreground uppercase">Major Initiatives</h2>
                        </div>
                        <p className="text-base text-muted-foreground/95 max-w-md font-normal">
                            Key structural transformations implemented by the Student Affairs ecosystem to align IIT Patna with global standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-3 bg-primary text-primary-foreground p-8 rounded-2xl shadow-md relative overflow-hidden flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                            <div className="space-y-3 max-w-3xl z-10">
                                <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                                    <Scale className="w-3.5 h-3.5" /> Governance
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight">Democratic Student Governance Structure</h3>
                                <p className="text-primary-foreground/90 text-lg leading-relaxed font-normal">
                                    The IIT Patna Hostel System functions as a student-led democracy. Residents directly elect or nominate student secretaries handling critical portfolios—including Mess, Maintenance, Cultural, Technical, Environment, and Sports. They coordinate directly with a dedicated team of Faculty Wardens.
                                </p>
                            </div>
                            <div className="text-white/5 absolute -right-8 -bottom-10 pointer-events-none hidden md:block">
                                <Scale className="w-64 h-64" />
                            </div>
                        </div>

                        {majorInitiativesItems.map((initiative, idx) => {
                            const IconComponent = initiative.icon;
                            return (
                                <div key={idx} className="bg-card/40 dark:bg-card/30 border border-border/80 p-6 rounded-2xl flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${initiative.bgContainerClass} ${initiative.iconColorClass}`}>
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold tracking-tight text-foreground">{initiative.title}</h3>
                                        <p className="text-muted-foreground/95 text-base leading-relaxed font-normal">
                                            {initiative.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </section>
                
                <div>
                    <h1 className="text-5xl font-extrabold tracking-tight mt-1 text-foreground uppercase mb-16">Meet The Team</h1>
                    <Image src="/teamPhoto.png" alt="team photo" width={1280} height={560}></Image>
                </div>
            </div>
        </div>
    );
}