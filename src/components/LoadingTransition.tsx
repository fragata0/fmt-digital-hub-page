
import React, { useEffect, useState } from 'react';

const LoadingTransition = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500">
          <div className="text-center">
            <div className="mb-4 text-3xl font-bold">
              <span className="gradient-text">FMT</span>
            </div>
            <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full bg-gradient-to-r from-fmt-blue to-fmt-purple animate-[loading_1s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default LoadingTransition;
