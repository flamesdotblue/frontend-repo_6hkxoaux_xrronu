import { ArrowRight, Headphones } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="join" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.05),_transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 sm:p-10 overflow-hidden">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                <Headphones className="h-3.5 w-3.5" /> Best with voice chat
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold">Ready to face the dark with your squad?</h3>
              <p className="mt-2 text-white/70">Jump in for free, invite your friends, and test your courage. Crossplay supported.</p>
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-red-600 hover:bg-red-700 text-white px-5 py-3 font-medium shadow-lg shadow-red-600/30 transition">
                Start Matchmaking <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
