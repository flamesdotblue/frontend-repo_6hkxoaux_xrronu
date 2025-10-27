import { useState } from 'react';
import { Skull, Menu, X, Users } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white shadow-lg shadow-red-600/30">
            <Skull className="h-5 w-5" />
          </div>
          <span className="text-white font-semibold tracking-wide">Nightfall: Co-op Horror</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#modes" className="text-white/80 hover:text-white transition">Modes</a>
          <a href="#join" className="text-white/80 hover:text-white transition">Join</a>
          <a href="#community" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 transition border border-white/10">
            <Users className="h-4 w-4" /> Community
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 text-white/90 hover:text-white hover:bg-white/10 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">Features</a>
            <a href="#modes" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">Modes</a>
            <a href="#join" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">Join</a>
            <a href="#community" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">Community</a>
          </div>
        </div>
      )}
    </header>
  );
}
