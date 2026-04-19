"use client";

import { useState, useEffect } from "react";
import styles from "./CookieConsent.module.css";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("afsuham-cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("afsuham-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("afsuham-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={handleDecline} aria-label="Close">
          <X size={20} />
        </button>
        <div className={styles.content}>
          <h3 className={styles.title}>Your Privacy Choices</h3>
          <p className={styles.text}>
            We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We also share information about your use of our site with our social media, advertising and analytics partners.
          </p>
          <div className={styles.actions}>
            <button className={styles.acceptBtn} onClick={handleAccept}>
              Accept All Cookies
            </button>
            <button className={styles.manageBtn}>
              Manage Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
