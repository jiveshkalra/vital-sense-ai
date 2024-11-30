'use client'

import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { Play, Pause, X, RotateCcw, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
 

export function AudioVisualizer({ file, onRemove }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wavesurfer = useRef<WaveSurfer | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    if (!containerRef.current) return

    wavesurfer.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#4f46e5',
      progressColor: '#818cf8',
      cursorColor: '#312e81',
      barWidth: 2,
      barGap: 3,
      height: 100,
      barRadius: 3,
    })

    wavesurfer.current.on('ready', () => {
      setDuration(wavesurfer.current?.getDuration() || 0)
    })

    wavesurfer.current.on('audioprocess', () => {
      setCurrentTime(wavesurfer.current?.getCurrentTime() || 0)
    })

    wavesurfer.current.on('finish', () => {
      setIsPlaying(false)
    })

    // Load audio file
    const fileUrl = URL.createObjectURL(file)
    wavesurfer.current.load(fileUrl)

    return () => {
      URL.revokeObjectURL(fileUrl)
      wavesurfer.current?.destroy()
    }
  }, [file])

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause()
      setIsPlaying(!isPlaying)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleVolumeChange = (value) => {
    const newVolume = value[0]
    setVolume(newVolume)
    wavesurfer.current?.setVolume(newVolume)
  }

  const handleRestart = () => {
    wavesurfer.current?.seekTo(0)
    setCurrentTime(0)
    if (!isPlaying) {
      togglePlay()
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary"
            onClick={handleRestart}
          >
            <RotateCcw className="h-5 w-5" />
          </Button>
          <div className="text-sm font-medium">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5" />
            <Slider
              value={[volume]}
              max={1}
              step={0.1}
              onValueChange={handleVolumeChange}
              className="w-24"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-destructive"
            onClick={onRemove}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div ref={containerRef} className="w-full" />
      <div className="mt-2 text-sm text-muted-foreground">
        {file.name}
      </div>
    </div>
  )
}

