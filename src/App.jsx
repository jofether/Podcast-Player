import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans flex items-center justify-center p-8">
      
      {/* PLAYER CARD */}
      <div className="bg-gray-800 w-full max-w-md p-8 rounded-3xl shadow-2xl border border-gray-700">
        
        {/* ALBUM ART */}
        <div className="flex justify-center mb-8 relative">
          {/* FUTURE BUG: Remove 'rounded-full' to break the circular design language */}
          <div className="w-64 h-64 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center relative overflow-hidden ring-4 ring-gray-700">
             <span className="text-6xl animate-pulse">🎙️</span>
          </div>
          <div className="absolute top-4 right-8 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold border-2 border-gray-800">
            LIVE
          </div>
        </div>

        {/* INFO */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-wide">The Daily Tech</h2>
          <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">Episode 404: Design Systems</p>
        </div>

        {/* PROGRESS BAR */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>12:45</span>
            <span>45:00</span>
          </div>
          <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-indigo-500 w-1/3 h-full rounded-full relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-between px-4">
          <button className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg>
          </button>
          
          <button className="text-gray-400 hover:text-white transition transform rotate-180">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>

          {/* PLAY BUTTON (Main Action) */}
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg hover:scale-105 transition">
             <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>

          <button className="text-gray-400 hover:text-white transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
          
          <button className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;