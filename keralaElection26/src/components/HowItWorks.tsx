const steps = [
  {
    n: 1,
    title: "Register yourself and give consent",
    description:
      "Just a simple registration using email address to reduce fraud, understand the age group and the current area of residence",
  },
  {
    n: 2,
    title: "Choose your Constituency",
    description:
      "Select the constituency where you are supposed to cast the vote.",
  },
  {
    n: 3,
    title: "Select the candidate",
    description:
      "Just select the candidate you thinks will win",
  },
];

export default function HowItWorks() {
  return (
    <section className="my-10">
      <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-2">
        How it works
      </p>
      <h2 className="font-serif text-2xl font-semibold leading-snug tracking-tight mb-6">
        Three simple steps
      </h2>

      <div className="space-y-6">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-4">
            <div className="border border-amber-50 w-8 h-8 rounded-full  text-amber-700 text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
              {s.n}
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}