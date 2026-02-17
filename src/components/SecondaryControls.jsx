import React from 'react';

export default function SecondaryControls({ volume, onVolumeChange, playbackSpeed, onSpeedChange, quality, onQualityChange }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* [BUG - LAYOUT]: Changed grid-cols-3 to grid-cols-2, breaking the 3-column layout. [FIX]: Change back to grid-cols-3 */}
      {/* Volume */}
      <div className="bg-gray-950 rounded-xl p-4">
        <label className="text-xs font-bold text-gray-400 block mb-3">VOLUME</label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={volume}
          onChange={(e) => onVolumeChange(parseInt(e.target.value))}
          className="w-full h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer accent-purple-500"
          title="Adjust volume"
        />
        <div className="text-sm font-bold mt-2">{volume}%</div>
      </div>

      {/* Playback Speed */}
      <div className="bg-gray-950 rounded-xl p-4">
        <label className="text-xs font-bold text-gray-400 block mb-3">SPEED</label>
        <select 
          value={playbackSpeed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm font-bold cursor-pointer hover:border-purple-500 transition"
        >
          <option value="0.75">0.75x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>

      {/* Quality */}
      <div className="bg-gray-950 rounded-xl p-4">
        <label className="text-xs font-bold text-gray-400 block mb-3">QUALITY</label>
        <select 
          value={quality}
          onChange={(e) => onQualityChange(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm font-bold cursor-pointer hover:border-purple-500 transition"
        >
          <option value="low">Low 64kb</option>
          <option value="normal">Normal 128kb</option>
          <option value="high">High 256kb</option>
          <option value="lossless">Lossless FLAC</option>
        </select>
      </div>
    </div>
  );
}
