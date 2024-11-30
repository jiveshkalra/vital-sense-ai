"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30 dark:opacity-20"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="z-10 text-center space-y-6 md:space-y-8 px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
            AI Saves Lives
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Revolutionizing lung and heart disease detection with cutting-edge AI
          technology
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            asChild
            className="bg-gradient-to-r from-red-500 to-blue-500 text-white text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 group"
          >
            <Link href="/detect">
              Experience VitalSenseAI
              <motion.div
                className="ml-2 inline-block"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Heart className="ml-2 inline-block transition-transform group-hover:scale-125" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
