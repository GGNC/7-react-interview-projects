import { z } from "zod";
import { shopListFormSchema } from "../utils/schemas/shopListSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userMessages } from "../utils/consts/userMessages";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

type FormFields = z.infer<typeof shopListFormSchema>;
function AddListItemForm() {
  const { language, storedValue, setValue } = useContext(GlobalContext)!;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(shopListFormSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
    setValue([...storedValue, data.title]);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form_input-container">
        <input {...register("title")} className="form_input" />
        {errors.title && (
          <span className="error-message">{errors.title.message}</span>
        )}
      </div>
      <button type="submit" disabled={isSubmitting} className="form_button">
        {userMessages.userInterface.submit[language]}
      </button>
    </form>
  );
}

export default AddListItemForm;
