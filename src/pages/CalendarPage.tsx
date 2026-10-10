import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Sparkles, 
  Trophy, 
  Download, 
  Shirt, 
  Sun, 
  PartyPopper,
  BookOpen,
  ArrowRight,
  Check
} from 'lucide-react';
import { CALENDAR_EVENTS, SCHOOL_INFO } from '../data/preschoolData';
import { CalendarEvent, PageId } from '../types';

interface CalendarPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookTour: () => void;
}

export const CalendarPage: React.FC<CalendarPageProps> = ({ onNavigate, onOpenBookTour }) => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTerm, setSelectedTerm] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedEventId, setCopiedEventId] = useState<string | null>(null);

  // Filter events
  const filteredEvents = CALENDAR_EVENTS.filter((e) => {
    const matchesYear = e.year === selectedYear;
    const matchesCategory = selectedCategory === 'all' || e.category === selectedCategory;
    const matchesTerm = selectedTerm === 'all' || e.term === selectedTerm;
    const matchesSearch = 
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.dressCode && e.dressCode.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesYear && matchesCategory && matchesTerm && matchesSearch;
  });

  const downloadIcs = (event: CalendarEvent) => {
    const cleanDate = event.date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Maju Stars//Preschool Calendar//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@majustars.co.za`,
      `DTSTAMP:${cleanDate}T060000Z`,
      `DTSTART;VALUE=DATE:${cleanDate}`,
      `SUMMARY:${event.title} - Maju Stars`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}, 15 Benue St, Lenasia`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedEventId(event.id);
    setTimeout(() => setCopiedEventId(null), 2500);
  };

  const getCategoryBadge = (cat: CalendarEvent['category']) => {
    switch (cat) {
      case 'fun-day':
        return { label: 'Fun Day & Dress Up', bg: 'bg-rose-100 text-rose-700' };
      case 'sports':
        return { label: 'Sports & Olympics', bg: 'bg-amber-100 text-amber-800' };
      case 'academic':
        return { label: 'Academic & Reports', bg: 'bg-blue-100 text-blue-800' };
      case 'community':
        return { label: 'Community & Culture', bg: 'bg-emerald-100 text-emerald-800' };
      case 'term':
      default:
        return { label: 'Term Dates', bg: 'bg-purple-100 text-purple-800' };
    }
  };

  return (
    <div className="py-10 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#5B34B2] text-xs font-bold uppercase tracking-wider">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>School Almanac</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-fredoka text-slate-900">
            Maju Stars Year Events Calendar
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Stay up to date with South African school terms, holiday daycare schedules, theme dress-up days, annual sports day, and the Grade R graduation gala.
          </p>
        </div>

        {/* YEAR TOGGLE & TERM BAR */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-purple-100 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100">
            {/* Year Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase">Academic Year:</span>
              <div className="flex p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setSelectedYear(2026)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedYear === 2026
                      ? 'bg-[#5B34B2] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  2026 Current Year
                </button>
                <button
                  onClick={() => setSelectedYear(2027)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedYear === 2027
                      ? 'bg-[#5B34B2] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  2027 Upcoming Year
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="w-full sm:w-72 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search events, theme days..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Term Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-500 text-xs mr-1">Filter Term:</span>
            <button
              onClick={() => setSelectedTerm('all')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                selectedTerm === 'all'
                  ? 'bg-purple-100 text-[#5B34B2] font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Terms
            </button>
            {[1, 2, 3, 4].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTerm(t)}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  selectedTerm === t
                    ? 'bg-[#5B34B2] text-white font-bold'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                Term {t}
              </button>
            ))}

            <div className="hidden md:inline text-slate-300 mx-2">|</div>

            <span className="font-bold text-slate-500 text-xs mr-1 hidden md:inline">Category:</span>
            {[
              { id: 'all', label: 'All' },
              { id: 'term', label: 'Term Dates' },
              { id: 'fun-day', label: 'Fun & Theme Days' },
              { id: 'sports', label: 'Sports & Olympics' },
              { id: 'academic', label: 'Reports & Concert' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#FA5B88] text-white font-bold'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* EVENT CARDS GRID */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredEvents.map((evt) => {
              const badge = getCategoryBadge(evt.category);
              const eventDate = new Date(evt.date);
              const formattedDate = eventDate.toLocaleDateString('en-ZA', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              });

              return (
                <div
                  key={evt.id}
                  className="bg-white rounded-3xl p-6 border border-purple-100 shadow-2xs hover:shadow-md hover:border-[#5B34B2] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Date Ribbon & Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${badge.bg}`}>
                        {badge.label}
                      </span>
                      <span className="text-[11px] font-bold text-purple-900 bg-purple-50 px-2 py-0.5 rounded-md">
                        Term {evt.term}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-fredoka text-slate-900 mb-2 leading-snug">
                      {evt.title}
                    </h3>

                    {/* Date and Time Details */}
                    <div className="space-y-1.5 text-xs text-slate-600 mb-3">
                      <div className="flex items-center gap-2 font-semibold text-[#5B34B2]">
                        <CalendarIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>{formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{evt.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {evt.description}
                    </p>

                    {evt.dressCode && (
                      <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center gap-2 text-xs text-amber-900 mb-4">
                        <Shirt className="w-4 h-4 text-amber-600 shrink-0" />
                        <span className="font-semibold">Dress Code: {evt.dressCode}</span>
                      </div>
                    )}
                  </div>

                  {/* Add to Calendar button */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Lenasia ECD</span>
                    <button
                      onClick={() => downloadIcs(evt)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B34B2] hover:text-[#FA5B88] transition-colors"
                    >
                      {copiedEventId === evt.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Calendar Downloaded!</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Add to Calendar (.ics)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 mb-16">
            <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 font-fredoka">No Events Found</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting your term or search filters.</p>
            <button
              onClick={() => {
                setSelectedTerm('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#5B34B2] text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* GAUTENG SCHOOL TERMS QUICK REFERENCE */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm mb-12">
          <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#5B34B2]" />
            <span>2026 / 2027 Gauteng ECD Term Schedule</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
              <span className="font-bold text-[#5B34B2] block text-sm">Term 1 (Summer)</span>
              <p className="mt-1 font-semibold text-slate-800">14 Jan – 27 Mar</p>
              <p className="text-slate-500 text-[11px] mt-0.5">Holiday Daycare available through April</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <span className="font-bold text-emerald-700 block text-sm">Term 2 (Autumn/Winter)</span>
              <p className="mt-1 font-semibold text-slate-800">14 Apr – 26 Jun</p>
              <p className="text-slate-500 text-[11px] mt-0.5">Winter warmth blankets & charity drive</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
              <span className="font-bold text-amber-700 block text-sm">Term 3 (Spring)</span>
              <p className="mt-1 font-semibold text-slate-800">21 Jul – 23 Sep</p>
              <p className="text-slate-500 text-[11px] mt-0.5">Annual Mini Olympics & Sports Day</p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
              <span className="font-bold text-rose-700 block text-sm">Term 4 (Year-End)</span>
              <p className="mt-1 font-semibold text-slate-800">06 Oct – 04 Dec</p>
              <p className="text-slate-500 text-[11px] mt-0.5">Grade R Graduation & Year-End Concert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
