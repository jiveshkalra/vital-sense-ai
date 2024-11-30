import React from 'react'
import { motion } from 'framer-motion'

const LoadingAnimation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-red-100">
      <motion.div
        className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-6 text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Analyzing your results...</h2>
        <p className="text-gray-600">This may take a few moments</p>
      </motion.div>
    </div>
  )
}

export default LoadingAnimation

