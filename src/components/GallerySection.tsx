"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightbox) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  const galleryItems = [
    {
      label: "Classroom Learning",
      tag: "Academics",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
      alt: "Students engaged in classroom learning at King's Onward College",
    },
    {
      label: "Science Laboratory",
      tag: "STEM",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      alt: "Students conducting experiments in the science laboratory",
    },
    {
      label: "Sports & Athletics",
      tag: "Sports",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
      alt: "Students participating in sports and athletic activities",
    },
    {
      label: "Cultural Celebrations",
      tag: "Culture",
      image: "https://images.unsplash.com/photo-1529543544282-ea99407407c1?w=800&h=600&fit=crop",
      alt: "Students celebrating cultural events and traditions",
    },
    {
      label: "Computer ICT Suite",
      tag: "Technology",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      alt: "Students working on computers in the ICT suite",
    },
    {
      label: "Graduation Ceremony",
      tag: "Events",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      alt: "Graduation ceremony at King's Onward College",
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--c-bg-warm)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Campus Life</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            Life at King&apos;s <span className="text-gold">Onward</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into the vibrant daily experiences that make our school a joyful community of learners.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-interactive-grid">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className="gallery-card-item"
              role="button"
              tabIndex={0}
              aria-label={`View ${item.label}`}
              onClick={() => openLightbox(item.image, item.alt)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(item.image, item.alt);
                }
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                unoptimized
              />
              <div className="gallery-card-overlay">
                <span className="gallery-card-tag">{item.tag}</span>
                <p className="gallery-card-title">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="cta-banner" style={{ marginTop: "3rem" }}>
          <h3 className="cta-title">
            See Our Campus <span style={{ color: "var(--c-accent-light)" }}>In Person</span>
          </h3>
          <p className="cta-desc">
            Schedule a visit to experience our world-class facilities, meet our staff, and see why parents choose King&apos;s Onward College.
          </p>
          <a href="/contact" className="btn-gold" style={{ position: "relative", zIndex: 1 }}>
            Book a Campus Tour
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="lightbox-backdrop" onClick={closeLightbox} role="dialog" aria-label="Image viewer">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close image viewer">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={820}
              height={615}
              style={{ width: "100%", height: "auto", display: "block" }}
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  );
}
