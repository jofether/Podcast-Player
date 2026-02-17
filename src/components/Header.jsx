import React from 'react';

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎧</div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">PodHub</h1>
        </div>
        <div className="flex gap-2 text-sm">
          <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300">7 Podcasts</span>
          <span className="px-3 py-1 bg-pink-500/20 rounded-full text-pink-300">Live Now</span>
        </div>
      </div>
    </header>
  );
}
