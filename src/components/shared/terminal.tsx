"use client";

import { useEffect, useState } from "react";

type Line = { prompt?: boolean; text: string; delayAfter?: number };

const script: Line[] = [
  { prompt: true, text: "whoami" },
  { text: "asma-yaseen · agentic-ai-developer" },
  { prompt: true, text: "cd hackathon-5/crm-digital-fte" },
  { prompt: true, text: "claude code --spec-first" },
  { text: "> reading spec.md..." },
  { text: "> planning agent workflow..." },
  { text: "> ✓ spec approved" },
  { text: "> shipping build", delayAfter: 1400 },
];

const TYPING_SPEED = 32;
const LINE_PAUSE = 250;
const LOOP_PAUSE = 2200;

export function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= script.length) {
      const resetTimer = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
        setDone(false);
      }, LOOP_PAUSE);
      return () => clearTimeout(resetTimer);
    }

    const currentLine = script[lineIndex];

    if (charIndex < currentLine.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPING_SPEED);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
        if (lineIndex === script.length - 1) setDone(true);
      },
      currentLine.delayAfter ?? LINE_PAUSE
    );
    return () => clearTimeout(t);
  }, [lineIndex, charIndex]);

  return (
    <div className="w-full max-w-[280px] rounded-xl border border-border bg-card/80 shadow-lg shadow-black/20 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-3 py-1.5">
        <span className="size-2 rounded-full bg-red-500/70" />
        <span className="size-2 rounded-full bg-yellow-500/70" />
        <span className="size-2 rounded-full bg-green-500/70" />
        <span className="ml-2.5 font-mono text-[10px] text-muted-foreground">asma@dev-machine</span>
      </div>
      <div className="min-h-[150px] p-3 font-mono text-[11px] leading-relaxed">
        {script.slice(0, lineIndex).map((line, i) => (
          <TerminalRow key={i} line={line} />
        ))}
        {lineIndex < script.length && (
          <TerminalRow
            line={{ ...script[lineIndex], text: script[lineIndex].text.slice(0, charIndex) }}
            caret
          />
        )}
        {done && <TerminalRow line={{ prompt: true, text: "" }} caret />}
      </div>
    </div>
  );
}

function TerminalRow({ line, caret }: { line: Line; caret?: boolean }) {
  return (
    <div className="flex gap-2 text-foreground/90">
      {line.prompt && <span style={{ color: "var(--accent-400)" }}>$</span>}
      <span className={line.prompt ? "" : "text-muted-foreground"}>
        {line.text}
        {caret && <span className="animate-caret" style={{ color: "var(--accent-400)" }}>█</span>}
      </span>
    </div>
  );
}
