import { useEffect, useState } from "react";

interface UseTypewriterEffectProps {
  text: string;
  speed?: number;
}
function useTypewriterEffect({ text, speed = 99 }: UseTypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText };
}

export default useTypewriterEffect;
