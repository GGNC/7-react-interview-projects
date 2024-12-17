import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { ContactInterface } from "../utils/interfaces/contactInterface";
import { contactSchema } from "../utils/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

interface EditContactProps {
  contact: ContactInterface;
  index: number;
  onCancel: () => void;
}
type FormFields = z.infer<typeof contactSchema>;

function EditContact({ contact, index, onCancel }: EditContactProps) {
  const { contactList, setContactList } = useContext(GlobalContext)!;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
    const newContactList = contactList.map((oldContact, i) =>
      i === index ? data : oldContact
    );
    setContactList(newContactList);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form_edit-container">
      <div className="form_edit_info-container">
        <h3 className="form_input-label">Name</h3>
        <input
          {...register("name")}
          type="text"
          defaultValue={contact.name}
          className="form_input"
        />
        {errors.name && <p className="form_error">{errors.name.message}</p>}

        <h3 className="form_input-label">City</h3>
        <input
          {...register("city")}
          type="text"
          defaultValue={contact.city}
          className="form_input"
        />
        {errors.city && <p className="form_error">{errors.city.message}</p>}
      </div>
      <div className="form_edit_button-container">
        <button
          disabled={isSubmitting}
          onClick={onCancel}
          className="form_edit_button-cancel"
        >
          x
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="form_edit_button-save"
        >
          ✓
        </button>
      </div>
    </form>
  );
}

export default EditContact;
