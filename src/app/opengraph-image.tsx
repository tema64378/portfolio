import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Артём Яковлев — графический дизайнер и веб-разработчик";

async function loadFont(text: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format/)?.[1];
  if (!src) throw new Error("font src not found");
  return await (await fetch(src)).arrayBuffer();
}

export default async function OpengraphImage() {
  const title = "Артём Яковлев";
  const role = "ГРАФИЧЕСКИЙ ДИЗАЙНЕР · ВЕБ-РАЗРАБОТЧИК";
  const foot = "дизайн × код · Великий Новгород · трудкрут.com";
  const chars = title + role + foot + "0123456789";

  const [regular, semibold] = await Promise.all([
    loadFont(chars, 400),
    loadFont(chars, 600),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* iridescent atmosphere */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "radial-gradient(600px circle at 78% 22%, rgba(160,224,171,0.55), transparent 60%), radial-gradient(680px circle at 92% 55%, rgba(255,172,46,0.6), transparent 60%), radial-gradient(560px circle at 70% 88%, rgba(165,45,37,0.6), transparent 62%)",
          }}
        />
        <div style={{ display: "flex", position: "relative" }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 4,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            {role}
          </div>
        </div>

        <div style={{ display: "flex", position: "relative" }}>
          <div
            style={{
              fontSize: 148,
              fontWeight: 600,
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", position: "relative" }}>
          <div style={{ fontSize: 28, fontWeight: 400, color: "rgba(255,255,255,0.85)" }}>
            {foot}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
      ],
    }
  );
}
