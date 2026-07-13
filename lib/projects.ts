// ─────────────────────────────────────────────────────────────
// lib/projects.ts  — v2 with dashboard screenshots & direct GitHub links
// ─────────────────────────────────────────────────────────────

export interface DashboardImage {
  src: string; // path relative to /public/dashboards/
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  featured: boolean;
  title: string;
  tagline: string;
  category: string[];
  tools: string[];
  github: string; // direct link to this project's repo
  status: "Complete" | "In Progress";
  duration: string;
  problem: string;
  objective: string;
  metrics: { value: string; label: string }[];
  dataset: string;
  approach: string[];
  dashboards: DashboardImage[]; // NEW — screenshots shown above Key Insights
  keyInsights: string[];
  recommendations: string[];
  challenges: string;
  lessonsLearned: string;
  techStack: { name: string; role: string }[];
}

export const projects: Project[] = [
  {
    slug: "retail-analytics-clv",
    featured: true,
    title: "Retail Analytics & CLV Platform",
    tagline:
      "End-to-end dbt + BigQuery pipeline surfacing customer lifetime value, regional revenue, and retention signals for a multi-region retail business.",
    category: ["Data Engineering", "Analytics", "CLV"],
    tools: ["dbt", "BigQuery", "Looker Studio", "SQL", "Python"],
    github: "https://github.com/geoffrey-bi-analyst/Retail-Analytics-dbt-CLV",
    status: "Complete",
    duration: "6 weeks",
    problem:
      "The business had transactional data spread across raw tables with no standardised definitions of revenue, churn, or customer lifetime value. Regional teams were producing conflicting reports from the same source data, eroding trust in analytics.",
    objective:
      "Build a production-grade dbt pipeline that creates a single source of truth for retail KPIs, automates data quality enforcement, and delivers CLV and retention insights through a live Looker Studio dashboard.",
    metrics: [
      { value: "11", label: "dbt models built" },
      { value: "51+", label: "Automated data quality tests" },
      { value: "5", label: "Regional teams served via Row-Level Security" },
      { value: "40%", label: "Reduction in manual reporting time" },
    ],
    dataset:
      "Synthetic retail transactional dataset modelled after real e-commerce patterns — orders, customers, products, and returns across 5 regional markets. ~250,000 rows across 4 source tables.",
    approach: [
      "Staged raw data into BigQuery using a medallion architecture (raw → staging → marts).",
      "Built 11 dbt models covering customer segmentation, order metrics, CLV calculation, and regional revenue aggregation.",
      "Implemented 51+ dbt schema tests (not_null, unique, accepted_values, referential integrity) to enforce data quality at every layer.",
      "Applied BigQuery Row-Level Security so each regional team sees only their data — same dashboard, scoped access.",
      "Configured dbt Cloud for daily scheduled refreshes with Slack alerting on job failure.",
      "Built Looker Studio dashboards surfacing revenue trends, CLV by cohort, churn risk segments, and retention curves.",
    ],
    dashboards: [
      {
        src: "/dashboards/clv-dashboard-main.png",
        alt: "CLV Analysis Dashboard — Power BI overview with KPIs and Sales by Region",
        caption:
          "CLV Analysis Dashboard — KPIs, Sales by Region, and Top Customers by Predicted CLV",
      },
      {
        src: "/dashboards/clv-dashboard-kpis.png",
        alt: "CLV Dashboard — Total customers, total sales, and average CLV KPI cards with regional bar chart",
        caption:
          "KPI Cards: 1,001 customers · $61.9M total sales · $185.4K average CLV, with regional breakdown",
      },
      {
        src: "/dashboards/clv-dashboard-monthly-trend.png",
        alt: "Monthly sales trend line chart and customer health status distribution pie chart",
        caption:
          "Monthly Sales Trend (Jan–Dec) and Customer Health Status Distribution",
      },
      {
        src: "/dashboards/clv-dashboard-cohort-heatmap.png",
        alt: "Retention cohort heatmap showing month-on-month retention rates by cohort",
        caption:
          "Retention Cohort Heatmap — month-on-month retention rates by acquisition cohort",
      },
    ],
    keyInsights: [
      "Top 20% of customers by CLV drove 68% of total revenue — classic Pareto, but the regional breakdown revealed this skew was absent in two markets, suggesting growth headroom.",
      "Cohort retention dropped sharply at month 3 across all regions — a clear trigger point for a re-engagement campaign.",
      "Product returns were 3× higher in one region, tracing back to a single supplier — actionable finding that the business had no visibility on before.",
      'Two regional "high-value" segments were mis-classified by old manual reports due to currency conversion errors caught by dbt tests.',
    ],
    recommendations: [
      "Launch a targeted loyalty programme for the top CLV segment to protect the revenue concentration risk.",
      "Deploy a month-3 re-engagement email sequence based on the cohort retention cliff identified.",
      "Audit the high-return supplier and renegotiate quality SLAs or switch vendor.",
      "Expand the RLS model to include a finance view with margin data for CFO-level reporting.",
    ],
    challenges:
      "The biggest challenge was designing the CLV model without access to a real historical purchase frequency distribution. I solved this by building a cohort-based proxy using repeat purchase rates as a CLV signal. Configuring Row-Level Security in BigQuery to work seamlessly with Looker Studio also required careful policy binding — fully documented in the repo README.",
    lessonsLearned:
      'Data modelling decisions made early (how you define "active customer", what counts as a "completed order") echo through every downstream metric. Getting stakeholder alignment on definitions before writing SQL is the most important meeting you will have on any BI project.',
    techStack: [
      {
        name: "dbt Cloud",
        role: "Transformation, testing, documentation, scheduling",
      },
      { name: "BigQuery", role: "Cloud data warehouse, Row-Level Security" },
      {
        name: "Looker Studio",
        role: "Interactive dashboard and scheduled delivery",
      },
      {
        name: "Power BI",
        role: "Executive dashboard and CLV deep-dive reports",
      },
      { name: "SQL", role: "All transformation logic and ad-hoc analysis" },
      { name: "Python", role: "Data generation script for synthetic dataset" },
      {
        name: "GitHub",
        role: "Version control, CI via dbt Cloud Git integration",
      },
    ],
  },

  {
    slug: "credit-card-fraud-analytics",
    featured: false,
    title: "Credit Card Fraud Analytics Platform",
    tagline:
      "SQL-heavy analytical pipeline identifying fraud patterns, high-risk merchant categories, and temporal anomalies in 284K+ credit card transactions.",
    category: ["Analytics", "Financial Services", "SQL"],
    tools: ["SQL", "BigQuery", "Power BI", "Python"],
    github: "https://github.com/geoffrey-bi-analyst/Credit-Card-Fraud-Analysis",
    status: "Complete",
    duration: "4 weeks",
    problem:
      "Financial services teams typically rely on black-box ML models for fraud detection, leaving analysts unable to explain why transactions were flagged. This project builds a transparent, SQL-driven analytical layer that makes fraud patterns visible and auditable.",
    objective:
      "Analyse a credit card transaction dataset to surface fraud patterns by merchant category, geography, time-of-day, and transaction amount — providing a reporting layer that complements model-based detection.",
    metrics: [
      { value: "284K+", label: "Transactions analysed" },
      { value: "0.17%", label: "Fraud rate — class imbalance handled" },
      { value: "8", label: "High-risk merchant categories identified" },
      { value: "3×", label: "Higher fraud rate in late-night transactions" },
    ],
    dataset:
      "Kaggle Credit Card Fraud Detection dataset — 284,807 transactions, 492 fraudulent cases. PCA-transformed features (V1–V28) plus Amount and Time. Severe class imbalance addressed analytically.",
    approach: [
      "Explored the dataset structure and class distribution; documented the PCA limitation for a non-technical stakeholder audience.",
      "Wrote window function queries to calculate rolling fraud rates by time window, identifying peak fraud hours.",
      "Built merchant category risk scoring using fraud-to-total transaction ratios with statistical significance thresholds.",
      "Created amount-band analysis showing fraud concentration in the $1–$10 and $900–$1,000 bands (probing and limit-testing patterns).",
      "Built a multi-tab Power BI dashboard with slicers for time range, amount band, and risk tier.",
    ],
    dashboards: [
      {
        src: "/dashboards/fraud-dashboard-overview.png",
        alt: "Credit Card Fraud Analysis Dashboard — KPI cards and fraud cases over time by hour",
        caption:
          "Overview: 285K transactions · 492 fraud cases · 0.17% fraud rate · Fraud Cases Over Time by Hour of Day",
      },
      {
        src: "/dashboards/fraud-dashboard-overview2.png",
        alt: "Fraud Dashboard Overview 2 — Transaction volume vs fraud cases and amount distribution by fraud status",
        caption:
          "Transaction Volume vs Fraud Cases overlay and Amount Distribution by Fraud Status",
      },
      {
        src: "/dashboards/fraud-dashboard-transactions.png",
        alt: "Transaction Analysis tab — Fraud rate by time of day, amount bucket analysis, and hour vs day matrix",
        caption:
          "Transaction Analysis: Fraud Rate by Time of Day, Amount Bucket, and Hour vs Day Matrix",
      },
      {
        src: "/dashboards/fraud-dashboard-risk.png",
        alt: "Risk Assessment tab — High-risk transaction table with scatter plot and donut chart by risk level",
        caption:
          "Risk Assessment: High-Risk Transaction Table, Risk Level Distribution, and High-Risk Detection Scatter Plot",
      },
    ],
    keyInsights: [
      "Fraud rate was 3.1× higher between 23:00–02:00 than during business hours — a time-gating rule alone would catch 34% of fraud with low false-positive cost.",
      "Small-amount transactions under $10 had a disproportionately high fraud rate, consistent with card-probing behaviour before larger fraudulent charges.",
      "The top 3 merchant category proxies (derived from amount clustering) accounted for 41% of all fraud cases.",
      "88.3% of transactions fell into the Medium Risk tier, with 10.05% flagged as High Value — Monitor and 1.65% classified as High Risk.",
    ],
    recommendations: [
      "Implement time-based velocity rules as a low-cost fraud signal layer before ML scoring.",
      "Flag micro-transactions from new cards for additional verification as a probing-detection heuristic.",
      "Build a real-time merchant risk score feed into the transaction approval pipeline.",
    ],
    challenges:
      "The PCA-transformed features made business interpretation impossible — a common real-world problem when working downstream of a data science team. I focused the analysis on the interpretable fields (Amount, Time) and built the narrative around those, documenting the limitation clearly.",
    lessonsLearned:
      "Analytical honesty about data limitations is a professional strength, not a weakness. Clearly documenting what the data cannot tell you builds more stakeholder trust than over-claiming on noisy features.",
    techStack: [
      {
        name: "SQL / BigQuery",
        role: "All analytical queries, window functions, aggregations",
      },
      {
        name: "Power BI",
        role: "4-tab interactive dashboard with drill-through and risk filters",
      },
      {
        name: "Python / pandas",
        role: "Initial EDA and class imbalance analysis",
      },
      { name: "GitHub", role: "Version control and project documentation" },
    ],
  },

  {
    slug: "ecommerce-bi-platform",
    featured: false,
    title: "E-Commerce BI Platform",
    tagline:
      "Full-stack analytics platform covering sales performance, customer segmentation, product analytics, and geographic revenue distribution for an e-commerce business.",
    category: ["Analytics", "E-Commerce", "Dashboards"],
    tools: ["SQL", "Power BI", "Excel", "Python"],
    github: "https://github.com/geoffrey-bi-analyst/ecommerce-bi-project",
    status: "Complete",
    duration: "5 weeks",
    problem:
      'E-commerce businesses generate data from multiple sources — orders, marketing, product, customer — but typically view each in isolation. The absence of a unified analytics layer makes it impossible to answer cross-functional questions like "which acquisition channel produces the highest-LTV customers?"',
    objective:
      "Build an integrated BI platform that connects sales, marketing, product, and customer data into a single analytical model, with dashboards for each business function.",
    metrics: [
      { value: "$20.31M", label: "Total revenue tracked" },
      { value: "99K", label: "Total orders analysed" },
      { value: "95K", label: "Unique customers segmented" },
      { value: "$205.83", label: "Average order value surfaced" },
    ],
    dataset:
      "Brazilian E-Commerce dataset covering orders, customer profiles, product catalogue, and geographic distribution across 27 Brazilian states. Multi-year dataset spanning 2016–2018.",
    approach: [
      "Designed a star schema data model with a central fact_orders table and dimension tables for customers, products, channels, and dates.",
      "Built SQL transformations to calculate RFM (Recency, Frequency, Monetary) customer segments.",
      "Created revenue-over-time analysis identifying seasonal patterns and regional concentration.",
      "Built geographic distribution analysis showing SP state dominance (41.88% of customers) and multi-state revenue breakdown.",
      "Delivered multi-page Power BI report with executive summary, sales, product, customer, and regional tabs.",
    ],
    dashboards: [
      {
        src: "/dashboards/ecommerce-dashboard-overview.png",
        alt: "E-Commerce Sales & Customer Insights Dashboard — KPI cards, revenue over time, and revenue by region",
        caption:
          "Overview: $20.31M revenue · 99K orders · 95K customers · Revenue over Time and by Region",
      },
      {
        src: "/dashboards/ecommerce-dashboard-products.png",
        alt: "E-Commerce top products by revenue bar chart and customer distribution by state pie chart",
        caption:
          "Top Products by Revenue and Customer Geographic Distribution by State",
      },
    ],
    keyInsights: [
      "São Paulo state (SP) accounted for 41.88% of all customers, with RJ and MG the next largest markets — heavy geographic concentration risk.",
      "Revenue over time showed a sharp spike in mid-2017, indicating a promotional event or seasonal demand surge worth investigating for repeatability.",
      "Top product by revenue generated $109K — nearly 3× the second-place product, suggesting a high dependency on a single SKU.",
      "Average order value of $205.83 was consistent across major states, indicating pricing consistency despite geographic spread.",
    ],
    recommendations: [
      "Diversify marketing investment into RJ and MG to reduce geographic concentration risk beyond SP.",
      "Investigate the mid-2017 revenue spike to identify the driver and replicate it systematically.",
      "Reduce single-product revenue dependency by developing complementary upsell bundles.",
    ],
    challenges:
      "Building a defensible marketing attribution model without actual click-stream data required careful assumptions, all documented in the report. The RFM segmentation required tuning score thresholds to produce actionable, roughly equal-sized segments.",
    lessonsLearned:
      "A BI platform is only as useful as its stakeholder adoption. Building the executive summary page first — one number per business question, no more — drove engagement with the deeper drill-through pages in a way that a bottom-up build never would have.",
    techStack: [
      { name: "SQL", role: "Data modelling, transformations, RFM scoring" },
      {
        name: "Power BI",
        role: "Multi-page interactive report with drill-through",
      },
      { name: "Excel", role: "Data validation and stakeholder review copies" },
      { name: "Python", role: "EDA and data profiling" },
      { name: "GitHub", role: "Version control and README documentation" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getSecondaryProjects(): Project[] {
  return projects.filter((p) => !p.featured);
}
