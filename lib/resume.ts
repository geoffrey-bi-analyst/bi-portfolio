// lib/resume.ts  — v2 with expanded skills
export const resumeData = {
  name: "Geoffrey Kenga Gari",
  title: "Business Intelligence Analyst",
  location: "Nairobi, Kenya",
  phone: "+254 795 432 786",
  email: "kengaffrey360@gmail.com",
  linkedin: "https://www.linkedin.com/in/geoffrey-gari-3895582a1/",
  github: "https://github.com/geoffrey-bi-analyst",
  availability: "Open to remote BI roles & freelance projects",

  summary:
    "Business Intelligence Analyst with a Bachelor of Economics from the University of Nairobi and 3.5+ years of experience designing end-to-end analytics solutions using SQL, BigQuery, dbt, Power BI, Looker Studio, and Google Cloud Platform. Skilled in building scalable data pipelines, dimensional data models, and automated quality-testing frameworks that turn raw data into executive-ready dashboards. Proven track record of identifying revenue and retention opportunities worth millions of dollars through customer analytics, cohort analysis, and fraud risk monitoring.",

  achievements: [
    {
      metric: "$20M+",
      label: "Revenue growth opportunities identified",
      context: "CLV modelling & cohort analysis — Retail Analytics Platform",
    },
    {
      metric: "$17M",
      label: "Retention risk surfaced",
      context: "RFM segmentation & churn analysis across regional teams",
    },
    {
      metric: "51",
      label: "Automated data quality tests",
      context:
        "11 dbt models enforcing schema integrity across retail pipeline",
    },
    {
      metric: "5",
      label: "Regional teams served via Row-Level Security",
      context: "Single dashboard with scoped BigQuery & Power BI access",
    },
  ],

  experience: [
    {
      title: "Business Intelligence Specialist (Looker)",
      company: "VAME LTD",
      period: "Jul 2026 – Present",
      location: "Philippines (Remote)",
      type: "Full-time",
      bullets: [
        "Develop and maintain LookML models, Explores, and interactive dashboards to deliver governed, scalable, and business-focused analytics across multiple functions.",
        "Build and optimise analytical datasets and reporting solutions using SQL, BigQuery, and Looker, ensuring data accuracy, performance, and alignment with business requirements.",
        "Support BI governance by maintaining metric definitions, documentation, user access controls, and data quality standards.",
        "Collaborate with cross-functional stakeholders to gather requirements, troubleshoot BI issues, and provide actionable insights that support strategic decision-making.",
      ],
    },
    {
      title: "AI Data Specialist",
      company: "RWS",
      period: "Sep 2025 – Present",
      location: "Remote",
      type: "Contract",
      bullets: [
        "Annotated, labelled, and validated text, audio, and image datasets to support the training and evaluation of generative AI and machine learning models.",
        "Evaluated AI-generated responses for accuracy, relevance, factual consistency, safety, and adherence to project-specific evaluation rubrics.",
        "Performed data quality assurance — identifying inconsistencies, correcting annotation errors, and ensuring datasets met predefined quality benchmarks.",
        "Applied detailed annotation guidelines to maintain consistency across multilingual and large-scale AI data projects.",
      ],
    },
    {
      title: "Business Intelligence Analyst",
      company: "CKL Africa",
      period: "Sep 2024 – Apr 2026",
      location: "Nairobi, Kenya",
      type: "Full-time",
      bullets: [
        "Extracted, cleaned, and analysed business data using SQL, Python, Excel, and R to support cross-functional reporting needs.",
        "Built and maintained interactive Power BI and Looker Studio dashboards, producing ad-hoc reports for stakeholders.",
        "Authored summary reports translating analytical findings into clear, actionable business recommendations.",
        "Communicated complex analytical concepts to diverse stakeholders during stand-ups, strategy discussions, and presentations.",
      ],
    },
    {
      title: "Data Annotation Specialist",
      company: "Ison Xperiences Ltd",
      period: "Sep 2023 – Aug 2024",
      location: "Nairobi, Kenya",
      type: "Full-time",
      bullets: [
        "Labelled and categorised large volumes of raw data according to defined project criteria and quality guidelines.",
        "Cleaned and validated datasets prior to annotation, ensuring accuracy and consistency across the project.",
        "Transcribed spoken content into text and supported broader database maintenance tasks.",
      ],
    },
    {
      title: "Registration & Claims Officer",
      company: "NHIF",
      period: "Jun 2023 – Aug 2023",
      location: "Malindi, Kenya",
      type: "Internship",
      bullets: [
        "Processed insurance claims and registrations in compliance with operational procedures and quality standards.",
        "Investigated claim discrepancies and resolved data-related issues using analytical problem-solving techniques.",
        "Maintained accurate records to support reporting and audit requirements.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Economics",
      institution: "University of Nairobi",
      period: "2020 – 2024",
      details:
        "Relevant coursework: Statistics, Econometrics, Financial Analysis, Research Methods.",
    },
  ],

  certifications: [
    {
      name: "PL-300 Power BI Data Analyst",
      issuer: "Microsoft",
      year: "In Progress",
      status: "In Progress" as const,
    },
    {
      name: "DP-900 Azure Data Fundamentals",
      issuer: "Microsoft",
      year: "In Progress",
      status: "In Progress" as const,
    },
    {
      name: "dbt Fundamentals",
      issuer: "dbt Labs",
      year: "In Progress",
      status: "In Progress" as const,
    },
    {
      name: "SnowPro Core",
      issuer: "Snowflake",
      year: "In Progress",
      status: "In Progress" as const,
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "In Progress",
      status: "In Progress" as const,
    },
    {
      name: "AWS Data Engineer Associate",
      issuer: "Amazon Web Services",
      year: "In Progress",
      status: "In Progress" as const,
    },
    {
      name: "Tableau Certified Data Analyst",
      issuer: "Tableau",
      year: "In Progress",
      status: "In Progress" as const,
    },
    {
      name: "Introduction to Business Intelligence",
      issuer: "Corporate Finance Institute",
      year: "2024",
      status: "Completed" as const,
    },
    {
      name: "Data Science & ML Fundamentals",
      issuer: "Corporate Finance Institute",
      year: "2024",
      status: "Completed" as const,
    },
    {
      name: "Statistics Fundamentals",
      issuer: "Corporate Finance Institute",
      year: "2024",
      status: "Completed" as const,
    },
    {
      name: "Power Query Fundamentals",
      issuer: "Corporate Finance Institute",
      year: "2024",
      status: "Completed" as const,
    },
    {
      name: "Data Analysis Certificate",
      issuer: "Microsoft & LinkedIn",
      year: "2023",
      status: "Completed" as const,
    },
    {
      name: "Digital Skills Certificate",
      issuer: "ACWICT",
      year: "2023",
      status: "Completed" as const,
    },
    {
      name: "Computational Thinking Certificate",
      issuer: "Absa Group",
      year: "2023",
      status: "Completed" as const,
    },
    {
      name: "Fundamentals of Data Analysis in Excel",
      issuer: "Corporate Finance Institute",
      year: "2023",
      status: "Completed" as const,
    },
    {
      name: "Excel Fundamentals for Finance",
      issuer: "Corporate Finance Institute",
      year: "2023",
      status: "Completed" as const,
    },
  ],

  skills: [
    {
      category: "BI & Visualisation",
      items: [
        { name: "Power BI & DAX", level: "Expert" as const },
        { name: "Looker & LookML", level: "Advanced" as const },
        { name: "Looker Studio", level: "Expert" as const },
        { name: "Tableau", level: "Advanced" as const },
        { name: "Excel & Power Query", level: "Expert" as const },
      ],
    },
    {
      category: "Query & Transformation",
      items: [
        { name: "SQL (BigQuery, PostgreSQL)", level: "Expert" as const },
        { name: "dbt (Core & Cloud)", level: "Advanced" as const },
        { name: "Python (pandas, numpy)", level: "Proficient" as const },
        { name: "R", level: "Proficient" as const },
      ],
    },
    {
      category: "Cloud & Data Engineering",
      items: [
        { name: "Google BigQuery", level: "Advanced" as const },
        { name: "Google Cloud Platform", level: "Proficient" as const },
        { name: "Star Schema / Dim Modelling", level: "Advanced" as const },
        { name: "CLV & RFM Segmentation", level: "Expert" as const },
      ],
    },
    {
      category: "Design & Web Development",
      items: [
        { name: "Adobe Photoshop", level: "Advanced" as const },
        { name: "Adobe Illustrator", level: "Advanced" as const },
        { name: "Next.js & React", level: "Proficient" as const },
        { name: "Tailwind CSS", level: "Proficient" as const },
      ],
    },
  ],

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Swahili", level: "Fluent" },
  ],
};

export type SkillLevel = "Expert" | "Advanced" | "Proficient" | "Familiar";
