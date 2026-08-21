import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08080c",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(139,92,246,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(139,92,246,0.18), transparent 50%)",
          color: "#f4f4f6",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28, color: "#a78bfa" }}>
          <span>{"//"}</span>
          <span>asma.dev</span>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 28 }}>
          Asma Yaseen
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 18, color: "#c4b5fd" }}>
          Agentic AI Developer · Software Engineer
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 40, color: "#9a99a8" }}>
          $ claude code --spec-first_
        </div>
      </div>
    ),
    { ...size }
  );
}
