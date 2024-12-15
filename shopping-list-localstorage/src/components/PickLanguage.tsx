import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function PickLanguage() {
  const { language, setLanguage } = useContext(GlobalContext)!;
  return (
    <div className="pick-language">
      {language === "en" ? (
        <button onClick={() => setLanguage("tr")}>TR</button>
      ) : (
        <button onClick={() => setLanguage("en")}>EN</button>
      )}
    </div>
  );
}

export default PickLanguage;
