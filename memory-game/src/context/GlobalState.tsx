import { createContext, useState } from "react";

export interface GlobalContextInterface {
  selectedImage: SelectedImageInterface;
  setSelectedImage: React.Dispatch<
    React.SetStateAction<SelectedImageInterface>
  >;
  matchedImages: string[];
  setMatchedImages: React.Dispatch<React.SetStateAction<string[]>>;
}
interface SelectedImageInterface {
  tileIndex: string;
  imageUrl: string;
}

export const GlobalContext = createContext<GlobalContextInterface | null>(null);

type GlobalStateProps = {
  children: React.ReactNode;
};

function GlobalState({ children }: GlobalStateProps) {
  const [selectedImage, setSelectedImage] = useState<SelectedImageInterface>({
    tileIndex: "",
    imageUrl: "",
  });
  const [matchedImages, setMatchedImages] = useState<string[]>([]);
  return (
    <GlobalContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        matchedImages,
        setMatchedImages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
