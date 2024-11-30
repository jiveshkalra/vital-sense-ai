'use server'
import path from 'path'
import fs from 'fs'
import FormData from 'form-data'

export default async function get_example_files_list() {

    const audioFilesDir = path.join(process.cwd(),'public', 'src', 'audio_files')
    const files = fs.readdirSync(audioFilesDir) 
    files.map((file, index) => { 
        files[index] = {
            id: index,
            name: file,
            audio_path: path.join(audioFilesDir, file),
            isActive: false
        }
    }
    )
    return files
    
}