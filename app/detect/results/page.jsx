'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { diseaseInfo } from '@/lib/diseaseInfo'
import { DiseaseInfoCard } from '@/components/DiseaseInfoCard'
import { HealthyResult } from '@/components/HealthyResult'
import LoadingAnimation from '@/components/LoadingAnimation'
import { AlertTriangle, Activity, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [result, setResult] = useState(null)
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-blue-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <AlertTriangle className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
          <p className="text-gray-600 mb-4">We couldn't find the results you're looking for.</p>
          <Button asChild>
            <Link href="/detect">Try Again</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
              Your Health Analysis
            </span>
          </h1>
          <p className="text-xl text-gray-700 flex items-center justify-center">
            <User className="mr-2" />
            Based on your lung sound analysis
          </p>
        </motion.div>

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
              Your Personalized Action Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Action plan content */}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <Button asChild className="bg-gradient-to-r from-red-500 to-blue-500 text-white">
            <Link href="/detect">Analyze Another Sample</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export const dynamic = 'force-dynamic'
