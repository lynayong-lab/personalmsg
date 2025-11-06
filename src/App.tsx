import React, { useState } from 'react'
import Header from './components/Header'
import InputForm from './components/InputForm'
import OutputSection from './components/OutputSection'
import BackgroundShapes from './components/BackgroundShapes'

export interface FormData {
  occasion: string
  customOccasion?: string
  tones: string[]
  customTone?: string
  lengthPreference: 'short' | 'medium' | 'long'
  language: string
  recipientName?: string
  draftMessage?: string
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    occasion: 'Birthday',
    tones: ['Warm'],
    lengthPreference: 'medium',
    language: 'EN',
  })
  
  const [generatedMessage, setGeneratedMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const generateMessage = async () => {
    setIsLoading(true)
    setError('')
    
    try {
      const payload = {
        occasion: formData.occasion === 'Other' ? formData.customOccasion : formData.occasion,
        tone: formData.tones.includes('Other') 
          ? [...formData.tones.filter(t => t !== 'Other'), formData.customTone].filter(Boolean).join(', ')
          : formData.tones.join(', '),
        length_preference: formData.lengthPreference,
        language: formData.language,
        recipient_name: formData.recipientName || '',
        draft_message: formData.draftMessage || '',
      }

      const response = await fetch('https://lyna-meilinda.app.n8n.cloud/webhook/personalized-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Failed to generate message')
      }

      const message = await response.text()
      setGeneratedMessage(message)
    } catch (err) {
      setError('Failed to generate message. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-memphis-pink via-memphis-yellow to-memphis-cyan relative overflow-hidden">
      <BackgroundShapes />
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-5xl">
        <Header />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <InputForm 
            formData={formData}
            setFormData={setFormData}
            onGenerate={generateMessage}
            isLoading={isLoading}
          />
          
          <OutputSection 
            message={generatedMessage}
            isLoading={isLoading}
            error={error}
            onRegenerate={generateMessage}
            formData={formData}
          />
        </div>
      </div>
    </div>
  )
}

export default App
