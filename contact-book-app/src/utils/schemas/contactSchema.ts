import { z } from "zod";
import { userMessages } from "../consts/userMessages";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: userMessages.errorMessages.invalidName })
    .max(15, { message: userMessages.errorMessages.invalidNameLength }),
  city: z
    .string()
    .min(1, { message: userMessages.errorMessages.invalidCity })
    .max(15, { message: userMessages.errorMessages.invalidCityLength }),
});
