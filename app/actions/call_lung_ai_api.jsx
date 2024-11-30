'use server' 
import { Client } from "@gradio/client";
 

export default async function call_lung_ai_api(formData) { 
  try { 
    const file = formData.get('file')
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    } 
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Connect to Gradio API and send the audio file
    const client = await Client.connect("jiveshkalra/LungDiseaseDetector")
    const result = await client.predict("/predict", { audio_data: buffer })
    console.log(result)
    return { data: result.data }
  } catch (error) {
    console.error('Error:', error)
    return { error: 'Internal Server Error' , status: 500 } 
  }
}
