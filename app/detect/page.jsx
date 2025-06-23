"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Upload,
  Loader,
  Stethoscope,
  AudioWaveform,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "react-audio-player-component";
import { useToast } from "@/components/ui/use-toast";
import call_lung_ai_api from "../actions/call_lung_ai_api";
import { ExamplesSection } from "@/components/examples-section";
import get_example_files_list from "../actions/get_example_files_list";

export default function DetectPage() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [audioVisualWidth, setAudioVisualWidth] = useState(0);
  const [exampleFiles, setExampleFiles] = useState([
    {
      id: "1",
      name: "102_1b1_Ar_sc_Meditron.wav",
      onClick: () => {
        // Handle file selection
        console.log("Selected example file 1");
      },
    },
    {
      id: "2",
      name: "103_2b2_Ar_mc_LittC2SE.wav",
      onClick: () => {
        console.log("Selected example file 2");
      },
    },
    {
      id: "3",
      name: "105_1b1_Tc_sc_Meditron.wav",
      onClick: () => {
        console.log("Selected example file 3");
      },
    },
    {
      id: "4",
      name: "125_1b1_Tc_sc_Meditron.wav",
      onClick: () => {
        console.log("Selected example file 4");
      },
    },
    {
      id: "5",
      name: "116_1b2_Tc_sc_Meditron.wav",
      onClick: () => {
        console.log("Selected example file 5");
      },
    },
  ]);
  const calculateWidth = () => {
    const maxWidth = 850;
    const padding = 32; // 2rem (p-8) * 2
    const availableWidth = Math.min(
      window.innerWidth * 0.85 - padding,
      maxWidth
    );
    return Math.max(availableWidth, 250); // Ensure a minimum width of 300px
  };
  useEffect(() => { 
    get_example_files_list() .then((data) => {
        console.log(data);
        setExampleFiles(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },[]);
  useEffect(() => {
    const handleResize = () => {
      setAudioVisualWidth(calculateWidth());
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 
  const handleFilesFromExamples =async (response) =>{
      setFile(null)
      let file = await response 
      setTimeout(() => {

      setFile(file)
      },500)

  }
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.type.startsWith("audio/")) {
      setFile(uploadedFile);
      console.log(uploadedFile);
      toast({
        title: "File uploaded successfully",
        description: "Your audio file is ready for analysis.",
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an audio file.",
        variant: "destructive",
      });
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("border-primary");
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("border-primary");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("border-primary");
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("audio/")) {
      setFile(droppedFile);
      toast({
        title: "File uploaded successfully",
        description: "Your audio file is ready for analysis.",
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an audio file.",
        variant: "destructive",
      });
    }
  };

  const handleDetectDisease = async () => {
    setIsLoading(true);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const res = await call_lung_ai_api(formData);
        console.log(res["data"][0]);
        router.push(`/detect/results?d=${res["data"][0]}`);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    } else {
      console.error("No file selected");
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
              <a href="/">  VitalSenseAI </a>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">
            Upload your lung sound recording for instant AI-powered analysis
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
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
              className="mb-6"
            >
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 sm:p-12 text-center cursor-pointer hover:border-primary transition-colors duration-300 bg-white"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  Drag and drop your audio file here, or click to select a file
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Supported formats: WAV, MP3, M4A
                </p>
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
              className="mb-6"
            >
              <div className="bg-white p-4 rounded-lg shadow-md"> 

                <AudioPlayer
                  src={ URL.createObjectURL(file)}
                  minimal={false}
                  width={audioVisualWidth}
                  trackHeight={80}
                  barWidth={2}
                  gap={1}
                  visualise={true}
                  backgroundColor="#FFF"
                  barColor="#06b6d4"
                  barPlayedColor="#ef4444"
                  skipDuration={2}
                  showLoopOption={false}
                  showVolumeControl={true}
                  seekBarColor="#FFF"
                  volumeControlColor="#4ade80"
                  hideSeekBar={true}
                />
                <p className="mt-2 text-sm text-center text-gray-500">
                  {file.name}
                </p>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Button
              className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full hover:shadow-lg transition-all duration-300"
              onClick={handleDetectDisease}
              disabled={!file}
            >
              {file ? "Detect Disease" : "Upload an audio file to begin"}
            </Button>
          </motion.div>

          </AnimatePresence>
          <AnimatePresence mode="wait">
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
                <p className="text-sm text-muted-foreground">
                  This will just take a moment
                </p>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
          
        <AnimatePresence mode="wait">
          <ExamplesSection files={exampleFiles} className="mt-8" sendDataToParent={handleFilesFromExamples}/>
        </AnimatePresence>
      </div>
    </div>
  );
}
