import React from 'react';

export default function PodcastList({ podcasts, currentPodcastId, onSelectPodcast }) {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span>📻</span> Your Podcasts
      </h3>
      <div className="space-y-3">
        {podcasts.map(podcast => (
          <button
            key={podcast.id}
            onClick={() => onSelectPodcast(podcast)}
            className={`w-full text-left p-4 rounded-3xl transition transform hover:scale-105 ${
              currentPodcastId === podcast.id 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg' 
                : 'bg-gray-700/50 hover:bg-gray-700'
            }`}
            title={`Switch to ${podcast.title}`}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{podcast.image}</div>
              <div>
                <div className="font-bold text-sm">{podcast.title}</div>
                <div className="text-xs text-gray-300">{podcast.subtitle}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
