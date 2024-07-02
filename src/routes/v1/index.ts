import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import submissionRouter from './submissionRoutes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function v1Router(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    fastify.register(submissionRouter, { prefix: '/submission' });
}

export default v1Router;