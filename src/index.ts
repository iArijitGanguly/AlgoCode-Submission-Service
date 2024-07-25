import fastify from 'fastify';

import app from './app';
import connectToDb from './configs/dbConfig';
import serverConfig from './configs/serverConfig';
import errorHandler from './utils/errorHandler';
import EvaluationWorker from './workers/EvaluationWorker';

const server = fastify();

const { PORT } = serverConfig;

server.register(app);

server.setErrorHandler(errorHandler);

server.listen({ port: PORT }, async (err) => {
    if(err) {
        server.log.error(err);
        process.exit(1);
    }
    await connectToDb();
    EvaluationWorker('EvaluationQueue');
    console.log(`Server is started at PORT: ${PORT}`);
});