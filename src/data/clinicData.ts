import {
  ClinicConfig,
  TrustItem,
  TreatmentItem,
  ApproachPillar,
  ComparisonCase,
  Practitioner,
  Testimonial,
  JournalArticle
} from '../types';

export const initialClinicConfig: ClinicConfig = {
  name: "COSMETIC AESTHETICS",
  tagline: "MODERN AESTHETICS • REFINED RESULTS",
  subTagline: "Personalized aesthetic treatments designed around your features, goals and individual beauty.",
  phone: "+00 000 000 0000",
  email: "hello@example.com",
  address: "123 Example Avenue, Suite 400",
  city: "Metropolitan District",
  operatingHours: "Mon – Sat: 9:00 AM – 6:00 PM",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
};

export const trustItems: TrustItem[] = [
  {
    id: "trust-1",
    title: "PERSONALIZED APPROACH",
    subtitle: "Tailored to your facial anatomy"
  },
  {
    id: "trust-2",
    title: "MODERN TECHNIQUES",
    subtitle: "Evidence-guided clinical methods"
  },
  {
    id: "trust-3",
    title: "INDIVIDUAL CONSULTATION",
    subtitle: "Dedicated in-depth assessment"
  },
  {
    id: "trust-4",
    title: "COMFORT-FIRST EXPERIENCE",
    subtitle: "Serene, considered environment"
  }
];

export const treatmentCategories = [
  "All Treatments",
  "Injectables",
  "Skin Treatments",
  "Facial Aesthetics",
  "Body Treatments",
  "Hair & Scalp",
  "Wellness & Care"
];

export const treatmentsData: TreatmentItem[] = [
  {
    id: "injectables",
    number: "01",
    category: "Injectables",
    title: "Refined Volume & Wrinkle Softening",
    shortDescription: "Precision micro-treatments designed to restore subtle contour and smooth fine expression lines.",
    fullDescription: "Our approach to injectable treatments prioritizes anatomical balance and natural expression. We focus on enhancing existing proportions rather than creating dramatic alterations, allowing you to look rested and revitalized.",
    duration: "30–45 mins",
    downtime: "Minimal (0–24 hrs)",
    suitableFor: ["Fine expression lines", "Subtle volume restoration", "Natural contour enhancement"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
    featured: true
  },
  {
    id: "skin-treatments",
    number: "02",
    category: "Skin Treatments",
    title: "Clinical Skin Resurfacing & Peels",
    shortDescription: "Advanced textural renewal therapies that support radiant, smooth, and balanced skin tone.",
    fullDescription: "A multi-layered approach combining gentle clinical exfoliation and cellular hydration. Customized to your specific skin barrier requirements to enhance natural glow without harsh disruption.",
    duration: "45–60 mins",
    downtime: "Low (1–2 days)",
    suitableFor: ["Uneven skin tone", "Texture irregularities", "Dullness & environmental stress"],
    image: "https://images.unsplash.com/photo-1512290900672-1f4a9b40552b?auto=format&fit=crop&w=900&q=85",
    featured: true
  },
  {
    id: "facial-aesthetics",
    number: "03",
    category: "Facial Aesthetics",
    title: "Harmonic Facial Balancing",
    shortDescription: "Holistic evaluation and targeted non-surgical refinement for graceful facial symmetry.",
    fullDescription: "Through careful anatomical assessment, we evaluate the interplay between lighting, shadow, and bone structure to create a cohesive treatment plan centered on balance.",
    duration: "60 mins",
    downtime: "None to minimal",
    suitableFor: ["Profile refinement", "Jawline definition", "Midface harmony"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    featured: false
  },
  {
    id: "body-treatments",
    number: "04",
    category: "Body Treatments",
    title: "Sculpting & Skin Tightening",
    shortDescription: "Non-invasive body contouring treatments that encourage collagen synthesis and firmness.",
    fullDescription: "Harnessing focused thermal and acoustic energy to stimulate deep dermal collagen and support natural skin elasticity across targeted body contours.",
    duration: "45–75 mins",
    downtime: "None",
    suitableFor: ["Skin laxity", "Targeted tone improvement", "Collagen support"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    featured: false
  },
  {
    id: "hair-scalp",
    number: "05",
    category: "Hair & Scalp",
    title: "Scalp Renewal & Follicle Therapy",
    shortDescription: "Targeted microneedling and bioactive serum infusions for optimal scalp vitality.",
    fullDescription: "A restorative protocol focused on nourishing the micro-environment of the scalp. Uses peptide infusions and micro-stimulation to encourage follicle resilience.",
    duration: "45 mins",
    downtime: "Minimal (24 hrs)",
    suitableFor: ["Scalp dryness", "Thinning strands", "Follicle stimulation"],
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=85",
    featured: false
  },
  {
    id: "wellness-care",
    number: "06",
    category: "Wellness & Care",
    title: "Hydration Infusions & Glow Care",
    shortDescription: "Deeply restorative cellular hydration protocols that leave the complexion nourished.",
    fullDescription: "Formulated with medical-grade antioxidants, hyaluronic compounds, and essential trace nutrients to support vitality and recovery from urban environmental exposure.",
    duration: "30–50 mins",
    downtime: "None",
    suitableFor: ["Dehydrated skin", "Event preparation", "Urban fatigue renewal"],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85",
    featured: false
  }
];

export const featuredTreatmentInfo = {
  eyebrow: "FEATURED TREATMENT",
  heading: "Skin, reimagined.",
  description: "Thoughtfully selected treatments designed to support healthier-looking, refreshed skin while keeping your individual features at the center.",
  highlights: [
    "Precision-calibrated dermal renewal tailored to your skin type",
    "Preserves natural facial dynamics and unique character",
    "In-depth pre-treatment consultation and custom aftercare protocol"
  ],
  image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85",
  stat: "1:1 Focused Care",
  statLabel: "Personalized Protocol"
};

export const approachPillars: ApproachPillar[] = [
  {
    number: "01",
    title: "Personalized Consultations",
    description: "Every appointment begins with an unhurried discussion of your lifestyle, aesthetic goals, and skin health history.",
    details: "We map your individual proportions, discuss realistic expectations, and ensure you feel fully informed before making any decisions."
  },
  {
    number: "02",
    title: "Thoughtful Treatment Planning",
    description: "Carefully calibrated treatment roadmaps developed in phases to guarantee harmonious, balanced, and sustainable outcomes.",
    details: "We avoid rapid over-correction, opting instead for progressive sessions that maintain skin integrity and natural movement."
  },
  {
    number: "03",
    title: "Modern Aesthetic Approach",
    description: "Utilizing refined clinical methodologies and high-grade formulations that emphasize subtlety and elegance.",
    details: "Our methods prioritize invisible enhancement—the feeling of being well-rested, radiant, and undeniably yourself."
  },
  {
    number: "04",
    title: "Comfort-Focused Experience",
    description: "A tranquil clinic atmosphere designed with minimal clinical harshness and attentive post-care follow-up.",
    details: "From soothing ambient soundscapes to dedicated recovery guidance, your peace of mind is prioritized throughout."
  }
];

export const comparisonCases: ComparisonCase[] = [
  {
    id: "case-skin",
    title: "Skin Resurfacing & Tone",
    subtitle: "Demo simulation: Skin clarity & texture refinement",
    area: "Full Face Renewal",
    timeframe: "3-Week Follow-up",
    // Clean before/after demo photos
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    note: "Demo visualization of gradual dermal smoothing and tone balance."
  },
  {
    id: "case-contour",
    title: "Subtle Facial Balance",
    subtitle: "Demo simulation: Gentle midface & jawline harmony",
    area: "Lower & Midface",
    timeframe: "Post-Session Protocol",
    beforeImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    afterImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    note: "Demo visualization highlighting balanced proportions with natural movement."
  },
  {
    id: "case-hydration",
    title: "Deep Hydration Glow",
    subtitle: "Demo simulation: Radiant cellular moisture barrier",
    area: "Cheeks & Periorbital",
    timeframe: "Next-Day Radiance",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=85",
    afterImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
    note: "Demo visualization showcasing nourished, rested skin texture."
  }
];

export const practitionerPlaceholders: Practitioner[] = [
  {
    id: "doc-1",
    role: "Lead Aesthetic Practitioner",
    placeholderTitle: "Your Doctor / Practitioner Name",
    credentialsPlaceholder: "Credentials & Board Certifications can be displayed here",
    bio: "Focused on facial harmonization, graceful aging, and personalized treatment plans tailored to each individual's anatomical profile.",
    specialties: ["Injectables & Facial Sculpting", "Skin Biorejuvenation", "Anatomical Assessment"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "doc-2",
    role: "Senior Dermal Clinician",
    placeholderTitle: "Your Clinical Specialist Name",
    credentialsPlaceholder: "Clinical background & specialized certifications can be added here",
    bio: "Dedicated to progressive dermal health, advanced peel formulations, and bespoke home-care maintenance strategies.",
    specialties: ["Clinical Chemical Peels", "Laser & Light Therapies", "Barrier Repair Protocols"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85"
  }
];

export const demoTestimonials: Testimonial[] = [
  {
    id: "t1",
    clientType: "Demo Client Experience",
    quote: "The entire experience felt thoughtful from consultation to aftercare. I appreciated how personalized everything felt—never rushed, and always centered on what made me feel comfortable.",
    treatment: "Personalized Facial Harmony",
    rating: 5
  },
  {
    id: "t2",
    clientType: "Demo Client Experience",
    quote: "Beautiful environment, attentive team and a very comfortable experience. The practitioner took the time to explain the anatomy and the subtle approach we were taking.",
    treatment: "Dermal Refresh Protocol",
    rating: 5
  },
  {
    id: "t3",
    clientType: "Demo Client Experience",
    quote: "Subtle, refined, and completely natural-looking. Friends simply told me I looked exceptionally rested and radiant. That is exactly what I was hoping for.",
    treatment: "Skin Texture & Glow Session",
    rating: 5
  }
];

export const journalArticles: JournalArticle[] = [
  {
    id: "j1",
    category: "Skin Philosophy",
    title: "Understanding Your Skin: A Thoughtful Approach to Skincare",
    summary: "Why building a sustainable skincare routine starts with respecting your natural barrier rather than over-exfoliating.",
    readTime: "4 min read",
    date: "Aesthetic Editorial",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    content: [
      "In modern aesthetic medicine, the paradigm has shifted from aggressive correction to foundational cellular health. When the skin barrier is supported with compatible lipid structures and gentle hydration, its natural renewal cycle operates optimally.",
      "Rather than layering multiple active acids simultaneously, a refined skincare ritual prioritizes gentle cleansing, restorative peptides, and broad-spectrum environmental defense. Subtlety in formulation yields sustained long-term clarity.",
      "During a comprehensive consultation, we evaluate your current regimen to eliminate redundant products and curate a minimalist, high-efficacy routine tailored to your unique barrier requirements."
    ]
  },
  {
    id: "j2",
    category: "Consultation Guide",
    title: "Preparing for Your Consultation: What to Consider Before Your Visit",
    summary: "How to articulate your aesthetic goals, understand facial proportions, and make the most of your 1-on-1 assessment.",
    readTime: "3 min read",
    date: "Aesthetic Editorial",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    content: [
      "A successful aesthetic consultation is an open dialogue between client and practitioner. Before arriving, it is beneficial to reflect not on specific procedures, but on how you wish to feel and which specific areas you feel could benefit from gentle refinement.",
      "Arriving with bare skin allows for accurate photographic evaluation in standardized clinical lighting. We discuss your medical history, previous treatments, and daily routine to create a harmonious roadmap.",
      "We encourage questions regarding treatment longevity, recovery nuances, and progressive staging so you feel fully empowered and confident in every choice."
    ]
  },
  {
    id: "j3",
    category: "Modern Practice",
    title: "Modern Aesthetic Care: Why Personalization and Subtlety Matter",
    summary: "Moving beyond one-size-fits-all treatments to celebrate individual beauty and anatomical nuance.",
    readTime: "5 min read",
    date: "Aesthetic Editorial",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=85",
    content: [
      "No two facial structures share the same dynamics or bone architecture. Standardized treatment templates frequently overlook the subtle asymmetries that lend individuality and charm to a face.",
      "By adopting a micro-dosing and phased approach, modern practitioners can preserve dynamic facial expression while softening fatigue markers. The goal is never to change who you are, but to restore your natural vibrancy.",
      "At LUMÉRA, every protocol is custom-crafted to harmonize with your distinctive features, ensuring outcomes that remain timeless and effortlessly natural."
    ]
  }
];
