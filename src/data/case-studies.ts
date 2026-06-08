export interface CaseStudy {
  id: string;
  agency: string;
  shortName: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics?: {
    before: number;
    after: number;
    label: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "doe",
    agency: "Department of Energy",
    shortName: "DOE",
    challenge:
      "Outdated Emergency Response System and manual workflows created inefficiencies and limited visibility.",
    solution:
      "Leveraged ServiceNow out-of-the-box capabilities to streamline data flows, automate approval tasks, and enhance workspace functionality.",
    impact:
      "Provided a central point of command to host action items, data input, monitoring, reporting, and critical task responsiveness.",
  },
  {
    id: "sec",
    agency: "Security Exchange Commission",
    shortName: "SEC",
    challenge:
      "The SEC faced significant compliance deficiencies in FISMA asset reporting, with an initial reporting accuracy rate of only 53%, well below the required 80% compliance threshold. Fragmented asset management processes and manual reporting workflows created critical visibility gaps, hindering the agency's ability to meet federal oversight and regulatory requirements.",
    solution:
      "Leveraged ServiceNow GRC capabilities to automate asset tagging, streamline FISMA reporting, and integrate reporting workflows with third-party oversight platforms, establishing a standardized, audit-ready compliance framework across the agency.",
    impact:
      "Improved FISMA asset reporting accuracy from 53% to above 90%, surpassing the required compliance threshold. The modernized reporting framework significantly reduced manual effort, eliminated visibility gaps, and strengthened the SEC's alignment with CISA security requirements and congressional oversight mandates.",
    metrics: {
      before: 53,
      after: 90,
      label: "FISMA Accuracy",
    },
  },
  {
    id: "nystrs",
    agency: "New York State Teachers' Retirement System",
    shortName: "NYSTRS",
    challenge:
      "NYSTRS relied on an outdated legacy system to manage critical organizational workflows supporting member services operations. The aging infrastructure limited the agency's ability to efficiently retrieve, process, and archive documents, resulting in slow case handling, reduced member accessibility, and significant operational inefficiencies across retirement system workflows.",
    solution:
      "Modernized the NYSTRS member services application by migrating legacy workflows into the ServiceNow Workspace, delivering a unified and dynamic platform experience. Engineered a custom integration to streamline document retrieval in real time and automate the archiving process, eliminating manual intervention, reducing processing time, and establishing a scalable, future-ready document management framework.",
    impact:
      "Transformed member services operations by replacing the outdated legacy system with a modern, workspace-driven environment. The dynamic integration accelerated document retrieval, fully automated the archiving lifecycle, and enhanced case resolution efficiency, enabling NYSTRS to deliver faster, more reliable services to its members while maintaining compliance with operational and recordkeeping standards.",
  },
  {
    id: "ssa",
    agency: "Social Security Administration",
    shortName: "SSA",
    challenge:
      "Limited software asset visibility and governance gaps made it difficult to optimize license utilization, effectively manage software lifecycles, and control costs.",
    solution:
      "Provided strategic consulting and implementation for the ServiceNow Software Asset Management (SAM) module to establish real-time license visibility, compliance tracking, strengthen governance, and streamline automation of the software lifecycle.",
    impact:
      "Strengthened software asset governance, reduced license overspend, eliminated operational inefficiencies, and enabled data-driven lifecycle management decisions.",
  },
];
