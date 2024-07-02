import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import v1Router from './v1';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function apiRouter(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    fastify.register(v1Router, { prefix: '/v1' });
}

export default apiRouter;