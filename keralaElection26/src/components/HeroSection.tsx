 export default function HeroSection() {
  return (
    <section className="text-center py-8 pb-12">
      <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full px-4 py-1.5 mb-6">
        <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
        2026 Election Season
      </div>

      <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight mb-4">
        Your voice shapes
        <br />
        <em className="text-amber-600 not-italic">our democracy</em>
      </h1>

      <p className="text-gray-500 text-base leading-relaxed  mx-auto mb-8">
        A friendly, 5-minute survey to understand what matters most to voters
        like you — no jargon, no pressure, just your honest opinion.
      </p>

      <div className="flex items-center justify-center gap-3 flex-wrap">
        <a
          href="#survey"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
        >
          Start the survey
        </a>
        <a
          href="#results"
          className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-7 py-3 rounded-full transition-colors text-sm"
        >
          See results (later)
        </a>
      </div>
    </section>
  );
}