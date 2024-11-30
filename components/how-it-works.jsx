'use client'

import { motion } from 'framer-motion'
import { Mic, Cpu, FileAudio, Stethoscope } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    icon: Mic,
    title: "Record",
    description: "Capture lung sounds using your device"
  },
  {
    icon: FileAudio,
    title: "Upload",
    description: "Securely send the audio to VitalSenseAI"
  },
  {
    icon: Cpu,
    title: "Analyze",
    description: "Our AI processes the sound patterns"
  },
  {
    icon: Stethoscope,
    title: "Diagnose",
    description: "Receive a detailed health report"
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-muted">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="bg-card hover:shadow-md transition-all duration-300 hover:scale-105">
              <CardHeader>
                <motion.div 
                  className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-4 animate-pulse-glow"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </motion.div>
                <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

