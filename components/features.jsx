'use client'

import { motion } from 'framer-motion'
import { Heart, Brain, Clock, Shield } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Heart,
    title: "Precise Detection",
    description: "Advanced AI algorithms for accurate disease identification"
  },
  {
    icon: Brain,
    title: "Intelligent Analysis",
    description: "Deep learning models trained on vast medical datasets"
  },
  {
    icon: Clock,
    title: "Rapid Results",
    description: "Get insights in seconds, not days"
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "Your health data is encrypted and secure"
  }
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 md:py-20 px-4" ref={ref}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Key Features
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Card className="bg-card hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br from-red-50 to-blue-50">
              <CardHeader>
                <motion.div 
                  className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

