"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoadingSpinner = () => {
    return (<div className="flex justify-center items-center py-12" role="status" aria-label="Loading content">
      <div className="relative">
        {/* Ornek-inspired loading pattern */}
        <div className="w-12 h-12 border-4 border-crimean-200 rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-8 h-8 border-4 border-heritage-gold rounded-full animate-spin animation-delay-200"></div>
        <div className="absolute top-4 left-4 w-4 h-4 bg-heritage-gold rounded-full animate-pulse"></div>
      </div>
      <span className="sr-only">Yüklenе...</span>
    </div>);
};
exports.default = LoadingSpinner;
