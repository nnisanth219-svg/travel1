'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StickyCTABar from './components/StickyCTABar';
import MarqueeBanner from './components/MarqueeBanner';
import MasonryJourney from './components/MasonryJourney';
import ParticipantGallery from './components/ParticipantGallery';
import TestimonialsSection from './components/TestimonialsSection';
import RegistrationSection from './components/RegistrationSection';
import RegistrationPanel from './components/RegistrationPanel';
import ItineraryModal from './components/ItineraryModal';

export default function HomePage() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden" style={{ background: 'var(--color-slate-deep)' }}>
      <Header onJoin={() => setPanelOpen(true)} />
      <StickyCTABar onJoin={() => setPanelOpen(true)} />

      <HeroSection onJoin={() => setPanelOpen(true)} />
      <MarqueeBanner />
      <MasonryJourney />
      <ParticipantGallery />
      <TestimonialsSection />
      <RegistrationSection
        onJoin={() => setPanelOpen(true)}
        onDetails={() => setModalOpen(true)}
      />
      <Footer />

      <RegistrationPanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
      <ItineraryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}