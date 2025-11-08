'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mountain, Waves, Building, TreePine, Palmtree, Castle, DollarSign, Users, Calendar } from 'lucide-react'
import Button from '../ui/Button'
import ProgressBar from '../ui/ProgressBar'

interface PreferencesWizardProps {
  onComplete: (preferences: any) => void
}

export default function PreferencesWizard({ onComplete }: PreferencesWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [preferences, setPreferences] = useState({
    travelStyle: [] as string[],
    interests: [] as string[],
    budget: '',
    groupSize: '',
    travelFrequency: '',
  })

  const steps = [
    'Travel Style',
    'Interests',
    'Budget',
    'Group Size',
    'Frequency'
  ]

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete(preferences)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleSelection = (field: string, value: string) => {
    const currentValues = preferences[field as keyof typeof preferences] as string[]
    if (Array.isArray(currentValues)) {
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
      setPreferences({ ...preferences, [field]: newValues })
    } else {
      setPreferences({ ...preferences, [field]: value })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-4xl shadow-float-lg p-8 lg:p-12"
        >
          {/* Progress */}
          <div className="mb-12">
            <ProgressBar currentStep={currentStep} totalSteps={5} steps={steps} />
          </div>

          {/* Step 1: Travel Style */}
          {currentStep === 1 && (
            <StepContainer
              title="What's your travel style?"
              subtitle="Select all that apply"
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Mountain, label: 'Adventure', value: 'adventure' },
                  { icon: Waves, label: 'Beach & Relax', value: 'beach' },
                  { icon: Building, label: 'City Explorer', value: 'city' },
                  { icon: TreePine, label: 'Nature', value: 'nature' },
                  { icon: Palmtree, label: 'Tropical', value: 'tropical' },
                  { icon: Castle, label: 'Cultural', value: 'cultural' },
                ].map((option) => (
                  <SelectionCard
                    key={option.value}
                    icon={option.icon}
                    label={option.label}
                    selected={preferences.travelStyle.includes(option.value)}
                    onClick={() => toggleSelection('travelStyle', option.value)}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 2: Interests */}
          {currentStep === 2 && (
            <StepContainer
              title="What interests you most?"
              subtitle="Choose your favorite activities"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Photography', 'Food & Dining', 'Shopping', 'Nightlife',
                  'Museums', 'Sports', 'Wellness', 'Wildlife'
                ].map((interest) => (
                  <SelectionChip
                    key={interest}
                    label={interest}
                    selected={preferences.interests.includes(interest)}
                    onClick={() => toggleSelection('interests', interest)}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 3: Budget */}
          {currentStep === 3 && (
            <StepContainer
              title="What's your budget range?"
              subtitle="Per person, per trip"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  { label: 'Budget', range: '$0 - $1,000', value: 'budget' },
                  { label: 'Moderate', range: '$1,000 - $3,000', value: 'moderate' },
                  { label: 'Luxury', range: '$3,000 - $10,000', value: 'luxury' },
                  { label: 'Ultra Luxury', range: '$10,000+', value: 'ultra' },
                ].map((option) => (
                  <BudgetCard
                    key={option.value}
                    label={option.label}
                    range={option.range}
                    selected={preferences.budget === option.value}
                    onClick={() => setPreferences({ ...preferences, budget: option.value })}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 4: Group Size */}
          {currentStep === 4 && (
            <StepContainer
              title="Who do you usually travel with?"
              subtitle="Select your typical group size"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Users, label: 'Solo', value: 'solo' },
                  { icon: Users, label: 'Couple', value: 'couple' },
                  { icon: Users, label: 'Family', value: 'family' },
                  { icon: Users, label: 'Group', value: 'group' },
                ].map((option) => (
                  <SelectionCard
                    key={option.value}
                    icon={option.icon}
                    label={option.label}
                    selected={preferences.groupSize === option.value}
                    onClick={() => setPreferences({ ...preferences, groupSize: option.value })}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 5: Frequency */}
          {currentStep === 5 && (
            <StepContainer
              title="How often do you travel?"
              subtitle="Help us personalize your experience"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: 'Rarely', subtitle: '1-2 times a year', value: 'rarely' },
                  { icon: Calendar, label: 'Occasionally', subtitle: '3-4 times a year', value: 'occasionally' },
                  { icon: Calendar, label: 'Frequently', subtitle: '5-8 times a year', value: 'frequently' },
                  { icon: Calendar, label: 'Very Often', subtitle: '9+ times a year', value: 'very-often' },
                ].map((option) => (
                  <FrequencyCard
                    key={option.value}
                    icon={option.icon}
                    label={option.label}
                    subtitle={option.subtitle}
                    selected={preferences.travelFrequency === option.value}
                    onClick={() => setPreferences({ ...preferences, travelFrequency: option.value })}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
            <Button
              variant="ghost"
              size="lg"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            <Button
              variant="gradient"
              size="lg"
              onClick={handleNext}
            >
              {currentStep === 5 ? 'Complete Setup' : 'Continue'}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function StepContainer({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-600 mb-8">{subtitle}</p>
      {children}
    </motion.div>
  )
}

function SelectionCard({ icon: Icon, label, selected, onClick }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        p-6 rounded-2xl border-2 transition-all text-center
        ${selected
          ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-secondary-50 shadow-glow-purple'
          : 'border-gray-200 bg-white hover:border-gray-300'
        }
      `}
    >
      <Icon className={`w-8 h-8 mx-auto mb-3 ${selected ? 'text-primary-600' : 'text-gray-400'}`} />
      <div className={`font-semibold ${selected ? 'text-primary-700' : 'text-gray-700'}`}>{label}</div>
    </motion.button>
  )
}

function SelectionChip({ label, selected, onClick }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        px-6 py-4 rounded-xl font-medium transition-all
        ${selected
          ? 'bg-gradient-primary text-white shadow-glow-purple'
          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
        }
      `}
    >
      {label}
    </motion.button>
  )
}

function BudgetCard({ label, range, selected, onClick }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        p-6 rounded-2xl border-2 transition-all text-left
        ${selected
          ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-secondary-50 shadow-glow-purple'
          : 'border-gray-200 bg-white hover:border-gray-300'
        }
      `}
    >
      <DollarSign className={`w-8 h-8 mb-3 ${selected ? 'text-primary-600' : 'text-gray-400'}`} />
      <div className={`text-xl font-bold mb-1 ${selected ? 'text-primary-700' : 'text-gray-900'}`}>{label}</div>
      <div className="text-gray-600 text-sm">{range}</div>
    </motion.button>
  )
}

function FrequencyCard({ icon: Icon, label, subtitle, selected, onClick }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        p-6 rounded-2xl border-2 transition-all text-left flex items-center gap-4
        ${selected
          ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-secondary-50 shadow-glow-purple'
          : 'border-gray-200 bg-white hover:border-gray-300'
        }
      `}
    >
      <Icon className={`w-8 h-8 ${selected ? 'text-primary-600' : 'text-gray-400'}`} />
      <div className="flex-1">
        <div className={`text-lg font-bold mb-0.5 ${selected ? 'text-primary-700' : 'text-gray-900'}`}>{label}</div>
        <div className="text-gray-600 text-sm">{subtitle}</div>
      </div>
    </motion.button>
  )
}
