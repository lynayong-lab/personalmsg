import React from 'react'
import { Wand2 } from 'lucide-react'
import { FormData } from '../App'

interface InputFormProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  onGenerate: () => void
  isLoading: boolean
}

const occasions = [
  'Birthday', 'Promotion', 'Wedding', 'Condolence', 'Graduation', 
  'Thank You', 'Apology', 'Get Well Soon', 'Christmas', 'New Year', 
  'Valentine', 'Other'
]

const tones = [
  'Warm', 'Funny', 'Formal', 'Friendly', 'Romantic', 'Sincere',
  'Appreciative', 'Playful', 'Motivational', 'Encouraging', 'Polite', 'Other'
]

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'ID', name: 'Bahasa Indonesia' },
  { code: 'MY', name: 'Malay' },
  { code: 'CN', name: 'Chinese' },
  { code: 'KR', name: 'Korean' },
  { code: 'JP', name: 'Japanese' },
]

const InputForm: React.FC<InputFormProps> = ({ formData, setFormData, onGenerate, isLoading }) => {
  const handleToneToggle = (tone: string) => {
    setFormData(prev => ({
      ...prev,
      tones: prev.tones.includes(tone)
        ? prev.tones.filter(t => t !== tone)
        : [...prev.tones, tone]
    }))
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border-8 border-black transform -rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-memphis-coral via-memphis-yellow to-memphis-green"></div>
      
      <h2 className="text-3xl font-baloo font-bold text-memphis-purple mb-6 flex items-center gap-2">
        <span className="text-4xl">📝</span> Message Details
      </h2>

      <div className="space-y-6">
        {/* Occasion */}
        <div>
          <label className="block text-lg font-fredoka font-semibold text-memphis-purple mb-2">
            🎯 Occasion
          </label>
          <select
            value={formData.occasion}
            onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border-4 border-memphis-coral font-fredoka text-lg focus:outline-none focus:ring-4 focus:ring-memphis-yellow transition-all"
          >
            {occasions.map(occ => (
              <option key={occ} value={occ}>{occ}</option>
            ))}
          </select>
          
          {formData.occasion === 'Other' && (
            <input
              type="text"
              placeholder="Enter custom occasion..."
              value={formData.customOccasion || ''}
              onChange={(e) => setFormData({ ...formData, customOccasion: e.target.value })}
              className="w-full mt-3 px-4 py-3 rounded-2xl border-4 border-memphis-green font-fredoka text-lg focus:outline-none focus:ring-4 focus:ring-memphis-yellow transition-all"
            />
          )}
        </div>

        {/* Tone */}
        <div>
          <label className="block text-lg font-fredoka font-semibold text-memphis-purple mb-2">
            🎭 Tone (Select Multiple)
          </label>
          <div className="flex flex-wrap gap-2">
            {tones.map(tone => (
              <button
                key={tone}
                onClick={() => handleToneToggle(tone)}
                className={`px-4 py-2 rounded-full font-fredoka font-semibold border-3 transition-all transform hover:scale-105 ${
                  formData.tones.includes(tone)
                    ? 'bg-memphis-coral text-white border-black shadow-lg'
                    : 'bg-white text-memphis-purple border-memphis-purple hover:bg-memphis-pink'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
          
          {formData.tones.includes('Other') && (
            <input
              type="text"
              placeholder="Enter custom tone..."
              value={formData.customTone || ''}
              onChange={(e) => setFormData({ ...formData, customTone: e.target.value })}
              className="w-full mt-3 px-4 py-3 rounded-2xl border-4 border-memphis-lavender font-fredoka text-lg focus:outline-none focus:ring-4 focus:ring-memphis-yellow transition-all"
            />
          )}
        </div>

        {/* Length */}
        <div>
          <label className="block text-lg font-fredoka font-semibold text-memphis-purple mb-2">
            📏 Message Length
          </label>
          <div className="space-y-3">
            {[
              { value: 'short', label: 'Short', hint: 'Quick WhatsApp message, busy/corporate tone' },
              { value: 'medium', label: 'Medium', hint: 'Casual yet thoughtful' },
              { value: 'long', label: 'Long', hint: 'Warm, expressive and detailed' },
            ].map(({ value, label, hint }) => (
              <label key={value} className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="length"
                  value={value}
                  checked={formData.lengthPreference === value}
                  onChange={(e) => setFormData({ ...formData, lengthPreference: e.target.value as any })}
                  className="mt-1 w-5 h-5 text-memphis-coral focus:ring-memphis-yellow"
                />
                <div>
                  <span className="font-fredoka font-semibold text-memphis-purple group-hover:text-memphis-coral transition-colors">
                    {label}
                  </span>
                  <p className="text-sm text-gray-500 italic">{hint}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Language */}
        <div>
          <label className="block text-lg font-fredoka font-semibold text-memphis-purple mb-2">
            🌍 Language
          </label>
          <select
            value={formData.language}
            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border-4 border-memphis-green font-fredoka text-lg focus:outline-none focus:ring-4 focus:ring-memphis-yellow transition-all"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>

        {/* Recipient Name */}
        <div>
          <label className="block text-lg font-fredoka font-semibold text-memphis-purple mb-2">
            👤 Recipient Name (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g., Sarah"
            value={formData.recipientName || ''}
            onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border-4 border-memphis-cyan font-fredoka text-lg focus:outline-none focus:ring-4 focus:ring-memphis-yellow transition-all"
          />
        </div>

        {/* Draft Message */}
        <div>
          <label className="block text-lg font-fredoka font-semibold text-memphis-purple mb-2">
            ✍️ Draft Message (Optional)
          </label>
          <textarea
            placeholder="If you already have a draft, paste it here..."
            value={formData.draftMessage || ''}
            onChange={(e) => setFormData({ ...formData, draftMessage: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-2xl border-4 border-memphis-orange font-fredoka text-lg focus:outline-none focus:ring-4 focus:ring-memphis-yellow transition-all resize-none"
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-memphis-coral to-memphis-purple text-white font-baloo font-bold text-2xl py-4 rounded-2xl border-4 border-black shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div>
              Generating Magic...
            </>
          ) : (
            <>
              <Wand2 className="w-6 h-6" />
              Generate Message
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default InputForm
