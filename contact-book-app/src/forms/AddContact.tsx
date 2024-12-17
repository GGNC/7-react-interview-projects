import { z } from "zod";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { SubmitHandler, useForm } from "react-hook-form";
import { contactSchema } from "../utils/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type FormFields = z.infer<typeof contactSchema>;

function AddContact() {
  const { contactList, setContactList } = useContext(GlobalContext)!;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setContactList([...contactList, data]);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form_input-group">
        <div className="">
          <h3 className="form_input-label">Name</h3>
          <input {...register("name")} type="text" className="form_input" />
          {errors.name && <p className="form_error">{errors.name.message}</p>}
        </div>
        <div>
          <h3 className="form_input-label">City</h3>
          <input {...register("city")} type="text" className="form_input" />
          {errors.city && <p className="form_error">{errors.city.message}</p>}
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="form_button">
        Add Contact
      </button>
    </form>
  );
}

export default AddContact;
