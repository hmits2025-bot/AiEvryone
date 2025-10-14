
import React from 'react';

interface VideoPlayerProps {
  src: string;
}

/**
 * A responsive component to embed a YouTube video.
 * It uses a padding-top trick to maintain a 16:9 aspect ratio.
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
      {src ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500">Select a lesson to begin.</p>
        </div>
      )}
    </div>
  );
};
