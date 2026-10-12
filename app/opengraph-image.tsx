import { ImageResponse } from "next/og";
import { portfolioData } from "@/lib/portfolio-data";

export const alt = "Kushagra Rohatgi, senior backend and full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { name, role, location } = portfolioData.person;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        padding: "62px 70px",
        background: "#f6f5f0",
        color: "#111315",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: -90,
          top: -120,
          width: 460,
          height: 460,
          borderRadius: 230,
          background: "#e0e7f6",
        }}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: 82,
          top: 138,
          width: 210,
          height: 210,
          border: "5px solid #2452e9",
          borderRadius: 32,
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 12,
            background: "#2452e9",
            color: "#fff",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          kr.
        </div>
        <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: 3 }}>
          PORTFOLIO / ENGINEERING
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 800,
            letterSpacing: -5,
            lineHeight: 1,
          }}
        >
          {name}
        </div>
        <div style={{ display: "flex", color: "#2452e9", fontSize: 37, fontWeight: 700 }}>
          {role}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#343a38" }}>
          Backend-first. Product-minded. Built to last.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "2px solid #c5c9c1",
          paddingTop: 25,
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        <span>APIs / CLOUD / AI WORKFLOWS</span>
        <span>{location.toUpperCase()}</span>
      </div>
    </div>,
    size,
  );
}
