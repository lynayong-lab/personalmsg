import React, { useState } from 'react'
import { Copy, RefreshCw, MessageCircle, Check } from 'lucide-react'
import { FormData } from '../App'

interface OutputSectionProps {
  message: string
  isLoading: boolean
  error: string
  onRegenerate: () => void
  formData: FormData
}

const OutputSection: React.FC<OutputSectionProps> = ({ 
  message, 
  isLoading, 
  error, 
  onRegenerate,
  formData 
}) => {
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleWhatsAppShare = () => {
    const encodedMessage = encodeURIComponent(message)
    const url = whatsappNumber 
      ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`
      : `https://wa.me/?text=${encodedMessage}`
    window.open(url, '_blank')
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border-8 border-black transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-memphis-green via-memphis-cyan to-memphis-lavender"></div>
      
      <h2 className="text-3xl font-baloo font-bold text-memphis-purple mb-6 flex items-center gap-2">
        <span className="text-4xl">✨</span> Generated Message
      </h2>

      {/* Message Display */}
      <div className="mb-6">
        {isLoading ? (
          <div className="bg-gradient-to-br from-memphis-pink to-memphis-yellow rounded-2xl p-8 border-4 border-memphis-coral min-h-[200px] flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-8 border-memphis-purple border-t-transparent mx-auto mb-4"></div>
              <p className="font-fredoka text-xl text-memphis-purple font-semibold">
                Crafting your perfect message...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-100 rounded-2xl p-6 border-4 border-red-500">
            <p className="font-fredoka text-lg text-red-700">{error}</p>
          </div>
        ) : message ? (
          <div className="bg-gradient-to-br from-memphis-yellow via-memphis-pink to-memphis-cyan rounded-2xl p-6 border-4 border-memphis-purple shadow-lg">
            <p className="font-fredoka text-lg text-gray-800 whitespace-pre-wrap leading-relaxed">
              {message}
            </p>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-memphis-pink to-memphis-yellow rounded-2xl p-8 border-4 border-dashed border-memphis-purple min-h-[200px] flex items-center justify-center">
            <p className="font-fredoka text-xl text-memphis-purple text-center font-semibold">
              👈 Fill out the form and click "Generate Message" to see your personalized message here!
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {message && !isLoading && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onRegenerate}
              className="bg-memphis-green text-white font-fredoka font-bold py-3 px-4 rounded-xl border-4 border-black shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Regenerate
            </button>
            
            <button
              onClick={handleCopy}
              className="bg-memphis-cyan text-white font-fredoka font-bold py-3 px-4 rounded-xl border-4 border-black shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Section */}
          <div className="bg-gradient-to-r from-memphis-pink to-memphis-yellow rounded-2xl p-4 border-4 border-memphis-coral">
            <label className="block text-lg font-fredoka font-semibold text-memphis-purple mb-2">
              📱 WhatsApp Number (Optional)
            </label>
            <input
              type="tel"
              placeholder="+6598765432"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-4 border-white font-fredoka text-lg focus:outline-none focus:ring-4 focus:ring-memphis-purple transition-all mb-3"
            />
            
            <button
              onClick={handleWhatsAppShare}
              className="w-full bg-gradient-to-r from-memphis-coral to-memphis-orange text-white font-baloo font-bold text-xl py-3 rounded-xl border-4 border-black shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Share via WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="mt-6 flex justify-center gap-3">
        <div className="w-8 h-8 bg-memphis-coral rounded-full transform rotate-12"></div>
        <div className="w-6 h-6 bg-memphis-yellow transform -rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="w-8 h-8 bg-memphis-green rounded-full transform rotate-45"></div>
        <div className="w-6 h-6 bg-memphis-purple transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="w-8 h-8 bg-memphis-cyan rounded-full transform -rotate-12"></div>
      </div>
    </div>
  )
}

export default OutputSection
