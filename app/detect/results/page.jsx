'use client'

import { motion } from 'framer-motion' 

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
            Analysis Results
          </span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Your results will appear here shortly...
        </p>
      </motion.div>
    </div>
  )
}

