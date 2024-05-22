import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Es el limite de la tabla de multiplicar'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar' 
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: './outputs',
        describe: 'Es la ruta de destino de la tabla de multiplicar'
    })
    .option('n', {
        alias: 'fileName',
        type: 'string',
        default: 'table',
        describe: 'Es el nombre del archivo de la tabla de multiplicar'
    })
    .check((argv, options) => {
        
        if( argv.b < 1 ) throw 'la base tiene que ser mayor o igual a 0';

        return true;
    })
    .parseSync();

