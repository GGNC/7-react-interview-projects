import MemoryGame from "../components/MemoryGame";
import { imageUrls } from "../utils/consts/image";

function GamePage() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <h1 className="header">Memory Game</h1>
      </div>
      <MemoryGame imageUrls={imageUrls} />
    </div>
  );
}

export default GamePage;
