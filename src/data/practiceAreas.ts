export interface PracticeArea {
  id: string;
  name: string;
  tag: string;
  shortDesc: string;
  heroDesc: string;
  sections: { heading: string; body: string }[];
  services: string[];
  faq: { q: string; a: string }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "family-immigration",
    name: "Family Immigration",
    tag: "Reuniting Families",
    shortDesc: "Spousal and fiancé visas, green card petitions, family preference categories. We reunite families.",
    heroDesc: "Family is the foundation of immigration law. Whether you are sponsoring a spouse, a parent, or a child, we guide you through every step with precision and compassion.",
    sections: [
      {
        heading: "Immediate Relative Petitions",
        body: "U.S. citizens can sponsor their spouse, unmarried children under 21, and parents as immediate relatives — the fastest family-based category with no annual visa cap. Once the I-130 petition is approved and the beneficiary completes either Adjustment of Status (if in the U.S.) or Consular Processing (if abroad), they receive their green card. Typical timelines range from 12 to 24 months depending on the consulate or USCIS field office.",
      },
      {
        heading: "Spousal and Fiancé(e) Visas",
        body: "If your spouse is abroad, they will enter the U.S. on an immigrant visa (CR-1 or IR-1) obtained through Consular Processing. If you are not yet married, the K-1 fiancé(e) visa allows your partner to enter the U.S. for the purpose of getting married, after which you file for Adjustment of Status to obtain the green card. Both paths require proving your relationship is genuine — something we help you document thoroughly.",
      },
      {
        heading: "Family Preference Categories",
        body: "Not all family relationships qualify as immediate relatives. Brothers, sisters, adult children, and family members of permanent residents (not citizens) fall into preference categories that are subject to annual numerical limits. This creates waiting lists — sometimes years long. We help you understand your priority date, monitor the Visa Bulletin, and prepare the strongest possible petition so you are ready when your date becomes current.",
      },
      {
        heading: "Adjustment of Status vs. Consular Processing",
        body: "If your family member is already in the U.S. on a valid visa, they may be eligible to adjust their status to permanent resident without leaving the country. If they are abroad, they must go through Consular Processing at a U.S. embassy or consulate. Each path has its own procedures, timelines, and risks — we analyze your specific situation and recommend the right approach.",
      },
    ],
    services: [
      "I-130 Petition for Alien Relative",
      "Spousal Visa (IR-1 / CR-1)",
      "Fiancé(e) Visa (K-1)",
      "Adjustment of Status (I-485)",
      "Consular Processing",
      "Parent & Child Petitions",
      "Family Preference Category Petitions (F1, F2A, F2B, F3, F4)",
      "Conditional Green Card Removal (I-751)",
      "Affidavit of Support (I-864)",
    ],
    faq: [
      { q: "How long does it take to get a green card for my spouse?", a: "For spouses of U.S. citizens, the process typically takes 12–24 months from filing the I-130 to receiving the green card. For spouses of permanent residents (not citizens), the timeline is longer due to annual caps — currently around 2–3 years." },
      { q: "My spouse is undocumented. Can they still get a green card?", a: "Possibly, depending on how they entered the U.S. and your immigration status. If they entered with a visa and overstayed, Adjustment of Status may be available. If they entered without inspection (crossed the border without documents), the process is more complex and usually requires Consular Processing and potentially a waiver. Do not assume it's impossible — contact us for a case-specific evaluation." },
      { q: "What is a conditional green card and how do I remove the conditions?", a: "If you have been married for less than two years when your spouse receives their green card, they receive a 2-year conditional green card. You must file Form I-751 (Petition to Remove Conditions) within the 90-day window before it expires, jointly demonstrating that your marriage is genuine. We handle this filing and the evidence package." },
      { q: "Can I sponsor my parents if I'm a U.S. citizen?", a: "Yes. Parents of U.S. citizens are immediate relatives, meaning there is no visa cap and no waiting list. You must be at least 21 years old to sponsor a parent. The process involves filing an I-130 and then your parent completing either Adjustment of Status or Consular Processing." },
    ],
  },
  {
    id: "employment-visas",
    name: "Employment Visas",
    tag: "For Professionals & Companies",
    shortDesc: "H-1B, L-1, O-1, TN, E-2 — for professionals, executives, and the employers who need them.",
    heroDesc: "Employment-based immigration is complex, deadline-driven, and highly consequential. We represent both employees and employers with precision and speed.",
    sections: [
      {
        heading: "H-1B Specialty Occupation Visas",
        body: "The H-1B is the most common work visa for professionals in specialty occupations — technology, engineering, finance, medicine, law, architecture, and more. It requires a U.S. employer sponsor and a job that requires at least a bachelor's degree in a specific field. H-1B visas are subject to an annual cap of 85,000 and a lottery system. We help employers build compelling petitions and employees understand their options if not selected.",
      },
      {
        heading: "O-1 Extraordinary Ability",
        body: "The O-1 visa is for individuals who have risen to the top of their field in science, arts, education, business, or athletics. It has no annual cap and no lottery — and it is far more accessible than many people assume. Senior engineers, academics with strong publication records, artists with critical recognition, and executives with documented industry impact regularly qualify. We specialize in building O-1 cases that document extraordinary ability persuasively.",
      },
      {
        heading: "L-1 Intracompany Transferee",
        body: "If you work for a multinational company and are being transferred to a U.S. affiliate, subsidiary, or parent company, the L-1 may be your fastest path to U.S. work authorization. L-1A is for managers and executives; L-1B is for workers with specialized knowledge. L-1A holders can often transition directly to EB-1C green cards, making this one of the strongest long-term immigration pathways for corporate executives.",
      },
      {
        heading: "TN Visa for Canadian and Mexican Nationals",
        body: "Under USMCA (formerly NAFTA), citizens of Canada and Mexico can obtain TN status to work in specific professional categories including engineers, accountants, scientists, lawyers, and more. There is no cap, no lottery, and no sponsorship requirement for Canadians (who can apply at the border). TN status can be renewed indefinitely and is one of the most underutilized visa categories.",
      },
    ],
    services: [
      "H-1B Cap Petitions and Lottery Registration",
      "H-1B Transfers and Extensions",
      "H-1B Premium Processing",
      "O-1A/O-1B Extraordinary Ability Visas",
      "L-1A / L-1B Intracompany Transferee",
      "TN Visa (Canada / Mexico)",
      "E-2 Treaty Investor Visa",
      "E-3 Visa (Australian Nationals)",
      "EB-1, EB-2, EB-3 Employment-Based Green Cards",
      "EB-2 National Interest Waiver (NIW)",
      "PERM Labor Certification",
      "EAD / Work Authorization",
    ],
    faq: [
      { q: "My H-1B wasn't selected in the lottery. What are my options?", a: "Several alternatives exist: the O-1 visa (no cap, based on extraordinary ability), TN status if you are Canadian or Mexican, L-1 if your employer has international offices, or cap-exempt H-1B positions at universities and nonprofits. We will analyze your background and identify the strongest available path." },
      { q: "Can I change employers on an H-1B?", a: "Yes — this is called an H-1B transfer. Your new employer files an H-1B petition on your behalf, and you can begin working for them as soon as it is filed (under H-1B portability rules), without waiting for approval. We handle H-1B transfers routinely and advise on how to protect your status during the transition." },
      { q: "How do I qualify for an O-1 visa?", a: "The O-1 requires demonstrating that you are among the small percentage who have risen to the top of your field. This is shown through a combination of evidence: major awards or prizes, published work and citations, high salary relative to peers, critical roles at distinguished organizations, media coverage, and peer testimonials. Contact us for a frank assessment of your credentials." },
      { q: "What is the difference between EB-1, EB-2, and EB-3?", a: "These are employment-based green card preference categories. EB-1 is for priority workers (extraordinary ability, outstanding professors/researchers, multinational executives) and requires no labor certification. EB-2 is for professionals with advanced degrees or exceptional ability. EB-3 is for skilled workers, professionals, and unskilled workers. EB-1 and EB-2 (with a National Interest Waiver) can self-petition — no employer required." },
    ],
  },
  {
    id: "citizenship",
    name: "Citizenship & Naturalization",
    tag: "Becoming American",
    shortDesc: "Interview preparation, application filing, and full support through the naturalization ceremony.",
    heroDesc: "Becoming a U.S. citizen is the most significant milestone in the immigration journey. We make sure you are fully prepared and that your application is airtight.",
    sections: [
      {
        heading: "Eligibility Requirements",
        body: "Most applicants must have been a lawful permanent resident for 5 years (or 3 years if married to a U.S. citizen), have continuous residence and physical presence in the U.S., be able to read, write, and speak basic English, demonstrate good moral character, and pass the civics test. There are additional requirements and exceptions for military members, spouses of overseas U.S. citizens, and others. We conduct a thorough eligibility review before filing.",
      },
      {
        heading: "The N-400 Application",
        body: "Form N-400 is the Application for Naturalization. It asks detailed questions about your background, residency history, travel history, employment, tax compliance, criminal history, and more. Errors or omissions on the N-400 — even inadvertent ones — can delay or derail your case. We review every question with you, identify potential issues before USCIS does, and prepare a complete, accurate application.",
      },
      {
        heading: "Interview Preparation",
        body: "The naturalization interview covers your N-400 application in detail and includes the English and civics tests. The civics test consists of 10 questions drawn from a bank of 100 — you must answer at least 6 correctly. We provide comprehensive interview preparation, including mock interviews, civics test coaching, and guidance on how to handle difficult questions about your background.",
      },
      {
        heading: "Overcoming Complications",
        body: "Criminal history, extended trips outside the U.S., tax issues, failure to register for Selective Service, prior immigration violations, or membership in certain organizations can all complicate naturalization. None of these automatically disqualify you, but they require careful analysis and preparation. We have helped many clients with complicated backgrounds successfully naturalize.",
      },
    ],
    services: [
      "Eligibility Analysis",
      "N-400 Application Preparation",
      "Biometrics Appointment Guidance",
      "Interview Preparation & Mock Q&A",
      "Civics Test Coaching",
      "English Test Preparation",
      "Representation at the Interview",
      "Overcoming Criminal History Issues",
      "Continuous Residence Analysis",
      "Derivative Citizenship for Children (N-600)",
    ],
    faq: [
      { q: "How long does the naturalization process take?", a: "Currently, USCIS processing times range from 8 to 18 months depending on your local field office. After filing, you will receive a biometrics appointment, then an interview notice. Some field offices are processing cases faster than others in 2026." },
      { q: "I have a criminal record. Can I still become a citizen?", a: "It depends entirely on the nature and timing of the offense. Minor offenses from many years ago may not affect your case. More serious offenses, or recent ones, may present a good moral character issue. Some convictions permanently bar naturalization. Do not file without speaking to an attorney who can evaluate your specific record." },
      { q: "I've traveled outside the U.S. a lot. Does that affect my eligibility?", a: "Extended absences can affect both continuous residence and physical presence requirements. Generally, single trips of 6 months or more can break continuous residence. You must also have been physically present in the U.S. for at least 30 months out of the 5 years (or 18 months out of 3 years for spousal cases). We analyze your travel history and advise on how to proceed." },
      { q: "Does my child automatically become a citizen when I naturalize?", a: "Children under 18 who are lawful permanent residents may automatically acquire citizenship when a parent naturalizes, under the Child Citizenship Act — but only if certain conditions are met. We analyze whether your child qualifies and help obtain the Certificate of Citizenship (N-600) as evidence." },
    ],
  },
  {
    id: "asylum",
    name: "Asylum & Refugee Status",
    tag: "Protection for Those Who Need It",
    shortDesc: "Thorough asylum claims built on evidence and legal precision, protecting those who have fled persecution.",
    heroDesc: "If you have fled persecution and fear returning to your home country, U.S. law may protect you. We build asylum cases with the depth and precision they deserve.",
    sections: [
      {
        heading: "The One-Year Filing Deadline",
        body: "You must file your asylum application within one year of your last arrival in the United States. This deadline is strict. Exceptions exist for changed or extraordinary circumstances, but they are narrow. If you believe you may have an asylum claim, do not wait — contact us immediately.",
      },
      {
        heading: "What You Must Prove",
        body: "To win asylum, you must demonstrate that you have suffered persecution — or have a well-founded fear of future persecution — on account of your race, religion, nationality, membership in a particular social group, or political opinion. The persecution must be carried out by the government or by a group the government cannot or will not control. The standard is not that persecution is certain — only that it is a reasonable possibility.",
      },
      {
        heading: "Affirmative vs. Defensive Asylum",
        body: "If you are not in removal proceedings, you file affirmatively with USCIS and are interviewed by an asylum officer. If you are in immigration court, you raise asylum defensively before a judge. The evidentiary requirements are the same, but the process and dynamics are very different. We handle both tracks and build the same rigorous evidentiary record regardless.",
      },
      {
        heading: "Building a Winning Case",
        body: "A strong asylum case requires a detailed, internally consistent personal declaration; country condition evidence from authoritative sources (State Department, Human Rights Watch, academic research); corroborating documents (police reports, medical records, photographs, witness letters); and sometimes expert witnesses who can testify about conditions in your country or the psychological impact of what you experienced. We build cases that hold up under aggressive government cross-examination.",
      },
    ],
    services: [
      "Affirmative Asylum Applications (I-589)",
      "Defensive Asylum in Immigration Court",
      "Withholding of Removal",
      "Convention Against Torture (CAT) Claims",
      "Country Condition Research & Expert Coordination",
      "Personal Declaration Preparation",
      "Asylum Interview Preparation",
      "BIA Appeals of Asylum Denials",
      "Federal Court Petitions for Review",
      "Refugee Family Reunification",
    ],
    faq: [
      { q: "I've been in the U.S. for more than a year. Can I still apply for asylum?", a: "Only if you qualify for an exception to the one-year rule. Exceptions include changed circumstances that materially affect your eligibility (such as a coup in your home country) or extraordinary circumstances that prevented timely filing (such as a serious illness). These exceptions are narrow but real. Contact us to evaluate whether an exception applies to your situation." },
      { q: "What happens if my asylum case is denied?", a: "If denied by an asylum officer (affirmative process), your case is referred to immigration court where you can renew your request before a judge. If denied by an immigration judge, you can appeal to the Board of Immigration Appeals (BIA). If the BIA denies, you can petition the federal circuit court of appeals. The process can take years — and we pursue every legitimate avenue." },
      { q: "Can my family members be included in my asylum case?", a: "Yes. Your spouse and unmarried children under 21 who are in the U.S. can be included as derivatives on your asylum application. If they are abroad, they can follow-to-join you after you are granted asylum, through a separate process." },
      { q: "Will applying for asylum affect my ability to get other immigration benefits?", a: "Applying for asylum generally does not prevent you from pursuing other immigration benefits you may be eligible for. However, the interaction between asylum and other applications can be complex. Speak with an attorney about your full situation before filing." },
    ],
  },
  {
    id: "deportation-defense",
    name: "Deportation Defense",
    tag: "When the Stakes Are Highest",
    shortDesc: "Aggressive court representation when the stakes are highest. Every legal option pursued, every time.",
    heroDesc: "Facing removal is one of the most frightening experiences a person can go through. We fight with everything the law allows — and we know immigration court inside and out.",
    sections: [
      {
        heading: "What Happens When You Receive a Notice to Appear",
        body: "A Notice to Appear (NTA) is the charging document that initiates removal proceedings. It lists the government's allegations and the legal grounds for removal. Receiving an NTA does not mean you will be deported — it means you must appear before an immigration judge and respond to the charges. Do not ignore it. Failure to appear results in an automatic in absentia removal order.",
      },
      {
        heading: "Bond Hearings for Detained Individuals",
        body: "If you or a family member has been detained by ICE, you have the right to a bond hearing before an immigration judge. At the bond hearing, we argue that you are not a flight risk or a danger to the community and request release at a reasonable bond amount. Bond hearings can happen quickly — and having an attorney present dramatically increases the chance of release at a reasonable amount.",
      },
      {
        heading: "Cancellation of Removal",
        body: "Cancellation of removal is a form of relief that allows certain long-term residents to avoid deportation and obtain a green card. Non-LPRs must show 10 years of continuous presence, good moral character, and exceptional hardship to a U.S. citizen or permanent resident spouse, parent, or child. LPRs must show 7 years of continuous residence and 5 years as a permanent resident. These are demanding standards — but we have won cancellation for clients who were initially told they had no hope.",
      },
      {
        heading: "Appeals",
        body: "If an immigration judge orders removal, you have 30 days to appeal to the Board of Immigration Appeals (BIA). If the BIA affirms, you can petition the federal circuit court of appeals. Appeals take time — but they also provide an important stay of removal while the appeal is pending. We pursue appeals aggressively when there is a colorable legal argument.",
      },
    ],
    services: [
      "Emergency Stay of Removal",
      "Bond Hearings for Detained Individuals",
      "Master Calendar Hearing Representation",
      "Individual (Merits) Hearing Representation",
      "Cancellation of Removal",
      "Adjustment of Status in Removal Proceedings",
      "Asylum as Removal Defense",
      "Voluntary Departure",
      "Motions to Reopen / Reconsider",
      "BIA Appeals",
      "Federal Circuit Court Petitions for Review",
      "Prosecutorial Discretion Requests",
    ],
    faq: [
      { q: "I got a letter saying I have to go to immigration court. What do I do?", a: "Contact an immigration attorney immediately. Do not ignore the notice. Bring the document to your attorney along with all of your immigration paperwork. The first hearing is usually a short Master Calendar hearing where you confirm your identity and the process begins — but preparation starts well before that." },
      { q: "Can a deportation order be reversed?", a: "Yes, under certain circumstances. You can file a Motion to Reopen if there is new evidence or changed country conditions. You can file a Motion to Reconsider if the judge made a legal error. In absentia orders (issued when someone didn't appear) can sometimes be reopened if you can show you didn't receive proper notice or had exceptional circumstances. None of these are easy — but they are real options." },
      { q: "My family member was detained by ICE. What should I do right now?", a: "Call us immediately. Find out which detention facility they are in (check ICE's online detainee locator). Do not make any statements to ICE without an attorney present. We can file for a bond hearing quickly and work to secure their release while the case proceeds." },
      { q: "I have a criminal conviction. Does that mean I'll definitely be deported?", a: "Not necessarily. The immigration consequences of criminal convictions are complex and depend heavily on the specific offense, the sentence imposed, and your immigration history. Some convictions trigger mandatory deportation with no discretionary relief. Others do not. Do not assume the worst — and do not assume you are safe without getting a professional analysis." },
    ],
  },
  {
    id: "daca",
    name: "DACA & Dreamers",
    tag: "Protecting Those Who Grew Up American",
    shortDesc: "DACA renewals, advance parole, and immigration pathways for Dreamers.",
    heroDesc: "Dreamers built their lives here. We protect what they have built and explore every available pathway to more permanent security.",
    sections: [
      {
        heading: "DACA Renewals",
        body: "USCIS is currently processing DACA renewals for existing recipients. We strongly recommend filing your renewal 5–6 months before your current status expires — earlier than the USCIS-recommended window — given processing backlogs and the program's legal uncertainty. We prepare complete, accurate renewal packages and track your case through approval.",
      },
      {
        heading: "Advance Parole",
        body: "DACA recipients may apply for Advance Parole to travel outside the U.S. and return legally. This is significant because returning on Advance Parole can create a pathway to Adjustment of Status for some recipients who have a qualifying family petition. However, Advance Parole carries serious risks for individuals who have prior unlawful presence or other immigration complications. Do not apply for Advance Parole or travel outside the U.S. without first consulting an attorney.",
      },
      {
        heading: "Pathways to Permanent Status",
        body: "DACA is not permanent protection — and it has faced continuous legal challenges. For recipients who have U.S. citizen or permanent resident family members, employment sponsors, or other qualifying circumstances, now is the time to explore pathways to a green card. Options include family-based petitions, employment-based sponsorship, and in some cases Special Immigrant Juvenile Status. The earlier you start, the better positioned you will be.",
      },
      {
        heading: "Current Legal Status of DACA",
        body: "As of 2026, USCIS is processing renewals for existing DACA recipients but is not accepting initial applications from new applicants. The program remains subject to ongoing litigation in federal courts. We monitor developments closely and notify our DACA clients of any changes that affect their status.",
      },
    ],
    services: [
      "DACA Renewal Applications (I-821D / I-765)",
      "Advance Parole Applications",
      "Risk Analysis Before International Travel",
      "Adjustment of Status for Eligible DACA Recipients",
      "Family-Based Petition Strategy",
      "Employment-Based Green Card Pathways",
      "Special Immigrant Juvenile Status (SIJS) Analysis",
      "TPS Applications",
      "Representation in DACA-Related RFEs",
    ],
    faq: [
      { q: "When should I file my DACA renewal?", a: "File 5–6 months before your current EAD expires. USCIS recommends 150–120 days (5–4 months), but given processing delays and the program's uncertainty, earlier is safer. Do not wait until the last minute." },
      { q: "I have DACA. Can I get a green card?", a: "Possibly, depending on your specific circumstances. If you have a U.S. citizen spouse, parent (if you are under 21), or employer willing to sponsor you — and if you meet other eligibility requirements — a green card may be within reach. The path varies significantly by individual. Contact us for a case-specific evaluation." },
      { q: "Is it safe to travel outside the U.S. with Advance Parole?", a: "It depends entirely on your specific immigration history. For some DACA recipients, traveling on Advance Parole can actually help create a green card pathway. For others, departure from the U.S. could trigger multi-year bars to reentry. This is not a decision to make without professional legal advice." },
      { q: "I was too young when DACA was announced and never applied. Can I apply now?", a: "Unfortunately, USCIS is currently not accepting initial DACA applications from first-time applicants due to court orders. Only those who previously received DACA can renew. This situation may change depending on court decisions or Congressional action. We will update our clients as developments occur." },
    ],
  },
];

export function getPracticeArea(id: string): PracticeArea | null {
  return practiceAreas.find(p => p.id === id) ?? null;
}
