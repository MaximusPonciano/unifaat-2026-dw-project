import { createJob } from '../../utils/job.js';
import { sleep } from "../../utils/sleep.js";

export default createJob({
    name: 'SlowHttpJob',
    handle: async (payload) => {
        console.log("Iniciando o processamento lento no worker...");

        await sleep(5)

        console.log("Processamento lento finalizado!");

    }
})