import useTypewriterEffect from "../hooks/useTypewriterEffect";

interface TypewriterEffectProps {
  text: string;
}
function TypewriterEffect({ text }: TypewriterEffectProps) {
  const { displayedText } = useTypewriterEffect({
    text,
    speed: 100,
  });

  return (
    <div className="typewriter-container">
      <p>You typed : {displayedText}</p>
    </div>
  );
}

export default TypewriterEffect;
