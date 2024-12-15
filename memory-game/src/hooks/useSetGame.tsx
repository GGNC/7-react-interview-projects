import { useEffect, useMemo } from "react";
import GameTile from "../components/GameTile";
import _ from "lodash";

function useSetGame(imageUrls: string[]) {
  useEffect(() => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, [imageUrls]);
  const renderedImages = useMemo(() => {
    const tempImages = imageUrls
      .flatMap((item) => [item, item])
      .map((imageUrl, index) => (
        <GameTile
          key={`${imageUrl}-${index}`}
          imageUrl={imageUrl}
          tileIndex={index.toString()}
        />
      ));
    return _.shuffle(tempImages);
  }, [imageUrls]);
  return renderedImages;
}

export default useSetGame;
