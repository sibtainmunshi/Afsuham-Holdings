"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Fade out center message on scroll
      gsap.to(".center-message-wrap", {
        opacity: 0, 
        scale: 0.8,
        scrollTrigger: {
          trigger: ".contact-form-section",
          start: "top 60%",
          end: "top 25%",
          scrub: true,
        }
      });

      // Parallax for contact form background image
      gsap.fromTo(".contact-left-bg", 
        { backgroundPosition: "50% 0%" },
        {
          backgroundPosition: "50% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".contact-form-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Scale Reveal for Promo Images
      gsap.utils.toArray<HTMLElement>(".promo-image").forEach(img => {
        gsap.fromTo(img, 
          { scale: 0.8, opacity: 0, y: 50 },
          { 
            scale: 1, opacity: 1, y: 0,
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
            }
          }
        );
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
      {/* Background Gradient & Blur */}
      <div className={styles.bgGradient}></div>

      {/* Center Message */}
      <div className={`center-message-wrap ${styles.centerMessageWrap}`}>
        <div className={styles.centerMessageContent}>
          <div className={styles.centerMessage}>
            <div className={styles.bigText}>Become an insider for</div>
            <div className={`${styles.bigText} ${styles.mb2}`}>The Afsuham Institute</div>
            <div className={styles.smallText}>Be the first to know about ideas that spark innovation for organizations worldwide</div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={`contact-form-section ${styles.contactFormWrapper}`}>
        <div className={styles.contactFormContainer}>
          <div className={styles.contactGrid}>
            <div className={`${styles.contactLeft} contact-left-bg`}>
              <img src="/content/dam/kyndrylprogram/images/global/kyndryl-institute/logo_b.svg" alt="" className={styles.contactLogo} style={{ display: 'none' }} />
              {/* Afsuham text logo for dark backgrounds */}
              <div style={{ margin: '1.6rem', color: '#fff' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em' }}>THE</span><br/>
                <span style={{ fontSize: '1.8rem', fontWeight: 400 }}>afsuham</span><br/>
                <span style={{ fontSize: '1.2rem', fontWeight: 400, color: '#ddd' }}>institute</span>
                <div style={{ width: '100px', height: '2px', backgroundColor: '#E34B30', marginTop: '6px' }}></div>
              </div>
            </div>
            <div className={styles.contactRight}>
              <form className={styles.form}>
                {/* Form fields based on typical Kyndryl forms */}
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label>First name *</label>
                    <input type="text" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Last name *</label>
                    <input type="text" required />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label>Email *</label>
                    <input type="email" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Company *</label>
                    <input type="text" required />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label>Country/Region *</label>
                    <select required>
                      <option value="">Select...</option>
                      <option value="IN">India</option>
                      <option value="US">United States</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className={styles.submitBtn}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Wrapper */}
      <div className={styles.promoWrapper}>
        <div className={`${styles.promoHalf} ${styles.promoLeft}`}>
          <div className={styles.promoHeading}>Experience our interactive digital journal</div>
          <img className={`${styles.promoImage} promo-image`} src="https://s7d1.scene7.com/is/image/kyndryl/journal-promo-mockup?qlt=100&dpr=on,2" alt="Digital Journal" />
          <Link href="/journal" className={styles.buttonLink}>Read the Digital Journal</Link>
        </div>

        <div className={`${styles.promoHalf} ${styles.promoRight}`}>
          <div className={styles.promoHeading}>Read, save and share your ideas to power progress</div>
          <img className={`${styles.promoImage} promo-image`} src="https://s7d1.scene7.com/is/image/kyndryl/mobile-promo-static?qlt=100&dpr=on,2" alt="Mobile Preview" />
          
          <div className={styles.appButtons}>
            <a href="#" className={styles.appButton}>
              <img src="/etc.clientlibs/kyndrylprogram/clientlibs/clientlib-site/resources/images/kyndryl-institute/app-button--ios-app-store.svg" alt="Download on the App Store" onError={(e) => { e.currentTarget.src = "https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" }} />
            </a>
            <a href="#" className={styles.appButton}>
              <img src="/etc.clientlibs/kyndrylprogram/clientlibs/clientlib-site/resources/images/kyndryl-institute/app-button--android-google-play.svg" alt="Get it on Google Play" onError={(e) => { e.currentTarget.src = "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" }} />
            </a>
          </div>
        </div>
      </div>

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
