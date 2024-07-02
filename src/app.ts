import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import repositoryPlugin from './repositories';
import apiRouter from './routes';
import servicePlugin from './services';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function app(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    await fastify.register(repositoryPlugin);
    await fastify.register(servicePlugin);
    await fastify.register(apiRouter, { prefix: '/api' });
}

export default fastifyPlugin(app);