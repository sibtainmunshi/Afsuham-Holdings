import Link from "next/link";
import styles from "./Footer.module.css";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Section 1: Main Links & CTA */}
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>Afsuham<span>.</span></h2>
            <p className={styles.tagline}>Global Management Consulting</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/driving-values">Driving Values</Link></li>
                <li><Link href="/news">News & Insights</Link></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h3>Investors</h3>
              <ul>
                <li><Link href="/invest">Invest with Us</Link></li>
                <li><Link href="/login" className={styles.accentLink}>Investor Login <ArrowRight size={14} /></Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Copyright & Legal */}
        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} Afsuham Holdings. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
