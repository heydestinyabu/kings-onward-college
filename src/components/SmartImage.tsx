"use client";

import Image from "next/image";

// ═══════════════════════════════════════════════════════════════
// Smart Image Component — handles missing images gracefully
// Shows a beautiful gradient placeholder with an icon when
// the actual image file doesn't exist.
// ═══════════════════════════════════════════════════════════════

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  fallbackGradient?: string;
  fallbackIcon?: React.ReactNode;
}

export default function SmartImage({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  className,
  style,
  fallbackGradient = "linear-gradient(135deg, #1E7FD8 0%, #10186B 100%)",
  fallbackIcon,
}: SmartImageProps) {
  return (
    <div
      style={{
        position: fill ? "absolute" : "relative",
        width: fill ? "100%" : width,
        height: fill ? "100%" : height,
        overflow: "hidden",
        borderRadius: style?.borderRadius || 0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        style={{ objectFit: "cover", ...style }}
        onError={(e) => {
          // On error, the img tag will fail to load — the fallback div behind shows
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
        }}
      />
      {/* Fallback background (visible if image fails) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: fallbackGradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: -1,
        }}
      >
        {fallbackIcon || (
          <svg width="48" height="48" fill="none" stroke="rgba(255,255,255,0.3)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
      </div>
    </div>
  );
}
