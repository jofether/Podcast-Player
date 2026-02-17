import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-12 py-8 bg-gray-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold mb-2 text-gray-300">About PodHub</h4>
            <p className="text-sm text-gray-500">Your ultimate podcast listening platform with premium audio quality and personalized recommendations.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-gray-300">Quick Links</h4>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><button className="hover:text-purple-400 transition">Discover</button></li>
              <li><button className="hover:text-purple-400 transition">Library</button></li>
              <li><button className="hover:text-purple-400 transition">Settings</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-gray-300">Connect</h4>
            <div className="flex gap-3 justify-center md:justify-start text-gray-500 text-sm">
              <button className="hover:text-purple-400 transition">Twitter</button>
              <button className="hover:text-purple-400 transition">Discord</button>
              <button className="hover:text-purple-400 transition">GitHub</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>Made with ❤️ for podcast lovers • PodHub 2026 © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
