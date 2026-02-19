import React from 'react';
import Controls from './Controls';
import SecondaryControls from './SecondaryControls';

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function Player({ 
  podcast, 
  episode, 
  isPlaying, 
  onPlayToggle, 
  onPrevious, 
  onNext,
  onProgressChange,
  volume,
  onVolumeChange,
  playbackSpeed,
  onSpeedChange,
  quality,
  onQualityChange
}) {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
      
      {/* Album Art */}
      <div className="flex justify-center mb-8 relative -m-16">
        <div className={`w-80 h-80 bg-gradient-to-br ${podcast?.bgColor} rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <span className="text-[120px]">{podcast?.image}</span>
          </div>
          {isPlaying && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-black/40 to-transparent"></div>
          )}
        </div>
        {/* [BUG - LAYERS]: Changed positioning to absolute inset-0 making LIVE badge cover entire player. [FIX]: Change to absolute -top-4 right-0 */}
        <div className="absolute inset-0 px-4 py-2 bg-red-500 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          LIVE
        </div>
      </div>

      {/* Podcast Info */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">{podcast?.title}</h2>
        <p className="text-gray-400 text-lg">{podcast?.subtitle}</p>
        <p className="text-purple-400 mt-4 font-medium text-sm">{episode?.title}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <input 
          type="range" 
          min="0" 
          max={episode?.duration || 100}
          value={episode?.progress || 0}
          onChange={(e) => onProgressChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-purple-500"
          title="Seek"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{formatTime(episode?.progress || 0)}</span>
          <span>{formatTime(episode?.duration || 0)}</span>
        </div>
      </div>

      {/* Main Controls */}
      <Controls 
        isPlaying={isPlaying}
        onPlayToggle={onPlayToggle}
        onPrevious={onPrevious}
        onNext={onNext}
        totalEpisodes={podcast?.episodes.length || 1}
        currentEpisodeId={episode?.id}
      />

      {/* Secondary Controls */}
      <SecondaryControls 
        volume={volume}
        onVolumeChange={onVolumeChange}
        playbackSpeed={playbackSpeed}
        onSpeedChange={onSpeedChange}
        quality={quality}
        onQualityChange={onQualityChange}
      />

    </div>
  );
}
