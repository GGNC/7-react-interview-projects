import { createContext, useState, Dispatch, SetStateAction } from "react";
import { ContactInterface } from "../utils/interfaces/contactInterface";

type GlobalContextType = {
  contactList: ContactInterface[];
  setContactList: Dispatch<SetStateAction<ContactInterface[]>>;
};
type GlobalStateProps = {
  children: React.ReactNode;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

function GlobalState({ children }: GlobalStateProps) {
  const [contactList, setContactList] = useState<ContactInterface[]>([]);
  return (
    <GlobalContext.Provider value={{ contactList, setContactList }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
