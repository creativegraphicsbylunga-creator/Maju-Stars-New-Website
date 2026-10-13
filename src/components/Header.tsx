import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Sparkles, 
  Calendar as CalendarIcon, 
  FileText, 
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/preschoolData';
import { PageId } from '../types';
import { MajuStarsLogo } from './MajuStarsLogo';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBookTour: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBookTour
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'enrollment-2027', label: 'Enrollment 2027', badge: 'Open' },
    { id: 'registration', label: 'Child Registration' },
    { id: 'calendar', label: 'Events Calendar' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-purple-100">
      {/* Top Banner - Purple Bar matching the reference screenshot */}
      <div className="bg-[#5B34B2] text-white text-xs sm:text-sm py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Socials / Location info */}
          <div className="flex items-center gap-3 text-purple-200">
            <span className="hidden sm:inline font-medium text-white/90">Lenasia ECD Centre</span>
            <span className="hidden sm:inline text-purple-300">·</span>
            <span className="flex items-center gap-1.5 text-xs text-purple-100">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>15 Benue St, Lenasia</span>
            </span>
          </div>

          {/* Center: Slogan */}
          <div className="hidden md:flex items-center gap-2 text-amber-300 font-medium text-xs tracking-wide">
            <span>★</span>
            <span className="text-white font-semibold">Learning today, leading tomorrow</span>
            <span>★</span>
          </div>

          {/* Right: Operating Hours & Direct Call */}
          <div className="flex items-center gap-4 text-xs font-medium ml-auto sm:ml-0">
            <div className="hidden lg:flex items-center gap-1.5 bg-[#492795] px-2.5 py-0.5 rounded-full text-amber-200 border border-purple-400/30">
              <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Closed · Opens 6 am Mon</span>
            </div>

            <a 
              href={`tel:${SCHOOL_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="tracking-tight">{SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand / Logo lockup */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left group focus:outline-hidden transition-opacity hover:opacity-95"
          aria-label="Maju Stars Pre-School Home"
        >
          <MajuStarsLogo size="md" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 whitespace-nowrap ${
                  isActive
                    ? 'text-[#5B34B2] bg-purple-50 font-bold'
                    : 'text-slate-600 hover:text-[#5B34B2] hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.2 text-[10px] font-bold bg-[#FA5B88] text-white rounded-full uppercase tracking-wider">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#5B34B2] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => handleNavClick('registration')}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-[#5B34B2] hover:text-[#452391] px-3 py-2 rounded-xl hover:bg-purple-50 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Registration</span>
          </button>

          <button
            onClick={onOpenBookTour}
            className="inline-flex items-center gap-2 bg-[#FA5B88] hover:bg-[#e04572] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md shadow-pink-500/25 hover:shadow-lg transition-all duration-150 active:scale-95 group"
          >
            <span>Book a Tour</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onOpenBookTour}
            className="sm:hidden text-xs bg-[#FA5B88] text-white font-bold px-3 py-1.5 rounded-full"
          >
            Book Tour
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-purple-900 rounded-lg hover:bg-slate-100 transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1.5 mb-4">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-purple-50 text-[#5B34B2] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-[#FA5B88] text-white rounded-full uppercase">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-3 bg-purple-50 rounded-2xl mb-4 border border-purple-100">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-900 mb-1">
              <Clock className="w-3.5 h-3.5 text-purple-700" />
              <span>Hours: Closed · Opens 6 am Mon</span>
            </div>
            <div className="text-xs text-slate-600">
              Address: 15 Benue St, Lenasia, 1821
            </div>
            <div className="text-xs text-slate-600 mt-1 font-semibold">
              Phone: {SCHOOL_INFO.phone}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleNavClick('registration')}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-100 text-[#5B34B2] font-bold text-xs"
            >
              <FileText className="w-4 h-4" />
              <span>Register Child</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookTour();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FA5B88] text-white font-bold text-xs shadow-md shadow-pink-500/20"
            >
              <span>Book a Tour</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
