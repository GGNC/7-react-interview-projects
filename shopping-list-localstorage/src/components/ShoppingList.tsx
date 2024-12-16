import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ShoppingList() {
  const { storedValue, setValue } = useContext(GlobalContext)!;
  const renderedItems = storedValue.map((item, index) => {
    const handleRemoveItem = () => {
      const newList = storedValue.filter((_, i) => i !== index);
      setValue(newList);
    };
    return (
      <div className="list_item" key={index}>
        <p>{item}</p>
        <button className="list_item-button" onClick={handleRemoveItem}>
          X
        </button>
      </div>
    );
  });
  return <div className="list-container">{renderedItems}</div>;
}

export default ShoppingList;
