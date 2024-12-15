import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
interface GameTileProps {
  imageUrl: string;
  tileIndex: string;
}
function GameTile({ imageUrl, tileIndex }: GameTileProps) {
  const { selectedImage, setSelectedImage, matchedImages, setMatchedImages } =
    useContext(GlobalContext)!;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      matchedImages.includes(imageUrl) ||
      selectedImage.tileIndex === tileIndex
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [selectedImage]);

  const handleShowCard = () => {
    if (selectedImage.tileIndex === "") {
      setSelectedImage({ tileIndex, imageUrl });
      setShow(true);
    } else {
      setTimeout(() => {
        if (selectedImage.imageUrl === imageUrl) {
          setMatchedImages([...matchedImages, imageUrl]);
          setSelectedImage({ tileIndex: "", imageUrl: "" });
        } else {
          setSelectedImage({ tileIndex, imageUrl });
        }
      }, 100);

      setShow(true);
    }
  };

  return (
    <div className="tile">
      {show ? (
        <img src={imageUrl} alt="game-image" className="tile_img" />
      ) : (
        <div className="tile_img_holder" onClick={handleShowCard}></div>
      )}
    </div>
  );
}

export default GameTile;
