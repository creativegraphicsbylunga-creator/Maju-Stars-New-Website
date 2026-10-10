import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Phone, User, Mail, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/preschoolData';

interface BookTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToRegistration?: () => void;
}

export const BookTourModal: React.FC<BookTourModalProps> = ({
  isOpen,
  onClose,
  onNavigateToRegistration
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childAge: '2-3 years',
    preferredDate: '',
    preferredTime: '09:00 AM',
    programInterest: 'Pre-School (3-5 Years)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#5B34B2] via-[#7B4BD6] to-[#FA5B88] p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Campus Visit</span>
          </div>
          <h3 className="text-2xl font-bold font-fredoka text-white">
            Schedule a Free Campus Tour
          </h3>
          <p className="text-purple-100 text-xs mt-1">
            Come see our loving classrooms, meet our educators & explore 15 Benue St, Lenasia.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 font-fredoka mb-2">
                Tour Scheduled Successfully!
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Thank you, <strong className="text-slate-800">{formData.parentName || 'Parent'}</strong>. 
                We look forward to welcoming you and your little star on{' '}
                <strong className="text-[#5B34B2]">{formData.preferredDate || 'your selected date'}</strong> at{' '}
                <strong className="text-[#5B34B2]">{formData.preferredTime}</strong>.
              </p>

              <div className="bg-purple-50 p-4 rounded-2xl text-left text-xs text-slate-700 border border-purple-100 mb-6 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-purple-900">
                  <MapPin className="w-4 h-4 text-[#5B34B2] shrink-0" />
                  <span>15 Benue St, Lenasia, 1821</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-4 h-4 text-[#5B34B2] shrink-0" />
                  <span>Direct Queries: {SCHOOL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-[#5B34B2] shrink-0" />
                  <span>Hours: Mon – Fri 06:00 – 18:00 (Closed Weekends)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors"
                >
                  Done
                </button>
                {onNavigateToRegistration && (
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateToRegistration();
                    }}
                    className="px-5 py-2.5 bg-[#5B34B2] hover:bg-[#492795] text-white rounded-xl text-xs font-bold transition-colors shadow-md shadow-purple-500/20"
                  >
                    Proceed to Child Registration Form
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Parent / Guardian Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Adams"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 078 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Program Interested In
                  </label>
                  <select
                    value={formData.programInterest}
                    onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden bg-white"
                  >
                    <option value="Baby Little Stars (3-24 months)">Baby Little Stars (3-24 months)</option>
                    <option value="Little Explorers (2-3 years)">Little Explorers (2-3 years)</option>
                    <option value="Pre-School / Grade R Prep (3-5 years)">Pre-School (3-5 years)</option>
                    <option value="After-Care & Homework (6-12 years)">After-Care & Homework Club</option>
                    <option value="2027 Advance Enrollment">2027 Advance Enrollment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Child's Current Age
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 18 months or 4 years"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Visit Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden bg-white"
                    >
                      <option value="08:30 AM (Morning Circle)">08:30 AM (Morning Circle)</option>
                      <option value="10:00 AM (Activity Time)">10:00 AM (Activity Time)</option>
                      <option value="11:30 AM (Storytime & Lunch)">11:30 AM (Storytime & Lunch)</option>
                      <option value="14:30 PM (After-Care Discovery)">14:30 PM (After-Care Discovery)</option>
                      <option value="16:30 PM (Evening Parent Walk)">16:30 PM (Evening Parent Walk)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Special Notes or Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific questions, allergies, or requirements?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#FA5B88] hover:bg-[#e04572] text-white font-bold text-sm rounded-xl shadow-lg shadow-pink-500/25 transition-all duration-150 active:scale-98"
                >
                  Confirm Free Tour Booking
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  No payment required · We will send an SMS confirmation to your number.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
