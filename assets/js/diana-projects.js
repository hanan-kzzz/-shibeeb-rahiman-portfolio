/* ==============================================================================
   DIANA ETUK EDITORIAL PROJECT SYSTEM — JAVASCRIPT ENGINE
   Supports:
   - Standalone Case Study Page (case.html?id=X) — 100% Separate Page, Zero Pop-up
   - Editorial Showcase Slider & Archive Grid on projects.html
   - Ambient Web Audio Synthesizer (Generative Pentatonic Drone)
   ============================================================================== */

(function initDianaSystem() {
  const DIANA_PROJECTS = [
  {
    "id": 0,
    "category": "motion",
    "year": "2026",
    "title": "Showreel 2026 \u2014 Motion In Action",
    "badge": "SHOWREEL \u00b7 00:30",
    "desc": "Brand identities, kinetic typography & 3D pacing across commercial campaigns.",
    "src": "assets/images/posters/showreel-thumb.jpg",
    "videoSrc": "assets/videos/shibeeb-showreel.mp4",
    "role": "Creative Direction, 3D Animation & Motion Design",
    "timeline": "Ongoing Direction \u00b7 2024\u20132026",
    "stakeholders": "Commercial Clients & Global Brand Specs",
    "tools": "Cinema 4D, After Effects, Octane Render, DaVinci Resolve",
    "overview": "Showreel 2026 represents the pinnacle of motion direction and visual storytelling by Shibeeb Rahiman. Compiling cutting-edge automotive 3D pacing, kinetic typography systems, luxury perfume lighting, and commercial broadcast cuts, the reel captures fluid rhythm and high-retention energy designed for modern digital campaigns.",
    "dropCards": [
      {
        "title": "Pacing & Motion Choreography",
        "desc": "Each beat was synchronized with dynamic cut frequencies, alternating between high-speed acceleration cuts and slow-motion product detail staging to maximize viewer retention."
      },
      {
        "title": "Atmospheric Lighting & Shader Craft",
        "desc": "Utilized physical Octane shaders for glass refraction, volumetric dust particles, and metallic brushed surfaces to ensure commercial-grade photorealism."
      },
      {
        "title": "Kinetic Typography Architecture",
        "desc": "Engineered bespoke typographic layout animations that guide viewer eye movement seamlessly into the focal product zone."
      },
      {
        "title": "Audio-Visual Synchronization",
        "desc": "Cut precisely to frequency transients with layered Foley sound design, giving every mechanical motion and light flare a visceral physical presence."
      }
    ],
    "gallery": [
      "assets/images/posters/showreel-thumb.jpg",
      "assets/images/posters/car-video-thumb.jpg",
      "assets/images/posters/reel-frame.jpg",
      "assets/images/posters/final-out-thumb.jpg"
    ]
  },
  {
    "id": 1,
    "category": "motion",
    "year": "2026",
    "title": "Mahindra Thar \u2014 4K Automotive Motion",
    "badge": "AUTOMOTIVE \u00b7 00:58",
    "desc": "Off-road vehicle dynamics, procedural dirt particles & cinematic dusk composite.",
    "src": "assets/images/posters/car-video-thumb.jpg",
    "videoSrc": "assets/videos/cinematic-car-reel.mp4",
    "role": "3D Vehicle Rigging, Particle Simulation & Color Grading",
    "timeline": "2 Weeks Production",
    "stakeholders": "Automotive Commercial Spec",
    "tools": "Cinema 4D, Octane, After Effects, DaVinci Resolve",
    "overview": "A visceral 4K automotive motion piece capturing the rugged endurance of the Mahindra Thar. The project focused on realistic suspension physics over brutal terrain, dynamic dirt particle emission, volumetric dusk atmosphere, and cinematic camera tracking curves.",
    "dropCards": [
      {
        "title": "Vehicle Physics & Suspension Dynamics",
        "desc": "Configured rigid-body suspension dampening to accurately emulate terrain shockwaves, tire compression, and aggressive chassis rebound during off-road climbs."
      },
      {
        "title": "Procedural Particle & Mud Dispersion",
        "desc": "Simulated gravel and dust vortices trailing behind the tires using GPU-accelerated particle emitters with realistic air resistance and gravity."
      },
      {
        "title": "Cinematic Dusk Color Palette",
        "desc": "Employed a dramatic split-tone grade\u2014deep cobalt twilight shadows paired with warm incandescent headlight beam refractions."
      },
      {
        "title": "Macro Mechanical Detailing",
        "desc": "Rendered close-up mechanical passes highlighting carbon weave grilles, knobby tire treads, and rain-slicked metallic paint coats."
      }
    ],
    "gallery": [
      "assets/images/posters/car-video-thumb.jpg",
      "assets/images/posters/mahindra-thar-automotive-poster.jpg",
      "assets/images/posters/car-video-thumb.jpg",
      "assets/images/posters/showreel-thumb.jpg"
    ]
  },
  {
    "id": 2,
    "category": "motion",
    "year": "2025",
    "title": "Vertical Motion \u2014 Social & Campaign Cuts",
    "badge": "SOCIAL REEL \u00b7 00:24",
    "desc": "Fast-paced mobile transitions, retention hooks & punchy editorial typography.",
    "src": "assets/images/posters/final-out-thumb.jpg",
    "videoSrc": "assets/videos/social-motion-reel.mp4",
    "role": "Creative Editor & Motion Graphic Designer",
    "timeline": "10 Days Production",
    "stakeholders": "Social Media Campaigns & Performance Ads",
    "tools": "After Effects, Premiere Pro, Illustrator",
    "overview": "Tailored specifically for 9:16 vertical displays across Instagram Reels and TikTok, this project redefines social campaign pacing. By marrying rhythmic snap zooms with bold typography anchors, every millisecond is calibrated to stop the scroll.",
    "dropCards": [
      {
        "title": "The 3-Second Hook Architecture",
        "desc": "Engineered high-velocity visual transitions within the first 3 frames to drastically reduce bounce rates and spark immediate engagement."
      },
      {
        "title": "Vertical Composition Framing",
        "desc": "Optimized safe zones for mobile UI overlays (comments, captions, CTA buttons) while maintaining striking central hierarchy."
      },
      {
        "title": "Audio Transient Matching",
        "desc": "Mapped micro-animations and color flashes directly to the beat transients for a deeply satisfying, rhythmic sensory experience."
      }
    ],
    "gallery": [
      "assets/images/posters/final-out-thumb.jpg",
      "assets/images/posters/reel-frame.jpg",
      "assets/images/posters/yas-sports-shoes-promo.jpg"
    ]
  },
  {
    "id": 3,
    "category": "motion",
    "year": "2025",
    "title": "Interactive CV \u2014 Visual Identity Reel",
    "badge": "PORTFOLIO \u00b7 00:46",
    "desc": "Curated brand identity design, editorial layout motion & typography showcase.",
    "src": "assets/images/posters/reel-frame.jpg",
    "videoSrc": "assets/videos/shibeeb-cv.mp4",
    "role": "Visual Identity & Concept Motion Designer",
    "timeline": "1 Week Production",
    "stakeholders": "Personal Creative Archive",
    "tools": "After Effects, Cinema 4D, Photoshop",
    "overview": "A narrative journey presenting Shibeeb Rahiman's multifaceted design disciplines. Spanning typography posters, 3D awards for Educraft, and commercial retail campaigns, this piece demonstrates mastery across both static and temporal mediums.",
    "dropCards": [
      {
        "title": "Narrative Arc & Disciplines",
        "desc": "Structured as an episodic visual journey transitioning seamlessly from raw typography to intricate 3D physical awards and cinematic film."
      },
      {
        "title": "Interactive Minimal Aesthetic",
        "desc": "Clean dark-mode typography inspired by European editorial magazines, balancing restraint with expressive motion bursts."
      }
    ],
    "gallery": [
      "assets/images/posters/reel-frame.jpg",
      "assets/images/posters/showreel-thumb.jpg"
    ]
  },
  {
    "id": 4,
    "category": "ads",
    "year": "2025",
    "title": "YAS Sports \u2014 Footwear Promo",
    "badge": "COMMERCIAL AD \u00b7 YAS SPORTS",
    "desc": "Performance footwear launch on a sculpted 3D pedestal with ambient stadium lighting.",
    "src": "assets/images/posters/yas-sports-shoes-promo.jpg",
    "videoSrc": null,
    "role": "Commercial Art Director & 3D Visualizer",
    "timeline": "5 Days Production",
    "stakeholders": "YAS Sports Footwear / Retail Network",
    "tools": "Photoshop, Cinema 4D, Illustrator",
    "overview": "Designed for a nationwide seasonal clearance and new model launch for YAS Sports. The creative showcases athletic sneakers elevated on a sculpted concrete pedestal, surrounded by atmospheric stadium spotlight cones and bold discount typography.",
    "dropCards": [
      {
        "title": "Pedestal Staging & Dominance",
        "desc": "Constructed an elevated architectural podium that treats athletic sneakers as modern sculptural art rather than ordinary merchandise."
      },
      {
        "title": "High-Contrast Discount Hierarchy",
        "desc": "Balanced commercial clarity with premium aesthetics\u2014the '50% OFF' promotion commands instant attention without diluting brand prestige."
      },
      {
        "title": "Dynamic Shoe Sole Shadowing",
        "desc": "Accurate ambient occlusion and contact shadows ground the footwear firmly onto the reflective stage surface."
      }
    ],
    "gallery": [
      "assets/images/posters/yas-sports-shoes-promo.jpg",
      "assets/images/posters/offlimits-cricket-shoes-ad.jpg",
      "assets/images/posters/yas-sports-shoes-promo.jpg"
    ]
  },
  {
    "id": 5,
    "category": "educraft",
    "year": "2025",
    "title": "Malappuram Sahodaya Memento",
    "badge": "3D PRODUCT \u00b7 EDUCRAFT",
    "desc": "Prestigious award ceremony plaque rendered with fluid podium curves & laser engraving.",
    "src": "assets/images/posters/educraft-sahodaya-memento.png",
    "videoSrc": null,
    "role": "Industrial Memento Designer & 3D Stager",
    "timeline": "1 Week Production",
    "stakeholders": "Educraft Awards & Malappuram Sahodaya Complex",
    "tools": "Cinema 4D, Octane Render, CorelDraw, Photoshop",
    "overview": "Commissioned by Educraft for the Sahodaya School Complex annual awards ceremony. The memento blends tinted acrylic glass with brushed gold metal accents, set atop a modern stepped circular podium that honors academic excellence.",
    "dropCards": [
      {
        "title": "Physical Material Simulation",
        "desc": "Calibrated refractive index values for 12mm optical acrylic and textured brushed gold alloy to match physical fabrication tolerances."
      },
      {
        "title": "Ceremonial Dignity",
        "desc": "Refined proportions and elegant serif lettering ensure the trophy conveys prestige and enduring value for award recipients."
      },
      {
        "title": "Production-Ready Blueprints",
        "desc": "Generated precise vector cut lines and laser engraving layers utilized directly by manufacturing machines."
      }
    ],
    "gallery": [
      "assets/images/posters/educraft-sahodaya-memento.png",
      "assets/images/posters/educraft-podium-trophies.png",
      "assets/images/posters/educraft-sahodaya-memento.png",
      "assets/images/posters/educraft-sahodaya-memento.png"
    ]
  },
  {
    "id": 6,
    "category": "posters",
    "year": "2024",
    "title": "Sachin Tendulkar Tribute \u2014 God of Cricket",
    "badge": "SPORTS POSTER \u00b7 TRIBUTE",
    "desc": "Monochrome sports triptych study celebrating cricket's greatest batting maestro.",
    "src": "assets/images/posters/sachin-tendulkar-god-of-cricket.jpg",
    "videoSrc": null,
    "role": "Graphic Designer & Editorial Typographer",
    "timeline": "3 Days",
    "stakeholders": "Self-Initiated Cultural Poster Study",
    "tools": "Adobe Photoshop, Illustrator",
    "overview": "A celebratory monochrome editorial poster commemorating Sachin Tendulkar. Through aggressive halftone textures, overlapping typographic statistics, and high-contrast action framing, the composition captures the iconic cover drive and eternal sporting reverence.",
    "dropCards": [
      {
        "title": "Halftone & Grain Texture",
        "desc": "Layered authentic vintage newspaper halftones to reflect the decades-long journey of Tendulkar's international career."
      },
      {
        "title": "Typographic Density",
        "desc": "Wove historic dates, batting averages, and stadium chants into the background canvas to reward close inspection."
      }
    ],
    "gallery": [
      "assets/images/posters/sachin-tendulkar-god-of-cricket.jpg",
      "assets/images/posters/move-your-world-poster.jpeg",
      "assets/images/posters/sachin-tendulkar-god-of-cricket.jpg"
    ]
  },
  {
    "id": 7,
    "category": "ads",
    "year": "2025",
    "title": "OffLimits Cricket Spikes",
    "badge": "COMMERCIAL AD \u00b7 OFFLIMITS",
    "desc": "Performance footwear launch featuring dynamic turf particle collisions & high speed.",
    "src": "assets/images/posters/offlimits-cricket-shoes-ad.jpg",
    "videoSrc": null,
    "role": "3D Product Staging & Commercial Art Director",
    "timeline": "1 Week Production",
    "stakeholders": "OffLimits Sports Footwear",
    "tools": "Cinema 4D, Photoshop, Illustrator",
    "overview": "High-octane commercial creative for the OffLimits cricket spike line. The visual captures the shoe mid-stride, exploding off an emerald cricket pitch with airborne grass blades and chalk turf spray.",
    "dropCards": [
      {
        "title": "Explosive Turf Motion",
        "desc": "Simulated realistic particle dispersion of soil and fresh grass blades to convey instantaneous forward propulsion."
      },
      {
        "title": "Spike Stud Macro Focus",
        "desc": "Hard directional rim lighting illuminates the stainless steel spike tips, reinforcing uncompromising grip."
      }
    ],
    "gallery": [
      "assets/images/posters/offlimits-cricket-shoes-ad.jpg",
      "assets/images/posters/yas-sports-shoes-promo.jpg",
      "assets/images/posters/offlimits-cricket-shoes-ad.jpg"
    ]
  },
  {
    "id": 8,
    "category": "educraft",
    "year": "2025",
    "title": "Championship Series Trophies",
    "badge": "3D STAGING \u00b7 EDUCRAFT",
    "desc": "1st, 2nd & 3rd place podium staged in polished acrylic, champagne gold & silver.",
    "src": "assets/images/posters/educraft-podium-trophies.png",
    "videoSrc": null,
    "role": "Lead Trophy Designer & 3D Artist",
    "timeline": "2 Weeks Production",
    "stakeholders": "Educraft Trophies & Regional Sports Leagues",
    "tools": "Cinema 4D, Octane Render, Photoshop",
    "overview": "A comprehensive award hierarchy designed for elite tournament finals. Gold, silver, and bronze pedestals staged in a dramatic 3D amphitheater setting with reflective black acrylic surfaces.",
    "dropCards": [
      {
        "title": "Tiered Material Differentiation",
        "desc": "Carefully calibrated material roughness and metallic albedo so gold, silver, and bronze trophies each possess distinct visual prestige."
      },
      {
        "title": "Podium Elevation Architecture",
        "desc": "Staggered 3-tier podium heights create a natural visual hierarchy leading the eye upwards to the champion's cup."
      }
    ],
    "gallery": [
      "assets/images/posters/educraft-podium-trophies.png",
      "assets/images/posters/educraft-sahodaya-memento.png",
      "assets/images/posters/educraft-podium-trophies.png",
      "assets/images/posters/educraft-podium-trophies.png"
    ]
  },
  {
    "id": 9,
    "category": "posters",
    "year": "2025",
    "title": "Mahindra Thar: Explore The Impossible",
    "badge": "AUTOMOTIVE POSTER",
    "desc": "Cinematic off-road composite with dusk mountain range & high-energy dirt trail.",
    "src": "assets/images/posters/mahindra-thar-automotive-poster.jpg",
    "videoSrc": null,
    "role": "Digital Compositor & Automotive Retoucher",
    "timeline": "4 Days",
    "stakeholders": "Automotive Editorial Concept",
    "tools": "Photoshop, Lightroom, After Effects",
    "overview": "A cinematic poster capturing the rugged adventure spirit of the Mahindra Thar. Features multi-layer atmospheric blending, mountain range depth cues, and high-voltage headlight beams piercing dense evening fog.",
    "dropCards": [
      {
        "title": "Atmospheric Depth Staging",
        "desc": "Combined 6 distinct environmental plates with custom aerial haze layers to build believable spatial depth."
      },
      {
        "title": "Dynamic Light Bleed",
        "desc": "Accurately cast golden headlight illumination across uneven rocky terrain and foreground foliage."
      }
    ],
    "gallery": [
      "assets/images/posters/mahindra-thar-automotive-poster.jpg",
      "assets/images/posters/car-video-thumb.jpg",
      "assets/images/posters/mahindra-thar-automotive-poster.jpg"
    ]
  },
  {
    "id": 10,
    "category": "ads",
    "year": "2024",
    "title": "MN LY Menswear Fashion Hub",
    "badge": "BRAND LAUNCH \u00b7 MN LY",
    "desc": "Modern urban menswear campaign blending architectural minimalism with bold type.",
    "src": "assets/images/posters/mnly-fashion-hub-launch.jpg",
    "videoSrc": null,
    "role": "Brand Identity & Advertising Designer",
    "timeline": "2 Weeks",
    "stakeholders": "MN LY Apparel Brands",
    "tools": "Photoshop, Illustrator, InDesign",
    "overview": "Campaign for the flagship store launch of MN LY Menswear. The creative bridges high-end European tailoring with contemporary streetwear attitude.",
    "dropCards": [
      {
        "title": "Clean Editorial Structure",
        "desc": "Asymmetrical typography paired with generous negative space signals premium tailoring and curated taste."
      }
    ],
    "gallery": [
      "assets/images/posters/mnly-fashion-hub-launch.jpg",
      "assets/images/posters/mnly-fashion-hub-launch.jpg",
      "assets/images/posters/mnly-fashion-hub-launch.jpg"
    ]
  },
  {
    "id": 11,
    "category": "posters",
    "year": "2024",
    "title": "Move Your World",
    "badge": "EDITORIAL POSTER",
    "desc": "Kinetic Swiss typography poster celebrating forward human momentum and flow.",
    "src": "assets/images/posters/move-your-world-poster.jpeg",
    "videoSrc": null,
    "role": "Experimental Typographer",
    "timeline": "3 Days",
    "stakeholders": "Self-Initiated Design Exploration",
    "tools": "Illustrator, Photoshop",
    "overview": "An experimental typographic poster exploring how typography can express physical velocity. Distorted letterforms bend along fluid motion paths creating an optical sensation of movement.",
    "dropCards": [
      {
        "title": "Optical Distortion Mechanics",
        "desc": "Custom vector warping along bezier curves simulates Doppler effect acoustic and visual shifts."
      }
    ],
    "gallery": [
      "assets/images/posters/move-your-world-poster.jpeg",
      "assets/images/posters/sachin-tendulkar-god-of-cricket.jpg"
    ]
  },
  {
    "id": 12,
    "category": "educraft",
    "year": "2024",
    "title": "MSAT 2024 Excellence Award",
    "badge": "AWARD DESIGN \u00b7 EDUCRAFT",
    "desc": "Geometric crystal scholarship award with frosted laser detailing & mirror base.",
    "src": "assets/images/posters/educraft-msat-excellence-award.png",
    "videoSrc": null,
    "role": "Industrial & 3D Award Designer",
    "timeline": "1 Week Production",
    "stakeholders": "Educraft & MSAT Scholarship Foundation",
    "tools": "Cinema 4D, Octane, Photoshop",
    "overview": "Sculptural crystal award presented to top-ranking scholars in the MSAT talent examination. The multifaceted prism facets catch ambient light, reflecting internal laser-engraved emblems.",
    "dropCards": [
      {
        "title": "Prismatic Dispersion Shaders",
        "desc": "Rendered true spectral dispersion (rainbow refraction) through beveled glass edges to highlight flawless crystal clarity."
      }
    ],
    "gallery": [
      "assets/images/posters/educraft-msat-excellence-award.png",
      "assets/images/posters/educraft-sahodaya-memento.png"
    ]
  },
  {
    "id": 13,
    "category": "posters",
    "year": "2024",
    "title": "World Population Day",
    "badge": "AWARENESS POSTER",
    "desc": "Symbolic editorial illustration exploring resource equilibrium & demographic balance.",
    "src": "assets/images/posters/world-population-day-poster.jpg",
    "videoSrc": null,
    "role": "Social Concept & Poster Designer",
    "timeline": "2 Days",
    "stakeholders": "Editorial Awareness Campaign",
    "tools": "Illustrator, Photoshop",
    "overview": "A thoughtful awareness poster addressing global demographic equilibrium. The composition utilizes contrasting silhouettes and organic earth tones to prompt reflection on shared planetary resources.",
    "dropCards": [
      {
        "title": "Minimalist Semiotics",
        "desc": "Stripped away visual clutter to let a single central metaphor communicate with immediate universal clarity."
      }
    ],
    "gallery": [
      "assets/images/posters/world-population-day-poster.jpg",
      "assets/images/posters/world-population-day-poster.jpg"
    ]
  },
  {
    "id": 14,
    "category": "educraft",
    "year": "2025",
    "title": "Rotary Cricket League Set",
    "badge": "SPORTS TROPHIES \u00b7 EDUCRAFT",
    "desc": "Tournament championship trophy and individual player awards staged in brass and glass.",
    "src": "assets/images/posters/educraft-rotary-cricket-awards.png",
    "videoSrc": null,
    "role": "3D Product Designer",
    "timeline": "10 Days Production",
    "stakeholders": "Educraft & Rotary International",
    "tools": "Cinema 4D, Octane, CorelDraw",
    "overview": "Full suite of trophies designed for the Rotary Cricket League tournament. Incorporates a 3D cricket ball silhouette crowned with the iconic Rotary wheel emblem.",
    "dropCards": [
      {
        "title": "Emblem Integration",
        "desc": "Seamlessly fused the Rotary mechanical cogwheel with dynamic cricket seam geometry into a unified sculptural form."
      }
    ],
    "gallery": [
      "assets/images/posters/educraft-rotary-cricket-awards.png",
      "assets/images/posters/educraft-rotary-cricket-awards.png"
    ]
  },
  {
    "id": 15,
    "category": "educraft",
    "year": "2025",
    "title": "Best Batsman Golden Sculpture",
    "badge": "3D PRODUCT \u00b7 EDUCRAFT",
    "desc": "Sculptural metallic batsman poised in follow-through stance on marble base.",
    "src": "assets/images/posters/educraft-best-batsman-award.png",
    "videoSrc": null,
    "role": "Sculptural & 3D Staging Artist",
    "timeline": "1 Week",
    "stakeholders": "Educraft Awards",
    "tools": "Cinema 4D, ZBrush, Octane Render",
    "overview": "An athletic golden sculpture capturing the classic batting cover drive. Staged atop a heavy Nero Marquina marble cube with engraved brass nametag.",
    "dropCards": [
      {
        "title": "Anatomical Form & Weight",
        "desc": "Sculpted flowing muscle lines and fabric folds to evoke kinetic potential in a static trophy silhouette."
      }
    ],
    "gallery": [
      "assets/images/posters/educraft-best-batsman-award.png",
      "assets/images/posters/educraft-best-batsman-award.png"
    ]
  },
  {
    "id": 16,
    "category": "educraft",
    "year": "2024",
    "title": "Leadership & Service Citations",
    "badge": "CORPORATE AWARDS \u00b7 EDUCRAFT",
    "desc": "Executive recognition plaques in piano black lacquer and brushed brass.",
    "src": "assets/images/posters/educraft-leadership-acrylic-plaque.png",
    "videoSrc": null,
    "role": "Executive Award Designer",
    "timeline": "5 Days",
    "stakeholders": "Educraft Corporate Clients",
    "tools": "Cinema 4D, Photoshop",
    "overview": "Distinguished citation plaques crafted for corporate boardrooms and non-profit galas.",
    "dropCards": [
      {
        "title": "Piano Lacquer Finish",
        "desc": "Rendered deep, mirror-like reflections on dark hardwood plaques contrasting with warm champagne brass plates."
      }
    ],
    "gallery": [
      "assets/images/posters/educraft-leadership-acrylic-plaque.png"
    ]
  },
  {
    "id": 17,
    "category": "posters",
    "year": "2024",
    "title": "Hijra New Year Desert Journey",
    "badge": "CULTURAL DESIGN",
    "desc": "Warm twilight dunes and celestial crescent moon celebrating Islamic heritage.",
    "src": "assets/images/posters/hijra-new-year-poster.jpg",
    "videoSrc": null,
    "role": "Cultural Illustrator & Typographer",
    "timeline": "3 Days",
    "stakeholders": "Cultural Celebration Series",
    "tools": "Photoshop, Illustrator",
    "overview": "Poetic poster celebrating the Islamic Hijra New Year. The composition unites shifting sand dunes with celestial navigation motifs and fluid Arabic calligraphy.",
    "dropCards": [
      {
        "title": "Warm Golden Atmosphere",
        "desc": "Luminous twilight gradients evoke the serene spirituality of the desert at dawn."
      }
    ],
    "gallery": [
      "assets/images/posters/hijra-new-year-poster.jpg"
    ]
  },
  {
    "id": 18,
    "category": "educraft",
    "year": "2024",
    "title": "ALFIA Student's Memento",
    "badge": "ARABIC TYPE \u00b7 EDUCRAFT",
    "desc": "Intricate Arabic calligraphy memento in laser-cut mirrored gold acrylic.",
    "src": "assets/images/posters/educraft-arabic-calligraphy-memento.png",
    "videoSrc": null,
    "role": "Arabic Typographic & Award Designer",
    "timeline": "1 Week",
    "stakeholders": "Educraft & ALFIA Educational Academy",
    "tools": "Cinema 4D, Illustrator, CorelDraw",
    "overview": "Graduation memento honoring Quranic memorization scholars with three-dimensional layered Arabic calligraphy.",
    "dropCards": [
      {
        "title": "Layered Calligraphic Depth",
        "desc": "Stacked 3 distinct acrylic plates to give traditional Thuluth script remarkable three-dimensional shadow play."
      }
    ],
    "gallery": [
      "assets/images/posters/educraft-arabic-calligraphy-memento.png"
    ]
  },
  {
    "id": 19,
    "category": "posters",
    "year": "2024",
    "title": "Explore The World",
    "badge": "TRAVEL POSTER",
    "desc": "Panoramic wanderlust travel visual celebrating global discovery and flight.",
    "src": "assets/images/posters/explore-the-world-travel-poster.jpg",
    "videoSrc": null,
    "role": "Poster & Layout Designer",
    "timeline": "2 Days",
    "stakeholders": "Travel Campaign Concept",
    "tools": "Photoshop, Illustrator",
    "overview": "A vibrant editorial travel poster inviting viewers to break routine and explore uncharted horizons.",
    "dropCards": [
      {
        "title": "Atmospheric Perspective",
        "desc": "Used progressive desaturation to pull the viewer's gaze across distant mountain ranges into endless sky."
      }
    ],
    "gallery": [
      "assets/images/posters/explore-the-world-travel-poster.jpg"
    ]
  },
  {
    "id": 20,
    "category": "educraft",
    "year": "2025",
    "title": "Plymarc Excellence Award Plaque",
    "badge": "3D PRODUCT \u2022 EDUCRAFT",
    "desc": "Architectural wooden veneer plaque with laser-etched gold brand crest.",
    "src": "assets/images/posters/educraft-plymarc-wooden-plaque.png",
    "videoSrc": null,
    "role": "Industrial Memento Designer",
    "timeline": "1 Week",
    "stakeholders": "Educraft & Plymarc Plywood",
    "tools": "Cinema 4D, Octane, Photoshop",
    "overview": "Trophy commissioned by Plymarc to celebrate top industrial distributors. Built from high-grade architectural veneers and metallic foil.",
    "dropCards": [
      {
        "title": "Wood Grain Material Realism",
        "desc": "Custom high-res bump and displacement maps faithfully capture real teak veneer grain under directional light."
      }
    ],
    "gallery": [
      "assets/images/posters/educraft-plymarc-wooden-plaque.png"
    ]
  },
  {
    "id": 21,
    "category": "posters",
    "year": "2025",
    "title": "Mercedes G-Class: The Best or Nothing",
    "badge": "MANIPULATION \u2022 AUTOMOTIVE",
    "desc": "Monolithic luxury SUV emerging through dense rain, wet asphalt & neon flares.",
    "src": "assets/images/posters/mercedes-benz-g-class-manipulation.jpg",
    "videoSrc": null,
    "role": "Automotive Retoucher & Digital Artist",
    "timeline": "4 Days",
    "stakeholders": "Automotive Spec Poster",
    "tools": "Photoshop, Lightroom",
    "overview": "Dramatic moody artwork showcasing the Mercedes G-Wagon on a rain-slicked city pavement. Realistic rain droplet refraction and red LED light trails.",
    "dropCards": [
      {
        "title": "Wet Asphalt Surface Shader",
        "desc": "Carefully rendered Fresnel reflections of neon signages dancing across glossy rainwater puddles."
      }
    ],
    "gallery": [
      "assets/images/posters/mercedes-benz-g-class-manipulation.jpg",
      "assets/images/posters/mahindra-thar-automotive-poster.jpg"
    ]
  },
  {
    "id": 22,
    "category": "posters",
    "year": "2024",
    "title": "Nightfall Quarantine Zone",
    "badge": "MATTE PAINTING \u2022 CINEMATIC",
    "desc": "Post-apocalyptic atmospheric matte painting featuring survival architecture & searchlights.",
    "src": "assets/images/posters/dystopian-matte-painting-concept.jpg",
    "videoSrc": null,
    "role": "Matte Painter & Environment Artist",
    "timeline": "1 Week",
    "stakeholders": "Cinematic Visual Concept",
    "tools": "Photoshop, Concept Art Brushes",
    "overview": "An immersive concept painting depicting a heavily fortified quarantine perimeter under a tempestuous midnight sky.",
    "dropCards": [
      {
        "title": "Volumetric Fog & Searchlight Cones",
        "desc": "Simulated dust-filled searchlight beams breaking through heavy fog to establish tense cinematic mood."
      }
    ],
    "gallery": [
      "assets/images/posters/dystopian-matte-painting-concept.jpg"
    ]
  },
  {
    "id": 23,
    "category": "posters",
    "year": "2024",
    "title": "Thomas Shelby \u2014 Peaky Blinders Tribute",
    "badge": "DIGITAL ART \u2022 SMUDGE PAINTING",
    "desc": "Atmospheric digital portrait capturing the razor-sharp intensity of Cillian Murphy.",
    "src": "assets/images/posters/thomas-shelby-peaky-blinders-smudge-art.jpg",
    "videoSrc": null,
    "role": "Digital Painter & Portrait Artist",
    "timeline": "4 Days",
    "stakeholders": "Pop Culture Tribute",
    "tools": "Photoshop, Digital Tablet",
    "overview": "Stylized smudge painting portraying Thomas Shelby. The artwork captures cigarette smoke tendrils, cold Birmingham rainfall, and piercing eye focus.",
    "dropCards": [
      {
        "title": "Brushstroke Texture & Hair Detail",
        "desc": "Hand-blended custom smudges preserving skin pores while injecting painterly impressionist fluidity."
      }
    ],
    "gallery": [
      "assets/images/posters/thomas-shelby-peaky-blinders-smudge-art.jpg"
    ]
  },
  {
    "id": 24,
    "category": "posters",
    "year": "2024",
    "title": "Fast X: Dominic Toretto Tribute",
    "badge": "VECTOR ART \u2022 FAST X",
    "desc": "Stylized vector tribute celebrating high-speed nitro adrenaline and family legacy.",
    "src": "assets/images/posters/fast-x-dom-toretto-vector-art.jpg",
    "videoSrc": null,
    "role": "Vector Illustrator",
    "timeline": "3 Days",
    "stakeholders": "Movie Art Community",
    "tools": "Adobe Illustrator",
    "overview": "Clean vector portrait and typography tribute honoring Vin Diesel's iconic character Dominic Toretto.",
    "dropCards": [
      {
        "title": "Geometric Precision",
        "desc": "Reduced facial contours into bold, harmonious vector gradients with crisp edge fidelity."
      }
    ],
    "gallery": [
      "assets/images/posters/fast-x-dom-toretto-vector-art.jpg"
    ]
  },
  {
    "id": 25,
    "category": "posters",
    "year": "2024",
    "title": "Finding \u2014 Children's Book Illustration",
    "badge": "ILLUSTRATION \u2022 VECTOR",
    "desc": "Whimsical children's book cover illustration full of curiosity and discovery.",
    "src": "assets/images/posters/finding-vector-illustration.jpg",
    "videoSrc": null,
    "role": "Children's Book Illustrator",
    "timeline": "5 Days",
    "stakeholders": "Publishing Concept",
    "tools": "Illustrator, Photoshop",
    "overview": "Playful character design and storybook landscape with warm pastel palettes.",
    "dropCards": [
      {
        "title": "Empathy & Character Design",
        "desc": "Designed expressive facial gestures and soft rounded shapes that immediately resonate with young readers."
      }
    ],
    "gallery": [
      "assets/images/posters/finding-vector-illustration.jpg"
    ]
  },
  {
    "id": 26,
    "category": "ads",
    "year": "2025",
    "title": "Jalamithra Water Purifier Campaign",
    "badge": "COMMERCIAL AD \u2022 JALAMITHRA",
    "desc": "Purity-focused commercial ad with dynamic mineral water splashes & crystal clarity.",
    "src": "assets/images/posters/jalamithra-water-purifier-ad.jpg",
    "videoSrc": null,
    "role": "Commercial Advertising Designer",
    "timeline": "1 Week",
    "stakeholders": "Jalamithra Water Tech",
    "tools": "Photoshop, Cinema 4D",
    "overview": "Lead promotional asset for Jalamithra's smart RO purifier, highlighting pure hydration and health safety.",
    "dropCards": [
      {
        "title": "Hydrodynamic Water Simulation",
        "desc": "Rendered organic fluid crowns and droplet refraction to symbolize pristine mountain water quality."
      }
    ],
    "gallery": [
      "assets/images/posters/jalamithra-water-purifier-ad.jpg",
      "assets/images/posters/jalamithra-water-purifier-ad.jpg",
      "assets/images/posters/jalamithra-water-purifier-ad.jpg"
    ]
  },
  {
    "id": 27,
    "category": "ads",
    "year": "2025",
    "title": "Jalamithra Eid Mubarak Campaign",
    "badge": "FESTIVE AD \u2022 JALAMITHRA",
    "desc": "Festive celebration ad intertwining pure hydration with blessed family greetings.",
    "src": "assets/images/posters/jalamithra-eid-mubarak-ad.png",
    "videoSrc": null,
    "role": "Festive Advertising Designer",
    "timeline": "3 Days",
    "stakeholders": "Jalamithra Retail",
    "tools": "Photoshop, Illustrator",
    "overview": "Festive holiday campaign uniting Islamic aesthetic elements with the Jalamithra pure water dispenser.",
    "dropCards": [
      {
        "title": "Luminous Festive Palette",
        "desc": "Deep emerald and warm gold geometric lanterns establish a celebratory family atmosphere."
      }
    ],
    "gallery": [
      "assets/images/posters/jalamithra-eid-mubarak-ad.png"
    ]
  },
  {
    "id": 28,
    "category": "ads",
    "year": "2025",
    "title": "Jalamithra Pure Living Campaign",
    "badge": "COMMERCIAL AD \u2022 WATER PURIFIER",
    "desc": "Lifestyle health campaign emphasizing pure mineral replenishment for modern homes.",
    "src": "assets/images/posters/jalamithra-pure-living-ad.jpg",
    "videoSrc": null,
    "role": "Campaign Art Director",
    "timeline": "4 Days",
    "stakeholders": "Jalamithra",
    "tools": "Photoshop",
    "overview": "Modern domestic interior staging highlighting Jalamithra's countertop elegance.",
    "dropCards": [
      {
        "title": "Modern Kitchen Integration",
        "desc": "Shows the purifier seamlessly complementing luxury marble countertops and minimalist fixtures."
      }
    ],
    "gallery": [
      "assets/images/posters/jalamithra-pure-living-ad.jpg"
    ]
  },
  {
    "id": 29,
    "category": "ads",
    "year": "2025",
    "title": "Jalamithra Extraterrestrial Concept",
    "badge": "SCI-FI AD \u2022 JALAMITHRA",
    "desc": "Creative sci-fi campaign: Alien civilizations searching across space for pure water.",
    "src": "assets/images/posters/jalamithra-ufo-sci-fi-ad.jpg",
    "videoSrc": null,
    "role": "Concept Creative & Compositor",
    "timeline": "4 Days",
    "stakeholders": "Viral Marketing Campaign",
    "tools": "Photoshop, Cinema 4D",
    "overview": "A viral marketing visual positing that Earth's purest treasure is Jalamithra water, sought after by deep space explorers.",
    "dropCards": [
      {
        "title": "Humor & High Production",
        "desc": "Combined cinematic sci-fi lighting with lighthearted commercial storytelling to generate high social engagement."
      }
    ],
    "gallery": [
      "assets/images/posters/jalamithra-ufo-sci-fi-ad.jpg"
    ]
  },
  {
    "id": 30,
    "category": "ads",
    "year": "2025",
    "title": "CK Arabic Luxury Perfume",
    "badge": "PRODUCT AD \u2022 PERFUME",
    "desc": "Opulent Arabic fragrance staging featuring amber glass bottle & incense smoke.",
    "src": "assets/images/posters/ck-luxury-perfume-product-ad.jpg",
    "videoSrc": null,
    "role": "Luxury Product Stager & Retoucher",
    "timeline": "5 Days",
    "stakeholders": "Fragrance Brand Spec",
    "tools": "Photoshop, Cinema 4D, Octane",
    "overview": "Commercial asset for an oriental oud fragrance with amber and gold foil accents.",
    "dropCards": [
      {
        "title": "Volumetric Incense Tendrils",
        "desc": "Captured realistic curls of fragrant smoke drifting across the flacon to evoke woody oud notes."
      }
    ],
    "gallery": [
      "assets/images/posters/ck-luxury-perfume-product-ad.jpg",
      "assets/images/posters/ck-luxury-perfume-product-ad.jpg"
    ]
  },
  {
    "id": 31,
    "category": "ads",
    "year": "2024",
    "title": "Manly Perfume Campaign",
    "badge": "COMMERCIAL AD \u2022 FRAGRANCE",
    "desc": "Robust, masculine fragrance visual with rugged slate textures & hard rim lighting.",
    "src": "assets/images/posters/manly-perfume-commercial-ad.jpg",
    "videoSrc": null,
    "role": "Advertising Retoucher",
    "timeline": "3 Days",
    "stakeholders": "Men's Grooming Brand",
    "tools": "Photoshop",
    "overview": "High-contrast commercial advertising for Manly fragrance, anchored by rugged volcanic rock.",
    "dropCards": [
      {
        "title": "Textural Tactility",
        "desc": "Coarse granite rock contrast against the polished glass bottle creates sensory tension."
      }
    ],
    "gallery": [
      "assets/images/posters/manly-perfume-commercial-ad.jpg"
    ]
  },
  {
    "id": 32,
    "category": "ads",
    "year": "2025",
    "title": "Hello Money Remittance Campaign",
    "badge": "FINTECH AD \u2022 REMITTANCE",
    "desc": "Cross-border mobile money transfer ad highlighting zero fees & instant delivery.",
    "src": "assets/images/posters/hello-money-remittance-ad.jpg",
    "videoSrc": null,
    "role": "Fintech UI/Ad Designer",
    "timeline": "4 Days",
    "stakeholders": "Hello Money GCC",
    "tools": "Illustrator, Photoshop",
    "overview": "Trust-building financial services campaign designed for expat communities sending remittances back home.",
    "dropCards": [
      {
        "title": "Trust & Speed Metaphors",
        "desc": "Clear typographic guarantees and instant delivery checkmarks build immediate financial credibility."
      }
    ],
    "gallery": [
      "assets/images/posters/hello-money-remittance-ad.jpg"
    ]
  },
  {
    "id": 33,
    "category": "ads",
    "year": "2025",
    "title": "Dugue Luxury Perfume Staging",
    "badge": "3D PRODUCT \u2022 PACKAGING",
    "desc": "Photorealistic 3D flacon staging on obsidian plinth with caustic light reflections.",
    "src": "assets/images/posters/dugue-luxury-perfume-3d-staging.jpg",
    "videoSrc": null,
    "role": "3D Packaging Visualizer",
    "timeline": "1 Week",
    "stakeholders": "Dugue Parfums Paris",
    "tools": "Cinema 4D, Octane, Photoshop",
    "overview": "Luxury packaging and bottle staging for Dugue Parfums featuring liquid caustic caustics on black stone.",
    "dropCards": [
      {
        "title": "True Optical Caustics",
        "desc": "Simulated photon light rays focusing through curved glass and tinted liquid onto the marble base."
      }
    ],
    "gallery": [
      "assets/images/posters/dugue-luxury-perfume-3d-staging.jpg",
      "assets/images/posters/dugue-gold-edition-perfume-mockup.jpg",
      "assets/images/posters/dugue-luxury-perfume-3d-staging.jpg"
    ]
  },
  {
    "id": 34,
    "category": "ads",
    "year": "2025",
    "title": "Dugue Gold Edition Perfume Mockup",
    "badge": "3D PRODUCT \u2022 LUXURY BRANDING",
    "desc": "24-karat gold cap and beveled bottle staging with warm champagne bounce lighting.",
    "src": "assets/images/posters/dugue-gold-edition-perfume-mockup.jpg",
    "videoSrc": null,
    "role": "3D Lighting Artist",
    "timeline": "5 Days",
    "stakeholders": "Dugue Parfums",
    "tools": "Cinema 4D, Octane",
    "overview": "Special Gold Edition render series with micro-brushed gold metal cap and luxury hot-stamped gold foil logo.",
    "dropCards": [
      {
        "title": "Metallic Anisotropy",
        "desc": "Configured directional brushed metal micro-grooves on the gold cap to catch highlight streaks."
      }
    ],
    "gallery": [
      "assets/images/posters/dugue-gold-edition-perfume-mockup.jpg"
    ]
  },
  {
    "id": 35,
    "category": "ads",
    "year": "2025",
    "title": "Dugue Obsidian & Magma Staging",
    "badge": "3D PRODUCT \u2022 DRAMATIC LIGHTING",
    "desc": "Dramatic staging on glowing volcanic magma rock with embers & dark obsidian glass.",
    "src": "assets/images/posters/dugue-crimson-magma-perfume-staging.jpg",
    "videoSrc": null,
    "role": "3D Environment & Product Artist",
    "timeline": "1 Week",
    "stakeholders": "Dugue Parfums",
    "tools": "Cinema 4D, Octane, Photoshop",
    "overview": "Sensory contrast study placing polished luxury perfume flacons in a violent volcanic magma crater.",
    "dropCards": [
      {
        "title": "Emissive Magma Glow",
        "desc": "Under-lighting the bottle with 1800K thermal light from cooling lava fissures."
      }
    ],
    "gallery": [
      "assets/images/posters/dugue-crimson-magma-perfume-staging.jpg"
    ]
  },
  {
    "id": 36,
    "category": "ads",
    "year": "2024",
    "title": "OffLimits Footwear Retail Danglers",
    "badge": "RETAIL MOCKUP \u2022 POINT OF SALE",
    "desc": "In-store hanging retail display danglers with dynamic die-cut shoe contours.",
    "src": "assets/images/posters/offlimits-retail-dangler-mockup.png",
    "videoSrc": null,
    "role": "Print & Retail Collateral Designer",
    "timeline": "4 Days",
    "stakeholders": "OffLimits Retail Stores",
    "tools": "Illustrator, Photoshop",
    "overview": "Eye-level retail point-of-sale danglers engineered for footwear store ceilings across India.",
    "dropCards": [
      {
        "title": "Die-Cut Silhouetting",
        "desc": "Custom die-cut curves follow the shoe's energetic contour, breaking beyond standard rectangular signs."
      }
    ],
    "gallery": [
      "assets/images/posters/offlimits-retail-dangler-mockup.png"
    ]
  },
  {
    "id": 37,
    "category": "ads",
    "year": "2024",
    "title": "Arena Motion Graphics Brochure",
    "badge": "PRINT DESIGN \u2022 TRI-FOLD BROCHURE",
    "desc": "Tri-fold curriculum prospectus with futuristic cybernetic typography & student showcases.",
    "src": "assets/images/posters/arena-motion-graphics-brochure-combined.jpg",
    "videoSrc": null,
    "role": "Editorial Layout & Brochure Designer",
    "timeline": "1 Week",
    "stakeholders": "Arena Animation",
    "tools": "InDesign, Illustrator, Photoshop",
    "overview": "Recruitment brochure guiding prospective students through 3D animation, VFX, and game design courses.",
    "dropCards": [
      {
        "title": "Structured Information Flow",
        "desc": "Panel-by-panel folding reveals syllabus modules progressively from fundamentals to studio portfolio."
      }
    ],
    "gallery": [
      "assets/images/posters/arena-motion-graphics-brochure-combined.jpg",
      "assets/images/posters/arena-motion-graphics-brochure.jpg",
      "assets/images/posters/arena-motion-graphics-brochure-inside.jpg"
    ]
  },
  {
    "id": 38,
    "category": "ads",
    "year": "2025",
    "title": "Emirates Catering Iftar Feast",
    "badge": "FOOD & CATERING \u2022 EMIRATES",
    "desc": "Luxury Ramadan catering menu featuring fragrant biryanis, roasted meats & dessert spreads.",
    "src": "assets/images/posters/emirates-catering-iftar-feast-ad.jpg",
    "videoSrc": null,
    "role": "Food & Beverage Advertising Designer",
    "timeline": "3 Days",
    "stakeholders": "Emirates Catering Services",
    "tools": "Photoshop, Lightroom",
    "overview": "Warm, mouth-watering promotional menu creative for corporate and family Ramadan Iftar bookings.",
    "dropCards": [
      {
        "title": "Color Temperature Tuning",
        "desc": "Warmed food highlights to emphasize steam, spice richness, and savory culinary freshness."
      }
    ],
    "gallery": [
      "assets/images/posters/emirates-catering-iftar-feast-ad.jpg"
    ]
  },
  {
    "id": 39,
    "category": "ads",
    "year": "2024",
    "title": "MN LY Fashion Hub Grand Opening",
    "badge": "RETAIL LAUNCH \u2022 MNLY",
    "desc": "City-wide opening banner campaign with architectural facade rendering & opening deals.",
    "src": "assets/images/posters/mnly-grand-opening-launch-poster.jpg",
    "videoSrc": null,
    "role": "Brand Identity Designer",
    "timeline": "5 Days",
    "stakeholders": "MN LY Brands",
    "tools": "Photoshop, Illustrator",
    "overview": "High-impact outdoor and social media launch assets for the MN LY store grand opening.",
    "dropCards": [
      {
        "title": "High Readability from Distance",
        "desc": "Massive headline typography legible from moving vehicles on urban arterial roads."
      }
    ],
    "gallery": [
      "assets/images/posters/mnly-grand-opening-launch-poster.jpg",
      "assets/images/posters/mnly-fashion-hub-launch.jpg"
    ]
  },
  {
    "id": 40,
    "category": "ads",
    "year": "2024",
    "title": "Free Style Women's Clothing",
    "badge": "FASHION AD \u2022 FREE STYLE",
    "desc": "Youthful contemporary women's apparel campaign celebrating self-expression.",
    "src": "assets/images/posters/freestyle-women-clothing-ad.jpg",
    "videoSrc": null,
    "role": "Fashion Campaign Designer",
    "timeline": "3 Days",
    "stakeholders": "Free Style Apparel",
    "tools": "Photoshop, Lightroom",
    "overview": "Fresh, colorful campaign assets targeting college students and young professionals.",
    "dropCards": [
      {
        "title": "Vibrant Color Contrast",
        "desc": "Pastel backdrop hues paired with bold garment tones create high visual pop."
      }
    ],
    "gallery": [
      "assets/images/posters/freestyle-women-clothing-ad.jpg",
      "assets/images/posters/freestyle-women-clothing-ad.jpg"
    ]
  },
  {
    "id": 41,
    "category": "ads",
    "year": "2024",
    "title": "Free Style Apparel Landscape Banner",
    "badge": "RETAIL BANNER \u2022 FREE STYLE",
    "desc": "Wide-format retail storefront billboard highlighting summer collection arrivals.",
    "src": "assets/images/posters/freestyle-women-clothing-visiting-card.jpg",
    "videoSrc": null,
    "role": "Outdoor Advertising Designer",
    "timeline": "3 Days",
    "stakeholders": "Free Style Apparel Stores",
    "tools": "Photoshop, Illustrator",
    "overview": "Wide-format storefront facade banner capturing summer collection fabrics.",
    "dropCards": [
      {
        "title": "Horizontal Composition Mastery",
        "desc": "Balanced 3-model group staging with clear store location and promotional copy."
      }
    ],
    "gallery": [
      "assets/images/posters/freestyle-women-clothing-visiting-card.jpg"
    ]
  },
  {
    "id": 42,
    "category": "motion",
    "year": "2026",
    "title": "Shibi \u2014 Cinematic Kinetic Brand Film",
    "badge": "MOTION FILM \u00b7 00:40",
    "desc": "Dynamic camera staging, kinetic pacing & atmospheric composite passes.",
    "src": "assets/images/posters/shibi-motion-thumb.jpg",
    "videoSrc": "assets/videos/shibi.mp4",
    "role": "Motion Direction, Cinematic Editing & Sound Design",
    "timeline": "2026 Production",
    "stakeholders": "Commercial Brand Motion Spec",
    "tools": "Cinema 4D, After Effects, DaVinci Resolve, Premiere Pro",
    "overview": "A cinematic 40-second widescreen motion film showcasing advanced visual dynamics, rhythmic editing, and high-retention motion graphics. The piece combines dynamic speed ramps, lighting flares, and bespoke kinetic typography.",
    "dropCards": [
      {
        "title": "Kinetic Rhythm & Speed Ramping",
        "desc": "Precision frame cutting alternating between slow-motion atmospheric pauses and instantaneous camera snaps to command audience focus."
      },
      {
        "title": "Widescreen 2.39:1 Cinematic Ratio",
        "desc": "Framed in cinematic scope with anamorphic lens flares, rich tonal contrast, and subtle chromatic aberration."
      },
      {
        "title": "Spatial Sound Synchronization",
        "desc": "Every mechanical transition and particle drift is reinforced with layered Foley effects and deep bass sweeps."
      }
    ],
    "gallery": [
      "assets/images/posters/shibi-motion-thumb.jpg",
      "assets/images/posters/showreel-thumb.jpg",
      "assets/images/posters/car-video-thumb.jpg"
    ]
  },
  {
    "id": 42,
    "category": "ads",
    "year": "2025",
    "title": "Jalamithra \u2014 Parachute Air-Drop Launch",
    "badge": "COMMERCIAL AD \u00b7 JALAMITHRA",
    "desc": "Creative skydiving air-drop concept poster announcing Jalamithra arrival in Kodakkad.",
    "src": "assets/images/posters/jalamithra-airdrop-parachute-campaign.jpg",
    "videoSrc": null,
    "role": "Creative Advertising & Digital Compositor",
    "timeline": "2025 Campaign",
    "stakeholders": "APA Jalamithra Pvt. Ltd. (Kodakkad)",
    "tools": "Adobe Photoshop, Lightroom",
    "overview": "A striking aerial composite depicting Jalamithra natural water filter cylinders parachuting down from an airplane across the sunlit Kodakkad town skyline, symbolizing immediate, direct water purity delivered straight to local residents.",
    "dropCards": [
      {
        "title": "Aerial Metaphor & Excitement",
        "desc": "The parachute delivery metaphor communicates rapid regional availability and exciting brand arrival with playful visual humor."
      },
      {
        "title": "Daylight Atmospheric Depth",
        "desc": "Golden hour horizon light and cumulus cloud layering evoke fresh natural cleanliness and high spatial depth."
      },
      {
        "title": "Regional Typographic Anchors",
        "desc": "Integrated bold Malayalam headline typography with high-contrast local dial-in contacts for instant lead conversion."
      }
    ],
    "gallery": [
      "assets/images/posters/jalamithra-airdrop-parachute-campaign.jpg",
      "assets/images/posters/jalamithra-water-purifier-ad.jpg",
      "assets/images/posters/jalamithra-rooftop-water-filter.jpg"
    ]
  },
  {
    "id": 44,
    "category": "ads",
    "year": "2025",
    "title": "Jalamithra \u2014 Water Purity Split Comparison",
    "badge": "PRODUCT AD \u00b7 JALAMITHRA",
    "desc": "Dynamic half-and-half comparison visual contrasting contaminated water with pristine pure hydration.",
    "src": "assets/images/posters/jalamithra-water-taste-purity-split.jpg",
    "videoSrc": null,
    "role": "Commercial Art Director & Retoucher",
    "timeline": "2025 Campaign",
    "stakeholders": "APA Jalamithra Pvt. Ltd.",
    "tools": "Photoshop, Cinema 4D (Fluid Simulation)",
    "overview": "Direct visual proof advertising comparing murky, discolored water on the left against vibrant crystal-blue water splashing around the Jalamithra cylinder on the right, providing an unignorable before-and-after demonstration.",
    "dropCards": [
      {
        "title": "Dual Contrast Composition",
        "desc": "Split-screen chromatic tension instantly highlights the everyday problem of discolored water and Jalamithra's immediate solution."
      },
      {
        "title": "Hydrodynamic Splash Sculpting",
        "desc": "Dynamic water droplets and froth rendered with high surface tension realism to communicate pure, refreshing hydration."
      }
    ],
    "gallery": [
      "assets/images/posters/jalamithra-water-taste-purity-split.jpg",
      "assets/images/posters/jalamithra-pure-living-ad.jpg"
    ]
  },
  {
    "id": 45,
    "category": "ads",
    "year": "2025",
    "title": "Jalamithra \u2014 Rooftop Natural Water Filter",
    "badge": "COMMERCIAL AD \u00b7 JALAMITHRA",
    "desc": "Monolithic 3D rooftop staging of natural green filtration cylinders beside domestic water tanks.",
    "src": "assets/images/posters/jalamithra-rooftop-water-filter.jpg",
    "videoSrc": null,
    "role": "Commercial Poster & 3D Stager",
    "timeline": "2025 Campaign",
    "stakeholders": "APA Jalamithra Pvt. Ltd.",
    "tools": "Photoshop, Cinema 4D",
    "overview": "Architectural rooftop composition placing 3 green Jalamithra cylinders on an elevated concrete parapet, flanked by domestic overhead water storage tanks with crystalline water waves.",
    "dropCards": [
      {
        "title": "Architectural Staging & Real-World Scale",
        "desc": "Demonstrates realistic rooftop installation scale alongside standard household water storage tanks."
      },
      {
        "title": "Monochrome Sky Contrast",
        "desc": "Vivid royal blue sky backdrop enhances green cylinder visibility and product dominance."
      }
    ],
    "gallery": [
      "assets/images/posters/jalamithra-rooftop-water-filter.jpg",
      "assets/images/posters/jalamithra-airdrop-parachute-campaign.jpg"
    ]
  },
  {
    "id": 46,
    "category": "ads",
    "year": "2025",
    "title": "Jalamithra \u2014 Blue Cylinder Filtration Lineup",
    "badge": "PRODUCT AD \u00b7 JALAMITHRA",
    "desc": "Clean water purification poster featuring blue 14x65 commercial filter cylinders & herbal infusion.",
    "src": "assets/images/posters/jalamithra-blue-cylinder-purification.jpg",
    "videoSrc": null,
    "role": "Commercial Layout & Product Designer",
    "timeline": "2025 Campaign",
    "stakeholders": "APA Jalamithra Pvt. Ltd.",
    "tools": "Photoshop, Illustrator",
    "overview": "Promotional poster for Jalamithra's 14x65 blue cylinder series featuring herbal Nellikka (gooseberry) wood filtration technology, floating mint leaves, and crisp water splash dynamics.",
    "dropCards": [
      {
        "title": "Herbal Health Signaling",
        "desc": "Green floating leaves and aquatic splashes emphasize 100% natural organic purification."
      },
      {
        "title": "Product Scale Hierarchy",
        "desc": "Trio of scaled cylinders demonstrates household to commercial volume capacity."
      }
    ],
    "gallery": [
      "assets/images/posters/jalamithra-blue-cylinder-purification.jpg",
      "assets/images/posters/jalamithra-water-purifier-ad.jpg"
    ]
  }
];

  // ---------------------------------------------------------------------------
  // 1. Ambient Web Audio Synthesizer (Diana Etuk Ambient Vibe)
  // Generates ethereal warm ambient drone with zero external mp3 files.
  // ---------------------------------------------------------------------------
  let audioCtx = null;
  let isSoundActive = false;
  let masterGain = null;
  let synthNodes = [];

  function initAmbientSynth() {
    if (audioCtx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    audioCtx = new AudioContextClass();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0, audioCtx.currentTime);

    // Warm Low-pass filter for smooth analog warmth
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, audioCtx.currentTime);

    filter.connect(masterGain);
    masterGain.connect(audioCtx.destination);

    // Warm pentatonic harmonic frequencies (A minor / C major ambient drone)
    const frequencies = [110, 164.81, 220, 261.63, 329.63, 392.00];

    frequencies.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq + (idx * 0.35 - 1.0), audioCtx.currentTime);

      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(0.08 + idx * 0.03, audioCtx.currentTime);
      lfoGain.gain.setValueAtTime(0.04, audioCtx.currentTime);

      oscGain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      lfo.connect(oscGain.gain);

      osc.connect(oscGain);
      oscGain.connect(filter);

      osc.start();
      lfo.start();

      synthNodes.push(osc, lfo, oscGain, lfoGain);
    });
  }

  function toggleSound() {
    const soundBtn = document.getElementById('dianaSoundToggle');
    const soundLabel = document.getElementById('dianaSoundLabel');

    if (!isSoundActive) {
      if (!audioCtx) initAmbientSynth();
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      if (masterGain && audioCtx) {
        masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.35, audioCtx.currentTime + 1.2);
      }
      isSoundActive = true;
      if (soundBtn) soundBtn.classList.add('is-playing');
      if (soundLabel) soundLabel.textContent = 'SOUND: ON';
      try { sessionStorage.setItem('diana_sound_pref', 'on'); } catch (e) {}
    } else {
      if (masterGain && audioCtx) {
        masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
      }
      isSoundActive = false;
      if (soundBtn) soundBtn.classList.remove('is-playing');
      if (soundLabel) soundLabel.textContent = 'SOUND: OFF';
      try { sessionStorage.setItem('diana_sound_pref', 'off'); } catch (e) {}
    }
  }

  // Wire up sound button if present
  const soundToggle = document.getElementById('dianaSoundToggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', toggleSound);
  }

  // Auto-restore sound preference if user previously toggled on
  try {
    if (sessionStorage.getItem('diana_sound_pref') === 'on') {
      window.addEventListener('click', function autoSound() {
        if (!isSoundActive) toggleSound();
        window.removeEventListener('click', autoSound);
      }, { once: true });
    }
  } catch (e) {}

  // ---------------------------------------------------------------------------
  // 2. CHECK IF WE ARE ON THE STANDALONE CASE STUDY PAGE (case.html)
  // ---------------------------------------------------------------------------
  const isCasePage = document.getElementById('dianaCaseMain') !== null;

  if (isCasePage) {
    // Helper to get case index from query param or hash
    function getCaseIndexFromUrl() {
      const params = new URLSearchParams(window.location.search);
      if (params.has('id')) {
        const val = parseInt(params.get('id'), 10);
        if (!isNaN(val) && val >= 0 && val < DIANA_PROJECTS.length) return val;
      }
      const hash = window.location.hash;
      if (hash) {
        const clean = hash.replace('#case-', '').replace('#case', '').replace('#', '');
        const val = parseInt(clean, 10);
        if (!isNaN(val) && val >= 0 && val < DIANA_PROJECTS.length) return val;
      }
      return 0; // Default to first project
    }

    let currentCaseIdx = getCaseIndexFromUrl();

    function renderStandaloneCase(idx, pushState = false) {
      currentCaseIdx = (idx + DIANA_PROJECTS.length) % DIANA_PROJECTS.length;
      const project = DIANA_PROJECTS[currentCaseIdx];
      if (!project) return;

      const numStr = (currentCaseIdx + 1).toString().padStart(2, '0');
      const totalStr = DIANA_PROJECTS.length.toString().padStart(2, '0');

      // Update document title
      document.title = `${project.title} — Shibeeb Rahiman | Case Study`;

      // Counter
      const counterEl = document.getElementById('dianaCaseCounter');
      if (counterEl) counterEl.textContent = `CASE ${numStr} OF ${totalStr}`;

      // Kicker
      const yearEl = document.getElementById('dianaCaseYear');
      const badgeEl = document.getElementById('dianaCaseBadge');
      if (yearEl) yearEl.textContent = project.year;
      if (badgeEl) badgeEl.textContent = project.badge || project.category.toUpperCase();

      // Title
      const titleEl = document.getElementById('dianaCaseTitle');
      if (titleEl) {
        titleEl.innerHTML = project.title.replace(' — ', ' — <br><span>') + (project.title.includes(' — ') ? '</span>' : '');
      }

      // Metadata Matrix
      const roleEl = document.getElementById('dianaCaseRole');
      const timelineEl = document.getElementById('dianaCaseTimeline');
      const stakeholdersEl = document.getElementById('dianaCaseStakeholders');
      const toolsEl = document.getElementById('dianaCaseTools');
      if (roleEl) roleEl.textContent = project.role || 'Creative Direction & Motion';
      if (timelineEl) timelineEl.textContent = project.timeline || '2024–2026';
      if (stakeholdersEl) stakeholdersEl.textContent = project.stakeholders || 'Client & Commercial Spec';
      if (toolsEl) toolsEl.textContent = project.tools || 'Cinema 4D, After Effects, Photoshop';

      // Hero Media
      const heroImg = document.getElementById('dianaCaseHeroImg');
      const heroVideo = document.getElementById('dianaCaseHeroVideo');
      if (project.videoSrc && heroVideo) {
        if (heroImg) heroImg.style.display = 'none';
        heroVideo.style.display = 'block';
        heroVideo.src = project.videoSrc;
        heroVideo.load();
        heroVideo.play().catch(() => {});
      } else {
        if (heroVideo) {
          heroVideo.pause();
          heroVideo.src = '';
          heroVideo.style.display = 'none';
        }
        if (heroImg) {
          heroImg.style.display = 'block';
          heroImg.src = project.src;
          heroImg.alt = project.title;
        }
      }

      // Overview
      const overviewEl = document.getElementById('dianaCaseOverview');
      if (overviewEl) overviewEl.textContent = project.overview || project.desc;

      // Drop Cards
      const dropCardsEl = document.getElementById('dianaCaseDropCards');
      if (dropCardsEl) {
        dropCardsEl.innerHTML = '';
        const cards = project.dropCards && project.dropCards.length ? project.dropCards : [
          {
            title: "Creative Premise & Brand Identity",
            desc: project.desc
          },
          {
            title: "Visual Pacing & Aesthetic Standards",
            desc: "Executed with rigorous typography hierarchy, custom physical lighting setups, and balanced negative space tailored for high-conversion commercial resonance."
          }
        ];

        cards.forEach((c, cIdx) => {
          const cardEl = document.createElement('div');
          cardEl.className = 'diana-drop-card';
          cardEl.innerHTML = `
            <span class="diana-card-number">${(cIdx + 1).toString().padStart(2, '0')} / ${cards.length.toString().padStart(2, '0')}</span>
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
          `;
          dropCardsEl.appendChild(cardEl);
        });
      }

      // Visual Gallery
      const galleryEl = document.getElementById('dianaCaseGallery');
      if (galleryEl) {
        galleryEl.innerHTML = '';
        const galleryItems = project.gallery && project.gallery.length ? project.gallery : [project.src];
        galleryItems.forEach(imgSrc => {
          const itemEl = document.createElement('div');
          itemEl.className = 'diana-case-gallery-item';
          itemEl.innerHTML = `<img src="${imgSrc}" alt="${project.title}" loading="lazy">`;
          galleryEl.appendChild(itemEl);
        });
      }

      // Prev / Next Navigation Tiles
      const prevIdx = (currentCaseIdx - 1 + DIANA_PROJECTS.length) % DIANA_PROJECTS.length;
      const nextIdx = (currentCaseIdx + 1) % DIANA_PROJECTS.length;
      const prevProject = DIANA_PROJECTS[prevIdx];
      const nextProject = DIANA_PROJECTS[nextIdx];

      const prevTile = document.getElementById('dianaCasePrevTile');
      const nextTile = document.getElementById('dianaCaseNextTile');

      if (prevTile) {
        prevTile.innerHTML = `
          <span class="nav-arrow">←</span>
          <small>PREVIOUS CASE</small>
          <h4>${prevProject.title}</h4>
        `;
        prevTile.onclick = () => {
          renderStandaloneCase(prevIdx, true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
      }

      if (nextTile) {
        nextTile.innerHTML = `
          <span class="nav-arrow">→</span>
          <small>NEXT CASE</small>
          <h4>${nextProject.title}</h4>
        `;
        nextTile.onclick = () => {
          renderStandaloneCase(nextIdx, true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
      }

      // Update URL without page reload when clicking prev/next
      if (pushState) {
        try {
          const newUrl = `case.html?id=${currentCaseIdx}`;
          history.pushState({ id: currentCaseIdx }, '', newUrl);
        } catch (e) {}
      }
    }

    // Keyboard navigation: Arrow Left / Arrow Right
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        renderStandaloneCase(currentCaseIdx + 1, true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        renderStandaloneCase(currentCaseIdx - 1, true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'Escape') {
        window.location.href = '/projects';
      }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      renderStandaloneCase(getCaseIndexFromUrl(), false);
    });

    // Initial render
    renderStandaloneCase(currentCaseIdx, false);
    return; // Exit, nothing else needed on standalone case page!
  }

  // ---------------------------------------------------------------------------
  // 3. WE ARE ON projects.html: EDITORIAL SHOWCASE & ARCHIVE GRID
  // ---------------------------------------------------------------------------

  // Check if someone arrived at projects.html#case-9 (like in user screenshot) -> Cleanly redirect to case.html?id=9!
  const hash = window.location.hash;
  if (hash && hash.startsWith('#case-')) {
    const caseId = hash.replace('#case-', '');
    window.location.replace('case.html?id=' + caseId);
    return;
  }

  // Dual-Mode View Switcher (Showcase vs Archive Grid)
  const showcaseSection = document.getElementById('dianaShowcaseSection');
  const gridSection = document.getElementById('dianaGridSection');
  const viewBtns = document.querySelectorAll('.diana-view-btn');

  function setViewMode(mode) {
    viewBtns.forEach(btn => {
      if (btn.getAttribute('data-view') === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (mode === 'showcase') {
      if (showcaseSection) showcaseSection.classList.remove('is-hidden');
      if (gridSection) gridSection.classList.add('is-hidden');
    } else {
      if (showcaseSection) showcaseSection.classList.add('is-hidden');
      if (gridSection) gridSection.classList.remove('is-hidden');
    }

    try {
      sessionStorage.setItem('shibeeb_diana_view', mode);
    } catch (e) {}
  }

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-view');
      setViewMode(mode);
    });
  });

  try {
    const savedView = sessionStorage.getItem('shibeeb_diana_view');
    if (savedView === 'grid') {
      setViewMode('grid');
    }
  } catch (e) {}

  // Diana Etuk Showcase Slider Engine
  let currentShowcaseIdx = 0;
  const showcaseIndexEl = document.getElementById('dianaShowcaseIndex');
  const showcaseYearEl = document.getElementById('dianaShowcaseYear');
  const showcaseCategoryEl = document.getElementById('dianaShowcaseCategory');
  const showcaseTitleEl = document.getElementById('dianaShowcaseTitle');
  const showcasePremiseEl = document.getElementById('dianaShowcasePremise');
  const showcaseMediaEl = document.getElementById('dianaShowcaseMedia');
  const showcaseImgEl = document.getElementById('dianaShowcaseImg');
  const showcaseVideoEl = document.getElementById('dianaShowcaseVideo');
  const showcasePlayBadgeEl = document.getElementById('dianaShowcasePlayBadge');
  const showcaseMediaPillEl = document.getElementById('dianaShowcaseMediaPill');
  const showcaseProgressBar = document.getElementById('dianaProgressBar');
  const showcaseQuickJump = document.getElementById('dianaQuickJump');
  const prevBtn = document.getElementById('dianaPrevBtn');
  const nextBtn = document.getElementById('dianaNextBtn');
  const exploreCta = document.getElementById('dianaCtaExplore');
  const thumbStrip = document.getElementById('dianaThumbStrip');

  function renderShowcaseItem(idx) {
    currentShowcaseIdx = (idx + DIANA_PROJECTS.length) % DIANA_PROJECTS.length;
    const project = DIANA_PROJECTS[currentShowcaseIdx];
    if (!project) return;

    const numStr = (currentShowcaseIdx + 1).toString().padStart(2, '0');
    const totalStr = DIANA_PROJECTS.length.toString().padStart(2, '0');

    if (showcaseIndexEl) showcaseIndexEl.textContent = `${numStr} / ${totalStr}`;
    if (showcaseYearEl) showcaseYearEl.textContent = project.year;
    if (showcaseCategoryEl) showcaseCategoryEl.textContent = project.badge || project.category.toUpperCase();
    if (showcaseTitleEl) {
      showcaseTitleEl.innerHTML = project.title.replace(' — ', ' — <br><span>') + (project.title.includes(' — ') ? '</span>' : '');
    }
    if (showcasePremiseEl) showcasePremiseEl.textContent = project.desc;
    if (showcaseQuickJump) showcaseQuickJump.textContent = `PROJECT ${numStr} OF ${totalStr}`;

    if (showcaseProgressBar) {
      const pct = ((currentShowcaseIdx + 1) / DIANA_PROJECTS.length) * 100;
      showcaseProgressBar.style.width = `${pct}%`;
    }

    if (project.videoSrc && showcaseVideoEl) {
      if (showcaseImgEl) showcaseImgEl.style.display = 'none';
      showcaseVideoEl.style.display = 'block';
      showcaseVideoEl.src = project.videoSrc;
      showcaseVideoEl.load();
      showcaseVideoEl.play().catch(() => {});
      if (showcasePlayBadgeEl) showcasePlayBadgeEl.style.display = 'grid';
      if (showcaseMediaPillEl) showcaseMediaPillEl.innerHTML = '<span>WATCH FILM</span> ▶';
    } else {
      if (showcaseVideoEl) {
        showcaseVideoEl.pause();
        showcaseVideoEl.src = '';
        showcaseVideoEl.style.display = 'none';
      }
      if (showcaseImgEl) {
        showcaseImgEl.style.display = 'block';
        showcaseImgEl.src = project.src;
        showcaseImgEl.alt = project.title;
      }
      if (showcasePlayBadgeEl) showcasePlayBadgeEl.style.display = 'none';
      if (showcaseMediaPillEl) showcaseMediaPillEl.innerHTML = '<span>VIEW CASE STUDY</span> ↗';
    }

    if (thumbStrip) {
      const thumbCards = thumbStrip.querySelectorAll('.diana-thumb-card');
      thumbCards.forEach(tc => {
        if (parseInt(tc.getAttribute('data-index')) === currentShowcaseIdx) {
          tc.classList.add('active');
          tc.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          tc.classList.remove('active');
        }
      });
    }
  }

  // Build Thumbnail Strip
  if (thumbStrip) {
    thumbStrip.innerHTML = '';
    DIANA_PROJECTS.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = `diana-thumb-card ${idx === 0 ? 'active' : ''}`;
      card.setAttribute('data-index', idx);
      card.innerHTML = `
        <img class="diana-thumb-img" src="${p.src}" alt="${p.title}" loading="lazy">
        <h4>${p.title}</h4>
        <span>${(idx + 1).toString().padStart(2, '0')} · ${p.category.toUpperCase()}</span>
      `;
      card.addEventListener('click', () => {
        renderShowcaseItem(idx);
      });
      thumbStrip.appendChild(card);
    });
  }

  // Slider Controls
  if (prevBtn) prevBtn.addEventListener('click', () => renderShowcaseItem(currentShowcaseIdx - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => renderShowcaseItem(currentShowcaseIdx + 1));

  // Navigate directly to dedicated case study page (Zero Pop-up!)
  function navigateToCase(idx) {
    window.location.href = 'case.html?id=' + idx;
  }

  if (exploreCta) {
    exploreCta.addEventListener('click', () => navigateToCase(currentShowcaseIdx));
  }
  if (showcaseMediaEl) {
    showcaseMediaEl.addEventListener('click', () => navigateToCase(currentShowcaseIdx));
  }

  // Keyboard navigation for showcase slider
  document.addEventListener('keydown', (e) => {
    if (showcaseSection && !showcaseSection.classList.contains('is-hidden')) {
      if (e.key === 'ArrowRight') renderShowcaseItem(currentShowcaseIdx + 1);
      if (e.key === 'ArrowLeft') renderShowcaseItem(currentShowcaseIdx - 1);
      if (e.key === 'Enter') navigateToCase(currentShowcaseIdx);
    }
  });

  // Wire up existing Archive Grid cards to navigate directly to case.html (Zero Pop-up!)
  const gridCards = document.querySelectorAll('.portfolio-card');
  gridCards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigateToCase(idx);
    });
  });

  // Initial showcase render
  renderShowcaseItem(0);
})();
