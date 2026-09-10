import {
  ClinicConfig,
  TrustItem,
  TreatmentItem,
  ApproachPillar,
  ComparisonCase,
  Practitioner,
  ClinicSafetyStandard,
  Testimonial,
  JournalArticle
} from '../types';

export const initialClinicConfig: ClinicConfig = {
  name: "COSMETIC CLINIC",
  tagline: "BOARD-CERTIFIED AESTHETIC MEDICINE & DERMATOLOGY",
  subTagline: "Physician-led cosmetic dermatology and facial harmonization, guided by anatomical precision and refined, undetectable outcomes.",
  phone: "+1 (415) 890-3420",
  email: "concierge@cosmeticaesthetics.com",
  address: "450 Sutter Street, Suite 1800",
  city: "San Francisco, CA 94108",
  operatingHours: "Monday – Saturday: 9:00 AM – 6:00 PM (Evenings by appointment)",
  consultationFee: "$100 (credited 100% toward any treatment scheduled within 90 days)",
  cancellationPolicy: "48-hour advance cancellation requested to accommodate waitlisted patients",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
};

export const trustStats: TrustItem[] = [
  {
    id: "stat-1",
    metric: "14,500+",
    title: "Procedures Performed",
    subtitle: "Documented clinical treatments"
  },
  {
    id: "stat-2",
    metric: "18+ Years",
    title: "Medical Experience",
    subtitle: "Board-certified physician leadership"
  },
  {
    id: "stat-3",
    metric: "99.4%",
    title: "Patient Satisfaction",
    subtitle: "Based on post-treatment follow-ups"
  },
  {
    id: "stat-4",
    metric: "100%",
    title: "Licensed & Certified",
    subtitle: "Strictly MD, PA-C & NP clinicians"
  }
];

export const treatmentCategories = [
  "All Treatments",
  "Injectables",
  "Laser & Energy",
  "Collagen Induction",
  "Medical Peels & Skin",
  "Body & Regenerative"
];

export const treatmentsData: TreatmentItem[] = [
  {
    id: "botox-neuromodulators",
    number: "01",
    category: "Injectables",
    title: "Neuromodulators & Wrinkle Relaxers",
    subtitle: "Botox®, Dysport®, Xeomin®",
    shortDescription: "Precision micro-dosing to soften dynamic expression lines while preserving full emotional movement and natural brow architecture.",
    fullDescription: "Our physician-led approach to neuromodulators is centered on conservative, anatomical micro-dosing. Rather than paralyzing facial muscles, we selectively relax hyperactive muscular fibers that cause forehead furrows, crow's feet, and frown lines. The result is a well-rested, open, and youthful countenance that moves entirely naturally.",
    startingPrice: "$16 / unit (avg. $320 – $480)",
    duration: "30 minutes",
    downtime: "Minimal (0–4 hours)",
    suitableFor: [
      "Horizontal forehead lines and glabellar '11' lines",
      "Periorbital crow's feet and bunny lines",
      "Masseter reduction for jawline slimming & teeth grinding",
      "Subtle lip flip and neck platysmal band softening"
    ],
    howItWorks: [
      "Targeted neuroprotein prevents localized acetylcholine release at neuromuscular junctions",
      "Underlying superficial muscles relax, allowing overlying skin to smooth out gradually",
      "Onset begins within 3 to 5 days, reaching peak clinical effect at 14 days",
      "Gradual metabolic breakdown over 3 to 4 months with zero residual tissue alteration"
    ],
    protocolSteps: [
      { step: "01", title: "Dynamic Muscle Mapping", desc: "Detailed evaluation of facial animation and bone structure under clinical lighting." },
      { step: "02", title: "Micro-Injection Precision", desc: "Ultra-fine sterile micro-cannulas or 32G needles ensure comfort and pinpoint accuracy." },
      { step: "03", title: "Cold Compress & Soothing Care", desc: "Arnica balm and chilled compresses are applied to prevent bruising and expedite healing." },
      { step: "04", title: "14-Day Post-Care Assessment", desc: "Complimentary review to ensure balanced, harmonic symmetry." }
    ],
    recoveryTimeline: [
      { time: "Day 1 (Immediate)", expectations: "Mild localized erythema resembling tiny bug bites; resolves within 30 to 60 minutes." },
      { time: "Days 3–5", expectations: "Subtle reduction in muscle tension begins; lines appear softened during expression." },
      { time: "Day 14", expectations: "Full clinical refinement reached; skin appears smooth, luminous, and natural." },
      { time: "Month 3–4", expectations: "Gradual return of baseline movement; repeat maintenance recommended." }
    ],
    faqs: [
      {
        question: "Will my face look frozen or unnatural?",
        answer: "Never. At Cosmetic Aesthetics, our medical philosophy strictly rejects over-treatment. We employ micro-dosing techniques tailored to your dynamic expressions, ensuring you retain your natural facial warmth, smiles, and subtleties."
      },
      {
        question: "How long before a special event should I receive treatment?",
        answer: "We advise scheduling neuromodulator appointments at least 2 to 3 weeks prior to any major celebration, wedding, or photographic event to ensure optimal results and complete resolution of any minor bruising."
      }
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1512290900672-1f4a9b40552b?auto=format&fit=crop&w=1000&q=85",
    beforeAfterCaseId: "case-contour",
    featured: true
  },
  {
    id: "dermal-fillers",
    number: "02",
    category: "Injectables",
    title: "Dermal Fillers & Biostimulators",
    subtitle: "Juvéderm®, Restylane®, Sculptra®",
    shortDescription: "Anatomically mapped hyaluronic acid and biostimulatory gels to restore structural support, define contours, and hydrate soft tissue.",
    fullDescription: "Using high-purity hyaluronic acid and poly-L-lactic acid biostimulators, we restore age-related structural bone and deep fat pad loss. Our practitioners specialize in micro-cannula techniques that minimize trauma while building elegant cheekbone projection, crisp jawline definition, and supple, proportional lip architecture.",
    startingPrice: "$750 / syringe",
    duration: "45–60 minutes",
    downtime: "24–48 hours mild swelling",
    suitableFor: [
      "Midface volume loss and flattening cheek contours",
      "Nasolabial folds and marionette shadows",
      "Perioral fine lines and natural lip volume balance",
      "Pre-jowl sulcus definition and chin projection"
    ],
    howItWorks: [
      "Hyaluronic matrix binds intracellular water to support collagen scaffolding",
      "Deep supraperiosteal placement recreates lost skeletal volume naturally",
      "Dual-benefit biostimulators trigger progressive neocollagenesis over 6–12 weeks",
      "Fully reversible with hyaluronidase enzyme for complete patient safety and peace of mind"
    ],
    protocolSteps: [
      { step: "01", title: "Volumetric Profile Assessment", desc: "Multidimensional 3D profiling to evaluate shadow, light reflection, and facial angles." },
      { step: "02", title: "Topical Anesthetic Application", desc: "Prescription lidocaine compound applied for 20 minutes to ensure maximum relaxation." },
      { step: "03", title: "Blunt Micro-Cannula Delivery", desc: "Reduces vessel disruption and bruising while enabling precise layer deposition." },
      { step: "04", title: "Manual Contouring & Integration", desc: "Gentle shaping to ensure undetectable tactile blending with natural facial tissue." }
    ],
    recoveryTimeline: [
      { time: "Hours 0–24", expectations: "Mild localized swelling and tenderness; ice packs recommended 10 minutes per hour." },
      { time: "Days 2–4", expectations: "Swelling subsides significantly; any minor pin-point bruises fade." },
      { time: "Week 2", expectations: "Filler completely integrates with host tissue; final shape is soft and tactilely natural." }
    ],
    faqs: [
      {
        question: "How long do dermal fillers typically last?",
        answer: "Hyaluronic acid fillers typically last 12 to 18 months depending on the specific product density, metabolic rate, and anatomic treatment plane. Sculptra biostimulatory results can last up to 2 years."
      },
      {
        question: "Can filler be dissolved if I change my mind?",
        answer: "Yes. All hyaluronic acid fillers used at Cosmetic Aesthetics are completely reversible using an enzyme called hyaluronidase, which safely dissolves the product within 24 to 48 hours."
      }
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=85",
    beforeAfterCaseId: "case-lips",
    featured: true
  },
  {
    id: "laser-resurfacing",
    number: "03",
    category: "Laser & Energy",
    title: "Fractional Laser Skin Resurfacing",
    subtitle: "Sciton® Halo™ Hybrid Fractional Laser",
    shortDescription: "Gold-standard hybrid laser technology targeting photodamage, enlarged pores, acne scars, and uneven tone with accelerated healing.",
    fullDescription: "The Sciton Halo hybrid fractional laser combines non-ablative and ablative wavelengths simultaneously. While the ablative channel creates microscopic thermal treatment zones to vaporize damaged surface tissue, the non-ablative channel stimulates deep dermal collagen remodeling without extensive convalescence.",
    startingPrice: "$1,250 / session",
    duration: "75–90 minutes",
    downtime: "3–5 days (mild bronzing/flaking)",
    suitableFor: [
      "Solar lentigines (sun spots), melasma, and hyperpigmentation",
      "Atrophic acne scarring and textural irregularities",
      "Fine periorbital and perioral lines",
      "Loss of skin firmness and enlarged follicular pores"
    ],
    howItWorks: [
      "Dual wavelengths (1470nm non-ablative + 2940nm ablative) target epidermis and deep dermis",
      "Microscopic Epidermal Necrotic Debris (MENDs) form to shed sun-damaged cells",
      "Intense heat shock proteins trigger profound fibroblast migration and new elastin",
      "Integrated contact cooling tip ensures patient comfort throughout treatment"
    ],
    protocolSteps: [
      { step: "01", title: "Digital Skin Analysis", desc: "Multispectral UV photographic imaging measures depth of subsurface pigmentation." },
      { step: "02", title: "Pre-Treatment Anesthesia", desc: "Dual-action topical numbing compound applied 45 minutes prior." },
      { step: "03", title: "Precision Computerized Delivery", desc: "Optical navigation tracks speed and energy delivery to ensure uniform coverage." },
      { step: "04", title: "Post-Laser Barrier Occlusion", desc: "Application of sterile epidermal repair emulsion and mineral SPF 50+." }
    ],
    recoveryTimeline: [
      { time: "Day 1 (Post-Op)", expectations: "Sunburn-like sensation with mild swelling; managed with cold compresses." },
      { time: "Days 2–4", expectations: "Skin develops tiny bronzed micro-dots (MENDs) with a sandpaper texture; gentle cleansing only." },
      { time: "Days 5–7", expectations: "MENDs slough off naturally revealing radiant, luminous, and smooth skin underneath." }
    ],
    faqs: [
      {
        question: "How painful is hybrid fractional laser treatment?",
        answer: "With our specialized medical-grade topical numbing formulation and integrated Zimmer air-cooling system, patients experience mild prickly warmth with minimal discomfort (rated 2–3 out of 10)."
      },
      {
        question: "How many sessions are recommended?",
        answer: "Most patients achieve transformative clarity and textural smoothness with 1 to 2 sessions spaced 8 to 12 weeks apart, followed by an annual maintenance treatment."
      }
    ],
    image: "https://images.unsplash.com/photo-1512290900672-1f4a9b40552b?auto=format&fit=crop&w=1000&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85",
    beforeAfterCaseId: "case-skin",
    featured: true
  },
  {
    id: "rf-microneedling",
    number: "04",
    category: "Collagen Induction",
    title: "Morpheus8® Radiofrequency Microneedling",
    subtitle: "Deep Subdermal Adipose Remodeling",
    shortDescription: "Medical-grade insulated microneedles delivering targeted bipolar RF energy up to 4mm to lift, tighten, and smooth skin tissue.",
    fullDescription: "Morpheus8 combines the mechanical collagen-stimulation of microneedling with deep fractional radiofrequency thermal energy. By remodeling sub-dermal adipose tissue and contracting fibroseptal networks, it produces significant non-surgical tightening across the lower face, jowls, submental neck, and peri-orbital regions.",
    startingPrice: "$850 / session",
    duration: "60 minutes",
    downtime: "24–48 hours mild erythema",
    suitableFor: [
      "Submental skin laxity and softening jowls",
      "Crepey neck texture and horizontal necklace lines",
      "Deep acne scars and enlarged pores",
      "Loss of skin elasticity in midface and jawline"
    ],
    howItWorks: [
      "Gold-plated silicone-coated micro-pins penetrate into precise target depths (1mm–4mm)",
      "Controlled thermal coagulation coagulates subdermal fat and stimulates collagen",
      "Spares the epidermis to eliminate hyperpigmentation risks across all Fitzpatrick skin types",
      "Progressive dermal remodeling continues for 3 to 6 months following each session"
    ],
    protocolSteps: [
      { step: "01", title: "Fitzpatrick Assessment", desc: "Verification of barrier health and safe energy thresholds for your specific skin type." },
      { step: "02", title: "Prescription Anesthetic", desc: "Topical compound combined with optional nerve blocks for sensitive areas." },
      { step: "03", title: "Segmented Grid Passages", desc: "Systematic multi-depth passes targeting both deep fat architecture and superficial dermis." },
      { step: "04", title: "Hyaluronic Recovery Matrix", desc: "Direct infusion of medical-grade growth factors while micro-channels are receptive." }
    ],
    recoveryTimeline: [
      { time: "Day 1", expectations: "Pinkness and mild swelling resembling a moderate sunburn; keep skin clean and bare." },
      { time: "Day 2–3", expectations: "Micro-grid marks may be visible; mineral makeup may be applied after 24 hours." },
      { time: "Weeks 4–12", expectations: "Dynamic tightening and firming becomes evident as new collagen fibers mature." }
    ],
    faqs: [
      {
        question: "Is Morpheus8 safe for darker skin tones?",
        answer: "Yes. Because the micro-pins are insulated and deliver radiofrequency energy beneath the melanin-producing epidermal layer, Morpheus8 is safe and FDA-cleared across all Fitzpatrick skin types (I through VI)."
      }
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    beforeAfterCaseId: "case-contour",
    featured: false
  },
  {
    id: "chemical-peels",
    number: "05",
    category: "Medical Peels & Skin",
    title: "Clinical Medical Chemical Peels",
    subtitle: "VI Peel® Precision Plus, Modified TCA & Jessner",
    shortDescription: "Physician-compounded clinical peels designed to eradicate stubborn pigment, cellular congestion, and fine surface textural roughness.",
    fullDescription: "Unlike mild salon facials, our clinical peels utilize medical-grade concentrations of TCA, salicylic acid, retinoic acid, and phenol complexes. Formulated to reach specific cellular layers, they accelerate the exfoliation of damaged keratinocytes while activating dermal fibroblasts for sustained clarity.",
    startingPrice: "$350 / treatment",
    duration: "45 minutes",
    downtime: "3–6 days peeling phase",
    suitableFor: [
      "Melasma, post-inflammatory erythema (PIE), and sun spots",
      "Persistent adult acne and clogged pores",
      "Rough, weather-worn skin texture",
      "Dull complexion lacking natural light reflectance"
    ],
    howItWorks: [
      "Targeted acidic pH dissolves desmosomes binding dead surface cells",
      "Penetrates stratum granulosum to suppress active melanogenesis",
      "Induces safe, controlled cellular sloughing over a predictable 7-day window",
      "Followed by a complete take-home post-peel recovery kit with gentle cleansers and SPF"
    ],
    protocolSteps: [
      { step: "01", title: "Skin Degreasing", desc: "Ethanol-based medical prep removes surface sebum to ensure uniform peel penetration." },
      { step: "02", title: "Layered Formulation Delivery", desc: "Timed application of custom acid passes monitored for precise clinical frosting." },
      { step: "03", title: "Neutralization & Calming", desc: "Application of soothing peptides and post-procedure protective emulsion." },
      { step: "04", title: "Take-Home Care Review", desc: "Complete instructional packet with prescribed recovery towelettes and SPF." }
    ],
    recoveryTimeline: [
      { time: "Days 1–2", expectations: "Skin feels tight and slightly bronzed; no active peeling yet." },
      { time: "Days 3–5", expectations: "Active peeling begins around the perioral area, expanding outward." },
      { time: "Day 7", expectations: "Peeling complete; underlying skin is baby-soft, luminous, and clear." }
    ],
    faqs: [
      {
        question: "Can I peel the skin off with my fingers?",
        answer: "No. Never pull, pick, or peel flaking skin prematurely. Doing so can cause hyperpigmentation or scarring. Let the skin shed naturally, and keep it moisturized with the provided post-care ointment."
      }
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=85",
    beforeAfterCaseId: "case-skin",
    featured: false
  },
  {
    id: "body-regenerative",
    number: "06",
    category: "Body & Regenerative",
    title: "Non-Surgical Body Sculpting & Tightening",
    subtitle: "High-Intensity Energy & Cryolipolysis",
    shortDescription: "Targeted thermal and mechanical energy to contour stubborn localized fat pockets and stimulate collagen in lax skin.",
    fullDescription: "A sophisticated non-invasive body contouring protocol that induces targeted apoptosis in subcutaneous adipocytes while stimulating muscle tone and deep skin elasticity. Ideal for refining stubborn areas resistant to diet and cardiovascular exercise.",
    startingPrice: "$950 / cycle",
    duration: "45–75 minutes",
    downtime: "None (immediate return to activity)",
    suitableFor: [
      "Abdominal contouring and love handles (flanks)",
      "Sub-mental (double chin) fat reduction",
      "Inner and outer thigh refinement",
      "Post-pregnancy skin laxity"
    ],
    howItWorks: [
      "Controlled thermal/acoustic pulses crystallize fat cells without harming skin",
      "Macrophage clearance naturally eliminates treated adipocytes via the lymphatic system",
      "Gradual permanent reduction in fat layer thickness over 8 to 12 weeks",
      "Concurrent radiofrequency stimulates skin contraction for smooth contouring"
    ],
    protocolSteps: [
      { step: "01", title: "Caliper & Photographic Mapping", desc: "Precise measurement of fat pinch thickness and anatomical vectors." },
      { step: "02", title: "Protective Gel Matrix", desc: "Thermal barrier film protects superficial epidermis." },
      { step: "03", title: "Applicator Placement & Treatment", desc: "Automated vacuum suction and calibrated temperature cycle." },
      { step: "04", title: "Manual Reperfusion Massage", desc: "Improves cellular clearance and enhances final clinical results by up to 68%." }
    ],
    recoveryTimeline: [
      { time: "Hours 0–24", expectations: "Mild numbness or firmness in the treated zone; fully resolved over a few days." },
      { time: "Weeks 4–6", expectations: "First noticeable reduction in bulge thickness and clothes fitting looser." },
      { time: "Week 12", expectations: "Maximum clinical contouring achieved; photograph comparison review." }
    ],
    faqs: [
      {
        question: "Are the results permanent?",
        answer: "Yes. The fat cells treated and eliminated during the procedure are permanently removed from the body and will not regenerate. Maintaining a stable weight preserves your sculpted results indefinitely."
      }
    ],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
    featured: false
  }
];

export const practitioners: Practitioner[] = [
  {
    id: "dr-vance",
    name: "Dr. Elena Vance, MD, FAAD",
    title: "Founder & Medical Director",
    credentials: ["Board-Certified Dermatologist", "Fellow of the American Academy of Dermatology (FAAD)"],
    degrees: "Doctor of Medicine (MD), Johns Hopkins University School of Medicine",
    experienceYears: 18,
    boardCertifications: [
      "American Board of Dermatology (ABD)",
      "American Society for Dermatologic Surgery (ASDS)"
    ],
    affiliations: [
      "Clinical Associate Professor of Dermatology, UCSF",
      "Member, International Society of Aesthetic Plastic Surgery",
      "Allergan Medical Institute Faculty Trainer"
    ],
    bio: "Dr. Elena Vance founded Cosmetic Aesthetics with a singular vision: to deliver clinical outcomes rooted in scientific rigor, absolute patient safety, and an artistic eye for natural balance. With over 18 years of clinical experience, Dr. Vance has trained hundreds of physicians nationally in advanced facial mapping and non-surgical rejuvenation.",
    clinicalFocus: [
      "Full-Facial Harmonization & Structural Architecture",
      "Complex Pigmentary Disorders & Melasma Protocols",
      "Advanced Neuromodulator Precision Mapping",
      "Laser-Tissue Interaction & Scar Revision"
    ],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "dr-hayes",
    name: "Dr. Marcus Hayes, MD, FACS",
    title: "Attending Facial Plastic & Reconstructive Surgeon",
    credentials: ["Dual Board-Certified Facial Plastic Surgeon", "Fellow of the American College of Surgeons (FACS)"],
    degrees: "Doctor of Medicine (MD), Stanford University School of Medicine",
    experienceYears: 15,
    boardCertifications: [
      "American Board of Facial Plastic & Reconstructive Surgery (ABFPRS)",
      "American Board of Otolaryngology – Head & Neck Surgery"
    ],
    affiliations: [
      "American Academy of Facial Plastic and Reconstructive Surgery",
      "California Medical Association (CMA)"
    ],
    bio: "Dr. Marcus Hayes brings master-level anatomical knowledge to non-surgical aesthetics. Having performed over 3,000 surgical procedures, his deep understanding of underlying bone, fascia, and vascular pathways ensures treatments that are exquisitely proportioned and performed with the highest level of anatomical safety.",
    clinicalFocus: [
      "Deep-Plane Structural Injectables & Biostimulators",
      "Periorbital Rejuvenation & Tear Trough Restoration",
      "Jawline Sculpting & Submental Contouring",
      "Revision Aesthetic Corrections"
    ],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "sarah-lin",
    name: "Sarah Lin, MSN, FNP-C, CANS",
    title: "Lead Aesthetic Nurse Practitioner",
    credentials: ["Certified Aesthetic Nurse Specialist (CANS)", "Master of Science in Nursing (MSN)"],
    degrees: "MSN, Family Nurse Practitioner, Columbia University",
    experienceYears: 10,
    boardCertifications: [
      "American Nurses Credentialing Center (ANCC)",
      "Plastic Surgical Nursing Certification Board (PSNCB)"
    ],
    affiliations: [
      "International Society of Plastic and Aesthetic Nurses",
      "Master Class Injector Faculty"
    ],
    bio: "Sarah Lin is revered by patients for her meticulous technique, gentle touch, and passion for undetectable enhancements. She specializes in full-face skin quality restoration, micro-cannula lip contouring, and combining energy devices with skin barrier optimization.",
    clinicalFocus: [
      "Lip Architecture & Natural Micro-Volume",
      "Radiofrequency Microneedling & Skin Tightening",
      "Medical Chemical Peels & Barrier Repair",
      "Regenerative Exosome & Polynucleotide Infusions"
    ],
    image: "https://images.unsplash.com/photo-1594824813571-638f0263441f?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "claire-dubois",
    name: "Claire Dubois, LE, CLT",
    title: "Senior Clinical Aesthetician & Laser Specialist",
    credentials: ["Licensed Medical Aesthetician", "Certified Laser Technician (CLT)"],
    degrees: "Advanced Clinical Aesthetics Certification, San Francisco Institute of Esthetics",
    experienceYears: 8,
    boardCertifications: [
      "National Council on Laser Certification (NCLC)",
      "Certified Oncology Esthetics Specialist"
    ],
    affiliations: [
      "Associated Skin Care Professionals (ASCP)"
    ],
    bio: "Claire provides bespoke dermal therapies designed to optimize the skin barrier before, during, and after physician treatments. Her customized lymphatic and medical resurfacing protocols accelerate healing and enhance long-term glow.",
    clinicalFocus: [
      "Clinical Chemical Peels & Melasma Management",
      "HydraFacial MD Custom Medical Protocols",
      "Pre & Post-Operative Dermal Rehabilitation",
      "Barrier-Repair Skincare Regimens"
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
  }
];

export const safetyStandards: ClinicSafetyStandard[] = [
  {
    id: "safety-1",
    title: "Physician-Supervised Medical Facility",
    category: "Clinical Oversight",
    description: "Every procedure is prescribed and overseen by board-certified physicians. Emergency equipment, reversal agents (hyaluronidase), and medical protocols are on-site at all times.",
    highlight: "100% On-Site Medical Doctors"
  },
  {
    id: "safety-2",
    title: "FDA-Cleared Advanced Laser & Device Suite",
    category: "Technology Standards",
    description: "We invest exclusively in tier-1 medical systems including Sciton Halo, Candela GentleMax, and InMode Morpheus8, with rigorous quarterly manufacturer calibration.",
    highlight: "Zero Generic Counterfeits"
  },
  {
    id: "safety-3",
    title: "Hospital-Grade Autoclave Sterilization & Single-Use Disposables",
    category: "Hygiene & Sterility",
    description: "All non-disposable instruments undergo Class-B vacuum autoclave cycles with biological indicator monitoring. All needles, cannulas, and syringes are strictly single-use sterile medical grade.",
    highlight: "Class-B Sterilization Protocols"
  },
  {
    id: "safety-4",
    title: "Authentic Cold-Chain Pharmaceutical Sourcing",
    category: "Product Purity",
    description: "All neuromodulators (Botox®) and fillers (Juvéderm®, Restylane®) are sourced directly from certified US pharmaceutical manufacturers (Allergan, Galderma) with verified temperature tracking.",
    highlight: "100% Direct Manufacturer Supply"
  }
];

export const comparisonCases: ComparisonCase[] = [
  {
    id: "case-skin",
    title: "Fractional Laser Resurfacing & Tone Correction",
    treatmentType: "Laser & Skin",
    treatmentId: "laser-resurfacing",
    area: "Full Face Renewal",
    timeframe: "4 Weeks Post-Treatment",
    sessions: "1 Session Sciton Halo™",
    patientProfile: "Female, Age 42, moderate solar photodamage & periorbital fine lines",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    clinicalNotes: "Patient presented with epidermal hyperpigmentation, mild dermal laxity, and dull tone. A single pass of hybrid fractional laser produced dramatic clearance of solar lentigines, contraction of pores, and notable collagen induction."
  },
  {
    id: "case-contour",
    title: "Lower Face Contouring & Harmonization",
    treatmentType: "Injectables & RF",
    treatmentId: "botox-neuromodulators",
    area: "Jawline, Chin & Submental",
    timeframe: "6 Weeks Post-Procedure",
    sessions: "Combination Protocol (Masseter Botox + Morpheus8)",
    patientProfile: "Female, Age 36, masseter hypertrophy and softening jawline definition",
    beforeImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    afterImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    clinicalNotes: "Targeted 30 units of neuromodulator to each masseter muscle relieved nocturnal bruxism and created an elegant oval contour, while RF microneedling tightened submental skin."
  },
  {
    id: "case-lips",
    title: "Micro-Cannula Natural Lip Architecture",
    treatmentType: "Injectables",
    treatmentId: "dermal-fillers",
    area: "Perioral & Vermilion Border",
    timeframe: "3 Weeks Post-Treatment",
    sessions: "1 Session (0.75ml Restylane Kysse)",
    patientProfile: "Female, Age 29, subtle volume deficit and asymmetrical cupid's bow",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=85",
    afterImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
    clinicalNotes: "Focus placed entirely on definition of the vermilion border and vertical philtral columns rather than anterior projection. Natural anatomical ratio of 1:1.6 (upper to lower) strictly maintained."
  },
  {
    id: "case-midface",
    title: "Midface Structural Lift & Tear Trough Softening",
    treatmentType: "Injectables",
    treatmentId: "dermal-fillers",
    area: "Cheeks & Tear Troughs",
    timeframe: "2 Weeks Post-Treatment",
    sessions: "1 Session (Juvéderm Voluma + Restylane Eyelight)",
    patientProfile: "Female, Age 48, infraorbital hollowing and midface volume descent",
    beforeImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=85",
    afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85",
    clinicalNotes: "Deep periosteal boluses at the zygomatic arch restored triangular light reflection, reducing the shadowing in the tear trough without risk of Tyndall effect or puffiness."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    patientName: "Victoria M.",
    treatment: "Full Facial Harmonization & Halo Laser",
    rating: 5,
    verified: true,
    date: "August 2026",
    quote: "Dr. Vance is in an entirely different league. She spent 45 minutes analyzing my facial proportions before touching a syringe. My results look so seamless that friends only comment on how rested and radiant I look. This is true medical excellence.",
    practitionerSeen: "Dr. Elena Vance, MD"
  },
  {
    id: "t-2",
    patientName: "David K.",
    treatment: "Masseter Botox & Morpheus8 RF",
    rating: 5,
    verified: true,
    date: "July 2026",
    quote: "As a male patient, my greatest anxiety was looking over-done or having my jawline feminized. Dr. Hayes understood immediately. He preserved my masculine facial angles while completely relieving my jaw clenching and sharpening my profile.",
    practitionerSeen: "Dr. Marcus Hayes, MD"
  },
  {
    id: "t-3",
    patientName: "Alexandra R.",
    treatment: "Natural Lip Architecture & Peel",
    rating: 5,
    verified: true,
    date: "July 2026",
    quote: "Sarah Lin has the gentlest hand and the most discerning eye. My lips look soft, hydrated, and completely proportional to my smile. The clinic feels like a private sanctuary where you are treated with absolute discretion.",
    practitionerSeen: "Sarah Lin, MSN, FNP-C"
  }
];

export const approachPillars: ApproachPillar[] = [
  {
    number: "01",
    title: "Physician-Led Anatomical Consultation",
    description: "Every journey begins with an unhurried 45-minute clinical assessment of your bone structure, dynamic expression patterns, and skin barrier health.",
    details: "We utilize multi-angle clinical photography and 3D facial mapping to identify the root cause of aesthetic concerns rather than merely treating surface symptoms."
  },
  {
    number: "02",
    title: "Conservative & Phased Treatment Roadmaps",
    description: "We strictly reject rapid over-correction, opting instead for progressive sessions that preserve tissue health and natural movement.",
    details: "By staging treatments over carefully spaced intervals, we allow cellular remodeling and dermal integration to unfold harmoniously and sustainably."
  },
  {
    number: "03",
    title: "Evidence-Based Medical Technologies",
    description: "We curate only FDA-cleared tier-1 platforms backed by peer-reviewed clinical studies demonstrating efficacy and safety.",
    details: "From dual-wavelength hybrid fractional lasers to gold-insulated RF microneedles, our technology suite represents the pinnacle of contemporary aesthetic science."
  },
  {
    number: "04",
    title: "Dedicated Post-Procedure Concierge Care",
    description: "Your care continues long after you leave our treatment suite with direct practitioner access and structured 14-day follow-ups.",
    details: "We equip each patient with customized medical barrier-recovery protocols, mineral sun protection, and complimentary progress evaluations."
  }
];

export const journalArticles: JournalArticle[] = [
  {
    id: "j1",
    category: "Dermatology Science",
    title: "The Science of Subtlety: Why Micro-Dosing Preserves Dynamic Expression",
    summary: "How modern anatomical mapping enables targeted muscle relaxation without the dreaded 'frozen' appearance.",
    readTime: "5 min read",
    date: "Clinical Editorial",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    content: [
      "In modern aesthetic medicine, the paradigm has shifted from aggressive paralysis to nuanced neuromuscular calibration. When micro-doses are delivered to precise muscle vectors, dynamic expression is preserved while eliminating the mechanical folding that causes permanent creases.",
      "Anatomical depth is critical. A millimeter variance in placement can mean the difference between a natural resting brow and unwanted ptosis. At Cosmetic Aesthetics, our injectors are board-certified physicians and specialized nurse practitioners trained extensively in facial cadaver anatomy.",
      "The goal of modern neuromodulation is simple: you should look rested, vibrant, and effortlessly yourself—never altered."
    ]
  },
  {
    id: "j2",
    category: "Laser Innovation",
    title: "Hybrid Fractional Laser: The Dual-Depth Advantage for Photodamaged Skin",
    summary: "Understanding how combining non-ablative and ablative wavelengths accelerates healing while transforming skin texture.",
    readTime: "6 min read",
    date: "Clinical Editorial",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    content: [
      "Traditional CO2 ablative lasers historically delivered dramatic results at the cost of two weeks of oozing, raw downtime and high pigmentary risk. Non-ablative lasers offered rapid recovery with modest results.",
      "The advent of hybrid fractional technology (such as the Sciton Halo) bridges this divide by emitting both wavelengths into the exact same microscopic treatment zone.",
      "Patients experience the deep collagen induction and epidermal renewal of an ablative procedure with a manageable 3 to 5-day peeling phase that easily integrates into modern professional lifestyles."
    ]
  },
  {
    id: "j3",
    category: "Patient Guide",
    title: "Preparing for Your Aesthetic Consultation: A Physician's Checklist",
    summary: "How to articulate your goals, review your medical history, and evaluate clinic safety standards before choosing a provider.",
    readTime: "4 min read",
    date: "Clinical Editorial",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=85",
    content: [
      "A clinical consultation should never feel like a high-pressure sales pitch. It is a medical diagnostic appointment designed to evaluate anatomical candidacy and set realistic expectations.",
      "Arrive with clean, makeup-free skin so your provider can accurately assess vascularity, melanin distribution, and tissue elasticity.",
      "Always ask about the practitioner's credentials, who is performing the procedure, what reversal or emergency protocols exist, and review unretouched before-and-after cases of patients with similar anatomy."
    ]
  }
];

export const trustItems = trustStats;
export const demoTestimonials = testimonials;
export const practitionerPlaceholders = practitioners;
export const featuredTreatmentInfo = {
  tag: "SIGNATURE CLINICAL PROTOCOL",
  eyebrow: "SIGNATURE CLINICAL PROTOCOL",
  title: "Skin, Reimagined: The Multi-Depth Laser & RF Sequence",
  subtitle: "A phased hybrid approach combining Sciton Halo™ fractional resurfacing with Morpheus8® sub-dermal remodeling.",
  description: "A phased hybrid approach combining Sciton Halo™ fractional resurfacing with Morpheus8® sub-dermal remodeling to restore natural dermal elasticity.",
  stat: "99.4%",
  statLabel: "Patient Satisfaction",
  highlights: [
    "Targets solar photodamage, fine lines, and skin laxity in a single physician-supervised protocol",
    "Tailored depths: 1470nm/2940nm laser passes paired with insulated RF microneedles",
    "Integrated medical-grade topical anesthesia and chilling for total patient comfort",
    "Includes complete post-treatment barrier recovery kit and 14-day clinical assessment"
  ],
  details: [
    "Targets solar photodamage, fine lines, and skin laxity in a single physician-supervised protocol",
    "Tailored depths: 1470nm/2940nm laser passes paired with insulated RF microneedles",
    "Integrated medical-grade topical anesthesia and chilling for total patient comfort",
    "Includes complete post-treatment barrier recovery kit and 14-day clinical assessment"
  ],
  image: "https://images.unsplash.com/photo-1512290900672-1f4a9b40552b?auto=format&fit=crop&w=1000&q=85"
};


