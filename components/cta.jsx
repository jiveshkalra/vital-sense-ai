'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
            Ready to Experience VitalSenseAI?
          </span>
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join the future of healthcare. Start detecting lung and heart diseases with unprecedented accuracy today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button asChild className="bg-gradient-to-r from-red-500 to-blue-500 text-white text-base md:text-lg py-4 md:py-6 px-8 md:px-12 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 group">
            <Link href="/detect">
              Try VitalSenseAI Now
              <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

