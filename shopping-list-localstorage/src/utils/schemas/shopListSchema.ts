import { z } from "zod";
import { userMessages } from "../consts/userMessages";
export const shopListFormSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: userMessages.errorMessage.minErrorMessage.en,
    })
    .max(20, { message: userMessages.errorMessage.maxErrorMessage.en }),
});
