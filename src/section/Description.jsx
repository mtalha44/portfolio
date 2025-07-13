import { useEffect, useState } from "react";

const lines = [
  "Master Web Development",
  "Learning AI/ML Engineering",
  "Exploring Blockchain & Web3"
];

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + lines[lineIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, 100); // typing speed
        return () => clearTimeout(timeout);
      } else {
        // Pause before typing next line
        const pause = setTimeout(() => {
          setDisplayedText('');
          setCharIndex(0);
          setLineIndex(prev => (prev + 1) % lines.length); // loop to start
        }, 1000); // pause between lines
        return () => clearTimeout(pause);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <p className="hero_tag text-gray_gradient z-50 text-center font-generalsans font-black leading-normal">
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypingEffect;
