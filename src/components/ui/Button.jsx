import React from 'react';

/**
 * CableSpec Standardized Button Component
 */
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon = null, 
  className = '', 
  onClick, 
  disabled = false, 
  type = 'button' 
}) {
  const baseStyle = "inline-flex items-center justify-center font-mono font-bold tracking-wider rounded transition-all duration-200 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed active:scale-95";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-[11px]",
    md: "px-4 py-2 text-xs",
    lg: "px-6 py-3 text-sm"
  };

  const variantStyles = {
    primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md shadow-cyan-500/20",
    secondary: "bg-[#121e2d] text-slate-200 border border-[#1d2e45] hover:bg-[#162436] hover:text-white",
    pass: "bg-emerald-950/60 text-emerald-400 border border-emerald-500/60 hover:bg-emerald-900/60",
    danger: "bg-red-950/60 text-red-400 border border-red-500/60 hover:bg-red-900/60",
    outline: "bg-transparent text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 mr-2 flex-shrink-0" />}
      <span>{children}</span>
    </button>
  );
}
