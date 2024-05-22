
import fs from 'fs';
import { yarg } from '../../config/plugins/yargs.plugin';




export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}


export interface SaveFileOptions {
    fileContent: string;
    fileName?: string;
    destination?: string;
}

export class SaveFile implements SaveFileUseCase {

    constructor() {}


    execute({ 
        fileContent, 
        fileName = 'table.txt',
        destination = './outputs'
    }: SaveFileOptions): boolean {

        try {

            if (!fs.existsSync(destination)) {
                fs.mkdirSync(destination, { recursive: true });
            }
            
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
    

            return true;

            
        } catch (error) {

            return false;
            
        }
        

        
        

        
    }
}