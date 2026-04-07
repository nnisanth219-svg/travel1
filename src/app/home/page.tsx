'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import MarqueeBanner from './components/MarqueeBanner';
import ParticipantGallery from './components/ParticipantGallery';
import TestimonialsSection from './components/TestimonialsSection';

// Dynamic imports to prevent hydration issues
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: false });
const StickyCTABar = dynamic(() => import('./components/StickyCTABar'), { ssr: false });
const MasonryJourney = dynamic(() => import('./components/MasonryJourney'), { ssr: false });
const RegistrationSection = dynamic(() => import('./components/RegistrationSection'), { ssr: false });
const RegistrationPanel = dynamic(() => import('./components/RegistrationPanel'), { ssr: false });
const ItineraryModal = dynamic(() => import('./components/ItineraryModal'), { ssr: false });

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