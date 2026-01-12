import { NextResponse } from 'next/server';

// Mass hiring companies data for 2025–2026
const massHiringCompanies = [
  {
    name: "Amazon",
    openRoles: "11,000+ open roles",
    category: "Tech, logistics, cloud",
    why: "Amazon remains the #1 most active employer on Jobright’s national hiring index.",
    roles: [
      "Software engineers",
      "Data/AI roles",
      "Warehouse & logistics",
      "AWS cloud engineers"
    ]
  },
  {
    name: "PwC",
    openRoles: "Thousands of openings",
    category: "Consulting, finance, tech",
    why: "Listed as one of the most active employers in 2025.",
    roles: [
      "AI strategy",
      "Data analytics",
      "Cybersecurity",
      "Consulting"
    ]
  },
  {
    name: "AutoZone",
    openRoles: "High‑volume hiring",
    category: "Retail, logistics",
    why: "Ranked among the top 14 most active employers in the U.S. right now.",
    roles: [
      "Store associates",
      "Distribution center workers",
      "Corporate tech roles"
    ]
  },
  {
    name: "KPMG US",
    openRoles: "Large hiring wave",
    category: "Consulting, finance, tech",
    why: "Also listed as a top active employer in 2025.",
    roles: [
      "AI/ML analysts",
      "Auditors",
      "Data engineers",
      "Consultants"
    ]
  },
  {
    name: "Microsoft",
    openRoles: "“Massive scale” hiring in cloud + AI",
    category: "Tech",
    why: "Microsoft is highlighted as a top U.S. tech giant dominating hiring in 2025.",
    roles: [
      "AI engineers",
      "Azure cloud roles",
      "Research engineers",
      "Product managers"
    ]
  },
  {
    name: "Google (Alphabet)",
    openRoles: "AI & search expansion",
    category: "Tech",
    why: "Google is listed among the top companies hiring heavily in AI and information systems.",
    roles: [
      "AI researchers",
      "ML engineers",
      "Data scientists"
    ]
  },
  {
    name: "Nvidia",
    openRoles: "AI chip boom = nonstop hiring",
    category: "AI hardware",
    why: "Nvidia is described as “ruling the AI era” and aggressively hiring in 2025.",
    roles: [
      "AI infrastructure",
      "GPU engineering",
      "Research"
    ]
  },
  {
    name: "Tesla",
    openRoles: "High‑volume technical hiring",
    category: "Automotive + AI",
    why: "Tesla is expanding its tech ecosystem and hiring across engineering and manufacturing.",
    roles: [
      "Robotics",
      "AI/Autopilot",
      "Manufacturing tech"
    ]
  }
];

export async function GET() {
  return NextResponse.json(massHiringCompanies);
}
