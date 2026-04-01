export type Step = "email" | "code" | "success";
 
export interface EmailForm {
  name: string;
  email: string;
}
 
export interface EmailErrors {
  name?: string;
  email?: string;
}
 
export const CODE_LENGTH = 6;