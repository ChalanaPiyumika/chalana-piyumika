import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";

export const alt = "Chalana Piyumika - Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
            padding: "80px",
            background: "rgba(255, 255, 255, 0.03)",
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: 800,
              color: "white",
              margin: 0,
              padding: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textAlign: "center",
              display: "flex",
              gap: "24px",
            }}
          >
            <span>{profile.name.split(" ")[0]}</span>
            <span style={{ color: "#0ea5e9" }}>{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p
            style={{
              fontSize: "36px",
              fontWeight: 500,
              color: "#a3a3a3", // neutral-400
              margin: 0,
              marginTop: "20px",
              padding: 0,
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            Software Engineer
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
