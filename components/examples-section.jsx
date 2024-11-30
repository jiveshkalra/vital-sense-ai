'use client'

import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"  

const fetch_audio_from_url =async (url) =>{
  // 1. Fetch the audio from URL
  // 2. Make it a blob
  // 3. return the blob

  const audio_blob = await fetch(url).then((res) => res.blob());
  return audio_blob;
}
export function ExamplesSection({ files, className,setFile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full space-y-4", className)}
    >
      <div className="text-center space-y-2">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              OR TRY OUT SOME EXAMPLES
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {files.map((file) => (
          <motion.button
            key={file.id}
            onClick={() => setFile(fetch_audio_from_url(file.audio_path))}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition-colors",
              "bg-zinc-900 text-zinc-100 hover:bg-zinc-800",
              "dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
              "border border-zinc-800/10 dark:border-zinc-100/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900",
              "truncate",
              file.isActive && "bg-blue-600 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-600 dark:text-white"
            )}
          >
            {file.name}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
