// Exhaustive Technical Engineering Dataset for the 9 Machine Modules

export const MACHINE_MODULES_DETAILS = {
  1: {
    id: 1,
    name: "Cable Input & Tension Control",
    category: "Mechanical Feed",
    purpose: "Accept raw spooled cable of varying diameters and apply controlled back-tension to prevent slack and helix binding during automated feeding.",
    principle: "Frictional drag torque balance using a hysteresis magnetic brake coupled to a floating dancer arm feedback sensor.",
    mainComponents: [
      "Extruded aluminum spool cradle (4080 profile)",
      "Hysteresis drag brake assembly (0–5 Nm adjustable)",
      "Floating spring-biased dancer balance arm",
      "Ultrasonic outer diameter transducer array",
      "Hardened steel entry guide funnel (TiN coated)"
    ],
    inputs: [
      "Raw cable stock (4.0 mm to 28.0 mm outer diameter)",
      "Manual spool loading onto arbor mandrel",
      "24V DC power supply for dancer brake circuit"
    ],
    outputs: [
      "Tension-stabilized continuous cable feed (15–40 N tension)",
      "Real-time outer diameter telemetry packet to STM32 core",
      "Spool depletion alert signal"
    ],
    sensors: [
      "Micro-Epsilon Ultrasonic OD Sensor (±0.02 mm accuracy)",
      "Dancer Arm Angular Potentiometer (12-bit ADC)",
      "Optical Cable End Detection Photo-interrupter"
    ],
    actuators: [
      "Magnetic Hysteresis Brake (PID controlled)",
      "Pneumatic Arbor Mandrel Clamping Cylinder"
    ],
    failureConditions: [
      "Spool jam due to crossed cable turns on raw spool",
      "Excessive back-tension causing sheath stretching",
      "Out-of-range cable diameter (> 28.0 mm) triggering hard stop"
    ],
    safetyConsiderations: [
      "Enclosed rotating spool cage with magnetic door interlock switch",
      "Emergency stop assertion upon dancer arm over-travel",
      "Pinch-point warning shields over feed entry funnel"
    ]
  },

  2: {
    id: 2,
    name: "Feed & Straightening Mechanism",
    category: "Motorized Kinematics",
    purpose: "Pull raw cable off input reel and eliminate residual spool curvature by subjecting cable to alternating flexural strain.",
    principle: "Orthogonal 5-roller curvature correction geometry coupled with high-torque rubberized dual-groove drive rollers.",
    mainComponents: [
      "NEMA 34 high-torque stepper motor (4.5 Nm holding torque)",
      "Trinamic TMC5160 silent driver with StallGuard4 load monitoring",
      "5-roller orthogonal straightening assembly (SKF ball bearings)",
      "Dual V-groove polyurethane high-friction drive wheels",
      "Precision linear lead screw for roller gap calibration"
    ],
    inputs: [
      "Raw cable from Input Module",
      "Stepping pulse train (1000 Hz micro-stepping)",
      "24V DC 15A power bus"
    ],
    outputs: [
      "Linearized cable stock (curvature displacement < 0.5 mm / 300 mm)",
      "Measured feed length count (encoder pulses)",
      "Motor stall telemetry data"
    ],
    sensors: [
      "1000 PPR optical incremental encoder on feed shaft",
      "TMC5160 internal StallGuard4 current feedback sensor",
      "Roller gap linear potentiometer (0.01 mm resolution)"
    ],
    actuators: [
      "NEMA 34 Stepper Motor (4.5 Nm torque)",
      "Motorized roller gap calibration stepper (NEMA 17)"
    ],
    failureConditions: [
      "Drive wheel slippage on oily or wet cable outer sheaths",
      "Motor stall caused by extreme cable rigidity or jam",
      "Misalignment of straightening rollers causing spiral twist"
    ],
    safetyConsiderations: [
      "Fully enclosed drive belt and roller housing",
      "Current-limiting driver protection to prevent motor overheating",
      "Interlocked maintenance access hatch"
    ]
  },

  3: {
    id: 3,
    name: "Adaptive Sheath Cutting Ring",
    category: "Adaptive Tooling",
    purpose: "Perform micro-calibrated circumferential and axial sheath slits without touching inner phase conductor insulation.",
    principle: "Concentric 3-jaw motorized iris clamping head combined with a depth-calibrated orbiting rotary blade holder.",
    mainComponents: [
      "Concentric 3-jaw motorized iris clamping ring",
      "Rotary cutter head with SKD11 tool-steel circular blade",
      "Micrometer depth adjustment mechanism (0.01 mm resolution)",
      "Capacitive proximity core sensor for copper/aluminum detection",
      "Precision slewing bearing ring drive"
    ],
    inputs: [
      "Straightened cable section",
      "Nominal sheath thickness setting from vision/ultrasonic sensor",
      "Rotary stepper pulse commands"
    ],
    outputs: [
      "Circumferentially and longitudinally slit outer sheath jacket",
      "Depth transducer confirmation signal",
      "Clean cut edge with no inner core insulation damage"
    ],
    sensors: [
      "Capacitive conductor proximity sensor (detects metal core proximity)",
      "High-precision LVDT blade depth transducer (±0.005 mm)",
      "Home-position optical limit switch"
    ],
    actuators: [
      "NEMA 23 Iris Clamping Stepper Motor",
      "NEMA 23 Rotary Cutter Head Stepper Motor",
      "Micro-linear actuator for dynamic blade depth position"
    ],
    failureConditions: [
      "Blade dulling causing sheath tearing rather than clean slitting",
      "Over-penetration slicing into inner phase conductor insulation",
      "Clamping jaw slippage on low-friction cable jackets"
    ],
    safetyConsiderations: [
      "Blade retracts fully into guarded housing when machine is idle",
      "Capacitive sensor auto-aborts cutting if core contact is imminent",
      "Hardware E-stop cuts power to all cutting motors in < 10 ms"
    ]
  },

  4: {
    id: 4,
    name: "Pneumatic Sheath Removal Head",
    category: "Pneumatic Stripping",
    purpose: "Axially pull slit outer sheath jacket off conductor core bundle and eject sheath scrap into waste receptacle.",
    principle: "High-force pneumatic clamp jaws grip slit sheath section and slide axially along linear guide rails.",
    mainComponents: [
      "SMC pneumatic compact clamp cylinders (0.6 MPa operating pressure)",
      "Hardened steel serrated clamping jaws",
      "Linear guide rail assembly (THK 15 mm profile)",
      "Pneumatic sheath ejector pin assembly",
      "Scrap chute with photoelectric waste detector"
    ],
    inputs: [
      "Slit cable section from Cutting Module",
      "0.6 MPa compressed dry air supply",
      "24V solenoid trigger signals"
    ],
    outputs: [
      "Stripped inner core conductor bundle",
      "Ejected outer sheath waste piece",
      "Waste eject optical confirmation packet"
    ],
    sensors: [
      "Pneumatic cylinder magnetic reed position switches",
      "Photoelectric scrap chute confirmation sensor",
      "Air pressure transducer (monitors < 0.4 MPa pressure drop)"
    ],
    actuators: [
      "Dual SMC Pneumatic Clamp Cylinders (120 N force)",
      "SMC Pneumatic Linear Axial Stripping Cylinder",
      "Waste Ejector Solenoid Valve"
    ],
    failureConditions: [
      "Incomplete sheath detachment due to insufficient blade cut depth",
      "Pneumatic pressure drop (< 0.4 MPa) causing jaw slippage",
      "Scrap chute jam from sticky polymer sheath residue"
    ],
    safetyConsiderations: [
      "Pneumatic pressure release valve opens on Emergency Stop",
      "Transparent polycarbonate splash guard over stripping zone",
      "Pinch-point warning decals on linear slider mechanism"
    ]
  },

  5: {
    id: 5,
    name: "Thermal Insulation Flattening Press",
    category: "Thermal Mechanics",
    purpose: "Eliminate internal elastic memory and wall curvature from tubular insulation sheath samples by thermal roller pressing.",
    principle: "Controlled thermal plasticization: passing tubular sheath between heated stainless rollers at material glass transition temperature.",
    mainComponents: [
      "Dual mirror-ground 316L stainless steel press rollers",
      "PTC ceramic cartridge heaters (200W heating capacity)",
      "PID temperature controller module with SSR relay",
      "Precision ball screw gap adjustment mechanism",
      "Dual LVDT contact thickness gauges"
    ],
    inputs: [
      "Tubular insulation sheath strip",
      "Material temperature setpoint (40°C–80°C based on XLPE/PVC)",
      "Roller gap thickness setting"
    ],
    outputs: [
      "Thermally flattened uniform insulation sheet",
      "Roller surface temperature telemetry (±0.5°C stability)",
      "LVDT wall thickness measurement profile"
    ],
    sensors: [
      "K-Type Thermocouple embedded in roller core",
      "Dual Solartron LVDT contact thickness gauges (±0.002 mm accuracy)",
      "Over-temperature bimetallic thermal safety switch"
    ],
    actuators: [
      "PTC Ceramic Heating Cartridges (PID driven)",
      "NEMA 23 Gap Adjustment Stepper Motor",
      "Motorized Roller Drive DC Gearmotor"
    ],
    failureConditions: [
      "Thermal runaway (temp > 95°C) causing polymer degradation/melting",
      "Non-uniform roller gap causing wedge-shaped cross section",
      "Inadequate heating causing elastic recoil and curved strip"
    ],
    safetyConsiderations: [
      "Thermal insulation shield over roller assembly (touch temp < 40°C)",
      "Hardware thermal fuse disconnects heater at 100°C",
      "Hot surface warning indicator light on machine front panel"
    ]
  },

  6: {
    id: 6,
    name: "Longitudinal Slitting Assembly",
    category: "Precision Slitting",
    purpose: "Slice flattened insulation tube longitudinally into a clean, uniform parallel strip ready for optical inspection and die punching.",
    principle: "High-speed linear guided carbide blade slitting flattened insulation against a hardened anvil plate.",
    mainComponents: [
      "Titanium Nitride (TiN) coated tungsten carbide slitting blade",
      "Precision linear ball screw cutter carriage",
      "Hardened steel anvil support plate (HRC 62)",
      "Spring-biased material hold-down rollers",
      "Vacuum suction dust/chip extraction nozzle"
    ],
    inputs: [
      "Flattened insulation sheet from Thermal Press",
      "Target specimen width parameter (b = 10 to 40 mm)",
      "Linear slitting speed command"
    ],
    outputs: [
      "Standard-width parallel insulation strip (Rz < 1.6 µm edge roughness)",
      "Edge trim scrap strips",
      "Cutter home position signal"
    ],
    sensors: [
      "Cutter carriage home and end optical limit switches",
      "Material edge tracking laser line sensor",
      "Blade wear force transducer (monitors slitting drag force)"
    ],
    actuators: [
      "NEMA 23 Linear Screw Cutter Carriage Stepper Motor",
      "Vacuum Chip Extraction Solenoid Valve"
    ],
    failureConditions: [
      "Carbide blade dulling causing feathered/burred edges",
      "Material squirm/slippage during slitting causing non-parallel edges",
      "Carriage rail contamination causing motor stall"
    ],
    safetyConsiderations: [
      "Blade remains fully enclosed in anvil slot except during active pass",
      "Chip extraction vacuum prevents airborne polymer dust inhalation",
      "Carriage interlock halts motion if access cover is opened"
    ]
  },

  7: {
    id: 7,
    name: "Optical Vision Verification Stage",
    category: "Machine Vision",
    purpose: "Inspect flattened insulation strip at sub-pixel resolution to measure dimensions and detect edge burrs/voids prior to die punching.",
    principle: "Telecentric backlight optical measurement: high-contrast dark silhouette captured by global shutter CMOS sensor.",
    mainComponents: [
      "12MP Sony IMX253 global shutter industrial camera",
      "Bi-telecentric macro lens (0.008 mm/pixel optical resolution)",
      "High-CRI diffuse LED backlight glass table",
      "Overhead aluminum gantry camera mounting frame",
      "High-speed solenoid diverter gate (Pass/Fail routing)"
    ],
    inputs: [
      "Slit insulation strip on backlight table",
      "IEC 60811-1-1 dimensional tolerance limits (width b, thickness d)",
      "Camera frame trigger pulse"
    ],
    outputs: [
      "Sub-pixel measurement telemetry (width b, thickness d at 5 points)",
      "PASS / FAIL quality gate signal to diverter solenoid (< 20 ms latency)",
      "High-resolution PNG inspection image snapshot"
    ],
    sensors: [
      "12MP Sony IMX253 Global Shutter CMOS Sensor (60 FPS)",
      "Photoelectric specimen arrival trigger sensor",
      "LED backlight intensity optical feedback photodiode"
    ],
    actuators: [
      "High-Speed Solenoid Diverter Gate (Response time < 15 ms)",
      "Motorized Backlight Intensity Controller",
      "XY Camera Calibration Stage Stepper Motors"
    ],
    failureConditions: [
      "Optical window dust accumulation distorting edge detection",
      "Ambient lighting glare interfering with telecentric silhouette",
      "Sub-pixel algorithm false reject from static dust particles"
    ],
    safetyConsiderations: [
      "Enclosed optical darkroom chamber eliminating ambient stray light",
      "Low-voltage 12V LED lighting (zero UV hazard)",
      "Diverter gate enclosed to prevent pinch hazard"
    ]
  },

  8: {
    id: 8,
    name: "Precision Dumbbell Stamping Press",
    category: "Hydraulic Stamping",
    purpose: "Stamp standard IEC 60811 Type 1, Type 2, or ASTM D638 dumbbell specimens from vision-verified insulation strips.",
    principle: "High-tonnage die punching: 20 kN force applied through SKD11 tool-steel die set against a resilient polyurethane cutting bed.",
    mainComponents: [
      "20 kN servo-hydraulic RAM / heavy-duty pneumatic intensifier",
      "SKD11 tool-steel quick-change dumbbell dies (HRC 60-62)",
      "Resilient self-healing polyurethane anvil cutting bed",
      "25 kN S-type load cell force transducer",
      "Quick-change die carousel mounting fixture"
    ],
    inputs: [
      "PASS-verified insulation strip from Vision Module",
      "Selected die profile (IEC Type 1, Type 1A, Type 2, ASTM Type IV)",
      "Hydraulic pressure / force setpoint command"
    ],
    outputs: [
      "Pristine burr-free dumbbell test specimen (Rz < 1.6 µm edge finish)",
      "Peak punching force telemetry record (kN)",
      "Punch cycle completion signal"
    ],
    sensors: [
      "25 kN Load Cell Force Transducer (ADS1232 24-bit ADC)",
      "Optical die alignment verification sensor",
      "RAM bottom-dead-center proximity switch"
    ],
    actuators: [
      "20 kN Servo-Hydraulic Ram / Air-Over-Oil Intensifier",
      "Quick-Change Die Carousel Indexing Stepper Motor",
      "Specimen Ejection Pneumatic Pin"
    ],
    failureConditions: [
      "Die edge dulling after 100,000+ cycles causing edge tearing",
      "Insufficient hydraulic pressure (< 15 kN) causing incomplete cut",
      "Die mis-alignment leading to asymmetric dumbbell shoulders"
    ],
    safetyConsiderations: [
      "Dual-hand anti-tie-down safety start buttons (or auto cabinet lock)",
      "Category 3 Safety Relay chain monitoring die chamber door",
      "Hydraulic pressure relief valve set to 22 kN max limit"
    ]
  },

  9: {
    id: 9,
    name: "Specimen Collection & Digital Passport Tagging",
    category: "Output & LIMS Sync",
    purpose: "Eject finished dumbbell specimen into clean collection tray and mark encrypted 2D QR code Digital Passport tag.",
    principle: "Linear vacuum pick-and-place transfer combined with direct thermal barcode printing / laser micro-marking.",
    mainComponents: [
      "Linear vacuum pick-and-place gripper arm",
      "High-resolution direct thermal barcode printer unit",
      "Clean stainless steel specimen output tray",
      "2D Barcode scanner verification sensor",
      "LIMS REST API & BLE 5.2 telemetry transmitter"
    ],
    inputs: [
      "Stamped dumbbell specimen from Die Press",
      "Batch ID, Operator ID, and Vision inspection data payload",
      "Print trigger command"
    ],
    outputs: [
      "QR-tagged, standard-ready dumbbell test specimen",
      "Encrypted Digital Specimen Passport JSON payload",
      "UTM (Universal Testing Machine) cross-sectional area auto-sync"
    ],
    sensors: [
      "2D Barcode Scanner (verifies printed QR code readability)",
      "Vacuum suction pressure transducer (confirms specimen pickup)",
      "Output tray full photoelectric sensor"
    ],
    actuators: [
      "NEMA 17 Linear Vacuum Gripper Stepper Motor",
      "Vacuum Solenoid Venturi Ejector Valve",
      "Direct Thermal Printhead Motor"
    ],
    failureConditions: [
      "Vacuum gripper suction drop dropping specimen during transfer",
      "Thermal printer ribbon runout or faint QR print rendering",
      "Barcode scanner read error requiring manual tag re-print"
    ],
    safetyConsiderations: [
      "Low-voltage 24V automation circuitry",
      "Enclosed output tray preventing external debris contamination",
      "Encrypted AES-128 digital passport hash preventing record tampering"
    ]
  }
};
