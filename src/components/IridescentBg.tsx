"use client";

/* The single chromatic gesture of the whole system — a liquid iridescent wash
   of sage → amber → oxblood living only behind the hero. Interface stays mono. */
export default function IridescentBg() {
  return (
    <div className="iridescent-stage" aria-hidden>
      <div className="iridescent-blob blob-sage" />
      <div className="iridescent-blob blob-amber" />
      <div className="iridescent-blob blob-oxblood" />
      <div className="iridescent-grain" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
