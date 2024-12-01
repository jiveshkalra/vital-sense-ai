import React from 'react'
import { motion } from 'framer-motion'
import { DiseaseInfo } from '@/lib/diseaseInfo'
import { AlertTriangle, Thermometer, Stethoscope, Shield, Info, Pill, HeartPulseIcon as Heartbeat, Zap, Wind } from 'lucide-react'
 
export const DiseaseInfoCard  = ({ info }) => {
  const severityColor = info.severity === 'High' ? 'bg-red-600' : info.severity === 'Moderate' ? 'bg-orange-500' : 'bg-yellow-500'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className={`p-6 ${info.severity === 'High' ? 'bg-red-100' : info.severity === 'Moderate' ? 'bg-orange-100' : 'bg-yellow-100'}`}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-between mb-4"
        >
          <h2 className="text-3xl font-bold text-gray-800">{info.name}</h2>
          <div className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${severityColor}`}>
            {info.severity} Severity
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center mb-4"
        >
          <Info className="mr-2 text-blue-500" />
          <p className="text-lg font-semibold">
            {info.isCurable ? (
              <span className="text-green-600">This condition is curable with proper treatment.</span>
            ) : (
              <span className="text-orange-600">This condition is manageable with ongoing care.</span>
            )}
          </p>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-700"
        >
          {info.description}
        </motion.p>
      </div>
      <div className="p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Thermometer className="mr-2 text-red-500" />
            Symptoms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {info.symptoms.map((symptom, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="bg-red-50 p-2 rounded-lg text-gray-700 flex items-center"
              >
                <AlertTriangle className="mr-2 text-red-500 h-4 w-4" />
                {symptom}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Pill className="mr-2 text-blue-500" />
            Treatment
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {info.treatment.map((treatment, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="bg-blue-50 p-2 rounded-lg text-gray-700 flex items-center"
              >
                {index % 3 === 0 && <Pill className="mr-2 text-blue-500 h-4 w-4" />}
                {index % 3 === 1 && <Heartbeat className="mr-2 text-blue-500 h-4 w-4" />}
                {index % 3 === 2 && <Zap className="mr-2 text-blue-500 h-4 w-4" />}
                {treatment}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Shield className="mr-2 text-green-500" />
            Prevention
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {info.prevention.map((prevention, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="bg-green-50 p-2 rounded-lg text-gray-700 flex items-center"
              >
                {index % 3 === 0 && <Shield className="mr-2 text-green-500 h-4 w-4" />}
                {index % 3 === 1 && <Wind className="mr-2 text-green-500 h-4 w-4" />}
                {index % 3 === 2 && <Zap className="mr-2 text-green-500 h-4 w-4" />}
                {prevention}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

