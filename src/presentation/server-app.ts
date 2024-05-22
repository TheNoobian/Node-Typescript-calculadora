import { CreateTable } from "../domain/use-cases/create-table.usecase";
import { SaveFile } from "../domain/use-cases/save-file.usecase";

interface RunOptions {
    base        : number;
    limit       : number;
    show        : boolean;
    fileName    : string;
    destination : string;
}


export class ServerApp {

    static run({ base, limit, show, destination, fileName}: RunOptions) {
        console.log('iniciando servidor');

        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({ fileContent: table, fileName, destination});

        if (show) console.log(table);

        (wasCreated) ? console.log('la tabla ha sido creada con exito') : console.log('la tabla no ha sido creada');

        
        
    }



}