/**
 * HAVEN & HEIR - Services Central Data Store
 * Dedicated capability profiles for all 6 core staging & styling services.
 * 
 * DATA MAPPING CONTRACT:
 * Each service has a unique ID/slug and its own:
 * - id
 * - slug
 * - title (exact heading displayed on card and details hero)
 * - featuredImage (exact image displayed on card and details hero)
 * - image (alias to featuredImage)
 * - heroImage (alias to featuredImage)
 * - tag (badge displayed on card and details hero)
 * - category (category displayed on card and details)
 * - icon (FontAwesome icon class)
 * - subtitle (hero subtitle)
 * - shortDescription (concise card description)
 * - fullDescription (comprehensive overview)
 * - overview (alias to fullDescription)
 * - scopeDescription (detailed scope)
 * - features (array of included capability items)
 * - deliverables (array of key deliverable cards)
 * - processSteps (array of 4-step execution workflow)
 * - pricing / pricingOverview (pricing guidance)
 * - timeline (execution duration)
 * - contactFormService (matching service dropdown prefill)
 */

const servicesPageData = {
  "vacant": {
    id: "vacant",
    slug: "vacant-staging",
    title: "Vacant Home Staging",
    tag: "Turnkey Staging",
    category: "Full Property Transformation",
    icon: "fa-couch",
    featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    subtitle: "Complete spatial transformation of empty residences into unforgettable dream homes.",
    shortDescription: "Transform empty properties with carefully selected furniture, designer lighting, artwork, and rugs that define room flow and scale.",
    fullDescription: "Our signature vacant staging solution transforms cold, vacant properties into warm, emotionally compelling residences that buyers immediately fall in love with. We carefully curate luxury furnishings, bespoke artwork, statement rugs, and designer lighting tailored precisely to the architectural floorplan.",
    overview: "Our signature vacant staging solution transforms cold, vacant properties into warm, emotionally compelling residences that buyers immediately fall in love with. We carefully curate luxury furnishings, bespoke artwork, statement rugs, and designer lighting tailored precisely to the architectural floorplan.",
    scopeDescription: "Vacant properties routinely struggle on the market because 9 out of 10 prospective buyers cannot accurately gauge room dimensions or envision where furniture belongs. Our turnkey service removes all spatial guesswork, highlighting optimal traffic flow, natural light diffusion, and lifestyle prestige.",
    features: [
      "Custom whole-home interior design curation & room layout planning",
      "Full living room, formal dining, primary bedroom suite & patio setups",
      "Designer luxury furniture, bespoke upholstery & statement travertine pieces",
      "Museum-grade canvas art, high-density wool rugs & architectural lighting",
      "White-glove delivery, installation, placement, and final de-staging",
      "Includes initial 60-day rental period with flexible extension options"
    ],
    deliverables: [
      {
        title: "Spatial Floorplan & Curation",
        desc: "Room-by-room design storyboard selecting pieces that complement your home's structural character."
      },
      {
        title: "Full Inventory Logistics",
        desc: "Direct delivery and professional installation from our private climate-controlled designer warehouse."
      },
      {
        title: "Editorial Finishing Touches",
        desc: "Bespoke botanicals, luxury linen bedding, coffee table books, and scented ambient diffusers."
      },
      {
        title: "Stress-Free De-Staging",
        desc: "Seamless post-closing removal of all furniture and inventory with zero damage guarantee."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "On-Site Spatial Audit",
        desc: "Our design directors evaluate architecture, natural light, buyer demographics, and focal angles."
      },
      {
        step: "02",
        title: "Concept Curation",
        desc: "We hand-select furniture packages, color palettes, and artwork from our private inventory."
      },
      {
        step: "03",
        title: "White-Glove Installation",
        desc: "Our dedicated staging crew delivers, positions, and steams all textiles within 24 to 48 hours."
      },
      {
        step: "04",
        title: "Market-Ready Showcase",
        desc: "Your home is flawlessly presented for MLS photography, videography, and broker previews."
      }
    ],
    pricing: "Starting from $5,500 for standard 2-bedroom residences. Custom estate proposals available.",
    pricingOverview: "Starting from $5,500 for standard 2-bedroom residences. Custom estate proposals available.",
    timeline: "24–48 hour installation once curation is finalized.",
    contactFormService: "vacant-staging"
  },

  "rental": {
    id: "rental",
    slug: "furniture-rental",
    title: "Furniture Rental",
    tag: "Short & Long-Term",
    category: "Designer Inventory Access",
    icon: "fa-chair",
    featuredImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    subtitle: "Direct access to our vast warehouse collection of bespoke designer furniture and accessories.",
    shortDescription: "Provide stylish, high-end furniture packages from our private designer inventory for property viewings, model units, and photo shoots.",
    fullDescription: "Access HAVEN & HEIR’s exclusive private warehouse catalog of contemporary sofas, dining suites, accent chairs, lighting, rugs, and accessories. Designed for real estate brokers, developers, model homes, film sets, and residential photo shoots.",
    overview: "Access HAVEN & HEIR’s exclusive private warehouse catalog of contemporary sofas, dining suites, accent chairs, lighting, rugs, and accessories. Designed for real estate brokers, developers, model homes, film sets, and residential photo shoots.",
    scopeDescription: "Whether you need a single statement sofa to anchor a grand salon or an entire multi-room furniture package for a 90-day marketing campaign, our flexible leasing terms and white-glove transport team provide effortless luxury furnishing on your timeline.",
    features: [
      "Access to multi-million-dollar designer furniture warehouse collection",
      "Flexible 30, 60, and 90-day lease terms with monthly extensions",
      "White-glove delivery, professional assembly, and final collection",
      "Comprehensive damage protection coverage included in all leases",
      "Trend-aligned neutral palettes, bouclé fabrics, and honed stone finishes",
      "Substantial discounts for multi-month or multi-unit developer campaigns"
    ],
    deliverables: [
      {
        title: "Catalog Pre-Selection",
        desc: "Digital lookbook access to reserve specific designer pieces matching your aesthetic."
      },
      {
        title: "Scheduled Delivery Window",
        desc: "Precision time-slot delivery with bonded and insured white-glove technicians."
      },
      {
        title: "Full Protective Care",
        desc: "Floor runners, doorframe protectors, and protective pads used during every transport."
      },
      {
        title: "Flexible Term Extensions",
        desc: "Convenient automatic monthly extension options if marketing duration expands."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Inventory Selection",
        desc: "Browse our curated catalog or consult with an inventory manager to pick key pieces."
      },
      {
        step: "02",
        title: "Lease Customization",
        desc: "Select lease duration (30, 60, or 90 days) and schedule convenient delivery dates."
      },
      {
        step: "03",
        title: "White-Glove Placement",
        desc: "Our logistics team delivers, uncrates, and places all furniture exactly where requested."
      },
      {
        step: "04",
        title: "Seamless Pickup",
        desc: "When your lease concludes, our crew handles all packing and pickup without disruption."
      }
    ],
    pricing: "Flexible monthly tiers based on piece selection. Packages start at $1,800/month.",
    pricingOverview: "Flexible monthly tiers based on piece selection. Packages start at $1,800/month.",
    timeline: "Rapid delivery available within 48 to 72 hours of reservation.",
    contactFormService: "furniture-rental"
  },

  "interior": {
    id: "interior",
    slug: "interior-styling",
    title: "Interior Styling",
    tag: "Occupied Homes",
    category: "Occupied Residence Elevation",
    icon: "fa-wand-magic-sparkles",
    featuredImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    subtitle: "Reimagining occupied spaces through artful editing, layout optimization, and luxury styling.",
    shortDescription: "Enhance existing spaces through layout reconfiguration, curated soft furnishings, accent lighting, organic botanicals, and art placement.",
    fullDescription: "Designed for homeowners currently living in their property who want to prepare for market or elevate their everyday lifestyle. We evaluate your existing furniture, edit visual clutter, reconfigure spatial layouts, and infuse curated luxury accents.",
    overview: "Designed for homeowners currently living in their property who want to prepare for market or elevate their everyday lifestyle. We evaluate your existing furniture, edit visual clutter, reconfigure spatial layouts, and infuse curated luxury accents.",
    scopeDescription: "Occupied homes often contain exceptional pieces that are obscured by everyday living. Our stylists expertly harmonize your existing furniture with high-end throws, Belgian linens, artisanal ceramics, and modern artwork to create an airy, cohesive, market-ready atmosphere.",
    features: [
      "On-site spatial audit, traffic flow evaluation & furniture reconfiguration",
      "Artful integration of client pieces with our curated designer accessories",
      "Color theory recommendations, lighting optimization & fixture advice",
      "Strategic decluttering roadmap and storage optimization plan",
      "Soft furnishings package: luxury pillows, textured throws & linen bedding",
      "Comprehensive room-by-room styling maintenance guide for showings"
    ],
    deliverables: [
      {
        title: "Spatial Transformation",
        desc: "Repositioning existing key furniture to unlock natural light, open sightlines, and scale."
      },
      {
        title: "Curated Styling Accent Kit",
        desc: "Loaner collection of luxury cushions, throws, vases, trays, and design books."
      },
      {
        title: "Showing Readiness Guide",
        desc: "A practical 15-minute quick checklist to prepare the home before prospective buyers arrive."
      },
      {
        title: "Color & Touchup Plan",
        desc: "Specific paint swatch codes and hardware replacement recommendations for maximum ROI."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Discovery & Walk-Through",
        desc: "We review your home room-by-room, identifying items to keep, relocate, or pack."
      },
      {
        step: "02",
        title: "Layout Reconfiguration",
        desc: "We rearrange major furniture to highlight architectural flow and open floor area."
      },
      {
        step: "03",
        title: "Layering Accents",
        desc: "We layer modern artwork, designer textiles, botanicals, and lighting vignettes."
      },
      {
        step: "04",
        title: "Final Polish",
        desc: "Full photo-prep inspection ensuring every surface is pristine and camera-ready."
      }
    ],
    pricing: "Comprehensive occupied styling packages start at $2,800 per residence.",
    pricingOverview: "Comprehensive occupied styling packages start at $2,800 per residence.",
    timeline: "Completed in 1 to 2 days on-site.",
    contactFormService: "interior-styling"
  },

  "photography": {
    id: "photography",
    slug: "photography-ready",
    title: "Photography-Ready Styling",
    tag: "Media Prep",
    category: "Digital Real Estate Marketing",
    icon: "fa-camera-retro",
    featuredImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    subtitle: "Styling specifically engineered to maximize camera angles, natural lighting, and digital MLS impact.",
    shortDescription: "Prepare properties to look their absolute best for MLS photography, architectural magazines, 4K video walk-throughs, and 3D tours.",
    fullDescription: "Homes that look captivating through high-definition camera lenses generate dramatically higher online click-through rates and in-person showings. Our stylists work hand-in-hand with photographers and videographers on shoot day to ensure every shot is magazine-worthy.",
    overview: "Homes that look captivating through high-definition camera lenses generate dramatically higher online click-through rates and in-person showings. Our stylists work hand-in-hand with photographers and videographers on shoot day to ensure every shot is magazine-worthy.",
    scopeDescription: "A wide-angle camera lens sees a room very differently than the human eye. We eliminate unwanted reflections in glass and mirrors, align drapery lines, adjust cushion chops, and micro-style countertops to ensure seamless digital MLS presentation.",
    features: [
      "Angle-specific composition and framing for wide-angle 24mm camera lenses",
      "Natural and ambient lighting optimization and glare reduction techniques",
      "Micro-styling of kitchen islands, bath vanities, coffee tables & shelving",
      "Bed dressing, duvet steaming, and luxury pillow fluffing protocols",
      "Dedicated lead stylist on-site during photo shoots and video walk-throughs",
      "High-resolution digital presentation ready for MLS, Zillow, and print brochures"
    ],
    deliverables: [
      {
        title: "Pre-Shoot Staging Sweep",
        desc: "Full 2-hour pre-shoot styling sweep before the photographer arrives."
      },
      {
        title: "On-Set Creative Direction",
        desc: "Stylist stays behind the camera lens to adjust props and symmetry in real time."
      },
      {
        title: "Twilight & Video Prep",
        desc: "Coordinated lighting arrangements for dramatic sunset twilight shoots and 4K video."
      },
      {
        title: "Editorial Prop Curation",
        desc: "Fresh florals, champagne setups, linen runners, and lifestyle accessories."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Pre-Shoot Checklist",
        desc: "We provide owners and agents with an essential prep checklist 48 hours prior."
      },
      {
        step: "02",
        title: "Day-of Micro-Styling",
        desc: "Our stylist arrives 2 hours early to style every surface and adjust light temperatures."
      },
      {
        step: "03",
        title: "Behind-the-Lens Direction",
        desc: "We review camera monitors shot-by-shot to eliminate glare and balance frame weight."
      },
      {
        step: "04",
        title: "Media Asset Sign-Off",
        desc: "Guaranteed photo-ready execution that makes your listing the highlight of the MLS."
      }
    ],
    pricing: "Photography styling sessions start at $1,200 per half-day shoot.",
    pricingOverview: "Photography styling sessions start at $1,200 per half-day shoot.",
    timeline: "Half-day or full-day shoot coordination.",
    contactFormService: "photography-ready"
  },

  "consultation": {
    id: "consultation",
    slug: "property-consultation",
    title: "Property Consultation",
    tag: "Strategic Audit",
    category: "Professional Spatial Advisory",
    icon: "fa-clipboard-check",
    featuredImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    subtitle: "An intensive 2-hour architectural review delivering an actionable, high-ROI staging roadmap.",
    shortDescription: "An intensive 2-hour walk-through consultation resulting in a detailed room-by-room staging report with actionable high-ROI recommendations.",
    fullDescription: "Our comprehensive on-site staging consultation is designed for realtors, property developers, and homeowners who want clear, expert guidance on how to maximize their property’s market value before listing.",
    overview: "Our comprehensive on-site staging consultation is designed for realtors, property developers, and homeowners who want clear, expert guidance on how to maximize their property’s market value before listing.",
    scopeDescription: "During this detailed 2-hour walk-through, our principal design director assesses every room from curb to back terrace. We identify high-impact, cost-effective modifications that yield the highest return on investment, providing a comprehensive written roadmap.",
    features: [
      "In-depth 2-hour on-site property evaluation with principal design director",
      "Comprehensive written room-by-room staging report and action checklist",
      "High-ROI paint color swatch recommendations and lighting fixture suggestions",
      "Curb appeal enhancement advice, landscaping review & entryway optimization",
      "Budget-friendly DIY staging options vs. professional staging tier comparisons",
      "Trusted local contractor and vendor referrals for painting, repairs, and cleaning"
    ],
    deliverables: [
      {
        title: "Comprehensive Written Report",
        desc: "A 10–15 page detailed action plan delivered digitally within 24 hours of consultation."
      },
      {
        title: "Curated Paint Palette Swatches",
        desc: "Exact manufacturer paint codes for optimal light reflection and modern neutral appeal."
      },
      {
        title: "Itemized Staging Estimates",
        desc: "Transparent tiered pricing options for full or partial staging execution."
      },
      {
        title: "Contractor Referral Network",
        desc: "Vetted professional painters, electricians, cleaners, and window specialists."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Appointment Booking",
        desc: "Schedule your preferred 2-hour window through our concierge or online portal."
      },
      {
        step: "02",
        title: "On-Site Walk-Through",
        desc: "Our design director walks every interior and exterior space, taking measurements and photos."
      },
      {
        step: "03",
        title: "Action Plan Generation",
        desc: "We synthesize our findings into an actionable, prioritized staging roadmap."
      },
      {
        step: "04",
        title: "Report Delivery & Review",
        desc: "Receive your custom staging plan within 24 hours with an optional follow-up call."
      }
    ],
    pricing: "Flat rate of $450 for residences up to 3,500 sq. ft. (Credited toward staging packages).",
    pricingOverview: "Flat rate of $450 for residences up to 3,500 sq. ft. (Credited toward staging packages).",
    timeline: "2-hour on-site session; report delivered within 24 hours.",
    contactFormService: "consultation"
  },

  "openhouse": {
    id: "openhouse",
    slug: "open-house-styling",
    title: "Open House Styling",
    tag: "VIP Launch",
    category: "High-Impact Sensory Presentation",
    icon: "fa-champagne-glasses",
    featuredImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
    subtitle: "Creating unforgettable multi-sensory experiences for prospective buyers and VIP broker opens.",
    shortDescription: "Create an unforgettable sensory experience for prospective buyers and brokers with fresh luxury florals, ambient scents, and bar vignettes.",
    fullDescription: "Elevate your property launch from a routine open house into an exclusive, memorable design event. We craft a complete sensory atmosphere—incorporating bespoke floral installations, ambient luxury scent diffusers, champagne bar setups, and soft acoustic styling.",
    overview: "Elevate your property launch from a routine open house into an exclusive, memorable design event. We craft a complete sensory atmosphere—incorporating bespoke floral installations, ambient luxury scent diffusers, champagne bar setups, and soft acoustic styling.",
    scopeDescription: "High-net-worth buyers respond to experiential luxury. When prospective buyers step into a home filled with fresh botanical scents, curated lounge music, and styled entertaining areas, they perceive the property as an elite lifestyle venue worth competing for.",
    features: [
      "Fresh bespoke luxury floral arrangements for foyer, island, and dining table",
      "Ambient luxury scent diffusers using signature Haven & Heir natural essences",
      "Curated champagne bar vignettes, fine crystal stemware & artisanal styling",
      "Outdoor terrace and lounge staging with atmospheric hurricane candles",
      "Day-of-event morning inspection, touch-ups, and pre-event stylist staging",
      "Twilight lighting coordination for evening VIP preview events"
    ],
    deliverables: [
      {
        title: "Custom Botanical Installations",
        desc: "Large-scale seasonal floral centerpieces created specifically for the property scale."
      },
      {
        title: "Sensory Environment Curation",
        desc: "Signature room fragrances, curated acoustic playlists, and warm dimmable lighting."
      },
      {
        title: "Bar & Entertaining Staging",
        desc: "Styled bar carts with designer decanters, linen napkins, and artisanal glassware."
      },
      {
        title: "Event Day Stylist Standby",
        desc: "On-site stylist ensuring pristine presentation right up until doors open to VIP guests."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Event Planning Brief",
        desc: "We align on event timing, guest demographics, and key architectural highlight zones."
      },
      {
        step: "02",
        title: "Sensory Design Curation",
        desc: "We order custom botanical arrangements and curate bar and ambient scent elements."
      },
      {
        step: "03",
        title: "Morning-Of Installation",
        desc: "Our stylists arrive hours prior to dress the bar, place florals, and light candles."
      },
      {
        step: "04",
        title: "Post-Event Collection",
        desc: "After the event closes, our crew efficiently collects staging props and bar elements."
      }
    ],
    pricing: "Open house styling packages start at $1,500 per event.",
    pricingOverview: "Open house styling packages start at $1,500 per event.",
    timeline: "Event day execution with 48 hours advance notice required.",
    contactFormService: "open-house"
  }
};

// Helper aliases to support numerical ID query params (?id=1, ?id=2, etc.) and slugs
const servicesIdMap = {
  "1": "vacant",
  "service-1": "vacant",
  "vacant-staging": "vacant",
  "vacant-home-staging": "vacant",
  "vacant": "vacant",

  "2": "rental",
  "service-2": "rental",
  "furniture-rental": "rental",
  "furniture-and-decor-rental": "rental",
  "rental": "rental",

  "3": "interior",
  "service-3": "interior",
  "interior-styling": "interior",
  "interior-styling-and-redesign": "interior",
  "interior": "interior",

  "4": "photography",
  "service-4": "photography",
  "photography-ready": "photography",
  "photography-styling": "photography",
  "photography-ready-styling": "photography",
  "photography": "photography",

  "5": "consultation",
  "service-5": "consultation",
  "property-consultation": "consultation",
  "property-staging-consultation": "consultation",
  "consultation": "consultation",

  "6": "openhouse",
  "service-6": "openhouse",
  "open-house": "openhouse",
  "open-house-styling": "openhouse",
  "openhouse": "openhouse"
};

/**
 * Retrieve service data by slug, numerical ID, or title
 */
function getServiceData(idOrSlug) {
  if (!idOrSlug) return servicesPageData["vacant"];
  const cleanKey = String(idOrSlug).toLowerCase().trim().replace(/['"“”]/g, '');
  
  if (servicesPageData[cleanKey]) {
    return servicesPageData[cleanKey];
  }
  
  if (servicesIdMap[cleanKey] && servicesPageData[servicesIdMap[cleanKey]]) {
    return servicesPageData[servicesIdMap[cleanKey]];
  }

  for (const key in servicesPageData) {
    const service = servicesPageData[key];
    const titleSlug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (titleSlug === cleanKey || cleanKey.includes(key) || key.includes(cleanKey)) {
      return service;
    }
  }

  return servicesPageData["vacant"];
}
