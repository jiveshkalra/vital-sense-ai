'use client'

import { useState,useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Upload, Loader, Stethoscope, AudioWaveform , Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast" 
import { AudioVisualizer } from '@/components/audio-visualizer'

export default function DetectPage() {
  const fileInputRef = useRef(null)
  
  const [file, setFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile && uploadedFile.type.startsWith('audio/')) {
      setFile(uploadedFile)
      toast({
        title: "File uploaded successfully",
        description: "Your audio file is ready for analysis.",
      })
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an audio file.",
        variant: "destructive",
      })
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    event.currentTarget.classList.add('border-primary')
  }

  const handleDragLeave = (event) => {
    event.preventDefault()
    event.currentTarget.classList.remove('border-primary')
  }

  const handleDrop = (event) => {
    event.preventDefault()
    event.currentTarget.classList.remove('border-primary')
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile && droppedFile.type.startsWith('audio/')) {
      setFile(droppedFile)
      toast({
        title: "File uploaded successfully",
        description: "Your audio file is ready for analysis.",
      })
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an audio file.",
        variant: "destructive",
      })
    }
  }

  const handleDetectDisease = () => {
    setIsLoading(true)
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false)
      router.push('/detect/results')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
 
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
              VitalSenseAI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Upload your lung sound recording for instant AI-powered analysis
          </p>
        <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Stethoscope className="h-5 w-5 text-red-500" />
              <span>Advanced Detection</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <AudioWaveform className="h-5 w-5 text-blue-500" />
              <span>Sound Analysis</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Health Insights</span>
            </div> 
          </div> 
        </motion.div>

        <AnimatePresence mode="wait">
          {!file && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-primary transition-colors duration-300 bg-white"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileInput')?.click()}
              >
                <input
                  ref={fileInputRef}
                  id="fileInput"
                  type="file"
                  accept="audio/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">Drag and drop your audio file here, or click to select a file</p>
                <p className="mt-1 text-xs text-gray-400">Supported formats: WAV, MP3, M4A</p>
              </div>
            </motion.div>
          )}

          {file && (
            <motion.div
              key="player"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <AudioVisualizer 
                file={file} 
                onRemove={() => setFile(null)} 
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-center"
              >
                <Button 
                  className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-6 text-lg rounded-full hover:shadow-lg transition-all duration-300"
                  onClick={handleDetectDisease}
                >
                  Detect Disease
                </Button>
              </motion.div>
            </motion.div>
          )}

          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50"
            >
              <div className="text-center">
                <Loader className="animate-spin h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-semibold">Analyzing audio...</p>
                <p className="text-sm text-muted-foreground">This will just take a moment</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

