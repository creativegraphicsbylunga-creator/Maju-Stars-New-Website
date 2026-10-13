import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Calculator, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Users, 
  Award,
  DollarSign,
  Info,
  Bus
} from 'lucide-react';
import { SCHOOL_INFO, FEE_TIERS_2027, FAQS, TRANSPORT_DATA } from '../data/preschoolData';
import { PageId } from '../types';

interface Enrollment2027PageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookTour: () => void;
}

export const Enrollment2027Page: React.FC<Enrollment2027PageProps> = ({ onNavigate, onOpenBookTour }) => {
  // Interactive Calculator State
  const [selectedProgram, setSelectedProgram] = useState<'baby' | 'toddler' | 'preschool' | 'aftercare'>('preschool');
  const [childrenCount, setChildrenCount] = useState<number>(1);
  const [includeTransport, setIncludeTransport] = useState<boolean>(false);
  const [selectedTransportRoute, setSelectedTransportRoute] = useState<string>('ext-10');
  const [includeExtraMurals, setIncludeExtraMurals] = useState<boolean>(true);

  // Fast Slot Reservation
  const [reserveSuccess, setReserveSuccess] = useState(false);
  const [reserveForm, setReserveForm] = useState({
    parentName: '',
    phone: '',
    childAge: '3 years',
    intakeTerm: 'Term 1 (January 2027)'
  });

  // Calculate pricing
  const baseMonthlyFees: Record<string, number> = {
    baby: 2100,
    toddler: 1950,
    preschool: 1950,
    aftercare: 1100
  };

  const baseRate = baseMonthlyFees[selectedProgram];
  // 10% discount on subsequent children
  let totalTuition = baseRate;
  if (childrenCount > 1) {
    const additionalChildren = childrenCount - 1;
    totalTuition = baseRate + additionalChildren * (baseRate * 0.9);
  }

  const activeTransportRoute = TRANSPORT_DATA.routes.find(r => r.id === selectedTransportRoute) || TRANSPORT_DATA.routes[0];
  const transportCost = includeTransport ? activeTransportRoute.price * childrenCount : 0;
  const extraMuralsCost = includeExtraMurals ? 150 * childrenCount : 0;
  const monthlyTotal = totalTuition + transportCost + extraMuralsCost;

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReserveSuccess(true);
  };

  return (
    <div className="py-10 bg-white">
      {/* Hero 2027 Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-[#381E76] via-[#5B34B2] to-[#7B4BD6] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open for 2027</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-fredoka text-white leading-tight">
              Secure Your Child's Bright Future for 2027
            </h1>

            <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
              Early bird registrations are now open for infants, toddlers, pre-schoolers, and after-care at Maju Stars. Reserve your child's classroom spot today to lock in early fees and ensure stress-free placement at 15 Benue St, Lenasia.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('registration')}
                className="px-7 py-3.5 bg-[#FA5B88] hover:bg-[#e04572] text-white font-bold text-sm rounded-full shadow-lg shadow-pink-600/30 transition-transform hover:scale-105"
              >
                Complete 2027 Online Registration
              </button>
              <button
                onClick={onOpenBookTour}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-full border border-white/20 transition-colors"
              >
                Book Campus Orientation Tour
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden lg:block">
            <span className="text-[240px] font-fredoka font-bold leading-none select-none">
              2027
            </span>
          </div>
        </div>
      </section>

      {/* WHY ENROLL EARLY FOR 2027 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#5B34B2] uppercase tracking-widest block mb-1">
            Early Bird Advantages
          </span>
          <h2 className="text-3xl font-bold font-fredoka text-slate-900">
            Why Register Early for 2027?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-100 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#5B34B2] text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="font-bold text-base font-fredoka text-slate-900">Guaranteed Classroom Placement</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We maintain strict educator-to-child ratios (1:4 for infants). Early application guarantees your placement.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-pink-50/70 border border-pink-100 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FA5B88] text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="font-bold text-base font-fredoka text-slate-900">Free 2027 Starter Pack</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Early applicants receive a complimentary Maju Stars t-shirt, sunhat, and term 1 stationery starter pack.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-100 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="font-bold text-base font-fredoka text-slate-900">Smooth Adaptation Days</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complimentary orientation play dates in Term 4 2026 to help your child feel confident before day one.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-100 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
              4
            </div>
            <h3 className="font-bold text-base font-fredoka text-slate-900">Sibling Discount Guarantee</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              10% discount on monthly tuition for second and subsequent siblings enrolled together.
            </p>
          </div>
        </div>
      </section>

      {/* 2027 FEE SCHEDULE TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
            Transparent Pricing
          </span>
          <h2 className="text-3xl font-bold font-fredoka text-slate-900">
            2027 Fee Schedule & Inclusions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            No hidden costs. Wholesome meals, snacks, learning materials, and supervision are all inclusive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEE_TIERS_2027.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 border flex flex-col justify-between ${
                tier.popular 
                  ? 'bg-purple-50/80 border-[#5B34B2] shadow-lg relative' 
                  : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5B34B2] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold font-fredoka text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-xs font-bold text-[#5B34B2] mb-3">{tier.age}</p>

                <div className="mb-4">
                  <div className="text-2xl font-bold font-fredoka text-slate-900">{tier.fee}</div>
                  <div className="text-[11px] text-slate-500">{tier.hours} · {tier.deposit}</div>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
                  {tier.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('registration')}
                className="w-full py-2.5 bg-[#5B34B2] hover:bg-[#492795] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                Enroll for 2027
              </button>
            </div>
          ))}
        </div>

        {/* 2027 TRANSPORT PRICE SCHEDULE ACCORDING TO OFFICIAL NOTICE */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 via-[#FAF7F2] to-pink-50 p-6 sm:p-8 rounded-3xl border border-purple-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-purple-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#5B34B2] text-white flex items-center justify-center shrink-0">
                <Bus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-fredoka text-slate-900">
                  School Transport Monthly Rates
                </h3>
                <p className="text-xs text-slate-600">
                  Safe, punctual door-to-door morning collection & afternoon drop-off
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold">
              <Info className="w-3.5 h-3.5 shrink-0 text-amber-800" />
              <span>{TRANSPORT_DATA.notice}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {TRANSPORT_DATA.routes.map((route) => (
              <div
                key={route.id}
                className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#5B34B2] transition-colors"
              >
                <span className="text-[11px] font-bold text-slate-800 block truncate">
                  {route.area}
                </span>
                <span className="text-base font-bold font-fredoka text-[#5B34B2] block mt-0.5">
                  {route.priceFormatted}
                  <span className="text-[10px] font-normal text-slate-500"> /mo</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE 2027 TUITION ESTIMATOR */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-purple-200/80 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#5B34B2] text-white flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-fredoka text-slate-900">
                2027 Interactive Tuition Estimator
              </h3>
              <p className="text-xs text-slate-500">
                Calculate your estimated monthly investment based on program, siblings, and extras.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Program:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'baby', label: 'Baby Stars (3-24m)', price: 'R2,100' },
                    { id: 'toddler', label: 'Toddlers (2-3y)', price: 'R1,950' },
                    { id: 'preschool', label: 'Pre-School (3-5y)', price: 'R1,950' },
                    { id: 'aftercare', label: 'After-Care (6-12y)', price: 'R1,100' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProgram(p.id as any)}
                      className={`p-2.5 rounded-xl border text-left font-semibold transition-all ${
                        selectedProgram === p.id
                          ? 'border-[#5B34B2] bg-white text-[#5B34B2] shadow-xs'
                          : 'border-slate-200 bg-white/60 text-slate-600 hover:bg-white'
                      }`}
                    >
                      <div className="font-bold">{p.label}</div>
                      <div className="text-[11px] text-slate-400">{p.price}/mo</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Number of Children (10% discount on sibling):
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setChildrenCount(num)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${
                        childrenCount === num
                          ? 'bg-[#5B34B2] text-white border-[#5B34B2]'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {num} {num === 1 ? 'Child' : 'Children'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeTransport}
                    onChange={(e) => setIncludeTransport(e.target.checked)}
                    className="w-4 h-4 text-[#5B34B2] rounded-sm"
                  />
                  <span>Add School Transport Route</span>
                </label>

                {includeTransport && (
                  <div className="pl-6 pt-1 space-y-1">
                    <label className="block text-[11px] font-bold text-slate-600">
                      Select Your Pickup Area:
                    </label>
                    <select
                      value={selectedTransportRoute}
                      onChange={(e) => setSelectedTransportRoute(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-purple-200 rounded-xl bg-white focus:outline-hidden focus:border-[#5B34B2]"
                    >
                      {TRANSPORT_DATA.routes.map((route) => (
                        <option key={route.id} value={route.id}>
                          {route.area} ({route.priceFormatted}/mo)
                        </option>
                      ))}
                    </select>
                    <p className="text-[10px] text-slate-400">
                      {TRANSPORT_DATA.notice}
                    </p>
                  </div>
                )}

                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeExtraMurals}
                    onChange={(e) => setIncludeExtraMurals(e.target.checked)}
                    className="w-4 h-4 text-[#5B34B2] rounded-sm"
                  />
                  <span>Add Weekly Extra-Mural Club Pass (+R150/m per child)</span>
                </label>
              </div>
            </div>

            {/* Output Calculation Card */}
            <div className="bg-white p-6 rounded-3xl border border-purple-200 shadow-md text-center space-y-4">
              <span className="text-[11px] font-bold text-purple-900 uppercase tracking-widest block">
                Estimated Monthly Total
              </span>
              <div className="text-4xl font-bold font-fredoka text-[#5B34B2]">
                R{monthlyTotal.toLocaleString()}
                <span className="text-xs font-normal text-slate-500"> / month</span>
              </div>

              <div className="text-xs text-slate-500 space-y-1 py-2 border-y border-slate-100">
                <div className="flex justify-between">
                  <span>Tuition for {childrenCount} child(ren):</span>
                  <strong>R{totalTuition.toLocaleString()}</strong>
                </div>
                {includeTransport && (
                  <div className="flex justify-between text-slate-700">
                    <span>Transport ({activeTransportRoute.area}):</span>
                    <strong>R{transportCost.toLocaleString()}</strong>
                  </div>
                )}
                {includeExtraMurals && (
                  <div className="flex justify-between text-slate-700">
                    <span>Extra-Mural Activities:</span>
                    <strong>R{extraMuralsCost.toLocaleString()}</strong>
                  </div>
                )}
                {childrenCount > 1 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Sibling Savings (10% applied):</span>
                    <span>-R{((baseRate * 0.1) * (childrenCount - 1)).toFixed(0)}</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => onNavigate('registration')}
                className="w-full py-3 bg-[#FA5B88] hover:bg-[#e04572] text-white rounded-xl text-xs font-bold shadow-md transition-all duration-150"
              >
                Proceed to 2027 Registration
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAST 2027 SLOT RESERVATION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-[#FAF5FF] border border-purple-200 rounded-3xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-[#5B34B2] uppercase tracking-wider block mb-1">
              Quick Hold
            </span>
            <h3 className="text-2xl font-bold font-fredoka text-slate-900">
              Hold a 2027 Slot in 30 Seconds
            </h3>
            <p className="text-xs text-slate-600">
              Leave your contact details and our admissions coordinator will reserve a slot for 7 days.
            </p>
          </div>

          {reserveSuccess ? (
            <div className="text-center py-6 bg-white rounded-2xl p-6 border border-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
              <h4 className="text-lg font-bold font-fredoka text-slate-900">Slot Held Successfully!</h4>
              <p className="text-xs text-slate-600 mt-1">
                Thank you, {reserveForm.parentName}. We have placed a 7-day hold on a 2027 placement for your child. Our team will contact you at {reserveForm.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleReserveSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Parent Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={reserveForm.parentName}
                  onChange={(e) => setReserveForm({ ...reserveForm, parentName: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="078 123 4567"
                  value={reserveForm.phone}
                  onChange={(e) => setReserveForm({ ...reserveForm, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Child's Expected Age in 2027</label>
                <input
                  type="text"
                  placeholder="e.g. 18 months, 4 years"
                  value={reserveForm.childAge}
                  onChange={(e) => setReserveForm({ ...reserveForm, childAge: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Intake Starting Term</label>
                <select
                  value={reserveForm.intakeTerm}
                  onChange={(e) => setReserveForm({ ...reserveForm, intakeTerm: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white"
                >
                  <option value="Term 1 (January 2027)">Term 1 (January 2027)</option>
                  <option value="Term 2 (April 2027)">Term 2 (April 2027)</option>
                  <option value="Term 3 (July 2027)">Term 3 (July 2027)</option>
                  <option value="Term 4 (October 2027)">Term 4 (October 2027)</option>
                </select>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#5B34B2] hover:bg-[#492795] text-white text-xs font-bold rounded-xl transition-colors shadow-md"
                >
                  Confirm 2027 Slot Hold
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
