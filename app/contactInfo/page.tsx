"use client"

export default function AdministrativeContacts() {
  const leadershipStaff = [
    { name: "Prof. Jimson Mathew", role: "Dean, Students' Affairs (DoSA)", ext: "—", email: "dean_student" },
    { name: "Dr. Pramod Kumar Tiwari", role: "Associate Dean (Student Affairs)", ext: "8549", email: "dean_student" },
    { name: "Mr. Sanjay Kumar", role: "Deputy Registrar (Student Affairs)", ext: "8067", email: "dr_sa" },
    { name: "Mr. Maheshwar Tulsi", role: "Assistant Registrar (Students' Affairs)", ext: "8646", email: "arsa" },
    { name: "Office Assistants", role: "Student Affairs General Office Helpdesk", ext: "8359", email: "sa_office" },
  ];

  return (
    <section className="py-24 px-6 bg-[#F8F5EE] border-t border-[#B6A994]/30">
      <div className="max-w-6xl mx-auto space-y-20">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#B6A994]/40">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#6B7A52] uppercase">Support Network</span>
            <h2 className="text-4xl font-black tracking-tight text-[#3D2B1F] uppercase lg:text-5xl">
              Administrative Contacts
            </h2>
          </div>

          <div className="bg-[#F5F1E8] border border-[#B6A994]/60 rounded-2xl p-4 max-w-md text-sm text-[#5A4B3A] leading-relaxed">
            <strong className="block font-bold text-[#3D2B1F] mb-0.5">Dialing Information:</strong>
            For external calls, dial prefix <span className="font-mono text-[#3D2B1F] font-semibold">+91 - 06115 - 233 XXX</span> (where XXX is the extension). All official emails end with <span className="font-mono text-[#6B7A52] font-semibold">@iitp.ac.in</span>.
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-black text-[#3D2B1F] uppercase tracking-tight">
            Core Leadership & Office Staff
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#B6A994] text-xs font-bold uppercase tracking-wider text-[#6B7A52]">
                  <th className="py-3 pr-4">Contact Person</th>
                  <th className="py-3 px-4">Designation</th>
                  <th className="py-3 px-4 text-right">Extension (XXX)</th>
                  <th className="py-3 pl-4 text-right">Email Identifier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#B6A994]/20 text-base text-[#5A4B3A]">
                {leadershipStaff.map((staff, idx) => (
                  <tr key={idx} className="group hover:bg-[#F5F1E8]/40 transition-colors duration-150">
                    <td className="py-4 pr-4 font-bold text-[#3D2B1F]">{staff.name}</td>
                    <td className="py-4 px-4 font-normal">{staff.role}</td>
                    <td className="py-4 px-4 text-right font-mono text-sm font-semibold text-[#3D2B1F]">{staff.ext}</td>
                    <td className="py-4 pl-4 text-right font-mono text-sm text-[#6B7A52] font-medium">{staff.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-[#B6A994]/40">

          <div className="space-y-6">
            <h4 className="text-xl font-black text-[#3D2B1F] uppercase tracking-tight pb-2 border-b border-[#B6A994]/40">
              Medical & Counseling
            </h4>
            <div className="space-y-5 text-base">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Campus Medical Directory</span>
                <span className="text-[#3D2B1F] font-medium">IIT Patna Medical Unit Support</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Dr. Ahmad Ali <span className="text-xs font-normal lowercase tracking-normal text-[#5A4B3A]">(PIC Medical)</span></span>
                <p className="text-[#5A4B3A]">Ext. 8044 <span className="mx-2 text-[#B6A994]">|</span> <span className="font-mono text-sm text-[#6B7A52]">pic_medical</span></p>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Dr. Sobha Kant Pandey</span>
                <p className="text-[#5A4B3A]">+91 8102917504 <span className="mx-1.5 text-[#B6A994]">/</span> Ext. 8801</p>
                <span className="font-mono text-sm text-[#6B7A52] block">mo</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Medical Board Support</span>
                <span className="text-[#3D2B1F] font-medium">Dr. Priti Singh (IIT Patna Medical Board)</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Welfare & Grievance Committee</span>
                <span className="font-mono text-sm text-[#6B7A52] block font-medium">wgrc</span>
                <span className="text-xs text-[#5A4B3A]/80 italic block mt-0.5">Guarantees complete sender anonymity</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Campus Guest House Reception</span>
                <p className="text-[#5A4B3A]">Ext. 8772 <span className="mx-2 text-[#B6A994]">|</span> +91 09942657914</p>
                <span className="font-mono text-sm text-[#6B7A52] block">guest_off</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black text-[#3D2B1F] uppercase tracking-tight pb-2 border-b border-[#B6A994]/40">
              Career & Student Activity
            </h4>
            <div className="space-y-5 text-base">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Career Development Desk (CCDC)</span>
                <p className="text-[#5A4B3A]">+91-6115-233083</p>
                <span className="font-mono text-sm text-[#6B7A52] block">tpc</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">CCDC Associate Chair</span>
                <span className="text-[#3D2B1F] font-medium">Dr. Rishav Singh (IIT Patna Placement Team)</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Training & Placement Officer (TPO)</span>
                <span className="text-[#3D2B1F] font-medium">Mr. Kripa Shankar Singh (Corporate Relations)</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Apex Student Leadership</span>
                <span className="text-[#3D2B1F] font-medium block">Students' Gymkhana Central Council</span>
                <span className="text-xs text-[#5A4B3A]/80 italic">Contact via the IIT Patna Students' Gymkhana Platform</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black text-[#3D2B1F] uppercase tracking-tight pb-2 border-b border-[#B6A994]/40">
              Academic Registry
            </h4>
            <div className="space-y-5 text-base">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Dr. Kuldip Singh Patel</span>
                <p className="text-xs text-[#5A4B3A] mb-1 font-medium">(PIC, Student Registration)</p>
                <p className="text-[#5A4B3A]">Ext. 6116</p>
                <span className="font-mono text-sm text-[#6B7A52] block">kspatel / registration</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#6B7A52]">Mr. Santosh Kumar</span>
                <p className="text-xs text-[#5A4B3A] mb-1 font-medium">(Assistant Registrar, Academics)</p>
                <p className="text-[#5A4B3A]">Ext. 8697</p>
                <span className="text-[#3D2B1F] text-sm font-medium block">IIT Patna Academic Division</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}