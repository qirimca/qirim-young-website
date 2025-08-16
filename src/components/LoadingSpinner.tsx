import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12" role="status" aria-label="Loading content">
      <div className="relative">
        {/* Ornek-inspired loading pattern */}
        <div className="w-12 h-12 border-4 border-crimean-200 rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-8 h-8 border-4 border-yellow-600 rounded-full animate-spin animation-delay-200"></div>
        <div className="absolute top-4 left-4 w-4 h-4 bg-accent-amber rounded-full animate-pulse"></div>
      </div>
      <span className="sr-only">Yüklenе...</span>
    </div>
  );
};

export default LoadingSpinner;
