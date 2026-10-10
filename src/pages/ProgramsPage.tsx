import React, { useState } from 'react';
import { 
  Baby, 
  Ship, 
  Blocks, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Utensils, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  Music,
  Activity,
  Palette
} from 'lucide-react';
import { PROGRAMS, SCHOOL_INFO } from '../data/preschoolData';
import { PageId } from '../types';

interface ProgramsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookTour: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate, onOpenBookTour }) => {
  const [selectedTab, setSelectedTab] = useState<string>('all');

  const extraMurals = [
    { title: 'Little Kickers & Ball Skills', icon: Activity, desc: 'Gross motor coordination, balance, agility, and team camaraderie led by qualified coaches.' },
    { title: 'Little Picassos Art & Pottery', icon: Palette, desc: 'Messy sensory paint workshops, tactile clay modeling, and color theory exploration.' },
    { title: 'Music, Rhythm & Dance', icon: Music, desc: 'Percussion instruments, nursery rhyme action songs, and body balance coordination.' },
    { title: 'Junior Phonics & Speech Club', icon: Blocks, desc: 'Letterland fun, vocabulary enrichment, and expressive public storytelling.' }
  ];

  const weeklyMenu = [
    { day: 'Monday', breakfast: 'Warm Jungle Oats with honey & cinnamon', lunch: 'Tender chicken & sweet butternut stew with brown rice', snack: 'Seasonal sliced apples & rooibos tea' },
    { day: 'Tuesday', breakfast: 'Maltabella porridge with fresh milk', lunch: 'Cheesy wholewheat macaroni with hidden vegetable puree', snack: 'Banana bread slice & orange segments' },
    { day: 'Wednesday', breakfast: 'Scrambled eggs with wholewheat toast', lunch: 'Lean savory beef mince with peas, carrots & fluffy potato mash', snack: 'Watermelon wedges & cheddar cheese cubes' },
    { day: 'Thursday', breakfast: 'Warm creamy Morvite porridge', lunch: 'Hearty yellow lentil dahl & vegetable pot with soft roti or rice', snack: 'Crispy carrot & cucumber sticks with dip' },
    { day: 'Friday', breakfast: 'French toast sticks with warm milk', lunch: 'Crispy baked fish fillet with sweet potato wedges & garden corn', snack: 'Fresh fruit salad & digestive biscuits' }
  ];

  const filteredPrograms = selectedTab === 'all' 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.id === selectedTab);

  return (
    <div className="py-10 bg-white">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-[#5B34B2] uppercase tracking-widest block">
            Academic & Care Pathways
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-fredoka text-slate-900">
            Nurturing Every Milestone from Infancy to Primary School
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our specialized programs are designed around developmental milestones, ensuring tailored care, sensory growth, and school readiness in Lenasia.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                selectedTab === 'all'
                  ? 'bg-[#5B34B2] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Programs
            </button>
            {PROGRAMS.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setSelectedTab(prog.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                  selectedTab === prog.id
                    ? 'bg-[#5B34B2] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              >
                {prog.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PROGRAM CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="space-y-8">
          {filteredPrograms.map((prog) => {
            const isPurple = prog.colorTheme === 'purple';
            const isGreen = prog.colorTheme === 'green';
            const isAmber = prog.colorTheme === 'amber';
            const isPink = prog.colorTheme === 'pink';

            const bgClass = isPurple ? 'bg-purple-50/70 border-purple-200' :
              isGreen ? 'bg-emerald-50/70 border-emerald-200' :
              isAmber ? 'bg-amber-50/70 border-amber-200' :
              'bg-rose-50/70 border-rose-200';

            const badgeBg = isPurple ? 'bg-[#5B34B2]' :
              isGreen ? 'bg-emerald-600' :
              isAmber ? 'bg-amber-600' :
              'bg-[#FA5B88]';

            return (
              <div
                key={prog.id}
                className={`rounded-3xl border p-6 sm:p-8 ${bgClass} transition-all duration-200 hover:shadow-xl`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${badgeBg}`}>
                        {prog.ageGroup}
                      </span>
                      <span className="text-xs font-bold text-slate-600">
                        {prog.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-fredoka text-slate-900">
                      {prog.name}
                    </h3>

                    <p className="text-slate-700 text-sm leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="bg-white/80 p-3 rounded-2xl border border-slate-200/60 inline-flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{prog.highlight}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {prog.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column Fee & Actions */}
                  <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 text-center lg:text-left">
                    <div>
                      <div className="text-[11px] font-bold uppercase text-slate-400">Hours</div>
                      <div className="text-xs font-bold text-slate-800 flex items-center justify-center lg:justify-start gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-[#5B34B2]" />
                        <span>{prog.schedule}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase text-slate-400">Monthly Tuition</div>
                      <div className="text-2xl font-bold font-fredoka text-[#5B34B2]">
                        R{prog.monthlyFee.toLocaleString()}
                        <span className="text-xs font-normal text-slate-500"> / month</span>
                      </div>
                      <div className="text-[10px] text-slate-500">All cooked meals & snacks included</div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <button
                        onClick={() => onNavigate('registration')}
                        className="w-full py-2.5 bg-[#5B34B2] hover:bg-[#492795] text-white rounded-xl text-xs font-bold shadow-md transition-colors"
                      >
                        Register for this Program
                      </button>
                      <button
                        onClick={onOpenBookTour}
                        className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
                      >
                        Book a Tour First
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* EXTRA-MURAL ACTIVITIES */}
      <section className="bg-[#FAF7F2] py-16 mb-20 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#FA5B88] uppercase tracking-widest block mb-2">
              Beyond the Classroom
            </span>
            <h2 className="text-3xl font-bold font-fredoka text-slate-900">
              Exciting Extra-Mural Activities
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Encouraging physical agility, rhythm, and artistic talents through after-care enrichment clubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraMurals.map((act, i) => {
              const Icon = act.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#5B34B2] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold font-fredoka text-slate-900">
                    {act.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAMPLE WEEKLY NUTRITION & MENU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">
            <Utensils className="w-4 h-4 text-emerald-600" />
            <span>Wholesome Nutrition</span>
          </div>
          <h2 className="text-3xl font-bold font-fredoka text-slate-900">
            Sample Weekly Halaal Menu
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Prepared fresh in our certified kitchen every day. Strictly 100% Halaal, balanced and delicious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {weeklyMenu.map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="block text-xs font-extrabold text-[#5B34B2] uppercase tracking-wider border-b border-slate-200 pb-2">
                {item.day}
              </span>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Breakfast</span>
                <p className="text-xs text-slate-800 font-medium">{item.breakfast}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Cooked Lunch</span>
                <p className="text-xs text-slate-800 font-medium">{item.lunch}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Afternoon Snack</span>
                <p className="text-xs text-slate-600">{item.snack}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
