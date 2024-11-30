import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { DiseaseInfo } from '@/lib/diseaseInfo'
import { Heart, Award, Zap, Sun } from 'lucide-react'
 
export const HealthyResult = ({ info }) => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={info.image}
          alt="Healthy Lungs"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-600 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-3xl font-bold text-white">{info.heading}</h2>
        </div>
      </div>
      <div className="p-6">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 mb-4"
        >
          {info.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Heart className="mr-2 text-red-500" />
            Tips for Maintaining Healthy Lungs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {info.prevention.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="bg-white p-4 rounded-lg shadow flex items-start"
              >
                {index % 4 === 0 && <Award className="mr-2 text-yellow-500 flex-shrink-0" />}
                {index % 4 === 1 && <Zap className="mr-2 text-blue-500 flex-shrink-0" />}
                {index % 4 === 2 && <Sun className="mr-2 text-orange-500 flex-shrink-0" />}
                {index % 4 === 3 && <Heart className="mr-2 text-red-500 flex-shrink-0" />}
                <span className="text-gray-700">{tip}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
