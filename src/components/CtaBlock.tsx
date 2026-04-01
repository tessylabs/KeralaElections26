export default function CtaBlock() {
  return (
    <div className="border border-amber-50 rounded-2xl p-10 text-center mt-12">
      <h2 className="font-serif text-2xl font-semibold text-amber-900 mb-2">
        Ready to make your voice count?
      </h2>
      <p className="text-sm text-amber-700 leading-relaxed mb-6">
        Join thousands of voters sharing what they really think.
        <br />
        It only takes five minutes.
      </p>
      <a
        href="#survey"
        className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
      >
        Start the survey
      </a>
    </div>
  );
}