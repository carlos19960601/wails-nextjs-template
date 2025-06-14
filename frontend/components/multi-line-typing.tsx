"use client";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import { useEffect, useState } from "react";

interface MultiLineTypingProps {
  lines: string[];
  className?: string;
  duration?: number;
  delay?: number;
  lineDelay?: number;
}

export function MultiLineTyping({
  lines,
  className,
  duration = 100,
  delay = 0,
  lineDelay = 500, // 每行之间的延迟时间
}: MultiLineTypingProps) {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  // 计算每行文字打印完成所需的时间
  const getLineCompletionTime = (text: string) => {
    return text.length * duration;
  };

  useEffect(() => {
    if (activeLineIndex >= lines.length) return;

    const currentLine = lines[activeLineIndex];
    const completionTime = getLineCompletionTime(currentLine);

    // 当前行打印完成后，开始下一行
    const timer = setTimeout(() => {
      setCompletedLines((prev) => [...prev, currentLine]);
      setActiveLineIndex((prev) => prev + 1);
    }, completionTime + lineDelay);

    return () => clearTimeout(timer);
  }, [activeLineIndex, lines, duration, lineDelay]);

  return (
    <div className={className}>
      {/* 已完成的行 */}
      {completedLines.map((line, index) => (
        <div key={index} className="mb-4">
          {line}
        </div>
      ))}

      {/* 当前正在打印的行 */}
      {activeLineIndex < lines.length && (
        <div className="mb-4">
          <TypingAnimation
            duration={duration}
            delay={activeLineIndex === 0 ? delay : 0}
          >
            {lines[activeLineIndex]}
          </TypingAnimation>
        </div>
      )}
    </div>
  );
}
