import React from 'react';

export const EXACT_LOGO_URL = 'https://flamingodesignssa.co.za/wp-content/uploads/2026/10/mAJU-STARS-LOGO.png';
export const LOCAL_FALLBACK_URL = '/maju_stars_logo.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official mAJU STARS PRE-SCHOOL & DAYCARE Logo
 * Renders the exact image URL specified by the user:
 * https://flamingodesignssa.co.za/wp-content/uploads/2026/10/mAJU-STARS-LOGO.png
 */
export const MajuStarsLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-13',
    lg: 'h-14 sm:h-16',
    xl: 'h-16 sm:h-20'
  };

  const isWhite = variant === 'white';

  if (isWhite) {
    return (
      <div className={`inline-flex items-center bg-white/95 hover:bg-white px-3 py-1.5 rounded-xl shadow-xs transition-all duration-200 ${className}`}>
        <img
          src={EXACT_LOGO_URL}
          alt="mAJU STARS PRE-SCHOOL, DAYCARE & AFTER-CARE"
          className={`${heightMap[size] || heightMap.md} w-auto object-contain shrink-0`}
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = LOCAL_FALLBACK_URL;
          }}
        />
      </div>
    );
  }

  return (
    <img
      src={EXACT_LOGO_URL}
      alt="mAJU STARS PRE-SCHOOL, DAYCARE & AFTER-CARE"
      className={`${heightMap[size] || heightMap.md} w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-[1.02] ${className}`}
      loading="eager"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = LOCAL_FALLBACK_URL;
      }}
    />
  );
};

export default MajuStarsLogo;
