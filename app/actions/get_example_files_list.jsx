'use server'  
import fs from 'fs'
import path from 'path'

export default async function get_example_files_list() {

    const audioFilesDir = path.join(process.cwd(),'app', 'src', 'audio_files')
    const files = fs.readdirSync(audioFilesDir)
    const exampleFiles = files.map((file, index) => {
        return {
            id: index.toString(),
            name: file
        }
    }) 
    return exampleFiles
}
