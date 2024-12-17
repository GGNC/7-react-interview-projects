import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

function ContactBookPage() {
  return (
    <div className="page-container">
      <h1 className="header">Contact Book</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default ContactBookPage;
