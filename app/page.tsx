'use client';

import { useMemo, useState } from "react";

type Follower = {
  id: number;
  name: string;
  summary?: string;
};

type SummarizedByAIProps = {
  textSize?: "text-xs" | "text-sm" | "text-base";
  icon?: "ai" | "aiSummary";
  useFloat?: boolean;
  className?: string;
};

export default function Home() {
  const followers = useMemo<Follower[]>(
    () => [
      {
        id: 1,
        name: "Ivy",
        summary:
          "Product designer and weekend watercolor artist. Passionate about building thoughtful onboarding flows, jotting down UX notes, and sipping pour-over coffee while exploring new cities.",
      },
      {
        id: 2,
        name: "Noah",
        summary: undefined,
      },
    ],
    [],
  );

  const [selectedFollower, setSelectedFollower] = useState<Follower>(followers[0]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl space-y-8">
        <header className="space-y-3 text-center sm:text-left">
          <h1 className="text-3xl font-semibold">多行简介的浮动徽标展示</h1>
          <p className="text-sm text-slate-300">
            这个页面用最简单的 TailwindCSS 结构演示了「Summarized by AI」徽标如何在多行文案右上角保持浮动，同时正文保持两行截断的效果。
          </p>
        </header>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">选择关注者</p>
          <div className="flex flex-wrap gap-3">
            {followers.map((follower) => {
              const isActive = follower.id === selectedFollower.id;

              return (
                <button
                  key={follower.id}
                  type="button"
                  onClick={() => setSelectedFollower(follower)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "border-sky-400 bg-sky-400/10 text-sky-200"
                      : "border-slate-700 hover:border-slate-500"
                  }`}
                >
                  {follower.name}
                </button>
              );
            })}
          </div>
        </section>

        <FollowerCard follower={selectedFollower} />

        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-xs text-slate-400">
          <p>技巧说明：</p>
          <ul className="list-disc space-y-1 pl-4 pt-2 text-left">
            <li>使用 <code>line-clamp-2</code> 设置两行截断。</li>
            <li>在正文开头渲染一个 <code>float-right</code> 的徽标组件。</li>
            <li>添加一个宽度为 0、高度撑满正文的占位 <code>span</code>，防止浮动覆盖。</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function FollowerCard({ follower }: { follower: Follower }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Follower introduction</p>
            <h2 className="text-xl font-medium text-slate-50">{follower.name}</h2>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="relative text-sm leading-6 text-slate-200 line-clamp-2">
            <span
              className="float-right"
              style={{ width: 0, height: "calc(100% - 22px)" }}
              aria-hidden="true"
            />
            {follower.summary ? (
              <SummarizedByAI textSize="text-xs" useFloat />
            ) : null}
            {follower.summary ?? "No introduction yet"}
          </div>
        </div>
      </div>
    </article>
  );
}

function SummarizedByAI({
  textSize = "text-xs",
  icon = "aiSummary",
  useFloat = false,
  className = "",
}: SummarizedByAIProps) {
  const containerClasses = `inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/90 px-2 py-1 ${
    useFloat ? "float-right clear-both ml-3" : ""
  } ${className}`.trim();

  const textClasses = `bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent font-medium ${textSize}`;

  return (
    <span className={containerClasses}>
      <AiIcon variant={icon} textSize={textSize} />
      <span className={textClasses}>Summarized by AI</span>
    </span>
  );
}

function AiIcon({
  variant,
  textSize,
}: {
  variant: "ai" | "aiSummary";
  textSize: "text-xs" | "text-sm" | "text-base";
}) {
  const sizeClass = textSize === "text-base" ? "text-base" : textSize === "text-sm" ? "text-sm" : "text-xs";

  if (variant === "ai") {
    return (
      <span className={`${sizeClass} text-sky-300`}>✨</span>
    );
  }

  return <span className={`${sizeClass} text-fuchsia-300`}>🤖</span>;
}
