"use client";

import React from "react";

function XIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.146 3.146 3.146 18.146l2.707 2.707L20.854 5.854z" />
      <path d="m20.854 18.146-15-15-2.707 2.707 15 15z" />
    </svg>
  );
}

function TrophyIcon({ className = "w-4 h-4" }: { className?: string }) {
  // Simple trophy-like glyph
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="trophyGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFB800" />
          <stop offset="100%" stopColor="#F5841F" />
        </linearGradient>
      </defs>
      <path
        d="M8 4h8v3a4 4 0 0 1-3 3.873V13h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.127A4 4 0 0 1 8 7V4Z"
        fill="url(#trophyGrad)"
      />
      <path d="M6 5H4a2 2 0 0 0 2 2v2a4 4 0 0 1-4-4V3h4v2Zm12 0h2V3h4v2a4 4 0 0 1-4 4V7a2 2 0 0 0 2-2h-2V5Z" fill="url(#trophyGrad)"/>
      <rect x="8" y="16" width="8" height="2" rx="1" fill="#fff" opacity=".4" />
    </svg>
  );
}

function Stat({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[12px] leading-[20px] text-[#9097A6]">{label}</div>
      <div className="flex items-center gap-1">
        <div className="text-[14px] leading-[22px] text-white">{value}</div>
        {delta ? (
          <div className="text-[12px] leading-[20px] text-[#00B58B]">{delta}</div>
        ) : null}
      </div>
    </div>
  );
}

export default function MCPTestPage() {
  return (
    <div className="min-h-screen w-full flex items-start justify-center p-6">
      {/* Card container (413.33w, padding 20, gap 24, radius 12, bg #131417) */}
      <div
        className="flex flex-col gap-6 p-5 rounded-[12px]"
        style={{ width: 413.33, background: "#131417" }}
      >
        {/* Up row */}
        <div className="flex items-center gap-3 w-full">
          {/* Avatar 28x28 circle */}
          <div className="w-7 h-7 rounded-full overflow-hidden bg-[#2A2D34]" />

          {/* Name + X button */}
          <div className="flex items-center gap-2 flex-1">
            <div className="text-white text-[16px] leading-[24px] font-semibold">Aru</div>
            <button
              type="button"
              className="inline-flex items-center justify-center w-5 h-5 border rounded-[4px]" 
              style={{ borderColor: "#3B3F45" }}
              aria-label="Open X profile"
            >
              <XIcon className="w-[10.67px] h-[10.67px] text-white" />
            </button>

            {/* Board Name pill with gradient bg */}
            <div
              className="flex items-center gap-1 px-2 py-1 text-white"
              style={{
                background:
                  "linear-gradient(90deg, rgba(56,24,252,1) 0%, rgba(107,107,253,1) 50%, rgba(164,121,255,1) 100%)",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                borderBottomLeftRadius: 2,
              }}
            >
              {/* brand-l 12x12 */}
              <div
                className="w-3 h-3 rounded-[4px] flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <div className="w-[9.8px] h-[11.2px] bg-white/80" />
              </div>
              <div className="text-[12px] leading-[20px]">Gravity</div>
            </div>

            {/* Winner badge absolute positioned relative to this row - emulate with relative wrapper */}
            <div className="relative">
              <div className="absolute -top-1 left-4 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <TrophyIcon className="w-[16px] h-[16px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Down section */}
        <div className="flex flex-col gap-4 w-full">
          {/* Stats row (gap 48) */}
          <div className="flex gap-12 w-full">
            <Stat label="Rank" value="No.1" delta="+1" />
            <Stat label="Aura" value="999,999" delta="+1" />
            <div className="flex flex-col gap-2">
              <div className="text-[12px] leading-[20px] text-[#9097A6]">Posts</div>
              <div className="text-[14px] leading-[22px] text-white">708</div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px" style={{ background: "#191B1F" }} />

          {/* Also Contributed to */}
          <div className="flex items-center gap-3 w-full">
            <div className="text-[12px] leading-[20px] text-[#9097A6]">
              Also Contributed to
            </div>

            {/* 16x16 icon tokens */}
            <div
              className="w-4 h-4 rounded-full"
              style={{
                background:
                  "linear-gradient(36deg, rgba(59,66,255,1) 0%, rgba(0,0,0,1) 60%)",
              }}
              title="Galxe"
            />
            <div className="w-4 h-4 rounded bg-[#2a2a2a]" title="Polygon" />
            <div className="w-4 h-4 rounded bg-[#3a3a3a]" title="Jambo" />
            <div className="w-4 h-4 rounded-full overflow-hidden bg-[#4a4a4a]" title="Alva" />
            <div className="w-4 h-4 rounded bg-[#5a5a5a]" title="Merlin" />
            <div className="w-4 h-4 rounded-full overflow-hidden bg-[#6a6a6a]" title="Soneium" />
          </div>
        </div>
      </div>
    </div>
  );
}

