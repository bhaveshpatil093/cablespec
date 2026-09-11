// Comprehensive Engineering Data Store for CableSpec System

export const CABLESPEC_PROJECT = {
  title: "CableSpec",
  subtitle: "Adaptive Automated Cable Specimen Preparation System",
  tagline: "Industrial-Grade Mechanical Automation & Computer Vision for Compliance Testing",
  sihDetails: {
    event: "Smart India Hackathon 2026",
    track: "Hardware / Advanced Automation / Testing Standards",
    problemId: "SIH2026-HW-CABLE-094",
    domain: "Electrical Infrastructure, Quality Compliance & Material Science",
  },
  
  // 9-Stage Automated Process Flow
  processStages: [
    {
      id: 1,
      name: "Complete Cable Feed",
      shortName: "Feed & Straighten",
      category: "Mechanical",
      icon: "Cable",
      status: "ACTIVE",
      description: "Motorized dual-groove rubberized feed rollers feed incoming raw cable while a dynamic spring-tensioned 5-roller array eliminates residual spool curvature.",
      details: {
        actuator: "NEMA 34 High-Torque Stepper (4.5 Nm)",
        sensor: "Incremental Optical Encoder (1000 PPR) & Ultrasonic Diameter Sensor",
        parameters: "Feed Speed: 5–30 mm/s | Outer Diameter Handling: 4.0 mm – 28.0 mm",
        keySpec: "Curvature correction tolerance: < 0.5mm displacement over 300mm length."
      }
    },
    {
      id: 2,
      name: "Sheath Cutting & Stripping",
      shortName: "Sheath Cut & Removal",
      category: "Adaptive Tooling",
      icon: "Scissors",
      status: "ACTIVE",
      description: "Adaptive concentric 3-jaw motorized cutter ring performs micro-calibrated circumferential & axial sheath slits without damaging inner core insulation.",
      details: {
        actuator: "Dual NEMA 23 Stepper + Precision Rotary Bearings",
        sensor: "Capacitive Proximity & High-Precision Ultrasonic Wall Depth Transducer",
        parameters: "Slitting Depth Precision: ±0.02 mm | Sheath Removal Force: 120 N max",
        keySpec: "Blade depth dynamically computed: d_cut = Outer Radius - Core Bundle Radius."
      }
    },
    {
      id: 3,
      name: "Core Separation & Guide",
      shortName: "Core Separation",
      category: "Mechanical",
      icon: "GitFork",
      status: "ACTIVE",
      description: "Pneumatic multi-finger spreader separates multi-core conductors (phase, neutral, earth) into single insulated core streams for individual processing.",
      details: {
        actuator: "SMC Compact Pneumatic Cylinder Array (0.6 MPa)",
        sensor: "Optical Color Sensor & Array Breakaway Detection Switch",
        parameters: "Core Count: 1 to 5 Cores | Cycle Time: < 2.5 seconds per separation",
        keySpec: "Automatic phase identification & alignment into slitting track."
      }
    },
    {
      id: 4,
      name: "Insulation Flattening & Slitting",
      shortName: "Flattening & Slitting",
      category: "Thermal / Mechanical",
      icon: "Layers",
      status: "ACTIVE",
      description: "Thermally controlled precision roller press flattens curved tubular insulation samples. Longitudinal slitting blade converts tubular sheath into flat sheet.",
      details: {
        actuator: "PID-Controlled PTC Cartridge Heater + Precision Ball Screw Drive",
        sensor: "K-Type Thermocouple & Dual LVDT Contact Thickness Gauges",
        parameters: "Temperature Range: 40°C – 80°C (Material Dependent) | Parallelism: ±0.01 mm",
        keySpec: "Eliminates wall thickness variations and tubular curl prior to die punching."
      }
    },
    {
      id: 5,
      name: "Optical Vision Inspection",
      shortName: "Vision Verification",
      category: "Vision System",
      icon: "Eye",
      status: "ACTIVE",
      description: "12 MP industrial telecentric camera captures high-contrast backlit macro images of the flattened insulation strip for sub-pixel dimensional verification.",
      details: {
        actuator: "Motorized High-CRI LED Backlight Ring & XY Calibration Stage",
        sensor: "Sony IMX 12MP Global Shutter Sensor + Telecentric Lens (0.008 mm/px)",
        parameters: "Frame Rate: 60 FPS | Inspection Time: 120 ms | Resolution: 8 µm/pixel",
        keySpec: "Detects surface scratches, micro-voids, burrs, and thickness uniformity."
      }
    },
    {
      id: 6,
      name: "PASS / FAIL Decision Gate",
      shortName: "Pass/Fail Gating",
      category: "Control System",
      icon: "ShieldCheck",
      status: "ACTIVE",
      description: "Real-time edge compute module runs OpenCV dimensional algorithms against IEC 60811-1-1 tolerance limits, actuating high-speed diverter gate.",
      details: {
        actuator: "High-Speed Solenoid Diverter Gate (Response < 15 ms)",
        sensor: "Laser Photoelectric Confirmation Sensor",
        parameters: "Decision Time: < 20 ms | Compliance Logic: IEC 60811 / IS 10810",
        keySpec: "Rejects specimens exceeding ±0.05 mm thickness variation or void presence."
      }
    },
    {
      id: 7,
      name: "Precision Dumbbell Punching",
      shortName: "Dumbbell Punching",
      category: "Adaptive Tooling",
      icon: "BoxSelect",
      status: "ACTIVE",
      description: "Servo-hydraulic/pneumatic die press punches standard IEC 60811 Type 1 / Type 2 & ASTM D638 Type IV dumbbell specimens with pristine burr-free edges.",
      details: {
        actuator: "20 kN Servo-Hydraulic Ram / Heavy Duty Pneumatic Intensifier",
        sensor: "Force Transducer (Load Cell 25 kN) & Optical Die Alignment Encoder",
        parameters: "Punching Force: 15–20 kN | Die Hardness: SKD11 Tool Steel (HRC 60-62)",
        keySpec: "Quick-change die carousel supporting Type 1, Type 1A, Type 2, and Type 3 dies."
      }
    },
    {
      id: 8,
      name: "Standard-Ready Specimen",
      shortName: "Ready Specimen",
      category: "Output",
      icon: "CheckCircle2",
      status: "ACTIVE",
      description: "Final specimen ejected into clean protective tray, measured, verified, and ready for immediate loading into Tensile Testing Machine (UTM) or Aging Oven.",
      details: {
        actuator: "Linear Vacuum Pick-and-Place Gripper",
        sensor: "Weight Micro-Balance & Optical Length Gauge",
        parameters: "Overall Length: 75 mm / 115 mm | Gauge Length: 20 mm / 25 mm",
        keySpec: "Clean cut edge roughness Rz < 1.6 µm, eliminating stress concentration notch risks."
      }
    },
    {
      id: 9,
      name: "Digital Specimen Passport",
      shortName: "Digital Passport",
      category: "Software & Mobile",
      icon: "QrCode",
      status: "ACTIVE",
      description: "Laser etching / Thermal QR barcode printed on specimen tab and uploaded to encrypted laboratory database & companion mobile application.",
      details: {
        actuator: "Thermal Transfer Micro-Printer / Laser Direct Marking Unit",
        sensor: "2D Barcode Scanner Verification Module",
        parameters: "Data Payload: Batch ID, Prep Date, Dimensions (b, d), Area (A), Operator ID",
        keySpec: "Companion mobile app scans QR tag to auto-populate UTM software parameters."
      }
    }
  ],

  // Architectural Subsystems
  subsystems: {
    mechanical: {
      name: "Mechanical Automation System",
      icon: "Cog",
      headline: "Rigid Structural Frame, Precision Linear Actuators & Modular Tool Head",
      highlights: [
        "Extruded Aluminum T-Slot (4080 & 8080 profile) base frame with vibration damping footings.",
        "Adaptive concentric 3-jaw motorized chuck for self-centering cable alignment across 4–28mm diameters.",
        "Dual heated stainless-steel roller press with micrometer gap adjustment for sample flattening.",
        "Quick-change SKD11 tool-steel die punch assembly rated for over 100,000 punch cycles without dulling."
      ],
      specs: [
        { label: "Frame Dimensions", value: "850 x 550 x 620 mm" },
        { label: "Total Machine Weight", value: "48.5 kg" },
        { label: "Cable Diameter Range", value: "4.0 mm – 28.0 mm" },
        { label: "Punching Force Capacity", value: "20 kN (2.0 Tons)" },
        { label: "Cycle Time per Specimen", value: "35 – 45 seconds" }
      ]
    },
    electronics: {
      name: "Electronics & Hardware Architecture",
      icon: "Cpu",
      headline: "Industrial Microcontroller Core, Distributed CAN Bus & High-Current Drivers",
      highlights: [
        "STM32F407 32-bit ARM Cortex-M4 main controller running real-time deterministic control loop.",
        "Trinamic TMC5160 silent stepper drivers with StealthChop2 & StallGuard4 sensorless load monitoring.",
        "Isolated RS485 / CAN Bus internal sensor network connecting depth transducers and load cells.",
        "Dual 24V 15A MeanWell industrial power supplies with active PFC and surge protection."
      ],
      specs: [
        { label: "Main Processor", value: "STM32F407 VGT6 (168 MHz)" },
        { label: "Motor Drivers", value: "TMC5160 SPI High-Power Drivers" },
        { label: "Sensor Interface", value: "24-bit ADS1232 Load Cell ADC" },
        { label: "Safety Hardware", value: "Hardware Category 3 Emergency Stop Relay" },
        { label: "Power Supply", value: "24V DC 600W Industrial" }
      ]
    },
    control: {
      name: "Control System & Firmware Logic",
      icon: "Sliders",
      headline: "Adaptive Closed-Loop Feedback & Dynamic Blade Depth Calculation",
      highlights: [
        "State machine firmware controlling step sequence: Feed -> Measure -> Cut -> Flatten -> Inspect -> Punch.",
        "Dynamic mathematical cutting depth algorithm: d_blade = R_outer - (t_sheath_nominal * k_flex).",
        "PID temperature control loop for flattening heated rollers maintaining ±0.5°C stability.",
        "Automated anti-jamming back-step algorithm triggered upon motor stall detection."
      ],
      specs: [
        { label: "Control Cycle Frequency", value: "1000 Hz (1 ms deterministic task execution)" },
        { label: "Blade Depth Resolution", value: "0.01 mm per pulse" },
        { label: "Stall Detection", value: "TMC StallGuard4 stall detection" },
        { label: "Firmware Stack", value: "FreeRTOS C++ Modular Embedded Firmware" }
      ]
    },
    vision: {
      name: "Optical Vision & Quality Verification",
      icon: "Camera",
      headline: "Sub-Pixel Telecentric Machine Vision for Dimensional Tolerance Validation",
      highlights: [
        "12 MegaPixel global shutter industrial camera with telecentric macro lens eliminating perspective error.",
        "Diffuse high-intensity LED backlight table creating crisp dark edge contrast against translucent insulation.",
        "OpenCV sub-pixel contour edge detection determining dumbbell width b and thickness d at 5 points.",
        "Automatic surface defect classifier detecting air bubbles, micro-voids, and edge burrs."
      ],
      specs: [
        { label: "Camera Sensor", value: "Sony IMX253 1/1.1\" Global Shutter CMOS" },
        { label: "Optical Resolution", value: "0.008 mm/pixel (8 micrometers)" },
        { label: "Measurement Accuracy", value: "±0.015 mm" },
        { label: "Algorithmic Latency", value: "< 120 milliseconds per frame" }
      ]
    },
    mobileApp: {
      name: "Smartphone Companion & Traceability Layer",
      icon: "Smartphone",
      headline: "Supporting Digital Passport, Bluetooth Telemetry & Cloud Traceability",
      highlights: [
        "The smartphone application is strictly an AUXILIARY verification, monitoring, and digital passport tag reader.",
        "Scans QR code / RFID tag on prepared specimen tray to instantly display vision inspection metrics.",
        "Transfers exact cross-sectional area A = b * d directly to UTM (Universal Testing Machine) via Bluetooth/REST API.",
        "Provides remote machine status monitoring, maintenance alerts, and calibration wizard for lab technicians."
      ],
      specs: [
        { label: "Platform", value: "Android & iOS (React Native / Progressive Web App)" },
        { label: "Connectivity", value: "Bluetooth Low Energy 5.2 & Wi-Fi IEEE 802.11 b/g/n" },
        { label: "Database Sync", value: "Laboratory Information Management System (LIMS) compliant" },
        { label: "Role", value: "Digital Passport, Operator Authentication, Quality Audit Trail" }
      ]
    },
    adaptiveTooling: {
      name: "Adaptive Self-Centering Tooling System",
      icon: "Wrench",
      headline: "Universal Jaw & Self-Adjusting Cutter Head for Multi-Diameter Cables",
      highlights: [
        "Eliminates manual collet changes: single adaptive iris chuck handles outer sheath from 4mm to 28mm.",
        "Floating spring-biased knife holder contours to non-circular and slightly elliptical cables.",
        "Modular quick-release die press mounting system allows changing between IEC 60811 Type 1, Type 2, and ASTM dies in under 15 seconds.",
        "Hardened D2 tool steel blades with titanium nitride (TiN) coating for extended blade life."
      ],
      specs: [
        { label: "Diameter Adaptability", value: "4.0 mm – 28.0 mm continuous range" },
        { label: "Changeover Time", value: "Zero mechanical tool changeover for diameter change" },
        { label: "Die Standards Supported", value: "IEC 60811-1-1 Type 1, 1A, 2, 3 | IS 10810 | ASTM D638" },
        { label: "Blade Coating", value: "Titanium Nitride (TiN), 2500 HV hardness" }
      ]
    }
  },

  // Compliance Standards Reference Data
  standards: [
    {
      code: "IEC 60811-1-1",
      title: "Electric and optical fibre cables – Test methods for non-metallic materials – Part 1-1: General application – Measurement of thickness and overall dimensions – Tests for determining the mechanical properties",
      region: "International (IEC)",
      keyRequirements: [
        "Dummy test specimen must be dumb-bell shaped cut from sheath/insulation.",
        "Thickness d must be measured at 3 points in gauge length; minimum thickness used for stress calculation.",
        "Width b must be 4.0 mm (Type 2) or 6.0 mm (Type 1) within tolerance ±0.1 mm.",
        "No notch, micro-void, or razor blade mark allowed on the narrow parallel portion."
      ],
      dumbbellParams: {
        type1: { totalLen: "75 mm", gaugeLen: "20 mm", width: "4.0 mm", maxThick: "2.5 mm" },
        type2: { totalLen: "115 mm", gaugeLen: "25 mm", width: "6.0 mm", maxThick: "3.0 mm" }
      }
    },
    {
      code: "IS 10810 (Part 7 & Part 11)",
      title: "Methods of Test for Cables – Part 7: Measurement of Thickness of Sheath | Part 11: Thermal Ageing Test in Air",
      region: "India (BIS)",
      keyRequirements: [
        "Specimen thickness measurement using micro-caliper or optical projector.",
        "Standard dumbbell dimensions must match Type 1 or Type 2 per IS 10810 Part 7.",
        "Cross-sectional area A = b * d must be recorded prior to thermal aging oven exposure."
      ],
      dumbbellParams: {
        type1: { totalLen: "75 mm", gaugeLen: "20 mm", width: "4.0 mm", maxThick: "2.0 mm" },
        type2: { totalLen: "115 mm", gaugeLen: "25 mm", width: "6.0 mm", maxThick: "3.0 mm" }
      }
    },
    {
      code: "ASTM D638 / ISO 527-2",
      title: "Standard Test Method for Tensile Properties of Plastics (Type IV & Type V Dumbbell Specimens)",
      region: "USA / Global (ASTM/ISO)",
      keyRequirements: [
        "Parallel length must be smooth and parallel within 0.05 mm.",
        "Speed of testing: 50 mm/min or 500 mm/min based on material elongation class.",
        "Thickness measured using spring-loaded dial micrometer with flat anvil."
      ],
      dumbbellParams: {
        typeIV: { totalLen: "115 mm", gaugeLen: "33 mm", width: "6.0 mm", maxThick: "4.0 mm" },
        typeV: { totalLen: "63.5 mm", gaugeLen: "7.62 mm", width: "3.18 mm", maxThick: "2.5 mm" }
      }
    }
  ],

  // Research, Problem Statement, Feasibility & Market Data
  research: {
    problemStatement: {
      headline: "The Critical Bottle-Neck in Power & Telecom Cable Compliance Laboratories",
      points: [
        "Manual Cable Preparation Hazard: Lab technicians manually strip cable sheaths using utility knives and razor blades, posing high laceration risk.",
        "Inconsistent Thickness & Edge Notches: Hand-carved or manually punched specimens suffer from uneven wall thickness, burrs, and micro-cracks along edges.",
        "High Invalid Test Rate: Up to 32% of tensile and elongation tests fail prematurely due to stress concentration notches created during manual razor trimming rather than true material failure.",
        "Lack of Traceability: Manual dimension recording in paper logbooks leads to transcription errors and zero digital audit trail for high-stakes certification (BIS / NABL / IEC).",
        "Labor-Intensive Cycle Time: Preparing a batch of 10 dumbbell specimens manually takes 45–60 minutes, limiting testing throughput."
      ]
    },
    solutionSummary: {
      headline: "CableSpec Automated Solution",
      points: [
        "Automated Single-Pass Processing: Feed raw cable -> Machine automatically strips sheath, flattens insulation, inspects dimensions, and punches standard dumbbells.",
        "Cycle Time Reduction: Reduces specimen prep time from 5 minutes down to 35 seconds per specimen (88% time savings).",
        "Zero Human Edge Defects: Servo-hydraulic precision punch produces burr-free edges with roughness Rz < 1.6 µm, reducing invalid test rates to < 1.5%.",
        "Sub-Pixel Optical Quality Gate: Integrated vision camera inspects dimensions to ±0.015mm accuracy before punching.",
        "Digital Passport Traceability: Creates QR code digital passport linking sample batch, exact dimensions, operator ID, and vision snapshot."
      ]
    },

    priorArtMatrix: [
      {
        feature: "Cable Diameter Range",
        manualRazor: "Fixed (1 diameter per tool)",
        cncMilling: "4 – 20 mm (requires custom jigging)",
        cableSpec: "4.0 – 28.0 mm (Self-Adapting Iris Chuck)"
      },
      {
        feature: "Specimen Prep Time",
        manualRazor: "5 – 8 minutes / sample",
        cncMilling: "3 – 5 minutes / sample",
        cableSpec: "35 – 45 seconds / sample"
      },
      {
        feature: "Operator Safety Hazard",
        manualRazor: "HIGH (Bare razor blade handling)",
        cncMilling: "MEDIUM (Rotating spindle cutter)",
        cableSpec: "ZERO (Fully enclosed interlocked cabinet)"
      },
      {
        feature: "Dimensional Precision",
        manualRazor: "± 0.25 mm (Highly variable)",
        cncMilling: "± 0.05 mm",
        cableSpec: "± 0.015 mm (Vision Verified)"
      },
      {
        feature: "Edge Quality (Burrs/Notches)",
        manualRazor: "Poor (High notch count)",
        cncMilling: "Good (Requires deburring)",
        cableSpec: "Pristine (Cold-stamped SKD11 Tool Steel)"
      },
      {
        feature: "Digital Passport Traceability",
        manualRazor: "None (Paper Logbook)",
        cncMilling: "Partial (File export)",
        cableSpec: "Full (QR / LIMS / Mobile App Auto-Sync)"
      },
      {
        feature: "Equipment Cost",
        manualRazor: "Low (~₹5,000)",
        cncMilling: "Very High (~₹12,00,000+)",
        cableSpec: "Optimal Industrial Prototype (~₹2,10,000)"
      }
    ],

    bom: [
      { category: "Mechanical Structural Frame & Iris Chuck", cost: 42000, supplier: "Misumi / Local Precision Machining" },
      { category: "Stepper Motors & TMC5160 Driver Array", cost: 28000, supplier: "Trinamic / Moons' Stepper" },
      { category: "Servo-Hydraulic / Pneumatic Die Intensifier", cost: 48000, supplier: "SMC Pneumatics / Custom Cylinder" },
      { category: "SKD11 Quick-Change Dumbbell Dies (Type 1 & 2)", cost: 35000, supplier: "Precision Die Tool Maker" },
      { category: "12MP Industrial Camera & Telecentric Backlight", cost: 32000, supplier: "Hikrobot / Cognex Equivalent" },
      { category: "STM32F4 Core Board, ADS1232 Load Cell & Sensors", cost: 14000, supplier: "STMicroelectronics / Texas Instruments" },
      { category: "Power Supply, Safety Interlocks & Cabinet", cost: 16000, supplier: "MeanWell / Schneider Electric" },
      { category: "Enclosure, Touchscreen Display & Laser Printer", cost: 15000, supplier: "Industrial Enclosure" }
    ],

    marketSurvey: {
      targetAudience: [
        "Cable Manufacturing Plants (Quality Control Labs - Polycab, Havells, Finolex, KEI, RR Kabel)",
        "NABL Accredited Third-Party Testing Laboratories (CPRI, ERDA, TUV, SGS, Intertek)",
        "Polymer & Insulation Material R&D Laboratories (Dow, Borealis, Reliance Polymers)",
        "Government Certification & Standards Testing Institutes (BIS, Railway RDSO, Defense Quality)"
      ],
      tamSamSom: {
        tam: "₹3,400 Crore ($410M USD Global Cable Testing Equipment Market)",
        sam: "₹650 Crore (Indian Cable Testing & Quality Compliance Sector)",
        som: "₹45 Crore (Automated Specimen Prep Unit Market across 450+ Tier 1 & 2 Cable Labs in India)"
      },
      roiAnalysis: {
        labSavingsPerYear: "₹8,40,000",
        paybackPeriodMonths: "4.8 Months",
        invalidTestReduction: "From 28% to < 1.2%"
      }
    }
  },

  // Team & SIH 2026 Presentation Details
  team: {
    institution: "Smart India Hackathon 2026 Engineering Showcase",
    mentors: [
      { name: "Dr. K. R. Sharma", role: "Professor, Mechatronics & Robotics", specialization: "Precision Machine Design" },
      { name: "Er. V. Deshmukh", role: "Senior Quality Manager, National Testing Lab", specialization: "IEC Cable Compliance" }
    ],
    members: [
      { name: "Bhavesh Patil", role: "Team Lead & Systems Architect", focus: "Embedded Control, Automation & Hardware Integration" },
      { name: "Aarav Mehta", role: "Lead Mechanical Engineer", focus: "Adaptive Tooling, Iris Chuck & Die Punch Kinematics" },
      { name: "Sanya Verma", role: "Computer Vision & Edge AI Lead", focus: "OpenCV Telecentric Sub-Pixel Inspection & Pass/Fail Logic" },
      { name: "Rohan Kulkarni", role: "Software & Mobile App Engineer", focus: "Digital Specimen Passport, QR Generator & LIMS API" }
    ]
  }
};
