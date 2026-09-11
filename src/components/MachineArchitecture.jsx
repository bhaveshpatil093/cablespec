import React, { useState } from 'react';
import { 
  Cog, Cpu, Sliders, Camera, Smartphone, Wrench, CheckCircle, 
  ShieldAlert, Binary, Layers, Eye, ShieldCheck, BoxSelect, CheckCircle2, QrCode, Cable, Scissors, GitFork
} from 'lucide-react';
import InteractiveMachineDiagram from './InteractiveMachineDiagram';
import { PanelCard, DashboardCard, StatusBadge } from './ui';

export default function MachineArchitecture() {
  const [selectedModuleId, setSelectedModuleId] = useState(1);

  const machineModulesData = [
    {
      id: 1,
      name: "Cable Input & Tension Control",
      category: "Mechanical Feed",
      icon: Cable,
      headline: "Raw Cable Spool Feed & Dynamic Tension Adjustment",
      description: "Accommodates multi-core and single-core power and telecom cables ranging from 4.0 mm to 28.0 mm outer diameter. Features an optical diameter transducer and spool drag brake.",
      actuator: "Motorized Drag Brake & Tension Balance Arm",
      sensor: "Ultrasonic Outer Diameter Transducer (±0.02 mm)",
      params: "Max Cable OD: 28.0 mm | Spool Tension: 15–40 N",
      spec: "Corrects ovality prior to motorized feeding."
    },
    {
      id: 2,
      name: "Feed & Straightening Mechanism",
      icon: Cog,
      category: "Motorized Kinematics",
      headline: "5-Roller Curvature Correction Array & NEMA 34 Drive",
      description: "Motorized rubberized dual-groove drive rollers pull cable off the input spool, while an orthogonal 5-roller straightening assembly removes residual axial curvature.",
      actuator: "NEMA 34 Stepper Motor (4.5 Nm) + TMC5160 Driver",
      sensor: "1000 PPR Incremental Rotary Encoder",
      params: "Feed Rate: 5–30 mm/s | Curvature Displacement: < 0.5 mm / 300 mm",
      spec: "Eliminates helical coil bias before sheath slitting."
    },
    {
      id: 3,
      name: "Adaptive Sheath Cutting Ring",
      icon: Scissors,
      category: "Adaptive Tooling",
      headline: "Motorized Concentric 3-Jaw Rotary Slitting Head",
      description: "Concentric self-centering iris chuck automatically clamps around outer cable sheath. A depth-calibrated rotary cutter performs circumferential and axial slits.",
      actuator: "Dual NEMA 23 Stepper Motors + Rotary Bearings",
      sensor: "Capacitive Core Proximity & Depth Transducer",
      params: "Cutting Depth Precision: ±0.02 mm | Blade Hardness: TiN D2 Tool Steel",
      spec: "Slits outer sheath without contacting inner phase insulation."
    },
    {
      id: 4,
      name: "Pneumatic Sheath Removal Head",
      icon: GitFork,
      category: "Pneumatics",
      headline: "High-Force Axial Sheath Stripper & Separation Fingers",
      description: "Pneumatic gripper jaws clamp slit sheath jacket and pull it axially off the inner conductor core bundle, ejecting stripped sheath waste into scrap bin.",
      actuator: "SMC Compact Pneumatic Cylinder Array (0.6 MPa)",
      sensor: "Breakaway Limit Switch & Waste Eject Confirmation",
      params: "Stripping Force: 120 N max | Cycle Time: < 2.2 seconds",
      spec: "Clean axial separation leaving pristine core bundle."
    },
    {
      id: 5,
      name: "Thermal Insulation Flattening Roller Press",
      icon: Layers,
      category: "Thermal Mechanics",
      headline: "PTC Heated Stainless Rollers with Micrometer Gap Control",
      description: "Curved tubular insulation sheath is passed between dual heated stainless-steel rollers to eliminate elastic memory and flatten curved wall profiles.",
      actuator: "PID Controlled PTC Cartridge Heater + Precision Ball Screw",
      sensor: "K-Type Thermocouple & Dual LVDT Contact Gauges",
      params: "Temp Range: 40°C – 80°C (Material Dependent) | Parallelism: ±0.01 mm",
      spec: "Eliminates wall curvature prior to dumbbell die punching."
    },
    {
      id: 6,
      name: "Longitudinal Slitting Assembly",
      icon: Sliders,
      category: "Precision Slitting",
      headline: "Linear Guide Micro-Adjustable Longitudinal Cutter",
      description: "Precision linear guide blade slits flattened tubular insulation into a uniform flat strip, preparing a smooth parallel surface for dumbbell die stamping.",
      actuator: "Linear Ball Screw Drive + Hardened Carbide Blade",
      sensor: "Laser Edge Alignment Sensor",
      params: "Slitting Width: 10–40 mm | Edge Roughness Rz < 1.6 µm",
      spec: "Smooth burr-free edge finish avoiding stress notches."
    },
    {
      id: 7,
      name: "Optical Vision Verification Stage",
      icon: Eye,
      category: "Machine Vision",
      headline: "12MP Telecentric Camera & Overhead Gantry Mount",
      description: "12 MegaPixel global shutter industrial camera mounted overhead inspects flattened insulation strip against diffuse LED backlight table for sub-pixel dimensional check.",
      actuator: "Motorized LED Diffuse Backlight & XY Calibration Stage",
      sensor: "Sony IMX253 12MP Global Shutter Sensor + Telecentric Lens",
      params: "Resolution: 8 µm/pixel | Inspection Time: 120 ms | Accuracy: ±0.015 mm",
      spec: "Detects air bubbles, surface scratches, burrs, and thickness uniformity."
    },
    {
      id: 8,
      name: "Precision Dumbbell Die Stamping Press",
      icon: BoxSelect,
      category: "Hydraulic Stamping",
      headline: "20 kN Servo-Hydraulic Ram & SKD11 Tool Steel Dies",
      description: "High-tonnage die press stamps standard IEC 60811 Type 1, Type 2, or ASTM D638 dumbbell specimens from verified flat insulation strip with pristine edges.",
      actuator: "20 kN Servo-Hydraulic Ram / Pneumatic Intensifier",
      sensor: "25 kN Load Cell Force Transducer + Optical Die Alignment",
      params: "Punching Force: 15–20 kN | Die Hardness: SKD11 Tool Steel (HRC 60-62)",
      spec: "Quick-change die carousel supporting Type 1, 1A, 2, and 3 dies."
    },
    {
      id: 9,
      name: "Specimen Collection & Digital Passport Tagging",
      icon: QrCode,
      category: "Output & LIMS",
      headline: "Vacuum Pick-and-Place Gripper & Direct QR Laser Marking",
      description: "Finished dumbbell test specimen is ejected into clean protective tray. Direct thermal or laser printer marks 2D QR Specimen Passport tag on sample tab.",
      actuator: "Linear Vacuum Gripper + Direct Thermal Printer",
      sensor: "2D Barcode Reader Verification Sensor",
      params: "Data Payload: Batch ID, Prep Date, Dimensions (b, d), Area (A), Hash",
      spec: "Creates instant LIMS JSON payload and Bluetooth UTM sync."
    }
  ];

  const currentMod = machineModulesData.find(m => m.id === selectedModuleId) || machineModulesData[0];
  const IconComp = currentMod.icon;

  return (
    <section id="architecture" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 typo-tech-label">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Deep Engineering Specifications</span>
          </div>
          <h2 className="typo-section-title">
            Machine System Architecture & 9 Physical Modules
          </h2>
          <p className="typo-body text-slate-400">
            Interactive CAD schematic of CableSpec mechatronic modules. Click any module on the machine diagram to inspect its actuators, sensors, and parameters.
          </p>
        </div>

        {/* DOMINANT VISUAL HIERARCHY: LARGE HORIZONTAL INTERACTIVE MACHINE DIAGRAM */}
        <InteractiveMachineDiagram 
          selectedModuleId={selectedModuleId}
          onSelectModule={(id) => setSelectedModuleId(id)}
        />

        {/* DETAILED TECHNICAL INSPECTOR FOR SELECTED MODULE */}
        <PanelCard className="p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between border-b border-[#1d2e45] pb-4 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-[#0d1624] border border-[#1d2e45] flex items-center justify-center text-cyan-400">
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <StatusBadge variant="pass">
                  PHYSICAL MODULE 0{currentMod.id} OF 09 • {currentMod.category}
                </StatusBadge>
                <h3 className="typo-subsection-title text-2xl text-white mt-1">
                  {currentMod.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center space-x-2 font-mono text-xs">
              <button
                onClick={() => setSelectedModuleId(selectedModuleId > 1 ? selectedModuleId - 1 : 9)}
                className="px-3 py-1.5 rounded bg-[#0d1624] border border-[#1d2e45] text-slate-300 hover:text-white"
              >
                ← PREV MODULE
              </button>
              <button
                onClick={() => setSelectedModuleId(selectedModuleId < 9 ? selectedModuleId + 1 : 1)}
                className="px-3 py-1.5 rounded bg-[#0d1624] border border-[#1d2e45] text-slate-300 hover:text-white"
              >
                NEXT MODULE →
              </button>
            </div>
          </div>

          <p className="typo-body text-base text-cyan-200 border-l-2 border-cyan-400 pl-3 py-0.5 font-mono">
            {currentMod.headline}
          </p>

          <p className="typo-body text-slate-300">
            {currentMod.description}
          </p>

          {/* Actuator, Sensor & Operational Parameters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            
            <DashboardCard className="p-4 space-y-1">
              <span className="typo-tech-label text-cyan-400 block">PRIMARY ACTUATOR</span>
              <span className="font-bold text-white block">{currentMod.actuator}</span>
            </DashboardCard>

            <DashboardCard className="p-4 space-y-1">
              <span className="typo-tech-label text-cyan-400 block">FEEDBACK SENSOR</span>
              <span className="font-bold text-white block">{currentMod.sensor}</span>
            </DashboardCard>

            <DashboardCard className="p-4 space-y-1">
              <span className="typo-tech-label text-amber-400 block">OPERATIONAL PARAMS</span>
              <span className="font-bold text-amber-300 block">{currentMod.params}</span>
            </DashboardCard>

            <DashboardCard className="p-4 space-y-1">
              <span className="typo-tech-label text-emerald-400 block">CRITICAL TOLERANCE</span>
              <span className="font-bold text-emerald-300 block">{currentMod.spec}</span>
            </DashboardCard>

          </div>

        </PanelCard>

      </div>
    </section>
  );
}
