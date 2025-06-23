import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VitalSenseAI - AI-Powered Lung and Heart Disease Detection',
  description: 'Revolutionizing healthcare with cutting-edge AI technology for rapid and accurate lung and heart disease detection.',
}

export default function RootLayout({
  children,
} ) {

  // Cold start HuggingFace space on mount
  useEffect(() => {
    (async () => {
      try {
        const files = await get_example_files_list();
        if (files && files.length > 0) {
          // Pick a random file
          const randomFile = files[Math.floor(Math.random() * files.length)];
          // Fetch the file as a Blob
          const res = await fetch(`/${randomFile.audio_path}`);
          const blob = await res.blob();
          // Create a File object (simulate user upload)
          const file = new File([blob], randomFile.name, { type: blob.type });
          const formData = new FormData();
          formData.append("file", file);
          // Call the API (ignore result)
          await call_lung_ai_api(formData);
        }
      } catch (e) {
        // Silent fail
        // console.error("Cold start failed", e);
      }
    })();
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

