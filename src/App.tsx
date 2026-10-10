/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookTourModal } from './components/BookTourModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { Enrollment2027Page } from './pages/Enrollment2027Page';
import { CalendarPage } from './pages/CalendarPage';
import { ContactPage } from './pages/ContactPage';
import { PageId } from './types';
import { MessageCircle, Phone } from 'lucide-react';
import { SCHOOL_INFO } from './data/preschoolData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookTourOpen, setIsBookTourOpen] = useState<boolean>(false);

  // Sync hash routing on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 
        'about', 
        'programs', 
        'registration', 
        'enrollment-2027', 
        'calendar', 
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 font-body selection:bg-purple-200 selection:text-purple-900">
      {/* Universal Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBookTour={() => setIsBookTourOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenBookTour={() => setIsBookTourOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenBookTour={() => setIsBookTourOpen(true)}
          />
        )}
        {currentPage === 'programs' && (
          <ProgramsPage
            onNavigate={navigateTo}
            onOpenBookTour={() => setIsBookTourOpen(true)}
          />
        )}
        {currentPage === 'registration' && (
          <RegistrationPage
            onNavigate={navigateTo}
            onOpenBookTour={() => setIsBookTourOpen(true)}
          />
        )}
        {currentPage === 'enrollment-2027' && (
          <Enrollment2027Page
            onNavigate={navigateTo}
            onOpenBookTour={() => setIsBookTourOpen(true)}
          />
        )}
        {currentPage === 'calendar' && (
          <CalendarPage
            onNavigate={navigateTo}
            onOpenBookTour={() => setIsBookTourOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenBookTour={() => setIsBookTourOpen(true)}
          />
        )}
      </main>

      {/* Floating Quick Action Widget for Mobile/Parents */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href={SCHOOL_INFO.socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all group"
          title="Chat with Maju Stars on WhatsApp"
          aria-label="WhatsApp Maju Stars"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <a
          href={`tel:${SCHOOL_INFO.phoneClean}`}
          className="w-12 h-12 bg-[#5B34B2] hover:bg-[#492795] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
          title="Call 078 722 7449"
          aria-label="Call 078 722 7449"
        >
          <Phone className="w-5 h-5 text-amber-300" />
        </a>
      </div>

      {/* Universal Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBookTour={() => setIsBookTourOpen(true)}
      />

      {/* Book a Tour Modal */}
      <BookTourModal
        isOpen={isBookTourOpen}
        onClose={() => setIsBookTourOpen(false)}
        onNavigateToRegistration={() => navigateTo('registration')}
      />
    </div>
  );
}
