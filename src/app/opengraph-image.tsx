import { ImageResponse } from "next/og";

// Dynamic Open Graph image — generates a branded social card
export const alt = "King's Onward College — Excellence in Education, Benin City";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0C1236 0%, #1E7FD8 60%, #3FC1F0 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* School Crest Background Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(63, 193, 240, 0.25) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* School Name */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.1,
            zIndex: 1,
          }}
        >
          King&apos;s Onward College
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#3FC1F0",
            textAlign: "center",
            margin: "16px 0 0",
            zIndex: 1,
          }}
        >
          Excellence in Education
        </p>

        {/* Location & Info */}
        <p
          style={{
            fontSize: "20px",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            margin: "12px 0 0",
            zIndex: 1,
          }}
        >
          Benin City, Edo State, Nigeria • Nursery • Primary • Secondary
        </p>

        {/* Bottom Accent Bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            background: "linear-gradient(90deg, #1E7FD8, #3FC1F0, #FF7B54)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
