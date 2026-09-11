import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

/**
 * Standardized Barcode / QR Code Frame Component
 */
export function QRCodeFrame({ value, label = "SCAN FOR COMPLETE RECORD", size = 120, className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center p-3 rounded-lg bg-white text-slate-950 border border-slate-700 ${className}`}>
      <QRCodeSVG
        value={value}
        size={size}
        level="H"
        includeMargin={true}
      />
      <span className="typo-tech-label text-slate-800 text-[9px] mt-1 text-center font-bold">
        {label}
      </span>
    </div>
  );
}
