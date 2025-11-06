import React from 'react'

const BackgroundShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large Circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-memphis-coral rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-memphis-purple rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-memphis-green rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Triangles */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-memphis-yellow opacity-30 transform rotate-45"></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-memphis-cyan opacity-30 transform -rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      
      {/* Squares */}
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-memphis-orange opacity-25 transform rotate-12"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-memphis-lavender opacity-25 transform -rotate-45"></div>
      
      {/* Small Circles */}
      <div className="absolute top-20 right-1/3 w-12 h-12 bg-memphis-coral rounded-full opacity-40"></div>
      <div className="absolute bottom-1/2 left-20 w-16 h-16 bg-memphis-green rounded-full opacity-40"></div>
      <div className="absolute top-2/3 right-1/4 w-10 h-10 bg-memphis-purple rounded-full opacity-40"></div>
      
      {/* Zigzag Lines */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-memphis-coral to-transparent opacity-30"></div>
      <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-memphis-green to-transparent opacity-30"></div>
    </div>
  )
}

export default BackgroundShapes
