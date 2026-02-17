import React, { useState } from 'react';
import { Header, Footer, Player, PodcastList, EpisodeList, StatsCard } from './components';

const podcasts = [
  {
    id: 1,
    title: 'The Daily Tech',
    subtitle: 'Technology & Innovation',
    image: '🎙️',
    bgColor: 'from-indigo-600 to-purple-600',
    episodes: [
      { id: 1, title: 'Episode 404: Design Systems Best Practices', duration: 4500, progress: 765 },
      { id: 2, title: 'Episode 403: Web Performance Optimization', duration: 3300, progress: 0 },
      { id: 3, title: 'Episode 402: React Hooks Deep Dive', duration: 4200, progress: 0 },
      { id: 4, title: 'Episode 401: AI & Machine Learning Future', duration: 5100, progress: 0 },
      { id: 5, title: 'Episode 400: JavaScript Evolution', duration: 3800, progress: 0 },
    ]
  },
  {
    id: 2,
    title: 'Creative Minds',
    subtitle: 'Art & Design',
    image: '🎨',
    bgColor: 'from-pink-600 to-rose-600',
    episodes: [
      { id: 6, title: 'Episode 35: The Art of Typography & Fonts', duration: 3800, progress: 0 },
      { id: 7, title: 'Episode 34: Color Psychology in UX Design', duration: 3600, progress: 0 },
      { id: 8, title: 'Episode 33: Web Animation Trends 2026', duration: 4200, progress: 0 },
      { id: 9, title: 'Episode 32: Design Thinking Methods', duration: 3400, progress: 0 },
    ]
  },
  {
    id: 3,
    title: 'Business Today',
    subtitle: 'Entrepreneurship & Startups',
    image: '📊',
    bgColor: 'from-cyan-600 to-blue-600',
    episodes: [
      { id: 10, title: 'Episode 120: Startup Growth Strategies', duration: 4100, progress: 0 },
      { id: 11, title: 'Episode 119: Market Analysis 2026', duration: 3900, progress: 0 },
      { id: 12, title: 'Episode 118: Venture Capital Insights', duration: 4500, progress: 0 },
      { id: 13, title: 'Episode 117: Scaling Your Team', duration: 3700, progress: 0 },
      { id: 14, title: 'Episode 116: Financial Management Basics', duration: 4200, progress: 0 },
    ]
  },
  {
    id: 4,
    title: 'Science Simplified',
    subtitle: 'Physics, Biology & Space',
    image: '🔬',
    bgColor: 'from-green-600 to-emerald-600',
    episodes: [
      { id: 15, title: 'Episode 88: The Quantum Computer Revolution', duration: 4300, progress: 0 },
      { id: 16, title: 'Episode 87: CRISPR Gene Editing Explained', duration: 3900, progress: 0 },
      { id: 17, title: 'Episode 86: Black Holes Mysteries Unveiled', duration: 4600, progress: 0 },
      { id: 18, title: 'Episode 85: Climate Change Solutions', duration: 4100, progress: 0 },
    ]
  },
  {
    id: 5,
    title: 'Wellness Mindfully',
    subtitle: 'Health, Fitness & Mental Health',
    image: '🧘',
    bgColor: 'from-orange-600 to-amber-600',
    episodes: [
      { id: 19, title: 'Episode 67: Meditation for Beginners', duration: 2800, progress: 0 },
      { id: 20, title: 'Episode 66: Sleep Science & Sleep Better', duration: 3500, progress: 0 },
      { id: 21, title: 'Episode 65: Nutrition for Athletes', duration: 4000, progress: 0 },
      { id: 22, title: 'Episode 64: Mental Health in Tech Industry', duration: 3800, progress: 0 },
    ]
  },
  {
    id: 6,
    title: 'Stories & Storytelling',
    subtitle: 'Fiction, Narratives & History',
    image: '📖',
    bgColor: 'from-red-600 to-crimson-600',
    episodes: [
      { id: 23, title: 'Episode 54: The Craft of Narrative Writing', duration: 4100, progress: 0 },
      { id: 24, title: 'Episode 53: Hidden Histories Untold', duration: 4300, progress: 0 },
      { id: 25, title: 'Episode 52: World Mythology Explained', duration: 3900, progress: 0 },
      { id: 26, title: 'Episode 51: Storytelling in Podcasts', duration: 3600, progress: 0 },
    ]
  },
  {
    id: 7,
    title: 'Music & Culture',
    subtitle: 'Music Production & Entertainment',
    image: '🎵',
    bgColor: 'from-violet-600 to-indigo-600',
    episodes: [
      { id: 27, title: 'Episode 48: Music Production Techniques', duration: 4200, progress: 0 },
      { id: 28, title: 'Episode 47: The Evolution of Hip-Hop', duration: 4500, progress: 0 },
      { id: 29, title: 'Episode 46: Sound Design for Games', duration: 4100, progress: 0 },
      { id: 30, title: 'Episode 45: Creating Viral Music Content', duration: 3800, progress: 0 },
    ]
  },
];

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentPodcastId, setCurrentPodcastId] = useState(1);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(1);
  const [volume, setVolume] = useState(70);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [quality, setQuality] = useState('high');

  const currentPodcast = podcasts.find(p => p.id === currentPodcastId);
  const currentEpisode = currentPodcast?.episodes.find(e => e.id === currentEpisodeId);

  const handleSelectPodcast = (podcast) => {
    setCurrentPodcastId(podcast.id);
    setCurrentEpisodeId(podcast.episodes[0].id);
  };

  const handleSelectEpisode = (episode) => {
    setCurrentEpisodeId(episode.id);
  };

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const episodeIndex = currentPodcast.episodes.findIndex(e => e.id === currentEpisodeId);
    if (episodeIndex > 0) {
      setCurrentEpisodeId(currentPodcast.episodes[episodeIndex - 1].id);
    }
  };

  const handleNext = () => {
    const episodeIndex = currentPodcast.episodes.findIndex(e => e.id === currentEpisodeId);
    if (episodeIndex < currentPodcast.episodes.length - 1) {
      setCurrentEpisodeId(currentPodcast.episodes[episodeIndex + 1].id);
    }
  };

  const handleProgressChange = (value) => {
    if (currentEpisode) {
      currentEpisode.progress = value;
    }
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
  };

  const handleQualityChange = (q) => {
    setQuality(q);
  };

  const allEpisodes = podcasts.flatMap(p => p.episodes);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 text-white font-sans overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Player - Left/Top */}
            <div className="lg:col-span-2">
              <Player
                podcast={currentPodcast}
                episode={currentEpisode}
                isPlaying={isPlaying}
                onPlayToggle={handlePlayToggle}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onProgressChange={handleProgressChange}
                volume={volume}
                onVolumeChange={handleVolumeChange}
                playbackSpeed={playbackSpeed}
                onSpeedChange={handleSpeedChange}
                quality={quality}
                onQualityChange={handleQualityChange}
              />
            </div>

            {/* Sidebar - Right */}
            <div className="space-y-6">
              <PodcastList
                podcasts={podcasts}
                currentPodcastId={currentPodcastId}
                onSelectPodcast={handleSelectPodcast}
              />

              <EpisodeList
                episodes={currentPodcast?.episodes || []}
                currentEpisodeId={currentEpisodeId}
                onSelectEpisode={handleSelectEpisode}
              />

              <StatsCard
                episodes={allEpisodes}
                currentPodcasts={podcasts.length}
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;