import React from 'react';
import { 
  Heart, 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  Baby, 
  Ship, 
  Blocks, 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Calendar,
  Smile,
  Shield,
  Sun,
  Star,
  Bus,
  ShieldCheck
} from 'lucide-react';
import { SCHOOL_INFO, IMAGES, PROGRAMS, TESTIMONIALS, TRANSPORT_DATA } from '../data/preschoolData';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookTour: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBookTour }) => {
  return (
    <div className="overflow-hidden">
      {/* 2027 Enrollment Announcement Pill Bar */}
      <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white text-xs py-2 px-4 text-center font-bold shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
            New Intake
          </span>
          <span>Enrollment for 2027 is now officially open! Limited spaces per age group.</span>
          <button
            onClick={() => onNavigate('enrollment-2027')}
            className="underline hover:text-amber-200 ml-1 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Reserve a 2027 Spot</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* HERO SECTION - Styled identically to the attached reference photo */}
      <section className="relative bg-[#FAF7F2] pt-8 sm:pt-14 pb-12 sm:pb-16 overflow-hidden">
        {/* Playful Doodles & Background Shapes */}
        <div className="absolute top-10 left-6 text-amber-400/80 pointer-events-none hidden sm:block">
          <Sun className="w-12 h-12 stroke-[1.5] animate-spin duration-1000" style={{ animationDuration: '30s' }} />
        </div>
        <div className="absolute top-28 right-12 text-pink-400/70 pointer-events-none hidden md:block">
          <Star className="w-8 h-8 fill-pink-300 text-pink-400 rotate-12" />
        </div>
        <div className="absolute bottom-16 left-12 text-emerald-400 pointer-events-none hidden lg:block">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M5 25C15 15 25 35 35 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#FA5B88] uppercase">
                  LEARN · PLAY · GROW
                </span>
                <span className="w-6 h-0.5 bg-[#FA5B88] rounded-full" />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-fredoka text-[#2D1660] tracking-tight leading-[1.12]">
                Inspiring Young Minds, <br className="hidden sm:inline" />
                <span className="text-[#FA5B88] inline-block">Building Bright Futures for Them!</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                A joyful place where curiosity grows, creativity shines and every child becomes their best self. Serving families with premier daycare, pre-school, and after-care at 15 Benue St, Lenasia.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenBookTour}
                  className="inline-flex items-center gap-2.5 bg-[#5B34B2] hover:bg-[#492795] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-full shadow-lg shadow-purple-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Book a Free Visit</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('registration')}
                  className="inline-flex items-center gap-2.5 bg-[#FA5B88] hover:bg-[#e04572] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-full shadow-lg shadow-pink-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Register Child</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('enrollment-2027')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#5B34B2] hover:text-[#FA5B88] px-4 py-2 rounded-full hover:bg-white/80 transition-colors border border-purple-200/60"
                >
                  <span>Enrollment 2027 Info</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Feature Highlights with cute rounded pastel badges (matching reference) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-purple-100/80">
                {/* 1. Safe & Nurturing */}
                <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-xs rounded-2xl border border-rose-100 shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#FA5B88] shrink-0">
                    <Heart className="w-5 h-5 fill-rose-100" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Safe & Nurturing</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">Secure home for happy learning</p>
                  </div>
                </div>

                {/* 2. Expert Teachers */}
                <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-xs rounded-2xl border border-emerald-100 shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Expert Teachers</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">Caring educators with heart</p>
                  </div>
                </div>

                {/* 3. Holistic Growth */}
                <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-xs rounded-2xl border border-blue-100 shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Holistic Growth</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">Mind, body & social skills</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Media Column - Happy child with painted hands matching screenshot */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Organic purple blob backdrop behind the child (matching reference) */}
              <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-[#5B34B2] via-[#7B4BD6] to-[#FA5B88] rounded-[45%_55%_65%_35%/50%_45%_55%_50%] opacity-90 blur-xs -z-0 transform rotate-6" />

              {/* Hand-drawn doodles around the photo */}
              <div className="absolute -top-4 -right-2 z-20 bg-amber-400 text-slate-900 p-2.5 rounded-2xl shadow-lg rotate-12 flex items-center gap-1.5 text-xs font-bold font-fredoka">
                <Smile className="w-4 h-4 text-purple-900" />
                <span>Happy Stars!</span>
              </div>

              <div className="absolute -bottom-3 -left-3 z-20 bg-white p-3 rounded-2xl shadow-lg border border-purple-100 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[#5B34B2]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Lenasia ECD</div>
                  <div className="text-xs font-bold text-slate-800">Opens 6 am Mon – Fri</div>
                </div>
              </div>

              {/* Child photo container */}
              <div className="relative z-10 w-[300px] h-[360px] sm:w-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-purple-50">
                <img
                  src={IMAGES.heroChild}
                  alt="Cheerful Maju Stars preschool child with colorful painted hands smiling"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/hero_child.jpg')) {
                      target.src = '/images/hero_child.jpg';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK OPERATING INFO STRIP (Explicit user details) */}
      <section className="bg-white py-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          {/* Quick Operating Details Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-slate-700">
            <div className="flex items-center gap-3 p-3.5 bg-purple-50/70 rounded-2xl border border-purple-100">
              <div className="w-9 h-9 rounded-xl bg-[#5B34B2] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-amber-300" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-900 block truncate">Address in Lenasia</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">{SCHOOL_INFO.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-pink-50/70 rounded-2xl border border-pink-100">
              <div className="w-9 h-9 rounded-xl bg-[#FA5B88] text-white flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-900 block truncate">Direct Telephone</span>
                <a href={`tel:${SCHOOL_INFO.phoneClean}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#FA5B88] truncate block">
                  {SCHOOL_INFO.phone} (Call / WhatsApp)
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-amber-50/70 rounded-2xl border border-amber-100">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block truncate">Operating Hours</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">{SCHOOL_INFO.operatingHoursText}</span>
              </div>
            </div>
          </div>

          {/* MAJOR FEATURED SHOWCASE: DOOR-TO-DOOR TRANSPORT (BIGGER, HIGHLY VISIBLE & NEW ENGAGING LAYOUT) */}
          <div className="bg-gradient-to-br from-[#381E76] via-[#5B34B2] to-[#7B4BD6] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-4 border-amber-300/30 relative overflow-hidden">
            {/* Subtle background glow & decorative bus watermark */}
            <div className="absolute -right-8 -bottom-8 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none hidden lg:block">
              <Bus className="w-48 h-48 text-white" />
            </div>

            <div className="relative z-10">
              {/* Badge & Top Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                  <Bus className="w-4 h-4 text-slate-950" />
                  <span>DOOR-TO-DOOR SCHOOL TRANSPORT</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-amber-300 text-xs font-bold border border-white/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{TRANSPORT_DATA.notice}</span>
                </div>
              </div>

              {/* Headline & Description */}
              <div className="max-w-3xl mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-fredoka text-white leading-tight mb-2">
                  Safe, Reliable Door-to-Door & After-Care Commutes for Your Child
                </h3>
                <p className="text-purple-100 text-xs sm:text-sm md:text-base leading-relaxed">
                  We provide dependable morning home pick-up and afternoon drop-offs directly to 15 Benue St, Lenasia. Operating with vetted, trusted drivers, safety booster seating, and real-time parent updates across 10 serviced areas.
                </p>
              </div>

              {/* Route Pricing Grid - All 10 routes clearly displayed in an attractive cards layout */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Monthly Transport Rates by Suburb / Area:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {TRANSPORT_DATA.routes.map((route) => (
                    <div
                      key={route.id}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 transition-all duration-150 flex flex-col justify-between"
                    >
                      <span className="text-xs font-semibold text-purple-100 block truncate">
                        {route.area}
                      </span>
                      <div className="flex items-baseline justify-between mt-1 pt-1 border-t border-white/15">
                        <span className="text-lg sm:text-xl font-bold font-fredoka text-amber-300">
                          {route.priceFormatted}
                        </span>
                        <span className="text-[10px] text-purple-200">/month</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Badges & Primary Actions */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-4 border-t border-white/20">
                <div className="flex flex-wrap items-center gap-4 text-xs text-purple-100">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Vetted & Police-Cleared Drivers</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Booster Seats & Individual Belts</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-pink-300 shrink-0" />
                    <span>Daily WhatsApp Driver Contact</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <button
                    onClick={() => onNavigate('registration')}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-full shadow-lg shadow-amber-400/25 transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>Register Child with Transport</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`tel:${SCHOOL_INFO.phoneClean}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm rounded-full border border-white/25 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-300" />
                    <span>Call 078 722 7449</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROGRAMS SECTION - Layout matching reference screenshot */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#5B34B2] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5B34B2]" />
              <span>Our Programs</span>
              <span className="w-2 h-2 rounded-full bg-[#5B34B2]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-fredoka text-slate-900 tracking-tight">
              Age-Appropriate Programs for Every Stage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Designed to spark curiosity, build confidence, and nurture emotional intelligence from infant care to primary school after-care.
            </p>
          </div>

          {/* 4 Program Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Baby Little Stars (Purple) */}
            <div className="bg-[#FAF5FF] hover:bg-[#F3E8FF] rounded-3xl p-6 text-center border border-purple-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center mx-auto mb-5 shadow-md shadow-purple-500/25 group-hover:scale-110 transition-transform">
                  <Baby className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-1">
                  Baby Little Stars
                </h3>
                <p className="text-xs text-purple-700 font-bold mb-3">
                  Infants 3 Months – 2 Years
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Gentle sensory stimulation, peaceful nap cots, feeding routines, and loving milestone guidance.
                </p>
              </div>
              <button
                onClick={() => onNavigate('programs')}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#7C3AED] group-hover:text-purple-900 pt-2 border-t border-purple-200/60"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Card 2: Little Explorers (Green/Mint) */}
            <div className="bg-[#F0FDF4] hover:bg-[#DCFCE7] rounded-3xl p-6 text-center border border-emerald-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#16A34A] text-white flex items-center justify-center mx-auto mb-5 shadow-md shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                  <Ship className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-1">
                  Little Explorers
                </h3>
                <p className="text-xs text-emerald-700 font-bold mb-3">
                  Toddlers 2 – 3 Years
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Speech circles, tactile sand and water play, toilet training support, and active movement.
                </p>
              </div>
              <button
                onClick={() => onNavigate('programs')}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#16A34A] group-hover:text-emerald-900 pt-2 border-t border-emerald-200/60"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Card 3: First Steps (Warm Amber) */}
            <div className="bg-[#FFFBEB] hover:bg-[#FEF3C7] rounded-3xl p-6 text-center border border-amber-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#D97706] text-white flex items-center justify-center mx-auto mb-5 shadow-md shadow-amber-500/25 group-hover:scale-110 transition-transform">
                  <Blocks className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-1">
                  First Steps Pre-School
                </h3>
                <p className="text-xs text-amber-700 font-bold mb-3">
                  Pre-School 3 – 5 Years
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  CAPS readiness, Letterland phonics, numbers, mini-science, art, and confident social interactions.
                </p>
              </div>
              <button
                onClick={() => onNavigate('programs')}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#D97706] group-hover:text-amber-900 pt-2 border-t border-amber-200/60"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Card 4: Little Einsteins & After-Care (Soft Pink) */}
            <div className="bg-[#FFF1F2] hover:bg-[#FFE4E6] rounded-3xl p-6 text-center border border-pink-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#E11D48] text-white flex items-center justify-center mx-auto mb-5 shadow-md shadow-rose-500/25 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-1">
                  Little Einsteins
                </h3>
                <p className="text-xs text-rose-700 font-bold mb-3">
                  After-Care 6 – 12 Years
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Lenasia school pickup, warm cooked lunch, quiet homework check, tutoring, and outdoor sports.
                </p>
              </div>
              <button
                onClick={() => onNavigate('programs')}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#E11D48] group-hover:text-rose-900 pt-2 border-t border-rose-200/60"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SPOTLIGHT - Matching photo grid & pink badge from reference image */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#FA5B88] uppercase tracking-widest block mb-2">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-fredoka text-[#2D1660] tracking-tight">
              Nurturing Genius in Every Child
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              We focus on the individual potential of each child and provide meaningful experiences that inspire a lifelong love for learning and life.
            </p>
          </div>

          {/* 3-Image Grid with Playful Accents & Badge */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Photo 1: Toddlers building blocks */}
              <div className="relative rounded-3xl overflow-hidden shadow-md group bg-purple-50">
                <img
                  src={IMAGES.blocksPlay}
                  alt="Preschool kids playing with blocks in classroom"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/blocks_play.jpg')) {
                      target.src = '/images/blocks_play.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold">Sensory & Fine Motor Mastery</span>
                </div>
              </div>

              {/* Photo 2: Storytime reading corner */}
              <div className="relative rounded-3xl overflow-hidden shadow-md group bg-purple-50">
                <img
                  src={IMAGES.readingStory}
                  alt="Teacher reading book to young children"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/reading_story.jpg')) {
                      target.src = '/images/reading_story.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold">Phonics & Story Circles</span>
                </div>
              </div>

              {/* Photo 3: Outdoor playground joy */}
              <div className="relative rounded-3xl overflow-hidden shadow-md group bg-purple-50">
                <img
                  src={IMAGES.outdoorPlay}
                  alt="Happy preschool kids playing outdoors on grass"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/outdoor_kids.jpg')) {
                      target.src = '/images/outdoor_kids.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold">Healthy Outdoor Play</span>
                </div>
              </div>
            </div>

            {/* Pink Highlight Pill Overlay (Matching reference: "Where Curiosity Meets Confidence") */}
            <div className="mt-8 flex justify-center">
              <div className="bg-[#FA5B88] text-white px-6 py-3 rounded-full shadow-lg shadow-pink-500/25 flex items-center gap-3 font-fredoka text-sm sm:text-base font-bold text-center">
                <Sparkles className="w-5 h-5 text-yellow-300 shrink-0" />
                <span>Where Curiosity Meets Confidence</span>
                <Sparkles className="w-5 h-5 text-yellow-300 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE US - Numbered Cards 01, 02, 03 (Matching reference image) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
              <span>➔</span>
              <span>Why Families Choose Us</span>
              <span>←</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-fredoka text-slate-900 tracking-tight">
              Peace of Mind for Lenasia Parents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 01 Caring Professionals */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-purple-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-[#5B34B2] text-white font-fredoka font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-purple-500/20">
                01
              </div>
              <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-2">
                Caring Professionals
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Highly trained, certified, and loving teachers with years of early childhood development experience and pediatric first-aid certification.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#5B34B2]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Police Cleared & Vetted Staff</span>
              </div>
            </div>

            {/* 02 Personalized Learning */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-emerald-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-fredoka font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20">
                02
              </div>
              <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-2">
                Personalized Learning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Curriculum tailored to every child's unique needs, milestones, and learning pace so no child is ever left behind or hurried.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Term Progress Portfolios & Reports</span>
              </div>
            </div>

            {/* 03 Safe & Happy Environment */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-fredoka font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                03
              </div>
              <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-2">
                Safe & Happy Environment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                A clean, secure, and joyful space with 24/7 CCTV surveillance, biometric gate access, hygienic cots, and lush outdoor play lawn.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Hygienic Cooked Meals & Nutritious Snacks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2027 ENROLLMENT SPOTLIGHT BANNER */}
      <section className="py-12 bg-gradient-to-r from-purple-900 via-[#5B34B2] to-[#7B4BD6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-amber-400 text-slate-900 rounded-full text-xs font-extrabold uppercase tracking-wider">
                Admissions 2027 Now Open
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-fredoka text-white">
                Reserve Your Child's Space for the 2027 School Year
              </h3>
              <p className="text-purple-100 text-sm max-w-2xl">
                Avoid the late rush. Early bird enrollment guarantees your child's placement in Baby Care, Toddler Groups, or Grade R Readiness.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('enrollment-2027')}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm rounded-full shadow-lg shadow-amber-400/25 transition-transform hover:scale-105"
              >
                View 2027 Fees & Dates
              </button>
              <button
                onClick={() => onNavigate('registration')}
                className="px-6 py-3 bg-white text-[#5B34B2] hover:bg-purple-50 font-bold text-sm rounded-full transition-transform hover:scale-105"
              >
                Register Online Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS FROM LOCAL PARENTS */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold text-[#5B34B2] uppercase tracking-widest block mb-2">
              Parent Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-fredoka text-slate-900">
              Loved by Families Across Lenasia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-xs border border-purple-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed mb-6">
                    "{t.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-slate-900">{t.name}</div>
                  <div className="text-xs text-[#5B34B2] font-semibold">{t.role}</div>
                  <div className="text-[11px] text-slate-400">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM PURPLE WAVE BANNER - Matching bottom banner in the reference image */}
      <section className="relative bg-[#5B34B2] text-white pt-16 pb-16 overflow-hidden">
        {/* Paper airplane doodle */}
        <div className="absolute top-8 right-12 text-white/30 pointer-events-none hidden sm:block rotate-12">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold font-fredoka text-white">
              Start Your Child's Journey Today!
            </h2>
            <p className="text-purple-200 text-sm max-w-lg">
              Schedule a visit and see the magic of learning in action at 15 Benue St, Lenasia.
            </p>
          </div>

          <button
            onClick={onOpenBookTour}
            className="inline-flex items-center gap-2 bg-[#FFCA28] hover:bg-[#ffc107] text-slate-900 text-base font-extrabold px-8 py-4 rounded-full shadow-xl transition-all duration-150 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>Book a Free Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
