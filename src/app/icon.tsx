import { ImageResponse } from "next/og";

// Dynamic favicon — generates a branded icon at runtime
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E7FD8",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "18px",
            fontWeight: 800,
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          K
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
