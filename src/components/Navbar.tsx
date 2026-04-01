import EmailSignup from "./EmailSignUp";

 export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-12">
      <div className="font-serif text-lg font-semibold tracking-tight">
        Kerala<span className="text-amber-600">Elections 2026</span>
      </div>
      <button
        onClick={EmailSignup}
        className="hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
      >
        Take the survey
      </button>
    </nav>
  );
}