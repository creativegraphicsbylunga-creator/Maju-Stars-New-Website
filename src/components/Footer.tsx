import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  Heart, 
  Calendar, 
  FileText, 
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/preschoolData';
import { PageId } from '../types';
import { MajuStarsLogo } from './MajuStarsLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBookTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookTour }) => {
  return (
    <footer className="relative bg-[#381E76] text-white pt-16 pb-12 overflow-hidden border-t-8 border-[#FA5B88]">
      {/* Decorative background stars / shapes */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 bg-pink-600/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-purple-400/20">
          {/* Brand & Ethos */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer" onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <MajuStarsLogo variant="white" size="md" />
            </div>

            <p className="text-purple-100 text-xs sm:text-sm leading-relaxed">
              Inspiring young minds and building bright futures in Lenasia. A safe, loving, and stimulating home away from home where every child is celebrated.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="inline-flex items-center gap-1.5 bg-[#492795] text-amber-300 px-3 py-1 rounded-full border border-purple-400/30 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>ECD Registered Centre</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#492795] text-pink-200 px-3 py-1 rounded-full border border-purple-400/30 font-medium">
                <Award className="w-3.5 h-3.5 text-[#FA5B88]" />
                <span>Lenasia Established</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-fredoka">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-purple-100">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#FA5B88]" /> Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#FA5B88]" /> About Our School
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('programs')} 
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#FA5B88]" /> Programs & Daycare
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('enrollment-2027')} 
                  className="text-amber-200 font-bold hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400" /> Enrollment 2027
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('registration')} 
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#FA5B88]" /> Child Registration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('calendar')} 
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#FA5B88]" /> Year Events Calendar
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Address & Phone Explicit Requirements) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-fredoka">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs text-purple-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FA5B88] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Physical Address:</strong>
                  <span>{SCHOOL_INFO.address}</span>
                  <span className="block text-purple-300 text-[11px]">Gauteng, South Africa</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Direct Telephone:</strong>
                  <a 
                    href={`tel:${SCHOOL_INFO.phoneClean}`}
                    className="hover:text-amber-300 transition-colors font-bold text-sm tracking-wide text-white"
                  >
                    {SCHOOL_INFO.phone}
                  </a>
                  <span className="block text-purple-300 text-[11px]">Voice calls & WhatsApp</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Email Queries:</strong>
                  <span>{SCHOOL_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours Box (Explicit Requirement) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-fredoka">
              Operating Hours
            </h4>
            
            <div className="bg-[#2D1660] p-4 rounded-2xl border border-purple-400/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Closed · Opens 6 am Mon</span>
              </div>

              <div className="space-y-1 pt-1 text-[11px] text-purple-200">
                <div className="flex justify-between">
                  <span>Mon – Fri:</span>
                  <strong className="text-white">06:00 – 18:00</strong>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-purple-300">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-purple-300">Closed</span>
                </div>
                <div className="text-[10px] text-purple-300 pt-1 border-t border-purple-400/20 italic">
                  Early morning 6:00 AM drop-offs for working commuters.
                </div>
              </div>

              <button
                onClick={onOpenBookTour}
                className="w-full mt-2 py-2 bg-[#FA5B88] hover:bg-[#e04572] text-white text-xs font-bold rounded-xl transition-colors shadow-md shadow-pink-600/20 text-center"
              >
                Book a Free Campus Tour
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300">
          <p>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('enrollment-2027')} className="hover:text-white transition-colors">
              2027 Enrollment Open
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Lenasia Campus Map
            </button>
            <span>·</span>
            <span className="flex items-center gap-1 text-pink-300">
              Made with <Heart className="w-3 h-3 fill-pink-400 text-pink-400" /> for our little stars
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
