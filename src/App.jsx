import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import FeatureGrid from './components/FeatureGrid';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <HeroScene />
        <FeatureGrid />
        <CTASection />
        <footer id="community" className="border-t border-white/10 bg-black/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-white/60">
            <p>
              Nightfall: Co-op Horror — Grab your friends, lower the lights, and survive the night.
            </p>
            <p className="mt-2 text-xs">© {new Date().getFullYear()} Nightfall Studios. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
