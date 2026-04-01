import { Shield, Users, Activity, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Fully anonymous",
    description:
      "Only numbers will be displayed, no personal information shared. We just use email address to reduce fraud.",
  },
  {
    icon: Users,
    title: "No manipulation",
    description:
      "There will be no manipulation on data. We just shows the total count.Simple as that",
  },
  {
    icon: Activity,
    title: "Live insights",
    description:
      "Watch live update in real-time as more people in your area respond.",
  },
  {
    icon: Clock,
    title: "Quick & easy",
    description:
      "Plain language questions, no political expertise needed. Just your honest take.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="my-10">
      <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-2">
        Why it matters
      </p>
      <h2 className="font-serif text-2xl font-semibold leading-snug tracking-tight mb-6">
        Built for real people,
        <br />
        not politicians
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="border border-gray-100 rounded-xl p-5"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center mb-3">
              <f.icon size={16} className="text-amber-600" strokeWidth={1.8} />
            </div>
            <h3 className="text-sm font-semibold mb-1">{f.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}