import AddListItemForm from "../forms/AddListItemForm";
import ShoppingList from "../components/ShoppingList";
import { userMessages } from "../utils/consts/userMessages";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PickLanguage from "../components/PickLanguage";

function ShoppingListPage() {
  const { language } = useContext(GlobalContext)!;
  return (
    <div className="page-container">
      <h1 className="header">{userMessages.userInterface.header[language]}</h1>
      <AddListItemForm />
      <ShoppingList />
      <PickLanguage />
    </div>
  );
}

export default ShoppingListPage;
