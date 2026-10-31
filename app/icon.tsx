import { ImageResponse } from "next/og";
import { profile } from "@/data/links";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const initial = profile.handle.replace("@", "").charAt(0).toUpperCase() || "L";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0d14",
          borderRadius: 16,
        }}
      >
        <span style={{ color: "#f2c230", fontSize: 34, fontWeight: 700 }}>{initial}</span>
      </div>
    ),
    { ...size }
  );
}
