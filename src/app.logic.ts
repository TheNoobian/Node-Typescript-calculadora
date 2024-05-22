import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';



//extraer valores de yargs

const baseyargs = yarg.b;
const limityargs = yarg.l;
const showtableyargs = yarg.s;


//tabla del 5 y guardar en .txt

let outputMessage = '';
const headerMessage = `
======================================================
===                   tabla del ${baseyargs}                 ====
======================================================
\n`;


for (let i = 1; i <= limityargs; i++) {
    outputMessage += `${baseyargs} * ${i} = ${baseyargs * i} \n`;
}

outputMessage = headerMessage + outputMessage;


const outputsFolder = './outputs';

if (!fs.existsSync(outputsFolder)) {
    fs.mkdirSync(outputsFolder, { recursive: true });
}


fs.writeFileSync(`${outputsFolder}/tabla${baseyargs}.txt`, outputMessage);


if (showtableyargs) {
    console.log(outputMessage);
}


console.log(`la tabla del ${baseyargs} ha sido creada con exito`);




