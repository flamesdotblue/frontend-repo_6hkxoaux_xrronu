import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function HeroScene() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4p2QeF4qkUt0cR0l/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.55)_60%,_rgba(0,0,0,0.85)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
          New season out now
          <span className="ml-1 inline-flex items-center gap-1 font-medium text-white">
            The Hunted <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
          Survive the night. Together.
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg">
          A cooperative multiplayer horror experience where every sound matters and every shadow hides a secret. Work as a team, complete objectives, and escape before the entity finds you.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#join" className="inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-700 text-white px-5 py-3 font-medium shadow-lg shadow-red-600/30 transition">
            Play Free Now
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium border border-white/10 transition">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
