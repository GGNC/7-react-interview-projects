import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ContactInterface } from "../utils/interfaces/contactInterface";
import EditContact from "../forms/EditContact";

interface ContactProps {
  contact: ContactInterface;
  index: number;
}

function Contact({ contact, index }: ContactProps) {
  const [editMode, setEditMode] = useState(false);
  const { contactList, setContactList } = useContext(GlobalContext)!;
  const openEditMode = () => setEditMode(true);
  const closeEditMode = () => setEditMode(false);
  const deleteContact = () => {
    const newContactList = contactList.filter((_, i) => i !== index);
    setContactList(newContactList);
  };

  return (
    <div className="contact">
      {editMode ? (
        <EditContact contact={contact} index={index} onCancel={closeEditMode} />
      ) : (
        <>
          <div className="contact_info-container">
            <p className="contact_info-name">{contact.name}</p>
            <p className="contact_info-city">{contact.city}</p>
          </div>
          <div className="contact_button-container">
            <button className="contact_button-edit" onClick={openEditMode}>
              Edit
            </button>
          </div>
        </>
      )}

      <div className="contact_button-container">
        <button className="contact_button-delete" onClick={deleteContact}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
