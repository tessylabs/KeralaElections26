import  { useState } from "react";
import type { Step, EmailForm } from "../types/Email";
import { SuccessStep } from "./SuccessStepProps";
import { EmailStep } from "./EmailStepProps";
import { CodeStep } from "./CodeStepProps";


export default function EmailSignup() {
  const [step, setStep] = useState<Step>("email");
  const [userData, setUserData] = useState<EmailForm>({ name: "", email: "" });
 
  const steps: Step[] = ["email", "code", "success"];
 
  const handleEmailNext = (form: EmailForm) => {
    setUserData(form);
    setStep("code");
  };
 
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
 
        {/* Top accent bar */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />
 
        {/* Progress indicator */}
        <div className="flex gap-1.5 justify-end mb-6">
          {steps.map((s, i) => (
            <div
              key={s}
              className={`h-1 rounded-full transition-all duration-300 ${
                step === s
                  ? "w-5 bg-indigo-500"
                  : i < steps.indexOf(step)
                  ? "w-2 bg-indigo-300"
                  : "w-2 bg-slate-200"
              }`}
            />
          ))}
        </div>
 
        {step === "email" && <EmailStep onNext={handleEmailNext} />}
        {step === "code" && (
          <CodeStep
            email={userData.email}
            onVerify={() => setStep("success")}
            onBack={() => setStep("email")}
          />
        )}
        {step === "success" && <SuccessStep name={userData.name} />}
      </div>
    </div>
  );
}
