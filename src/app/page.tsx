"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slides = [
  {
    id: "01",
    title: "Companies’ AI advantage will soon be outside in",
    date: "31-Mar-2026 | 5 min read",
    desc: "AI is being done to leaders. Advantage will come from employees at the edge, who turn real-world friction into innovation and create differentiated value that strategy alone can't replicate.",
    authorName: "Alex Rutter",
    authorTitle: "EMEA Managing Director of Artificial Intelligence, Google Cloud",
    bgVideo: "https://s7d1.scene7.com/is/content/kyndryl/tki-companies-ai-advantage-header-video-16x9-0x720-3000k",
    authorImg: "https://s7d1.scene7.com/is/image/kyndryl/tki-companies-ai-advantage-alex-rutter-1x1"
  },
  {
    id: "02",
    title: "Innovation asymmetry: a fine balance",
    date: "31-Mar-2026 | 6 min read",
    desc: "As knowledge becomes commoditized, companies must generate new ideas from within. Strong in-house research and motivated talent create unique advantages that competitors can't imitate...",
    authorName: "Professor Hiroshi Shimizu",
    authorTitle: "School of Commerce, Waseda University",
    bgVideo: "https://s7d1.scene7.com/is/content/kyndryl/tki-innovation-asymmetry-header-video-16x9-0x720-3000k",
    authorImg: "https://s7d1.scene7.com/is/image/kyndryl/tki-innovation-asymmetry-hiroshi-shimizu-1x1"
  },
  {
    id: "03",
    title: "The new AI partnership playbook",
    date: "31-Mar-2026 | 5 min read",
    desc: "Organizations struggle to scale AI not because it fails, but because ownership is fragmented. Enterprise innovation demands ecosystem leadership...",
    authorName: "Madeline McCrea",
    authorTitle: "Global SVP of Strategic Partnerships at SAP",
    bgVideo: "https://s7d1.scene7.com/is/content/kyndryl/tki-ai-partnership-playbook-header-video-16x9-0x720-3000k",
    authorImg: "https://s7d1.scene7.com/is/image/kyndryl/tki-ai-partnership-playbook-madeline-mccrea-1x1"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".slide-panel");
      const navItemsList = gsap.utils.toArray<HTMLElement[]>(".nav-item-group");
      
      // Pin the whole container
      ScrollTrigger.create({
        trigger: ".slider-container",
        start: "top top",
        end: "+=1800", // Medium scroll distance for smoother transitions
        pin: true,
        scrub: 1, // Adds smoothing to the scroll hijacking
        animation: gsap.timeline()
          // Setup initial states for all article panels
          .set(panels.slice(1), { opacity: 0, y: 150 }) 
          
          // Intro -> Slide 01
          .to(panels[0], { opacity: 0, y: -150, duration: 1, ease: "power2.inOut" }, 0)
          .to(".left-nav-overlay", { opacity: 1, duration: 1, ease: "power2.inOut" }, 0)
          .to(panels[1], { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }, 0)
          .to(".nav-item-0", { opacity: 1, borderBottomColor: '#E34B30', duration: 0.5 }, 0.5)
          .to(".nav-title-0", { color: '#fff', duration: 0.5 }, 0.5)
          .to(".nav-number-0", { color: '#E34B30', duration: 0.5 }, 0.5)
          
          // Slide 01 -> Slide 02
          .to(panels[1], { opacity: 0, y: -150, duration: 1, ease: "power2.inOut" }, 2)
          .to(panels[2], { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }, 2)
          .to(".nav-item-0", { opacity: 0.5, borderBottomColor: 'rgba(255,255,255,0.2)', duration: 0.5 }, 2)
          .to(".nav-title-0", { color: '#a1a1aa', duration: 0.5 }, 2)
          .to(".nav-number-0", { color: '#a1a1aa', duration: 0.5 }, 2)
          .to(".nav-item-1", { opacity: 1, borderBottomColor: '#E34B30', duration: 0.5 }, 2.5)
          .to(".nav-title-1", { color: '#fff', duration: 0.5 }, 2.5)
          .to(".nav-number-1", { color: '#E34B30', duration: 0.5 }, 2.5)
          
          // Slide 02 -> Slide 03
          .to(panels[2], { opacity: 0, y: -150, duration: 1, ease: "power2.inOut" }, 4)
          .to(panels[3], { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }, 4)
          .to(".nav-item-1", { opacity: 0.5, borderBottomColor: 'rgba(255,255,255,0.2)', duration: 0.5 }, 4)
          .to(".nav-title-1", { color: '#a1a1aa', duration: 0.5 }, 4)
          .to(".nav-number-1", { color: '#a1a1aa', duration: 0.5 }, 4)
          .to(".nav-item-2", { opacity: 1, borderBottomColor: '#E34B30', duration: 0.5 }, 4.5)
          .to(".nav-title-2", { color: '#fff', duration: 0.5 }, 4.5)
          .to(".nav-number-2", { color: '#E34B30', duration: 0.5 }, 4.5)
      });

      // Journal Section Animation
      gsap.fromTo(".journal-content", 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journal-section",
            start: "top 75%",
          }
        }
      );

      // Parallax for Journal Background Video
      gsap.to(".journal-bg-video", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".journal-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // CTA Section Animation
      gsap.fromTo(".cta-col", 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.main} ref={containerRef}>
      
      {/* Scroll-jacked Slider Section */}
      <section className={`slider-container ${styles.sliderSection}`}>
        
        {/* Left Navigation Fixed Overlay */}
        <div className={`${styles.leftNavOverlay} left-nav-overlay`} style={{ opacity: 0 }}>
          <div className={styles.leftNav}>
            <ul>
              {slides.map((s, i) => (
                <li 
                  key={s.id} 
                  className={`${styles.navItem} nav-item-${i}`}
                  style={{ 
                    opacity: 0.5,
                    borderBottomColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <span className={`${styles.navTitle} nav-title-${i}`} style={{ color: '#a1a1aa' }}>{s.title}</span>
                  <span className={`${styles.navNumber} nav-number-${i}`} style={{ color: '#a1a1aa' }}>{s.id}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Intro Slide (Bold Ideas) - Index 0 */}
        <div className={`${styles.slidePanel} slide-panel`} style={{ opacity: 1, zIndex: 1 }}>
          <div className={styles.introContent}>
            <h1 className={styles.introTitle}>
              <span>Bold Ideas to</span><br/>
              <span style={{ color: "#888" }}>Power Progress</span>
            </h1>
          </div>
        </div>

        {/* Article Slides - Index 1, 2, 3 */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`${styles.slidePanel} slide-panel`} 
            style={{ 
              opacity: 0, // Hidden initially, GSAP fades them in
              zIndex: index + 2, // Stack them on top of each other
            }}
          >
            {/* Background Video */}
            <video 
              className={styles.bgVideo}
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={slide.bgVideo} type="video/mp4" />
            </video>
            
            {/* Dark overlay for readability */}
            <div className={styles.overlay}></div>

            <div className={styles.slideContent}>
              {/* Left Navigation Placeholder to maintain grid */}
              <div className={styles.leftNavPlaceholder}></div>

              {/* Center Content */}
              <div className={styles.centerContent}>
                <div className={styles.tags}>
                  <span className={styles.tag}>Latest</span>
                  <span className={styles.tag}>Featured</span>
                </div>
                <h2 className={styles.articleTitle}>{slide.title}</h2>
                <div className={styles.articleMeta}>{slide.date}</div>
                <p className={styles.articleDesc}>{slide.desc}</p>
                <button className={styles.readMoreBtn}>Read more &gt;</button>
              </div>

              {/* Right Content (Author) */}
              <div className={styles.rightContent}>
                <div className={styles.authorCard}>
                  <img src={slide.authorImg} alt={slide.authorName} className={styles.authorImg} />
                  <div className={styles.authorInfo}>
                    <h3 className={styles.authorName}>{slide.authorName}</h3>
                    <p className={styles.authorTitle}>{slide.authorTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Journal Promo Section */}
      <section className={`${styles.journalSection} journal-section`}>
        <div className={`${styles.journalContent} journal-content`}>
          <h2 className={styles.journalTitle}>Experience The Afsuham Institute Journal</h2>
          <p className={styles.journalDesc}>Get the latest insights in our inaugural issue: <i>Future: On the precipice of promise</i>.</p>
          <button className={styles.journalBtn}>Read the journal</button>
        </div>
        <div className={styles.journalBg} style={{ overflow: 'hidden' }}>
           <video 
              className="journal-bg-video"
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: '120%', objectFit: 'cover', opacity: 0.5, transform: 'translateY(-10%)' }}
            >
              <source src="https://s7d1.scene7.com/is/content/kyndryl/journal-promo-desktop-vid-new-1920" type="video/mp4" />
           </video>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} cta-section`}>
        <div className={styles.ctaDots}></div>
        <div className={styles.ctaGlow}></div>
        
        <div className={styles.ctaContainer}>
          <div className={styles.ctaRow}>
            
            {/* Left CTA */}
            <div className={`${styles.ctaColLeft} cta-col`}>
              <h2 className={styles.ctaHeading}>
                Ready to transform your business?
              </h2>
              <p className={styles.ctaDesc}>
                Partner with us to redefine your business model and accelerate sustainable growth.
              </p>
              <a href="/contact" className={styles.ctaBtnPrimary}>
                <span>Let's Get To Work</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.ctaIcon}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>

            {/* Right CTA */}
            <div className={`${styles.ctaColRight} cta-col`}>
              <h2 className={styles.ctaHeading}>
                Where will your career take you?
              </h2>
              <p className={styles.ctaDesc}>
                Discover opportunities to make a real, lasting impact on a global scale with our team.
              </p>
              <a href="/about" className={styles.ctaBtnSecondary}>
                <span>Join Our Team</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.ctaIcon}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
