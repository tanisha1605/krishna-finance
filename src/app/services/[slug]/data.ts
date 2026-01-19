// src/app/services/[slug]/data.ts

export const serviceContentMap: Record<string, any> = {
  // --- AARAMBH ---
  "private-limited-company": {
    title: "Private Limited Company Registration",
    description: "The most popular legal structure for businesses in India. It offers limited liability protection to its shareholders.",
    features: ["Limited Liability", "Separate Legal Entity", "Easy Transferability", "Borrowing Capacity"],
    category: "AARAMBH"
  },
  "one-person-company": { // Updated to match likely slug if header title is just "One Person Company"
    title: "One Person Company (OPC) Registration",
    description: "Ideal for solo entrepreneurs who want a corporate structure with limited liability.",
    features: ["Single Owner", "Limited Liability", "Legal Status", "Easy to Manage"],
    category: "AARAMBH"
  },
  "one-person-company-registration": { // Alternate slug in case header uses full title
    title: "One Person Company (OPC) Registration",
    description: "Ideal for solo entrepreneurs who want a corporate structure with limited liability.",
    features: ["Single Owner", "Limited Liability", "Legal Status", "Easy to Manage"],
    category: "AARAMBH"
  },
  "limited-liability-partnership": {
    title: "Limited Liability Partnership (LLP)",
    description: "A balanced structure providing the benefits of a partnership with the security of limited liability.",
    features: ["No Minimum Capital", "Lower Compliance Cost", "Tax Benefits", "Separate Legal Entity"],
    category: "AARAMBH"
  },
  "partnership-firm-registration-(rof)": { // Matches "Partnership Firm Registration (ROF)"
    title: "Partnership Firm Registration (ROF)",
    description: "Register your partnership firm with the Registrar of Firms for legal recognition.",
    features: ["Easy Formation", "Shared Responsibility", "Flexibility", "Legal Protection"],
    category: "AARAMBH"
  },
  "partnership-firm-registration-rof": { // Alternate slug without brackets
    title: "Partnership Firm Registration (ROF)",
    description: "Register your partnership firm with the Registrar of Firms for legal recognition.",
    features: ["Easy Formation", "Shared Responsibility", "Flexibility", "Legal Protection"],
    category: "AARAMBH"
  },
  "section-8-company": {
    title: "Section 8 Company Registration",
    description: "For non-profit organizations dedicated to promoting commerce, art, science, sports, education, research, and charity.",
    features: ["Tax Exemptions", "No Minimum Capital", "Credibility", "Donation Benefits"],
    category: "AARAMBH"
  },
  "12a-and-80g-registration": {
    title: "12A and 80G Registration",
    description: "Essential registrations for NGOs to get tax exemptions and allow donors to claim tax deductions.",
    features: ["Tax Exemption", "Donor Benefits", "Credibility", "Government Grants"],
    category: "AARAMBH"
  },
  "ngo-darpan": {
    title: "NGO Darpan Registration",
    description: "A centralized platform for NGOs to interface with key government ministries and departments.",
    features: ["Government Grants", "Unique ID", "Profile Management", "Credibility"],
    category: "AARAMBH"
  },

  // --- KAVACH ---
  "shram-suvidha-registration": {
    title: "Shram Suvidha Registration",
    description: "A unified portal for labour and employment compliance and reporting.",
    features: ["Unified LIN", "Transparency", "Online Reporting", "Compliance Management"],
    category: "KAVACH"
  },
  "trademark-registration": {
    title: "Trademark Registration",
    description: "Protect your brand identity, logo, and slogan from unauthorized use.",
    features: ["Legal Protection", "Brand Recognition", "Asset Creation", "Global Rights"],
    category: "KAVACH"
  },
  "patent": {
    title: "Patent Registration",
    description: "Secure exclusive rights for your inventions and innovations.",
    features: ["Exclusive Rights", "Market Monopoly", "Licensing Income", "Higher Valuation"],
    category: "KAVACH"
  },
  "copyright-registration": {
    title: "Copyright Registration",
    description: "Secure legal rights for your creative works including literature, music, and software.",
    features: ["Ownership Proof", "Legal Rights", "Prevent Copying", "Monetization"],
    category: "KAVACH"
  },

  // --- PRAMANIT ---
  "start-up-india-certificate": {
    title: "Startup India Registration",
    description: "Get recognized by the DPIIT and avail tax benefits and easier compliance.",
    features: ["Tax Holiday", "IPR Benefits", "Easy Public Procurement", "Self Certification"],
    category: "PRAMANIT"
  },
  "gem-registration": {
    title: "GeM Registration",
    description: "Register on Government e-Marketplace to supply goods and services to the government.",
    features: ["Direct Government Sales", "No Tenders (<25k)", "Dynamic Pricing", "Market Access"],
    category: "PRAMANIT"
  },
  "tax-exemption-certificate": {
    title: "Tax Exemption Certificate",
    description: "Get 100% income tax exemption for your eligible startup under Section 80IAC.",
    features: ["Income Tax Holiday", "3 Years Exemption", "Capital Gains Benefit", "DPIIT Recognition Required"],
    category: "PRAMANIT"
  },
  "zed-certificate": {
    title: "ZED Certificate",
    description: "Zero Defect Zero Effect certification to encourage quality manufacturing.",
    features: ["Subsidy on Certs", "Financial Support", "Tech Upgradation", "Global Recognition"],
    category: "PRAMANIT"
  },
  "iso-certificate": {
    title: "ISO Certification",
    description: "International standard certification to ensure quality, safety, and efficiency.",
    features: ["Global Recognition", "Customer Trust", "Quality Assurance", "Tender Eligibility"],
    category: "PRAMANIT"
  },
  "gst-registration-&-certificate": {
    title: "GST Registration",
    description: "Mandatory tax registration for businesses supplying goods and services in India.",
    features: ["Legally Recognized", "Input Tax Credit", "Interstate Trade", "E-commerce Support"],
    category: "PRAMANIT"
  },
  "gst-registration": { // Clean slug alternative
    title: "GST Registration",
    description: "Mandatory tax registration for businesses supplying goods and services in India.",
    features: ["Legally Recognized", "Input Tax Credit", "Interstate Trade", "E-commerce Support"],
    category: "PRAMANIT"
  },
  "fssai-certificate": {
    title: "FSSAI License / Registration",
    description: "Mandatory license for all Food Business Operators (FBOs) in India.",
    features: ["Food Safety", "Legal Compliance", "Consumer Trust", "Business Expansion"],
    category: "PRAMANIT"
  },
  "iec-certificate": {
    title: "Import Export Code (IEC)",
    description: "Mandatory code for any business involved in import or export of goods/services.",
    features: ["Lifetime Validity", "No Renewal Required", "Global Market Access", "Online Process"],
    category: "PRAMANIT"
  },
  "nsic-certification": {
    title: "NSIC Certification",
    description: "Registration with National Small Industries Corporation to boost growth and access government tenders.",
    features: ["Tender Free of Cost", "EMD Exemption", "Technical Support", "Marketing Assistance"],
    category: "PRAMANIT"
  },
  "udhyam-registration": {
    title: "Udyam Registration (MSME)",
    description: "Official MSME registration to avail government benefits and subsidies.",
    features: ["Subsidized Loans", "Protection against delayed payments", "Electricity bill concession", "ISO Reimbursement"],
    category: "PRAMANIT"
  },
  "gst-lut": {
    title: "GST LUT Filing",
    description: "Letter of Undertaking for exporting goods/services without paying IGST.",
    features: ["Tax Benefit", "Export Compliance", "Valid for 1 Year", "Online Filing"],
    category: "PRAMANIT"
  },
  "make-in-india": {
    title: "Make in India Certification",
    description: "Certification to promote manufacturing and production of goods within India.",
    features: ["Government Preference", "Investment Support", "Brand Value", "Subsidy Benefits"],
    category: "PRAMANIT"
  },
  "pasara-certificate": {
    title: "PSARA License",
    description: "Mandatory license for opening a private security agency in India.",
    features: ["Legal Compliance", "Trust Building", "Operational License", "Background Checks"],
    category: "PRAMANIT"
  },

  // --- NIDHI ---
  "seed-fund": {
    title: "Startup Seed Fund Scheme",
    description: "Financial assistance to startups for proof of concept, prototype development, and product trials.",
    features: ["Government Backed", "Equity/Debt", "Incubator Support", "Growth Capital"],
    category: "NIDHI"
  },
  "agri-preneurs": {
    title: "Agri-Preneurship Scheme",
    description: "Funding and support for startups in the agriculture and allied sectors.",
    features: ["Agri-Innovation", "Financial Support", "Mentorship", "Training"],
    category: "NIDHI"
  },
  "msme-design": {
    title: "MSME Design Clinic Scheme",
    description: "Support for design improvement and quality enhancement for MSMEs.",
    features: ["Design Advice", "Financial Grant", "Competitiveness", "Innovation"],
    category: "NIDHI"
  },
  "tide-idea-2.0": {
    title: "Tide 2.0 Grant",
    description: "MeitY grant scheme for startups engaged in emerging technologies like IoT, AI, and Blockchain.",
    features: ["Grant up to 7 Lakhs", "Incubation Support", "Emerging Tech Focus", "Mentorship"],
    category: "NIDHI"
  },
  "nidhi-prayas": {
    title: "NIDHI PRAYAS",
    description: "Promoting and Accelerating Young and Aspiring technology entrepreneurs.",
    features: ["Prototyping Grant", "Fab Lab Access", "Mentorship", "Innovation Focus"],
    category: "NIDHI"
  },
  "seed-support-scheme": {
    title: "Seed Support Scheme",
    description: "Financial assistance to incubatees to bridge the gap between development and commercialization.",
    features: ["Early Stage Funding", "Gap Funding", "Product Commercialization", "Investment Support"],
    category: "NIDHI"
  },
  "gujarat-innovators": {
    title: "Gujarat Industrial Policy",
    description: "Assistance to startups and innovators under the Gujarat Industrial Policy.",
    features: ["State Support", "Subsidy Benefits", "Infrastructure", "Market Access"],
    category: "NIDHI"
  },

  // --- VIKAS ---
  "venture-capital": {
    title: "Venture Capital Funding",
    description: "Connect with investors to fuel high-growth potential startups.",
    features: ["High Funding", "Mentorship", "Business Network", "Scalability"],
    category: "VIKAS"
  },
  "working-capital-(cgtmse-loan)": {
    title: "Working Capital (CGTMSE Loan)",
    description: "Collateral-free credit facility for Micro and Small Enterprises backed by the Government of India.",
    features: ["Collateral Free", "Up to ₹2 Crore", "Government Guarantee", "Business Expansion"],
    category: "VIKAS"
  },
  "working-capital": { // Alternate slug
    title: "Working Capital (CGTMSE Loan)",
    description: "Collateral-free credit facility for Micro and Small Enterprises backed by the Government of India.",
    features: ["Collateral Free", "Up to ₹2 Crore", "Government Guarantee", "Business Expansion"],
    category: "VIKAS"
  },
  "naiff": {
    title: "NAIFF",
    description: "National Agriculture Infra Financing Facility for post-harvest management infrastructure.",
    features: ["Interest Subvention", "Credit Guarantee", "Agri Infra", "Long Term Debt"],
    category: "VIKAS"
  },
  "pmegp-loan": {
    title: "PMEGP Loan",
    description: "Prime Minister's Employment Generation Programme providing subsidy-linked credit for new micro-enterprises.",
    features: ["Subsidy up to 35%", "Manufacturing & Service", "Bank Loan Linked", "Rural & Urban Areas"],
    category: "VIKAS"
  },
  "mudra-loan": {
    title: "PMMY (MUDRA Loan)",
    description: "Loans up to ₹10 Lakhs for non-corporate, non-farm small/micro enterprises.",
    features: ["Collateral Free", "Low Interest", "Flexible Tenure", "Processing Ease"],
    category: "VIKAS"
  },
  "pmfme": {
    title: "PMFME Scheme",
    description: "PM Formalisation of Micro food processing Enterprises scheme offering financial and technical support.",
    features: ["35% Subsidy", "Food Processing Focus", "Tech Upgradation", "Branding Support"],
    category: "VIKAS"
  },
  "maha-udyog-yojana-(cmegp)": {
    title: "Maha Udyog Yojana (CMEGP)",
    description: "Chief Minister Employment Generation Programme for promoting self-employment opportunities.",
    features: ["Project Cost Support", "Margin Money Subsidy", "Self Employment", "State Govt Scheme"],
    category: "VIKAS"
  },
  "maha-udyog-yojana": { // Alternate slug
    title: "Maha Udyog Yojana (CMEGP)",
    description: "Chief Minister Employment Generation Programme for promoting self-employment opportunities.",
    features: ["Project Cost Support", "Margin Money Subsidy", "Self Employment", "State Govt Scheme"],
    category: "VIKAS"
  },

  // --- VISTAR ---
  "bhaskar-id": {
    title: "Bhaskar ID Registration",
    description: "Unique identity for startup ecosystem enablers and beneficiaries.",
    features: ["Digital Identity", "Ecosystem Access", "Networking", "Government Benefits"],
    category: "VISTAR"
  },
  "financial-deck": {
    title: "Financial Deck Preparation",
    description: "Detailed financial projections and modeling for your startup.",
    features: ["Revenue Model", "Expense Forecasting", "Valuation", "Investor Ready"],
    category: "VISTAR"
  },
  "investor-deck": {
    title: "Investor Pitch Deck",
    description: "Professional pitch deck creation to secure funding from VCs and Angel Investors.",
    features: ["Storytelling", "Financial Modeling", "Design", "Market Research"],
    category: "VISTAR"
  },

  // --- PRABANDHIT ---
  "roc-compliances-for-pvt-ltd": {
    title: "ROC Compliances for Pvt Ltd",
    description: "Annual filing and mandatory compliances for Private Limited Companies.",
    features: ["Annual Returns", "Board Meetings", "Audit", " Statutory Registers"],
    category: "PRABANDHIT"
  },
  "roc-compliances-for-llp": {
    title: "ROC Compliances for LLP",
    description: "Annual filing and mandatory compliances for Limited Liability Partnerships.",
    features: ["Form 11", "Form 8", "Solvency", "Annual Return"],
    category: "PRABANDHIT"
  },
  "gst-compliances": {
    title: "GST Compliance & Filing",
    description: "Monthly and annual GST return filing services to ensure tax compliance.",
    features: ["GSTR-1 & 3B", "Annual Return", "ITC Reconciliation", "Notice Handling"],
    category: "PRABANDHIT"
  }
};

// Default fallback content
export const defaultService = {
  title: "Service Details",
  description: "Contact us for more details about this service.",
  features: ["Consultation", "Expert Support", "Documentation", "Filing"],
  category: "Service"
};