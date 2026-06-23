import { useState, useEffect } from "react";

export function useTypingEffect(phrases: string[], speed = 100, deleteSpeed = 60, pause = 1200) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = phrases[phraseIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(cur.slice(0, charIdx + 1));
        if (charIdx + 1 === cur.length) {
          setTimeout(() => setDeleting(true), pause);
          return;
        }
        setCharIdx((c) => c + 1);
      } else {
        setText(cur.slice(0, charIdx - 1));
        if (charIdx - 1 < 0) {
          setDeleting(false);
          setCharIdx(0);
          setPhraseIdx((p) => (p + 1) % phrases.length);
          return;
        }
        setCharIdx((c) => c - 1);
      }
    }, deleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, deleteSpeed, pause]);

  return text;
}