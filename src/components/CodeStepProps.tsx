import  { useRef, useState} from "react";
import type {KeyboardEvent } from "react";
import  { CODE_LENGTH } from "../types/Email"; 
import { ArrowLeftIcon, MailIcon } from "lucide-react";

export interface CodeStepProps {
  email: string;
  onVerify: () => void;
  onBack: () => void;
}
 
export function CodeStep({ email, onVerify, onBack }: CodeStepProps) {
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [resent, setResent] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
 
  const focusAt = (i: number) => inputRefs.current[i]?.focus();
 
  const handleChange = (i: number, value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = cleaned;
    setDigits(next);
    setError("");
    if (cleaned && i < CODE_LENGTH - 1) focusAt(i + 1);
  };
 
  const handleKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) focusAt(i - 1);
    if (e.key === "ArrowLeft" && i > 0) focusAt(i - 1);
    if (e.key === "ArrowRight" && i < CODE_LENGTH - 1) focusAt(i + 1);
  };
 
//   const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
//     const next = Array(CODE_LENGTH).fill("");
//     pasted.split("").forEach((c, i) => { next[i] = c; });
//     setDigits(next);
//     focusAt(Math.min(pasted.length, CODE_LENGTH - 1));
//   };
 
  const handleVerify = async () => {
    const code = digits.join("");
    if (code.length < CODE_LENGTH) { setError("Please enter the full 6-digit code."); return; }
    setLoading(true);
    // Simulate verification — replace with your API call
    // Demo: code "123456" is accepted
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    if (code === "123456") {
      onVerify();
    } else {
      setError("Incorrect code. Please try again.");
      setDigits(Array(CODE_LENGTH).fill(""));
      focusAt(0);
    }
  };
 
  const handleResend = async () => {
    setResent(true);
    setDigits(Array(CODE_LENGTH).fill(""));
    setError("");
    await new Promise(r => setTimeout(r, 500));
    focusAt(0);
    setTimeout(() => setResent(false), 3000);
  };
 
  const allFilled = digits.every(d => d !== "");
 
  return (
    <div className="space-y-5">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition"
      >
        <ArrowLeftIcon />
        Back
      </button>
 
      <div>
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 mb-4">
          <span className="text-indigo-500"><MailIcon /></span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Check your inbox</h1>
        <p className="mt-1 text-sm text-slate-500">
          We sent a 6-digit code to{" "}
          <span className="font-medium text-slate-700">{email}</span>
        </p>
      </div>
 
      {/* OTP Inputs */}
      <div className="flex gap-2 justify-between">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={el => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={d}
            onChange={e => handleChange(i, e.target.value)}
            onKeyDown={e => handleKeyDown(i, e)}
            //onPaste={handlePaste}
            onFocus={e => e.target.select()}
            className={`w-11 h-12 rounded-lg border text-center text-lg font-semibold text-slate-900 bg-slate-50 outline-none transition focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 ${
              error
                ? "border-red-400 bg-red-50"
                : d
                ? "border-indigo-300 bg-white"
                : "border-slate-200"
            }`}
          />
        ))}
      </div>
 
      {error && <p className="text-xs text-red-500 text-center">{error}</p>}
 
      <button
        onClick={handleVerify}
        disabled={!allFilled || loading}
        className="w-full h-10 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition"
      >
        {loading ? "Verifying…" : "Verify code"}
      </button>
 
      <p className="text-xs text-center text-slate-400">
        Didn't get it?{" "}
        <button
          onClick={handleResend}
          className="text-indigo-500 hover:text-indigo-700 font-medium transition"
        >
          {resent ? "Code resent!" : "Resend code"}
        </button>
      </p>
 
      <p className="text-xs text-center text-slate-300 italic">Demo: enter 123456 to verify</p>
    </div>
  );
}