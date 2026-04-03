'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface DayCluster {
  dayRange: string;
  title: string;
  location: string;
  timeOfDay: string;
  timeLabel: string;
  bgGradient: string;
  tiles: {
    img: string;
    alt: string;
    caption: string;
    span?: 'tall' | 'wide' | 'normal';
  }[];
  cinematicBar: {
    img: string;
    alt: string;
    quote: string;
  } | null;
}

const clusters: DayCluster[] = [
{
  dayRange: 'Days 1–2',
  title: 'Lisbon at Blue Hour',
  location: 'Alfama · Belém · Mouraria',
  timeOfDay: 'pre-dawn',
  timeLabel: '05:30 — 08:00',
  bgGradient: 'linear-gradient(180deg, #111A24 0%, #1B2838 100%)',
  tiles: [
  {
    img: "https://images.unsplash.com/photo-1604227149894-3a15927a507c",
    alt: 'Narrow cobblestone alley in Alfama at dawn, laundry hanging between terracotta buildings, blue light',
    caption: 'Alfama wakes slowly',
    span: 'tall'
  },
  {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_12395ba28-1772251129332.png",
    alt: 'Cobalt blue azulejo tiles on Lisbon building facade reflecting morning light',
    caption: 'Azulejo light study',
    span: 'normal'
  },
  {
    img: "https://images.unsplash.com/photo-1572527238813-dac5411a2083",
    alt: 'Lisbon tram on hillside street at golden hour, warm light casting long shadows',
    caption: 'Tram 28 at first light',
    span: 'normal'
  },
  {
    img: "https://images.unsplash.com/photo-1519033579041-9cb53b090dea",
    alt: 'Miradouro viewpoint over red-roofed Lisbon at sunrise with Tagus river in background',
    caption: 'Miradouro da Graça',
    span: 'wide'
  }],

  cinematicBar: {
    img: "https://images.unsplash.com/photo-1688293933645-47545f4522fa",
    alt: 'Panoramic view of Lisbon rooftops at sunrise with terracotta tiles and Atlantic light',
    quote: '"The city doesn\'t wake. It reveals itself — tile by tile, shadow by shadow."'
  }
},
{
  dayRange: 'Days 3–4',
  title: 'Sintra & Cabo da Roca',
  location: 'Sintra · Cascais · Cabo da Roca',
  timeOfDay: 'morning',
  timeLabel: '06:00 — 11:00',
  bgGradient: 'linear-gradient(180deg, #1B2838 0%, #2D3E52 100%)',
  tiles: [
  {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_16b5137ce-1772251127613.png",
    alt: 'Pena Palace in Sintra surrounded by misty forest, romantic architecture at dawn',
    caption: 'Pena in morning mist',
    span: 'normal'
  },
  {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_15b5a6331-1772251128669.png",
    alt: 'Dramatic Atlantic cliffs at Cabo da Roca, westernmost point of Europe, golden light',
    caption: 'Edge of the continent',
    span: 'tall'
  },
  {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d22cef35-1772251128141.png",
    alt: 'Long exposure of Atlantic waves crashing on rocky Portuguese coastline at sunrise',
    caption: 'Long exposure · 4s · f/11',
    span: 'wide'
  }],

  cinematicBar: {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_1046e61e0-1772251130412.png",
    alt: 'Westernmost point of Europe — Atlantic ocean meeting ancient cliffs in golden morning light',
    quote: '"Wait. The cloud is about to break."'
  }
},
{
  dayRange: 'Days 5–7',
  title: 'Alentejo Plains & Cork Forest',
  location: 'Évora · Monsaraz · Alqueva',
  timeOfDay: 'golden',
  timeLabel: '17:30 — 20:00',
  bgGradient: 'linear-gradient(180deg, #FAF5EF 0%, #F2EBE0 100%)',
  tiles: [
  {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_190a6fc2b-1772251127422.png",
    alt: 'Vast Alentejo plains at golden hour, rolling hills with cork oak trees casting long amber shadows',
    caption: 'Plains at 18:42',
    span: 'wide'
  },
  {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_196c2db5d-1772251130480.png",
    alt: 'Ancient stone dolmen in Alentejo cork forest, evening light filtering through trees',
    caption: 'Pre-historic · golden hour',
    span: 'normal'
  },
  {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa031571-1772251127276.png",
    alt: 'Starry night sky over Alqueva dark sky reserve, milky way visible above still water',
    caption: 'Alqueva Dark Sky',
    span: 'tall'
  }],

  cinematicBar: {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_154976f12-1772251128211.png",
    alt: 'Alentejo plains at sunset, amber light turning everything gold, cork oaks silhouetted',
    quote: '"This is the light. Fifteen minutes. Don\'t miss it."'
  }
},
{
  dayRange: 'Days 8–10',
  title: 'Algarve — Sea Caves & Cliff Light',
  location: 'Lagos · Benagil · Sagres',
  timeOfDay: 'blue-hour',
  timeLabel: '19:00 — 21:00',
  bgGradient: 'linear-gradient(180deg, #1B2838 0%, #111A24 100%)',
  tiles: [
  {
    img: "https://images.unsplash.com/photo-1695418251288-533fd5943c93",
    alt: 'Benagil sea cave from inside, circular oculus opening to sky, turquoise water below',
    caption: 'Benagil oculus · f/8 · 1/60',
    span: 'tall'
  },
  {
    img: "https://images.unsplash.com/photo-1657227242724-10f0fe8ed10e",
    alt: 'Algarve golden cliffs at sunset, orange rock face glowing against deep blue Atlantic',
    caption: 'Praia da Marinha',
    span: 'normal'
  },
  {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_10342506b-1772251127058.png",
    alt: 'Long exposure of Atlantic waves at Sagres, blue hour light turning water silky and sky indigo',
    caption: 'Sagres blue hour · 30s',
    span: 'normal'
  },
  {
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc7185e1-1772251129027.png",
    alt: 'Participant photographer silhouetted against dramatic sunset at Ponta de Sagres',
    caption: 'The last frame',
    span: 'wide'
  }],

  cinematicBar: null
}];


const MasonryJourney: React.FC = () => {
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, parseInt((entry.target as HTMLElement).dataset.delay || '0'));
          }
        });
      },
      { threshold: 0.1 }
    );

    tileRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [mounted]);

  let globalTileIndex = 0;

  return (
    <section id="journey" className="relative">
      {clusters.map((cluster, clusterIdx) => {
        const isDark = cluster.timeOfDay === 'pre-dawn' || cluster.timeOfDay === 'morning' || cluster.timeOfDay === 'blue-hour';
        const textColor = isDark ? 'var(--color-whitewash)' : 'var(--color-slate-main)';
        const subColor = isDark ? 'rgba(250,245,239,0.55)' : 'rgba(27,40,56,0.55)';
        const labelColor = isDark ? 'var(--color-gold)' : 'var(--color-terracotta)';

        return (
          <div key={clusterIdx}>
            {/* Cluster section */}
            <div className="relative noise-overlay py-20 px-6" style={{ background: cluster.bgGradient }}>
              <div className="max-w-7xl mx-auto">
                {/* Cluster header */}
                <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-ultra font-bold mb-2"
                      style={{ color: labelColor, fontFamily: 'DM Sans, sans-serif' }}>
                      
                      {cluster.dayRange} · {cluster.timeLabel}
                    </div>
                    <h2
                      className="font-display text-4xl md:text-5xl font-light leading-tight"
                      style={{ color: textColor, fontFamily: 'Fraunces, Georgia, serif' }}>
                      
                      {cluster.title}
                    </h2>
                    <p
                      className="text-sm mt-2"
                      style={{ color: subColor, fontFamily: 'DM Sans, sans-serif' }}>
                      
                      {cluster.location}
                    </p>
                  </div>
                  <div
                    className="px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest"
                    style={{
                      borderColor: isDark ? 'rgba(232,168,72,0.2)' : 'rgba(196,98,58,0.2)',
                      color: labelColor,
                      fontFamily: 'DM Sans, sans-serif'
                    }}>
                    
                    {cluster.timeOfDay === 'pre-dawn' && '🌑 Pre-Dawn Blues'}
                    {cluster.timeOfDay === 'morning' && '🌤 Morning Whites'}
                    {cluster.timeOfDay === 'golden' && '🌅 Golden Hour Ambers'}
                    {cluster.timeOfDay === 'blue-hour' && '🌆 Blue Hour Slates'}
                  </div>
                </div>

                {/* Masonry grid */}
                <div className="columns-2 md:columns-3 gap-4 space-y-0">
                  {cluster.tiles.map((tile, tileIdx) => {
                    const delay = tileIdx * 120;
                    const currentIndex = globalTileIndex++;
                    const heightClass =
                    tile.span === 'tall' ? 'h-80 md:h-[440px]' :
                    tile.span === 'wide' ? 'h-52 md:h-64' : 'h-56 md:h-72';

                    return (
                      <div
                        key={tileIdx}
                        ref={(el) => {tileRefs.current[currentIndex] = el;}}
                        data-delay={String(delay)}
                        className={`masonry-tile relative overflow-hidden rounded-2xl mb-4 group cursor-pointer ${tile.span === 'wide' ? 'break-inside-avoid' : 'break-inside-avoid'}`}
                        style={{ breakInside: 'avoid' }}>
                        
                        <div className={`relative ${heightClass} overflow-hidden rounded-2xl`}>
                          <AppImage
                            src={tile.img}
                            alt={tile.alt}
                            fill
                            className="object-cover grayscale-hover" />
                          
                          {/* Caption overlay */}
                          <div
                            className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                            style={{ background: 'linear-gradient(to top, rgba(17,26,36,0.85), transparent)' }}>
                            
                            <span
                              className="text-xs text-white/90 font-medium italic"
                              style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                              
                              {tile.caption}
                            </span>
                          </div>
                        </div>
                      </div>);

                  })}
                </div>
              </div>
            </div>

            {/* Cinematic bar between clusters */}
            {cluster.cinematicBar &&
            <div
              className="relative h-64 md:h-80 overflow-hidden flex items-center justify-center"
              style={{
                backgroundImage: `url(${cluster.cinematicBar.img})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              
                <div className="absolute inset-0" style={{ background: 'rgba(17,26,36,0.65)' }} />
                <div className="relative z-10 text-center px-6 max-w-2xl">
                  <p
                  className="font-display text-xl md:text-3xl font-light italic leading-relaxed"
                  style={{ color: 'var(--color-whitewash)', fontFamily: 'Fraunces, Georgia, serif' }}>
                  
                    {cluster.cinematicBar.quote}
                  </p>
                  <div
                  className="w-12 h-px mx-auto mt-5"
                  style={{ background: 'var(--color-gold)' }} />
                
                </div>
              </div>
            }
          </div>);

      })}
    </section>);

};

export default MasonryJourney;