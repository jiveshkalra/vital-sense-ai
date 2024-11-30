'use server'
import path from 'path'
import fs from 'fs' 

export default async function get_example_files_list() {

    const audioFilesDir = path.join('public', 'src', 'audio_files')
    const public_url_dir = path.join('src', 'audio_files')
    const files = fs.readdirSync(audioFilesDir) 
    files.map((file, index) => { 
        files[index] = {
            id: index,
            name: file,
            audio_path: path.join(public_url_dir, file),
            isActive: false
        }
    }
    )
    return files
    
}