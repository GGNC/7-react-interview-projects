import { createContext, useState, Dispatch, SetStateAction } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type GlobalContextType = {
  language: LanguageTypes;
  setLanguage: Dispatch<SetStateAction<LanguageTypes>>;
  storedValue: string[];
  setValue: (value: string[]) => void;
};
type LanguageTypes = "en" | "tr";
type GlobalStateProps = {
  children: React.ReactNode;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

function GlobalState({ children }: GlobalStateProps) {
  const [language, setLanguage] = useState<LanguageTypes>("en");
  const [storedValue, setValue] = useLocalStorage("ShoppingList", []);
  return (
    <GlobalContext.Provider
      value={{ language, setLanguage, storedValue, setValue }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
