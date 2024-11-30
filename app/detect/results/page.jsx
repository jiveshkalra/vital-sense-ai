'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { diseaseInfo, DiseaseInfo } from '@/lib/diseaseInfo'
import { DiseaseInfoCard } from '@/components/DiseaseInfoCard'
import { HealthyResult } from '@/components/HealthyResult'
import LoadingAnimation from '@/components/LoadingAnimation'
import { HeartPulseIcon as Heartbeat, AlertTriangle, ThumbsUp, Activity } from 'lucide-react'

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [result, setResult] = useState (null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const disease = searchParams.get('d')
    if (disease && disease in diseaseInfo) { 
        setResult(diseaseInfo[disease])
        setLoading(false) 
    } else {
      setLoading(false)
    }
  }, [searchParams])

  if (loading) {
    return <LoadingAnimation />
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
          <p className="text-gray-600">We couldn't find the results you're looking for.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-8"
        >
          <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
            Analysis Results
          </span>
        </motion.h1>
        <AnimatePresence>
          {result.name === 'Healthy' ? (
            <HealthyResult key="healthy" info={result} />
          ) : (
            <DiseaseInfoCard key="disease" info={result} />
          )}
        </AnimatePresence>
        {result.name !== 'Healthy' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Activity className="mr-2 text-blue-500" />
              Your Action Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Heartbeat className="mr-2 text-blue-500" />
                  Immediate Steps
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Schedule an appointment with a pulmonologist</li>
                  <li>Begin prescribed treatments or medications</li>
                  <li>Monitor your symptoms closely</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <ThumbsUp className="mr-2 text-green-500" />
                  Lifestyle Changes
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Quit smoking and avoid secondhand smoke</li>
                  <li>Improve indoor air quality</li>
                  <li>Practice breathing exercises daily</li>
                  <li>Maintain a balanced diet and stay hydrated</li>
                </ul>
              </div>
            </div>
            {!result.isCurable && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-4 text-gray-700 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500"
              >
                While this condition is not curable, with proper management and lifestyle changes, 
                you can significantly improve your quality of life and slow disease progression. 
                Stay positive and work closely with your healthcare team.
              </motion.p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
} 