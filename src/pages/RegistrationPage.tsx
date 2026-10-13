import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  User, 
  Baby, 
  ShieldAlert, 
  Heart, 
  Phone, 
  MapPin, 
  Mail, 
  Calendar, 
  Printer, 
  Download, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Clock,
  ShieldCheck,
  Check,
  Bus
} from 'lucide-react';
import { SCHOOL_INFO, PROGRAMS, TRANSPORT_DATA } from '../data/preschoolData';
import { RegistrationFormData, PageId } from '../types';

interface RegistrationPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookTour: () => void;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({ onNavigate, onOpenBookTour }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>('');

  const [formData, setFormData] = useState<RegistrationFormData>({
    childFullName: '',
    childNickname: '',
    childDob: '',
    childGender: '',
    homeLanguage: 'English',
    intakeYear: '2027',
    programSelected: 'first-steps',
    attendanceType: 'full-day',
    startDate: '2027-01-13',

    parentFullName: '',
    relationship: 'Mother',
    parentPhone: '',
    parentWhatsapp: '',
    parentEmail: '',
    residentialAddress: 'Lenasia, 1821',
    suburb: 'Lenasia',
    employer: '',
    workPhone: '',

    emergencyName: '',
    emergencyRelation: 'Grandparent / Aunt',
    emergencyPhone: '',

    allergies: 'None known',
    chronicMedication: 'None',
    dietaryPreference: 'halaal',
    doctorName: '',
    doctorPhone: '',
    medicalAidName: '',
    medicalAidNumber: '',

    transportNeeded: false,
    transportRoute: 'ext-10',
    extraMurals: ['Ball Skills', 'Art & Craft'],
    notes: ''
  });

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      // Final submission
      const generatedRef = `MAJU-${formData.intakeYear}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(generatedRef);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleExtraMuralToggle = (mural: string) => {
    if (formData.extraMurals.includes(mural)) {
      setFormData({
        ...formData,
        extraMurals: formData.extraMurals.filter(m => m !== mural)
      });
    } else {
      setFormData({
        ...formData,
        extraMurals: [...formData.extraMurals, mural]
      });
    }
  };

  return (
    <div className="py-10 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#5B34B2] text-xs font-bold uppercase tracking-wider mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Admissions Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-fredoka text-slate-900">
            Child Registration & Enrollment Form
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Complete your registration online for Maju Stars Pre-School, Daycare and After-care Centre (15 Benue St, Lenasia).
          </p>
        </div>

        {!isSubmitted ? (
          <div className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">
            {/* Step Progress Bar */}
            <div className="bg-[#5B34B2] p-4 text-white">
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className={`py-2 px-1 rounded-xl font-bold transition-colors ${
                    currentStep === 1 ? 'bg-white text-[#5B34B2]' : 'text-purple-200 hover:text-white'
                  }`}
                >
                  1. Child Info
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className={`py-2 px-1 rounded-xl font-bold transition-colors ${
                    currentStep === 2 ? 'bg-white text-[#5B34B2]' : 'text-purple-200 hover:text-white'
                  }`}
                >
                  2. Parent/Guardian
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className={`py-2 px-1 rounded-xl font-bold transition-colors ${
                    currentStep === 3 ? 'bg-white text-[#5B34B2]' : 'text-purple-200 hover:text-white'
                  }`}
                >
                  3. Medical & Diet
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className={`py-2 px-1 rounded-xl font-bold transition-colors ${
                    currentStep === 4 ? 'bg-white text-[#5B34B2]' : 'text-purple-200 hover:text-white'
                  }`}
                >
                  4. Program & Finish
                </button>
              </div>
            </div>

            <form onSubmit={handleNextStep} className="p-6 sm:p-10 space-y-6">
              {/* STEP 1: CHILD DETAILS */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold font-fredoka text-slate-900 flex items-center gap-2">
                      <Baby className="w-5 h-5 text-[#5B34B2]" />
                      <span>Step 1: Child's Personal Information</span>
                    </h3>
                    <p className="text-xs text-slate-500">Please provide accurate birth certificate details.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Child's Full Name & Surname *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ayaan Muhammed Patel"
                        value={formData.childFullName}
                        onChange={(e) => setFormData({ ...formData, childFullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Nickname / Call Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ayaan"
                        value={formData.childNickname}
                        onChange={(e) => setFormData({ ...formData, childNickname: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.childDob}
                        onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Gender *
                      </label>
                      <select
                        required
                        value={formData.childGender}
                        onChange={(e) => setFormData({ ...formData, childGender: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden bg-white"
                      >
                        <option value="">Select Gender</option>
                        <option value="boy">Boy</option>
                        <option value="girl">Girl</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Home Language
                      </label>
                      <input
                        type="text"
                        placeholder="English / Zulu / Gujarati / etc."
                        value={formData.homeLanguage}
                        onChange={(e) => setFormData({ ...formData, homeLanguage: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100">
                      <label className="block text-xs font-bold text-purple-900 mb-1">
                        Target Enrollment Year *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-xs font-bold text-slate-800 cursor-pointer">
                          <input
                            type="radio"
                            name="intakeYear"
                            value="2027"
                            checked={formData.intakeYear === '2027'}
                            onChange={() => setFormData({ ...formData, intakeYear: '2027' })}
                            className="text-[#5B34B2]"
                          />
                          <span>2027 Academic Year (Opens Jan 2027)</span>
                        </label>
                        <label className="flex items-center gap-2 text-xs font-bold text-slate-800 cursor-pointer">
                          <input
                            type="radio"
                            name="intakeYear"
                            value="2026"
                            checked={formData.intakeYear === '2026'}
                            onChange={() => setFormData({ ...formData, intakeYear: '2026' })}
                            className="text-[#5B34B2]"
                          />
                          <span>2026 Immediate Intake</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Expected Start Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: PARENT / GUARDIAN */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold font-fredoka text-slate-900 flex items-center gap-2">
                      <User className="w-5 h-5 text-[#5B34B2]" />
                      <span>Step 2: Parent & Guardian Contact Details</span>
                    </h3>
                    <p className="text-xs text-slate-500">Contact person for accounts and daily communications.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Parent / Guardian Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Zaheera Patel"
                        value={formData.parentFullName}
                        onChange={(e) => setFormData({ ...formData, parentFullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Relationship to Child *
                      </label>
                      <select
                        value={formData.relationship}
                        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden bg-white"
                      >
                        <option value="Mother">Mother</option>
                        <option value="Father">Father</option>
                        <option value="Legal Guardian">Legal Guardian</option>
                        <option value="Grandparent">Grandparent</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 078 123 4567"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp Number (for School Broadcasts) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 078 123 4567"
                        value={formData.parentWhatsapp}
                        onChange={(e) => setFormData({ ...formData, parentWhatsapp: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={formData.parentEmail}
                        onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Residential Address in Lenasia / Surrounding Area *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Street, Ext number, Lenasia"
                        value={formData.residentialAddress}
                        onChange={(e) => setFormData({ ...formData, residentialAddress: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
                      Secondary Emergency Contact (In case parent is unreachable)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Contact Name"
                          value={formData.emergencyName}
                          onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Relationship (e.g. Aunt)"
                          value={formData.emergencyRelation}
                          onChange={(e) => setFormData({ ...formData, emergencyRelation: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Emergency Phone"
                          value={formData.emergencyPhone}
                          onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: MEDICAL & DIETARY */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold font-fredoka text-slate-900 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-rose-500" />
                      <span>Step 3: Medical, Allergy & Dietary Needs</span>
                    </h3>
                    <p className="text-xs text-slate-500">Ensuring your child's safety and nutritional wellbeing.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Known Allergies (Food, Bee Stings, Medication, etc.) *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Peanuts, Dairy or None"
                        value={formData.allergies}
                        onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Chronic Medication or Conditions (Asthma, Eczema, etc.)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Inhaler as needed or None"
                        value={formData.chronicMedication}
                        onChange={(e) => setFormData({ ...formData, chronicMedication: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <label className="block text-xs font-bold text-amber-900 mb-2">
                      Dietary Requirement (All school meals are strictly prepared fresh on site)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: 'halaal', label: 'Strictly Halaal' },
                        { id: 'vegetarian', label: 'Strictly Vegetarian' },
                        { id: 'standard', label: 'Standard Balanced' },
                        { id: 'other', label: 'Custom Dietary' }
                      ].map((diet) => (
                        <label key={diet.id} className="flex items-center gap-2 text-xs font-bold text-slate-800 cursor-pointer">
                          <input
                            type="radio"
                            name="dietaryPreference"
                            value={diet.id}
                            checked={formData.dietaryPreference === diet.id}
                            onChange={() => setFormData({ ...formData, dietaryPreference: diet.id as any })}
                          />
                          <span>{diet.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Family Doctor / Pediatrician Name & Phone
                      </label>
                      <input
                        type="text"
                        placeholder="Dr. Moola (011 854 xxxx)"
                        value={formData.doctorName}
                        onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Medical Aid Scheme & Number (If applicable)
                      </label>
                      <input
                        type="text"
                        placeholder="Discovery / Bonitas / Private"
                        value={formData.medicalAidName}
                        onChange={(e) => setFormData({ ...formData, medicalAidName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: PROGRAM SELECTION & CONFIRMATION */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold font-fredoka text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      <span>Step 4: Select Program & Finalize Application</span>
                    </h3>
                    <p className="text-xs text-slate-500">Choose your required daycare or schooling package.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Select Program Option *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PROGRAMS.map((prog) => (
                        <div
                          key={prog.id}
                          onClick={() => setFormData({ ...formData, programSelected: prog.id })}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                            formData.programSelected === prog.id
                              ? 'border-[#5B34B2] bg-purple-50/80 shadow-md'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-sm text-slate-900">{prog.name}</span>
                            <span className="text-xs font-bold text-[#5B34B2]">R{prog.monthlyFee}/m</span>
                          </div>
                          <p className="text-xs text-slate-500">{prog.ageGroup}</p>
                          <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">{prog.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Attendance Type *
                      </label>
                      <select
                        value={formData.attendanceType}
                        onChange={(e) => setFormData({ ...formData, attendanceType: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:border-[#5B34B2] focus:ring-2 focus:ring-purple-100 focus:outline-hidden bg-white"
                      >
                        <option value="full-day">Full Day (06:00 – 18:00)</option>
                        <option value="half-day">Half Day (06:00 – 13:00)</option>
                        <option value="after-care">After-Care Only (13:00 – 18:00)</option>
                      </select>
                    </div>

                    <div className="p-3.5 bg-purple-50/60 rounded-2xl border border-purple-200/80 space-y-2">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="transportCheck"
                          checked={formData.transportNeeded}
                          onChange={(e) => setFormData({ ...formData, transportNeeded: e.target.checked })}
                          className="w-4 h-4 text-[#5B34B2] rounded-sm"
                        />
                        <label htmlFor="transportCheck" className="text-xs text-slate-800 font-bold cursor-pointer flex items-center gap-1.5">
                          <Bus className="w-4 h-4 text-[#5B34B2]" />
                          <span>School Transport Required (Morning Pick-up / Afternoon Drop-off)</span>
                        </label>
                      </div>

                      {formData.transportNeeded && (
                        <div className="pt-2 pl-7 space-y-1.5 animate-in fade-in duration-150">
                          <label className="block text-[11px] font-bold text-slate-700">
                            Select Pickup / Drop-off Area:
                          </label>
                          <select
                            value={formData.transportRoute}
                            onChange={(e) => setFormData({ ...formData, transportRoute: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-purple-200 rounded-xl bg-white focus:outline-hidden focus:border-[#5B34B2]"
                          >
                            {TRANSPORT_DATA.routes.map((route) => (
                              <option key={route.id} value={route.id}>
                                {route.area} — {route.priceFormatted} / month
                              </option>
                            ))}
                          </select>
                          <p className="text-[10px] text-purple-700 font-medium">
                            {TRANSPORT_DATA.notice}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Extra-Mural Activities Interest (Select Any)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Ball Skills & Soccer', 'Art & Pottery', 'Music & Dance', 'Junior Phonics Club'].map((mural) => {
                        const isSelected = formData.extraMurals.includes(mural);
                        return (
                          <button
                            type="button"
                            key={mural}
                            onClick={() => handleExtraMuralToggle(mural)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                              isSelected 
                                ? 'bg-[#5B34B2] text-white shadow-xs' 
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '} {mural}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Checklist of required documents to bring upon tour */}
                  <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs text-slate-700 space-y-1.5">
                    <span className="font-bold text-purple-900 block">
                      Documents checklist to bring during orientation visit:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-600">
                      <div>✓ Copy of Child's Birth Certificate</div>
                      <div>✓ Copy of Child's Clinic Card / Road to Health</div>
                      <div>✓ Copy of Parent/Guardian South African ID or Passport</div>
                      <div>✓ Proof of Residence in Lenasia or surrounding area</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Button Bar */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Step</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#FA5B88] hover:bg-[#e04572] text-white font-bold text-sm shadow-md shadow-pink-500/25 transition-all duration-150 active:scale-95"
                >
                  <span>{currentStep === 4 ? 'Submit Child Registration' : 'Continue to Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* REGISTRATION SUCCESS RECEIPT */
          <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-8 sm:p-12 text-center animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <span className="inline-block px-3 py-1 bg-purple-100 text-[#5B34B2] rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
              Registration Received
            </span>

            <h2 className="text-3xl font-bold font-fredoka text-slate-900 mb-2">
              Registration Submitted Successfully!
            </h2>

            <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
              Welcome to the Maju Stars family! We have received your application for{' '}
              <strong className="text-slate-900">{formData.childFullName || 'your child'}</strong> for the{' '}
              <strong className="text-[#5B34B2]">{formData.intakeYear}</strong> intake.
            </p>

            {/* Application Certificate / Receipt Card */}
            <div className="max-w-lg mx-auto bg-gradient-to-br from-purple-50 via-white to-pink-50 border-2 border-dashed border-purple-300 rounded-3xl p-6 text-left mb-8 shadow-xs">
              <div className="flex justify-between items-start border-b border-purple-200 pb-3 mb-4">
                <div>
                  <div className="text-lg font-bold font-fredoka text-[#5B34B2]">Maju Stars Pre-School</div>
                  <div className="text-[11px] text-slate-500">15 Benue St, Lenasia, 1821 · 078 722 7449</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Reference Number</span>
                  <span className="text-sm font-bold font-mono text-purple-900 bg-white px-2 py-0.5 rounded-lg border border-purple-200">
                    {referenceCode}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 mb-4">
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase font-bold">Child Name:</span>
                  <strong className="text-slate-900">{formData.childFullName}</strong>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase font-bold">Parent / Contact:</span>
                  <strong className="text-slate-900">{formData.parentFullName} ({formData.parentPhone})</strong>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase font-bold">Intake Period:</span>
                  <strong className="text-slate-900">{formData.intakeYear} (From {formData.startDate})</strong>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase font-bold">Attendance:</span>
                  <strong className="text-[#5B34B2] capitalize">{formData.attendanceType.replace('-', ' ')}</strong>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase font-bold">School Transport:</span>
                  <strong className="text-slate-900">
                    {formData.transportNeeded
                      ? `${TRANSPORT_DATA.routes.find(r => r.id === formData.transportRoute)?.area} (${TRANSPORT_DATA.routes.find(r => r.id === formData.transportRoute)?.priceFormatted}/mo)`
                      : 'Not Required'}
                  </strong>
                </div>
              </div>

              <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Status: Provisional Acceptance Confirmed</span>
                <span className="text-emerald-700 font-bold">✓ Slot Reserved</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Registration Slip</span>
              </button>

              <button
                onClick={onOpenBookTour}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#5B34B2] hover:bg-[#492795] text-white text-xs font-bold transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Campus Orientation Tour</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
              >
                <span>Register Another Child</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
