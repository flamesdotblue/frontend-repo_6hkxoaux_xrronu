import { Skull, Users, Map, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Team-Based Survival',
    desc: 'Play with up to 4 friends. Coordinate roles, share resources, and cover each other to outsmart the entity.'
  },
  {
    icon: Map,
    title: 'Procedural Maps',
    desc: 'Every match is fresh with dynamic objectives, randomized loot, and evolving escape routes.'
  },
  {
    icon: Skull,
    title: 'Adaptive AI Stalker',
    desc: 'An entity that learns your patterns, reacts to noise, and hunts the weakest link. Silence is survival.'
  },
  {
    icon: Shield,
    title: 'Risk vs Reward',
    desc: 'Choose when to explore deeper for rare items—or cut your losses and run. Your choices matter.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.15),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">What makes it terrifying</h2>
          <p className="mt-3 text-white/70">Built for voice chat, stealth, and high-stakes co-op. Every round tells a new story.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 hover:bg-white/[0.06] transition">
              <div className="h-10 w-10 rounded-md bg-red-600/20 text-red-400 flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
