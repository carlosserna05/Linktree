import { ImageResponse } from "next/og";
import { profile } from "@/data/links";

export const alt = `${profile.name} (${profile.handle})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #0b0b0d 0%, #1a1305 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "#ff9900",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            fontWeight: 700,
            color: "#0b0b0d",
            marginBottom: 36,
          }}
        >
          {profile.handle.replace("@", "").charAt(0).toUpperCase()}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#f5f5f5" }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#ff9900", marginTop: 12 }}>
          {profile.handle}
        </div>
      </div>
    ),
    { ...size }
  );
}
