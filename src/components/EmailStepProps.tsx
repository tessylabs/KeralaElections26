import  { useState} from "react";
import type {ChangeEvent, KeyboardEvent } from "react";
import type { EmailForm, EmailErrors } from "../types/Email";
import {ValidateEmail} from "../helpers/EmailHelper";

export interface EmailStepProps {
  onNext: (form: EmailForm) => void;
}
 
export function EmailStep({ onNext }: EmailStepProps) {
  const [form, setForm] = useState<EmailForm>({ name: "", email: "" });
  const [errors, setErrors] = useState<EmailErrors>({});
  const [loading, setLoading] = useState(false);
 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof EmailErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
 
  const handleSubmit = async () => {
    const errs = ValidateEmail(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate sending code — replace with your API call
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    onNext(form);
  };
 
  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };
 
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-1">Get started</p>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Create your account</h1>
        <p className="mt-1 text-sm text-slate-500">We'll send a verification code to your inbox.</p>
      </div>
 
      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-xs font-medium text-slate-600 tracking-wide">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          onKeyDown={handleKey}
          placeholder="Jane Smith"
          autoComplete="name"
          className={`w-full h-10 px-3 rounded-lg text-sm bg-slate-50 border text-slate-900 placeholder:text-slate-300 outline-none transition focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 ${
            errors.name ? "border-red-400" : "border-slate-200"
          }`}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
      </div>
 
      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-xs font-medium text-slate-600 tracking-wide">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onKeyDown={handleKey}
          placeholder="jane@example.com"
          autoComplete="email"
          className={`w-full h-10 px-3 rounded-lg text-sm bg-slate-50 border text-slate-900 placeholder:text-slate-300 outline-none transition focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 ${
            errors.email ? "border-red-400" : "border-slate-200"
          }`}
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>
 
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full h-10 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition"
      >
        {loading ? "Sending code…" : "Continue with email"}
      </button>
 
      <p className="text-xs text-center text-slate-400">
        By continuing you agree to our{" "}
        <a href="#" className="underline underline-offset-2 hover:text-slate-600">Privacy Policy</a>
        {" "}and{" "}
        <a href="#" className="underline underline-offset-2 hover:text-slate-600">Terms</a>.
      </p>
    </div>
  );
}

 
 