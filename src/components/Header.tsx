import React from 'react'
import { Sparkles } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <div className="text-center relative">
      <div className="inline-block relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-memphis-coral rounded-full opacity-50 blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-memphis-purple rounded-full opacity-50 blur-xl"></div>
        
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-8 border-black transform rotate-1">
          <div className="absolute top-0 left-0 w-full h-2 zigzag-border"></div>
          
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="bg-memphis-coral p-3 rounded-2xl transform -rotate-12 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-baloo font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-memphis-coral via-memphis-purple to-memphis-green">
              Personalized Message Generator
            </h1>
            <div className="bg-memphis-green p-3 rounded-2xl transform rotate-12 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <p className="text-xl font-fredoka text-memphis-purple font-semibold">
            🎨 AI-crafted WhatsApp messages for every occasion 🎉
          </p>
          
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-4 h-4 bg-memphis-coral rounded-full"></div>
            <div className="w-4 h-4 bg-memphis-yellow rounded-full"></div>
            <div className="w-4 h-4 bg-memphis-green rounded-full"></div>
            <div className="w-4 h-4 bg-memphis-purple rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
