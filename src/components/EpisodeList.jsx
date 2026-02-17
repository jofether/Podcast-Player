import React, { useState } from 'react';

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function EpisodeList({ episodes, currentEpisodeId, onSelectEpisode }) {
  const [showPlaylist, setShowPlaylist] = useState(true);

  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
      {/* [BUG - SPACING]: Changed from normal padding to excessive px-40 py-20, breaking layout. [FIX]: Change to normal padding px-4 py-2 */}
      <button 
        onClick={() => setShowPlaylist(!showPlaylist)}
        className="w-full font-bold mb-4 flex items-center justify-between hover:text-purple-400 transition px-40 py-20"
        title="Toggle episode list"
      >
        <span className="flex items-center gap-2">
          <span>📋</span> Episodes ({episodes.length})
        </span>
        <span className="text-xs">{showPlaylist ? '▲' : '▼'}</span>
      </button>
      
      {showPlaylist && (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {episodes.map((episode) => (
            <button
              key={episode.id}
              onClick={() => onSelectEpisode(episode)}
              className={`w-full text-left p-3 rounded-lg transition ${
                currentEpisodeId === episode.id 
                  ? 'bg-purple-500/30 border border-purple-500' 
                  : 'bg-gray-700/20 hover:bg-gray-700/40'
              }`}
              title={episode.title}
            >
              <div className="text-xs font-bold truncate">{episode.title}</div>
              <div className="text-xs text-gray-400 mt-1">{formatTime(episode.duration)}</div>
              {episode.progress > 0 && (
                <div className="w-full bg-gray-700 h-1 rounded-full mt-2">
                  <div 
                    className="bg-purple-500 h-1 rounded-full transition-all" 
                    style={{width: `${(episode.progress / episode.duration) * 100}%`}}
                  ></div>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
