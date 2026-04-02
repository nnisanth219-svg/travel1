'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  quote: string;
  name: string;
  descriptor: string;
  location: string;
  img: string;
  imgAlt: string;
  photoTaken: string;
}

const testimonials: Testimonial[] = [
{
  quote: "I've shot in 14 countries but never understood light until Captura. Our fixer knew the exact minute fog would lift off the Douro. I got the shot I'd been imagining for three years.",
  name: 'Helena Vasquez',
  descriptor: 'Advanced Enthusiast · Madrid',
  location: 'October 2025 tour',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1b634eff3-1772251128197.png",
  imgAlt: 'Helena\'s best frame — Benagil sea cave with turquoise water and light beam from oculus',
  photoTaken: 'Her photo from Day 9'
},
{
  quote: "I retired with a Canon R5 and a bucket list. Captura was the first item I crossed off. The other participants became friends. The images became my first solo exhibition.",
  name: 'Thomas Brennan',
  descriptor: 'Retired Architect · Dublin',
  location: 'June 2025 tour',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1e06cd2ac-1772251129986.png",
  imgAlt: 'Thomas\'s Pena Palace emerging from morning mist, romantic architecture in fog',
  photoTaken: 'His photo from Day 3'
},
{
  quote: "My Instagram went from 1.2k to 47k in six weeks after posting the Alentejo series. Every brand inquiry asks where I shot it. Captura is the anti-preset portfolio trip.",
  name: 'Mei-Ling Okonkwo',
  descriptor: 'Content Creator · Amsterdam',
  location: 'March 2025 tour',
  img: "https://images.unsplash.com/photo-1671093969439-425b7983df6b",
  imgAlt: 'Mei-Ling\'s milky way arch over Alqueva dark sky reserve reflected in still water',
  photoTaken: 'Her photo from Day 6'
}];


const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {if (ref) observer.observe(ref);});
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stories"
      className="py-24 px-6 relative"
      style={{ background: 'linear-gradient(180deg, var(--color-whitewash-warm) 0%, var(--color-slate-main) 100%)' }}>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block text-[10px] uppercase tracking-ultra font-bold mb-4"
            style={{ color: 'var(--color-terracotta)', fontFamily: 'DM Sans, sans-serif' }}>
            
            Participant Stories
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-light"
            style={{ color: 'var(--color-slate-main)', fontFamily: 'Fraunces, Georgia, serif' }}>
            
            The transformation is
            <br />
            <em style={{ color: 'var(--color-terracotta)' }}>in the frame.</em>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) =>
          <div
            key={i}
            ref={(el) => {cardRefs.current[i] = el;}}
            data-delay={String(i * 150)}
            className="masonry-tile flex flex-col gap-0 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(250,245,239,0.06)',
              border: '1px solid rgba(250,245,239,0.1)',
              backdropFilter: 'blur(8px)'
            }}>
            
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <AppImage
                src={t.img}
                alt={t.imgAlt}
                fill
                className="object-cover grayscale-hover" />
              
                <div
                className="absolute bottom-0 left-0 right-0 px-4 py-2 text-[10px] font-bold uppercase tracking-widest"
                style={{
                  background: 'rgba(17,26,36,0.7)',
                  color: 'var(--color-gold)',
                  fontFamily: 'DM Sans, sans-serif'
                }}>
                
                  {t.photoTaken}
                </div>
              </div>

              {/* Quote */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                  <path d="M0 20V12C0 5.333 3.333 1.333 10 0L11.5 2.5C8.5 3.5 7 5.5 7 8.5H12V20H0ZM16 20V12C16 5.333 19.333 1.333 26 0L27.5 2.5C24.5 3.5 23 5.5 23 8.5H28V20H16Z" fill="rgba(232,168,72,0.4)" />
                </svg>
                <p
                className="text-sm leading-relaxed font-light flex-1"
                style={{ color: 'rgba(250,245,239,0.85)', fontFamily: 'DM Sans, sans-serif' }}>
                
                  {t.quote}
                </p>
                <div className="flex flex-col gap-0.5 pt-2" style={{ borderTop: '1px solid rgba(250,245,239,0.08)' }}>
                  <span
                  className="text-sm font-bold"
                  style={{ color: 'var(--color-whitewash)', fontFamily: 'DM Sans, sans-serif' }}>
                  
                    {t.name}
                  </span>
                  <span
                  className="text-xs"
                  style={{ color: 'rgba(250,245,239,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
                  
                    {t.descriptor}
                  </span>
                  <span
                  className="text-[11px] mt-1"
                  style={{ color: 'var(--color-gold)', fontFamily: 'DM Sans, sans-serif' }}>
                  
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;