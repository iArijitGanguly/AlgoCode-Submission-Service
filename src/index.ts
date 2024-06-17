import fastify from 'fastify';

import serverConfig from './configs/serverConfig';

const { PORT } = serverConfig;

const server = fastify();

server.listen({ port: PORT }, (err) => {
    if(err) {
        server.log.error(err);
        process.exit(1);
    }
    console.log(`Server is started at PORT: ${PORT}`);
});