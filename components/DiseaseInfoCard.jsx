import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { DiseaseInfo } from '@/lib/diseaseInfo'
import { AlertTriangle, Thermometer, Stethoscope, Shield } from 'lucide-react'
 

export const DiseaseInfoCard  = ({ info }) => {
  const severityColor = info.severity === 'High' ? 'bg-red-600' : info.severity === 'Moderate' ? 'bg-orange-500' : 'bg-yellow-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={info.image}
          alt={info.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-3xl font-bold text-white">{info.name}</h2>
          <div className={`inline-block px-2 py-1 rounded-full text-white text-sm font-semibold mt-2 ${severityColor}`}>
            {info.severity} Severity
          </div>
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
          className="mb-4"
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Thermometer className="mr-2 text-red-500" />
            Symptoms
          </h3>
          <ul className="list-disc list-inside grid grid-cols-2 gap-2">
            {info.symptoms.map((symptom, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="text-gray-700"
              >
                {symptom}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-4"
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Stethoscope className="mr-2 text-blue-500" />
            Treatment
          </h3>
          <ul className="list-disc list-inside grid grid-cols-2 gap-2">
            {info.treatment.map((treatment, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="text-gray-700"
              >
                {treatment}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Shield className="mr-2 text-green-500" />
            Prevention
          </h3>
          <ul className="list-disc list-inside grid grid-cols-2 gap-2">
            {info.prevention.map((prevention, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="text-gray-700"
              >
                {prevention}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}
