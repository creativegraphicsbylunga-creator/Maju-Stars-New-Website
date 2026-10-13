import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Sun, 
  Award, 
  Smile, 
  Utensils, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { SCHOOL_INFO, IMAGES } from '../data/preschoolData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookTour: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBookTour }) => {
  const routineItems = [
    { time: '06:00 – 07:45', title: 'Early Star Arrival & Quiet Play', desc: 'Doors open early for commuting parents. Calm sensory play, books, and soft music.' },
    { time: '07:45 – 08:15', title: 'Warm Morning Breakfast', desc: 'Freshly prepared warm porridge/oats, toast, and milk to kickstart brain energy.' },
    { time: '08:15 – 08:45', title: 'Morning Ring & Welcome Circle', desc: 'Theme of the week discussion, weather chart, calendar, alphabet songs, and prayer/affirmations.' },
    { time: '08:45 – 10:00', title: 'Curriculum & Fine Motor Activities', desc: 'CAPS-aligned foundational phonics, early numeracy, finger painting, clay sculpting & logic puzzles.' },
    { time: '10:00 – 10:30', title: 'Fruit Break & Hydration', desc: 'Fresh seasonal sliced fruit, wholewheat sandwiches, and rooibos tea.' },
    { time: '10:30 – 11:30', title: 'Supervised Outdoor Gross Motor Play', desc: 'Jungle gym climbing, balance beams, tricycle riding, sandpit castles, and joyful team games.' },
    { time: '11:30 – 12:30', title: 'Storybook Hour & Hot Cooked Lunch', desc: 'Interactive teacher storytelling followed by a hearty cooked halaal meal with protein & vegetables.' },
    { time: '12:30 – 14:00', title: 'Peaceful Rest & Cot Naptime', desc: 'Dimmed lights, cozy individual cots, and soothing lullabies for restorative afternoon rest.' },
    { time: '14:00 – 15:30', title: 'After-Care Arrival & Homework Club', desc: 'Primary schoolers arrive from Lenasia schools; supervised homework verification and reading tutor sessions.' },
    { time: '15:30 – 16:00', title: 'Afternoon Refreshment', desc: 'Healthy afternoon snack, fruit slices, and clean water.' },
    { time: '16:00 – 18:00', title: 'Creative Stations & Parent Pickups', desc: 'Board games, free coloring, outdoor soccer, and warm parent collection until 18:00.' }
  ];

  return (
    <div className="py-10 bg-white">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-r from-[#FAF7F2] to-purple-50 rounded-3xl p-8 sm:p-12 border border-purple-100 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-extrabold text-[#FA5B88] uppercase tracking-widest block">
              About Maju Stars
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-fredoka text-[#2D1660] leading-tight">
              A Second Home Filled with Love, Laughter & Learning
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Situated in the heart of Lenasia at <strong>15 Benue St</strong>, Maju Stars Pre-School, Daycare and After-care Centre was founded on a simple belief: every child is a star waiting to shine bright.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenBookTour}
                className="px-6 py-3 bg-[#5B34B2] hover:bg-[#492795] text-white font-bold text-sm rounded-full shadow-md transition-colors"
              >
                Schedule a Visit
              </button>
              <button
                onClick={() => onNavigate('registration')}
                className="px-6 py-3 bg-[#FA5B88] hover:bg-[#e04572] text-white font-bold text-sm rounded-full shadow-md transition-colors"
              >
                Enroll Your Child
              </button>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-6 -bottom-8 w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <img
              src={IMAGES.readingStory}
              alt="Teacher reading with smiling preschool children"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('/images/reading_story.jpg')) {
                  target.src = '/images/reading_story.jpg';
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* CORE VALUES & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#5B34B2] uppercase tracking-widest block mb-2">
            Our Pillars
          </span>
          <h2 className="text-3xl font-bold font-fredoka text-slate-900">
            Why Our Approach Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#FAF5FF] border border-purple-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#5B34B2] text-white flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-fredoka text-slate-900">Nurturing & Emotional Safety</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Children learn best when they feel safe and loved. Our educators greet every child by name and build high self-esteem through positive reinforcement.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F0FDF4] border border-emerald-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-fredoka text-slate-900">Play-Based Discovery</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Play is serious work for young minds. Our hands-on experiments, messy play, and tactile games cultivate organic problem-solving skills and creativity.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FFFBEB] border border-amber-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-fredoka text-slate-900">Community & Trust</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Proudly embedded in Lenasia. We maintain an open-door policy for parents and communicate continuously with daily diaries and term conferences.
            </p>
          </div>
        </div>
      </section>

      {/* DAILY ROUTINE TIMELINE */}
      <section className="bg-[#FAF8F5] py-16 mb-20 border-y border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#FA5B88] uppercase tracking-widest block mb-2">
              A Day in the Life
            </span>
            <h2 className="text-3xl font-bold font-fredoka text-slate-900">
              Our Structured Daily Routine
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Balanced rhythm of mental focus, creative exploration, active play, wholesome meals, and peaceful rest.
            </p>
          </div>

          <div className="space-y-4">
            {routineItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-purple-100/80 shadow-2xs hover:border-[#5B34B2] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-purple-100 text-[#5B34B2] rounded-xl text-xs font-bold whitespace-nowrap">
                    {item.time}
                  </span>
                  <h4 className="text-sm font-bold text-slate-800 font-fredoka">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 sm:text-right max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH, SAFETY & NUTRITION STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold text-[#5B34B2] uppercase tracking-widest block mb-2">
              High Standards
            </span>
            <h2 className="text-3xl font-bold font-fredoka text-slate-900 mb-4">
              Uncompromising Safety, Hygiene & Wholesome Meals
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              At Maju Stars, we treat every child with the utmost care and vigilance. Our premises on Benue Street are designed specifically for infant and toddler safety.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Strict Access Control & CCTV</h4>
                  <p className="text-xs text-slate-500">Manned security gate, monitored visitor log, and strict authorization protocols for child pick-up.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Certified Pediatric First Aid</h4>
                  <p className="text-xs text-slate-500">Every teacher and assistant holds an up-to-date CPR and early childhood first aid certification.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Fresh Cooked Halaal Meals</h4>
                  <p className="text-xs text-slate-500">Prepared fresh on site daily by our qualified cook, accommodating allergies and dietary requirements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sanitized Daily Play Facilities</h4>
                  <p className="text-xs text-slate-500">Non-toxic medical grade sanitizers used daily on all cots, toys, and activity tables.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src={IMAGES.outdoorPlay}
              alt="Outdoor play area and children running safely"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('/images/outdoor_kids.jpg')) {
                  target.src = '/images/outdoor_kids.jpg';
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* QUICK VISIT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#5B34B2] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-fredoka">
              Ready to meet our educators?
            </h3>
            <p className="text-purple-200 text-xs sm:text-sm mt-1">
              We would love to show you around 15 Benue St, Lenasia!
            </p>
          </div>
          <button
            onClick={onOpenBookTour}
            className="px-6 py-3.5 bg-[#FFCA28] hover:bg-[#ffc107] text-slate-900 font-bold text-sm rounded-full shadow-lg transition-transform hover:scale-105 shrink-0"
          >
            Book Your Free Tour Now
          </button>
        </div>
      </section>
    </div>
  );
};
