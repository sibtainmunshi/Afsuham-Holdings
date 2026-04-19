"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Driving Values", href: "/driving-values" },
  { name: "Invest", href: "/invest" },
  { name: "News & Insights", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoTextWrapper}>
                <span className={styles.logoSmall}>THE</span>
                <span className={styles.logoMain}>afsuham</span>
                <span className={styles.logoSub}>institute</span>
                <div className={styles.logoLine}></div>
              </div>
            </Link>
          </div>

          <div className={styles.headerRight}>
            <Link href="/contact" className={styles.stayInformedBtn}>
              Stay informed <span className={styles.chevron}>&gt;</span>
            </Link>
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuOverlayOpen : ""}`}>
        <div className={styles.menuContainer}>
          <div className={styles.menuHeader}>
            <button 
              className={styles.closeBtn} 
              onClick={() => setMenuOpen(false)}
            >
              Close <span className={styles.closeIcon}>&times;</span>
            </button>
          </div>
          
          <nav className={styles.navMain}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.name} className={styles.navItem}>
                  <Link 
                    href={link.href} 
                    className={styles.navLink} 
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.navArrow}>&rarr;</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className={styles.menuFooter}>
            <Link href="/contact" className={styles.stayInformedBtn} onClick={() => setMenuOpen(false)}>
              Stay informed <span className={styles.chevron}>&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
