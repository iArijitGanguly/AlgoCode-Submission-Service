import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import SubmissionService from './SubmissionService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function servicePlugin(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    fastify.decorate('submissionService', new SubmissionService(fastify.submissionRepository));
}

export default fastifyPlugin(servicePlugin);