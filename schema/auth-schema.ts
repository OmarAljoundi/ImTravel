import { TypeOf, object, string } from "zod";

export const loginUserSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" }).min(
    1,
    "Password is required"
  ),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>;

export const registerSchema = loginUserSchema.extend({
  name: string().min(1, { message: "Name is required" }),
});

export type RegisterUserInput = TypeOf<typeof registerSchema>;
