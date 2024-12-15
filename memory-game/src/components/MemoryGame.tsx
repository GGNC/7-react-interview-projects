import { useContext } from "react";
import useSetGame from "../hooks/useSetGame";
import { GlobalContext } from "../context/GlobalState";

interface MemoryGameProps {
  imageUrls: string[];
}

function MemoryGame({ imageUrls }: MemoryGameProps) {
  const { matchedImages } = useContext(GlobalContext)!;
  const renderedImages = useSetGame(imageUrls);
  return (
    <>
      <div className="tile-container">{renderedImages}</div>
      {matchedImages.length === imageUrls.length && (
        <div className="winning-text">You won!</div>
      )}
    </>
  );
}

export default MemoryGame;
