import { yarg } from './config/plugins/yargs.plugin';
import { ServerApp } from './presentation/server-app';



// console.log(yarg.b);


(async() => {
    await main();
})();


async function main() {

    const { b:base, l:limit, s:show, d:destination, n:fileName } = yarg;

    ServerApp.run({ base, limit, show, destination, fileName});
    
}


