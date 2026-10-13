export type PageId = 
  | 'home' 
  | 'about' 
  | 'programs' 
  | 'registration' 
  | 'enrollment-2027' 
  | 'calendar' 
  | 'contact';

export interface ProgramItem {
  id: string;
  name: string;
  ageGroup: string;
  subtitle: string;
  description: string;
  colorTheme: 'purple' | 'green' | 'amber' | 'pink';
  iconName: string;
  features: string[];
  schedule: string;
  monthlyFee: number;
  highlight: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  endDate?: string;
  term: 1 | 2 | 3 | 4;
  year: number;
  category: 'term' | 'fun-day' | 'academic' | 'sports' | 'holiday' | 'community';
  time: string;
  description: string;
  location: string;
  dressCode?: string;
}

export interface RegistrationFormData {
  // Child Details
  childFullName: string;
  childNickname: string;
  childDob: string;
  childGender: 'girl' | 'boy' | 'other' | '';
  homeLanguage: string;
  intakeYear: '2026' | '2027';
  programSelected: string;
  attendanceType: 'full-day' | 'half-day' | 'after-care';
  startDate: string;

  // Parent/Guardian
  parentFullName: string;
  relationship: string;
  parentPhone: string;
  parentWhatsapp: string;
  parentEmail: string;
  residentialAddress: string;
  suburb: string;
  employer: string;
  workPhone: string;

  // Emergency Contact
  emergencyName: string;
  emergencyRelation: string;
  emergencyPhone: string;

  // Medical & Diet
  allergies: string;
  chronicMedication: string;
  dietaryPreference: 'halaal' | 'vegetarian' | 'standard' | 'other';
  doctorName: string;
  doctorPhone: string;
  medicalAidName: string;
  medicalAidNumber: string;

  // Transport & Extras
  transportNeeded: boolean;
  transportRoute?: string;
  extraMurals: string[];
  notes: string;
}

export interface TransportRoute {
  id: string;
  area: string;
  price: number;
  priceFormatted: string;
  popular?: boolean;
}
