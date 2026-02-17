import React, { useMemo } from 'react';

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
}

export default function StatsCard({ episodes, currentPodcasts }) {
  const stats = useMemo(() => {
    const totalTime = episodes.reduce((acc, ep) => acc + ep.progress, 0);
    const completedEpisodes = episodes.filter(ep => ep.progress === ep.duration).length;
    const avgDuration = episodes.length > 0 
      ? formatTime(episodes.reduce((acc, ep) => acc + ep.duration, 0) / episodes.length)
      : '0m';

    return {
      totalListeningTime: formatTime(totalTime),
      episodesToday: episodes.length,
      avgDuration,
      completedEpisodes
    };
  }, [episodes]);

  return (
    <div className="space-y-4">
      {/* [BUG - COLOR & CONTRAST]: Changed text-gray-300 to text-gray-900 (near-black on dark background, unreadable). [FIX]: Change to text-gray-300 or text-white */}
      <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
        <div className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>📊</span> Today's Stats
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Listening Time</span>
            <span className="font-bold">{stats.totalListeningTime}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Episodes</span>
            <span className="font-bold">{stats.episodesToday}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Completed</span>
            <span className="font-bold">{stats.completedEpisodes}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Avg Duration</span>
            <span className="font-bold">{stats.avgDuration}</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-6 border border-cyan-500/30">
        <div className="text-sm font-bold text-gray-300 mb-4 flex items-center gap-2">
          <span>⭐</span> Achievements
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span>🎯</span>
            <span className="text-sm">Listening Streak: <span className="font-bold">7 days</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span>🏆</span>
            <span className="text-sm">Binge Master: <span className="font-bold">50+ hours</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎪</span>
            <span className="text-sm">Podcast Explorer: <span className="font-bold">{currentPodcasts} podcasts</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
