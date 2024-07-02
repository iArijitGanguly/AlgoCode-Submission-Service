import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import SubmissionRepository from './SubmissionRepository';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function repositoryPlugin(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    fastify.decorate('submissionRepository', new SubmissionRepository());
}

export default fastifyPlugin(repositoryPlugin);