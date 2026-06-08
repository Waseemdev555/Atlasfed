export interface Capability {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: "infrastructure",
    title: "Infrastructure & Cloud Solutions",
    description:
      "Designing and deploying secure, scalable cloud architectures and hybrid infrastructure environments built to federal compliance standards.",
    bullets: [
      "FedRAMP-Authorized Platform Configuration",
      "Cloud Provisioning & Environment Management",
      "IT Asset & Configuration Management (ITAM/CMDB)",
      "Infrastructure Discovery & Dependency Mapping",
      "Compliance Monitoring & Audit Readiness",
    ],
  },
  {
    id: "software",
    title: "Software Engineering & Application Development",
    description:
      "Full-cycle, agile software development tailored to government mission requirements, from system integration to custom application delivery.",
    bullets: [
      "Software Development Lifecycle (SDLC) framework",
      "Agile Delivery & Sprint-Based Development",
      "Scoped Application Design & Deployment",
      "External Platform Integration via IntegrationHub",
      "API Management & Third-Party System Connectivity",
    ],
  },
  {
    id: "itsm",
    title: "IT Service Management (ITSM)",
    description:
      "Implementing enterprise ITSM solutions that reduce operational costs and improve agency service delivery at scale.",
    bullets: [
      "Incident, Problem & Change Management Implementation",
      "Service Catalog & Request Management Configuration",
      "Modernized Workspace & Portal Development",
      "Workflow Automation via Flow Designer",
      "SLA Management & Performance Reporting Dashboards",
    ],
  },
  {
    id: "analytics",
    title: "Data Science & Advanced Analytics",
    description:
      "Transforming raw data into actionable intelligence that supports informed, evidence-based decision-making across agencies.",
    bullets: [
      "Performance Analytics & KPI Tracking",
      "SLA Reporting & Dashboard Configuration",
      "Automated Compliance & Audit Reporting",
      "Real-Time Operational Intelligence via Now Platform Analytics",
      "Enhanced Visibility for Data Quality & Governance Management",
    ],
  },
  {
    id: "ai",
    title: "Artificial Intelligence in the Public Sector",
    description:
      "Responsibly deploying AI and machine learning solutions that augment organization decision-making and unlock the full potential of enterprise data.",
    bullets: [
      "Now Assist (Generative AI) Implementation & Configuration",
      "AI-Powered Virtual Agent & Chatbot Deployment",
      "Predictive Intelligence for Incident Categorization & Routing",
      "Enterprise Specific Intelligent Automation via AI/ML Capabilities",
      "Federal AI Compliance and Responsible Use Governance Framework",
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Services",
    description:
      "End-to-end modernization strategies that retire legacy systems and align public sector cloud based and on prem environments with current federal mandates.",
    bullets: [
      "Legacy Application Modernization in the Now Platform",
      "Workflow Optimization & Process Re-engineering",
      "Change Management Process & User Adoption Strategy",
      "Federal Mandate & Compliance Alignment (CMMC, FISMA, NIST etc.)",
      "Enterprise-Wide ServiceNow Platform Roadmap & Governance",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    description:
      "Protecting the confidentiality, integrity, and availability of systems, networks, and data.",
    bullets: [
      "Security Architecture & Engineering",
      "Continuous Monitoring",
      "Risk & Vulnerability Management",
      "Compliance & Authorization",
      "Incident Response",
    ],
  },
];
