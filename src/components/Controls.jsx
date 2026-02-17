import React from 'react';

export default function Controls({ isPlaying, onPlayToggle, onPrevious, onNext, totalEpisodes, currentEpisodeId }) {
  return (
    <div className="flex items-center justify-center gap-6 mb-8">
      <button className="text-gray-400 hover:text-white transition transform hover:scale-110" title="Volume">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg>
      </button>
      
      <button 
        onClick={onPrevious}
        disabled={currentEpisodeId === 1}
        className="text-gray-400 hover:text-white disabled:opacity-50 transition transform hover:scale-110 disabled:hover:scale-100" 
        title="Previous episode"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18H9v-8h2v8zm4-8v8h2v-8h-2zm4-2H8a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V8a2 2 0 00-2-2z"/></svg>
      </button>

      {/* Play Button */}
      <button 
        onClick={onPlayToggle}
        className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition transform text-white"
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
        ) : (
          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        )}
      </button>

      <button 
        onClick={onNext}
        disabled={currentEpisodeId >= totalEpisodes}
        className="text-gray-400 hover:text-white disabled:opacity-50 transition transform hover:scale-110 disabled:hover:scale-100" 
        title="Next episode"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 6v12h2V8h2v10h2V6H8zm6 0v12h2V8h2v10h2V6h-6z"/></svg>
      </button>

      <button className="text-gray-400 hover:text-white transition transform hover:scale-110" title="Add to queue">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
      </button>
    </div>
  );
}
