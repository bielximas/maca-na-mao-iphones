import React, { useState } from 'react';

interface DeviceMockupProps {
  modelId: number | string;
  name: string;
  type?: 'standard' | 'pro' | 'pro-max' | 'ipad' | 'watch' | 'acessorios' | 'hero';
  colorHex?: string;
  accentHex?: string;
  className?: string;
  imageSrc?: string;
  tilted?: boolean;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  modelId,
  name,
  type = 'standard',
  colorHex = '#6624D8',
  accentHex = '#FF3C91',
  className = '',
  imageSrc,
  tilted = true,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isPro = type === 'pro' || type === 'pro-max';
  const numId = typeof modelId === 'number' ? modelId : parseInt(modelId, 10) || 15;

  return (
    <div
      className={`relative flex items-center justify-center select-none transition-transform duration-500 ${
        tilted ? 'rotate-[-3deg] hover:rotate-0 hover:scale-105' : ''
      } ${className}`}
    >
      {/* If real image provided and loaded successfully */}
      {imageSrc && !imgError && (
        <img
          src={imageSrc}
          alt={name}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0 absolute'
          }`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      )}

      {/* High-fidelity Vector Device Render (Fallback / Native Apple Showcase) */}
      {(!imageSrc || imgError || !imgLoaded) && (
        <svg
          viewBox="0 0 280 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[380px] drop-shadow-2xl filter"
        >
          <defs>
            {/* Outer metallic chassis border */}
            <linearGradient id={`chassis-${numId}-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="35%" stopColor={accentHex} />
              <stop offset="70%" stopColor={colorHex} />
              <stop offset="100%" stopColor="#1E1735" />
            </linearGradient>

            {/* Backplate subtle frosted glass finish */}
            <linearGradient id={`backplate-${numId}-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorHex} />
              <stop offset="45%" stopColor={accentHex} stopOpacity="0.85" />
              <stop offset="100%" stopColor="#161228" />
            </linearGradient>

            {/* Glass reflection beam */}
            <linearGradient id={`glassReflect-${numId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.08" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.15" />
            </linearGradient>

            {/* Camera bump glass */}
            <radialGradient id={`camBump-${numId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#140F27" stopOpacity="0.6" />
            </radialGradient>

            {/* Lens optical glass */}
            <radialGradient id={`lensGlass-${numId}`} cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#4A148C" />
              <stop offset="45%" stopColor="#1A237E" />
              <stop offset="100%" stopColor="#080612" />
            </radialGradient>

            {/* Drop shadow */}
            <filter id={`shadow-${numId}`} x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#6624D8" floodOpacity="0.28" />
            </filter>
          </defs>

          {/* Device Outer Frame (Chassis) */}
          <rect
            x="20"
            y="20"
            width="240"
            height="420"
            rx="42"
            fill={`url(#chassis-${numId}-${type})`}
            filter={`url(#shadow-${numId})`}
          />

          {/* Internal Body Backplate */}
          <rect
            x="24"
            y="24"
            width="232"
            height="412"
            rx="38"
            fill={`url(#backplate-${numId}-${type})`}
          />

          {/* Diagonal Glass Reflection */}
          <path
            d="M24 62C24 41.01 41.01 24 62 24H180L24 180V62Z"
            fill={`url(#glassReflect-${numId})`}
          />
          <path
            d="M100 436L256 280V398C256 418.99 238.99 436 218 436H100Z"
            fill={`url(#glassReflect-${numId})`}
            opacity="0.6"
          />

          {/* Side Buttons Subtle Accents */}
          {/* Volume buttons on left */}
          <rect x="17" y="110" width="3" height="36" rx="1.5" fill="#E2E8F0" opacity="0.6" />
          <rect x="17" y="156" width="3" height="36" rx="1.5" fill="#E2E8F0" opacity="0.6" />
          {/* Action button / power button on right */}
          <rect x="260" y="125" width="3" height="58" rx="1.5" fill="#E2E8F0" opacity="0.7" />

          {/* Camera Bump (Rounded Island) */}
          <rect
            x="42"
            y="42"
            width={isPro ? "96" : "84"}
            height={isPro ? "96" : "84"}
            rx="24"
            fill={`url(#camBump-${numId})`}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />

          {/* Camera Lenses based on Generation and Pro/Standard */}
          {isPro ? (
            // Pro Trio Lenses
            <g>
              {/* Lens 1 - Top Left */}
              <circle cx="67" cy="67" r="18" fill="#1C182B" stroke="#94A3B8" strokeWidth="2" />
              <circle cx="67" cy="67" r="15" fill={`url(#lensGlass-${numId})`} />
              <circle cx="63" cy="63" r="4" fill="#FFFFFF" opacity="0.8" />

              {/* Lens 2 - Bottom Left */}
              <circle cx="67" cy="111" r="18" fill="#1C182B" stroke="#94A3B8" strokeWidth="2" />
              <circle cx="67" cy="111" r="15" fill={`url(#lensGlass-${numId})`} />
              <circle cx="63" cy="107" r="4" fill="#FFFFFF" opacity="0.8" />

              {/* Lens 3 - Right Center */}
              <circle cx="111" cy="89" r="18" fill="#1C182B" stroke="#94A3B8" strokeWidth="2" />
              <circle cx="111" cy="89" r="15" fill={`url(#lensGlass-${numId})`} />
              <circle cx="107" cy="85" r="4" fill="#FFFFFF" opacity="0.8" />

              {/* True Tone Flash */}
              <circle cx="111" cy="58" r="7" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1" />
              <circle cx="111" cy="58" r="4" fill="#F59E0B" opacity="0.6" />

              {/* LiDAR Scanner Sensor */}
              <circle cx="111" cy="118" r="6" fill="#0A0814" stroke="#475569" strokeWidth="1" />
            </g>
          ) : numId === 16 ? (
            // iPhone 16 Vertical Dual Lens
            <g>
              <rect x="52" y="50" width="34" height="68" rx="17" fill="rgba(255,255,255,0.15)" />
              <circle cx="69" cy="67" r="14" fill="#1C182B" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="69" cy="67" r="11" fill={`url(#lensGlass-${numId})`} />
              <circle cx="66" cy="64" r="3" fill="#FFFFFF" opacity="0.8" />

              <circle cx="69" cy="101" r="14" fill="#1C182B" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="69" cy="101" r="11" fill={`url(#lensGlass-${numId})`} />
              <circle cx="66" cy="98" r="3" fill="#FFFFFF" opacity="0.8" />

              {/* Flash */}
              <circle cx="108" cy="84" r="6" fill="#FEF3C7" />
            </g>
          ) : numId >= 13 ? (
            // Diagonal Dual Lenses (iPhone 13, 14, 15)
            <g>
              {/* Top-Left Lens */}
              <circle cx="64" cy="64" r="16" fill="#1C182B" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="64" cy="64" r="13" fill={`url(#lensGlass-${numId})`} />
              <circle cx="61" cy="61" r="3.5" fill="#FFFFFF" opacity="0.8" />

              {/* Bottom-Right Lens */}
              <circle cx="104" cy="104" r="16" fill="#1C182B" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="104" cy="104" r="13" fill={`url(#lensGlass-${numId})`} />
              <circle cx="101" cy="101" r="3.5" fill="#FFFFFF" opacity="0.8" />

              {/* Flash on Top-Right */}
              <circle cx="104" cy="64" r="7" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1" />

              {/* Mic pinhole */}
              <circle cx="64" cy="104" r="3" fill="#0A0814" />
            </g>
          ) : (
            // Vertical Dual Lenses (iPhone 11, 12)
            <g>
              <circle cx="64" cy="64" r="16" fill="#1C182B" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="64" cy="64" r="13" fill={`url(#lensGlass-${numId})`} />
              <circle cx="61" cy="61" r="3.5" fill="#FFFFFF" opacity="0.8" />

              <circle cx="64" cy="104" r="16" fill="#1C182B" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="64" cy="104" r="13" fill={`url(#lensGlass-${numId})`} />
              <circle cx="61" cy="101" r="3.5" fill="#FFFFFF" opacity="0.8" />

              {/* Flash */}
              <circle cx="104" cy="84" r="7" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1" />
            </g>
          )}

          {/* Minimalist Apple-inspired Centered Monogram / Brand Icon */}
          <g transform="translate(140, 230)">
            <circle cx="0" cy="0" r="18" fill="rgba(255, 255, 255, 0.22)" />
            <path
              d="M-8 8V-8L0 -1L8 -8V8"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
          </g>

          {/* Model Identification Text */}
          <text
            x="140"
            y="370"
            textAnchor="middle"
            fill="rgba(255, 255, 255, 0.75)"
            fontSize="12"
            fontWeight="600"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.05em"
          >
            {name.toUpperCase()}
          </text>
          <text
            x="140"
            y="386"
            textAnchor="middle"
            fill="rgba(255, 255, 255, 0.45)"
            fontSize="9"
            fontWeight="500"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.08em"
          >
            MACA NA MÃO · SAQUAREMA
          </text>
        </svg>
      )}
    </div>
  );
};
