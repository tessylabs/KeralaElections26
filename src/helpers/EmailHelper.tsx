import type { EmailForm, EmailErrors } from "../types/Email";

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
 
export const ValidateEmail = (form: EmailForm): EmailErrors => {
  const errors: EmailErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!isValidEmail(form.email)) errors.email = "Enter a valid email address.";
  return errors;
};
 