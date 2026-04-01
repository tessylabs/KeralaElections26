const stats = [
  { value: "24k+", label: "Responses collected" },
  { value: "5 min", label: "Average time" },
  { value: "100%", label: "Anonymous" },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-3 gap-3 my-10">
      {stats.map((s) => (
        <div
          key={s.label}
          className="border border-gray-100 rounded-xl p-5 text-center"
        >
          <span className="font-serif text-3xl font-semibold text-amber-600 block mb-1">
            {s.value}
          </span>
          <span className="text-xs text-gray-400 font-medium">{s.label}</span>
        </div>
      ))}
    </div>
  );
}