'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface ParticipantFrame {
  img: string;
  alt: string;
  photographer: string;
  location: string;
  exif: {
    camera: string;
    lens: string;
    settings: string;
  };
  caption: string;
}

const frames: ParticipantFrame[] = [
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_158db797f-1772251130673.png",
  alt: 'Long exposure sea cave with turquoise water and natural oculus light beam, shot by tour participant',
  photographer: 'Helena Vasquez',
  location: 'Benagil, Day 9',
  exif: { camera: 'Canon EOS R5', lens: '16-35mm f/2.8L', settings: 'f/8 · 1/60s · ISO 200' },
  caption: 'The shot that changed everything'
},
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_174c4d5ae-1772251130314.png",
  alt: 'Pre-dawn blue light in Alfama alleyway, cat frozen mid-step on cobblestones, participant photograph',
  photographer: 'James Whitfield',
  location: 'Alfama, Day 2 · 05:47',
  exif: { camera: 'Sony A7 IV', lens: '35mm f/1.4 GM', settings: 'f/1.4 · 1/80s · ISO 3200' },
  caption: 'The cat that wouldn\'t wait'
},
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_13fbceeec-1772251128721.png",
  alt: 'Golden Algarve cliffs at sunset with dramatic Atlantic light, terracotta rock glowing amber',
  photographer: 'Priya Nair',
  location: 'Marinha Beach, Day 8 · 19:12',
  exif: { camera: 'Nikon Z8', lens: '24-70mm f/2.8 S', settings: 'f/11 · 1/30s · ISO 100' },
  caption: 'Fifteen minutes of amber'
},
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb50a409-1772251130330.png",
  alt: 'Pena Palace emerging from morning fog in Sintra, romantic architecture wrapped in mist',
  photographer: 'Thomas Brennan',
  location: 'Sintra, Day 3 · 07:15',
  exif: { camera: 'Fujifilm GFX 50S II', lens: '35-70mm f/4.5-5.6', settings: 'f/8 · 1/125s · ISO 400' },
  caption: 'The palace finds the fog'
},
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1a179d5d9-1772251134357.png",
  alt: 'Milky way arch over Alqueva dark sky reserve, stars reflected in still black water',
  photographer: 'Mei-Ling Okonkwo',
  location: 'Alqueva, Day 6 · 23:40',
  exif: { camera: 'Sony A7S III', lens: '14mm f/1.8 GM', settings: 'f/1.8 · 25s · ISO 6400' },
  caption: 'No preset. Just dark sky.'
},
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd31b3ee-1772251129876.png",
  alt: 'Long exposure Atlantic waves at Cabo da Roca, water silky smooth against ancient rock',
  photographer: 'Rafael Cardoso',
  location: 'Cabo da Roca, Day 4 · 06:58',
  exif: { camera: 'Canon EOS R6 II', lens: '17-40mm f/4L', settings: 'f/16 · 4s · ISO 50' },
  caption: 'The edge of Europe, slow'
}];


const ParticipantGallery: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
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

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((ref) => {if (ref) observer.observe(ref);});

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      className="py-24 px-6 relative noise-overlay"
      style={{ background: 'var(--color-whitewash)' }}>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="stagger-children text-center mb-16">
          
          <div
            className="inline-block text-[10px] uppercase tracking-ultra font-bold mb-4"
            style={{ color: 'var(--color-terracotta)', fontFamily: 'DM Sans, sans-serif' }}>
            
            Previous Participants
          </div>
          <h2
            className="font-display text-4xl md:text-6xl font-light leading-tight text-slate-main"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--color-slate-main)' }}>
            
            Their best single frame.
            <br />
            <em className="font-light" style={{ color: 'var(--color-terracotta)' }}>It could be yours.</em>
          </h2>
          <p
            className="text-base text-slate-main/60 max-w-xl mx-auto mt-4"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(27,40,56,0.6)' }}>
            
            Every image below was taken by a Captura participant on tour — no retouching beyond in-camera RAW conversion. EXIF data included.
          </p>
        </div>

        {/* Gallery grid — masonry-style asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frames.map((frame, i) =>
          <div
            key={i}
            ref={(el) => {cardRefs.current[i] = el;}}
            data-delay={String(i * 100)}
            className={`masonry-tile exif-card group relative overflow-hidden rounded-2xl cursor-pointer ${i === 0 || i === 4 ? 'md:col-span-1 lg:col-span-1' : ''}`}
            style={{ breakInside: 'avoid' }}>
            
              <div className={`relative overflow-hidden rounded-2xl ${i === 0 ? 'h-[500px]' : i % 3 === 2 ? 'h-80' : 'h-72'}`}>
                <AppImage
                src={frame.img}
                alt={frame.alt}
                fill
                className="object-cover grayscale-hover" />
              

                {/* EXIF overlay on hover */}
                <div
                className="exif-overlay absolute inset-0 flex flex-col justify-end p-5"
                style={{ background: 'linear-gradient(to top, rgba(17,26,36,0.92) 0%, rgba(17,26,36,0.4) 60%, transparent 100%)' }}>
                
                  <div className="mb-2">
                    <p
                    className="text-xs italic text-white/80 mb-1"
                    style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                    
                      "{frame.caption}"
                    </p>
                    <p
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    
                      {frame.photographer}
                    </p>
                    <p
                    className="text-[11px] text-white/60"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--color-gold)' }}>
                    
                      {frame.location}
                    </p>
                  </div>
                  {/* EXIF chip */}
                  <div
                  className="inline-flex flex-wrap gap-2 mt-2">
                  
                    {[frame.exif.camera, frame.exif.lens, frame.exif.settings].map((val, j) =>
                  <span
                    key={j}
                    className="text-[10px] px-2 py-0.5 rounded font-mono"
                    style={{
                      background: 'rgba(232,168,72,0.15)',
                      color: 'var(--color-gold)',
                      border: '1px solid rgba(232,168,72,0.2)',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>
                    
                        {val}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ParticipantGallery;