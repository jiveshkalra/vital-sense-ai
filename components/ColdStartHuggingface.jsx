'use client';

import { get_example_files_list } from "@/app/actions/get_example_files_list";
import { call_lung_ai_api } from "@/app/actions/call_lung_ai_api";
import { useEffect } from "react";  
export default function ColdStartHuggingface() {

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
    <></>
  )
}
