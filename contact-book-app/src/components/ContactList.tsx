import { useContext, useMemo } from "react";
import { GlobalContext } from "../context/GlobalState";
import Contact from "./Contact";

function ContactList() {
  const { contactList } = useContext(GlobalContext)!;
  const renderedContacts = useMemo(() => {
    return contactList.map((contact, index) => {
      return <Contact key={index} contact={contact} index={index} />;
    });
  }, [contactList]);
  return (
    contactList.length !== 0 && (
      <div className="contact-container">{renderedContacts}</div>
    )
  );
}

export default ContactList;
