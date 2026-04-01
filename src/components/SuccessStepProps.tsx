import { CheckIcon } from "lucide-react";

export interface SuccessStepProps {
  name: string;
}
 
export function SuccessStep({ name }: SuccessStepProps) {
  const first = name.split(" ")[0];
  return (
    <div className="space-y-4 text-center py-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mx-auto">
        <span className="text-green-500"><CheckIcon /></span>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Welcome, {first}!</h1>
        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
          Your account is verified and ready to go.<br />
          We're excited to have you on board.
        </p>
      </div>
      <button
        className="mt-2 px-6 h-10 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-sm font-medium transition"
        onClick={() => alert("Navigate to dashboard")}
      >
        Go to dashboard
      </button>
    </div>
  );
}