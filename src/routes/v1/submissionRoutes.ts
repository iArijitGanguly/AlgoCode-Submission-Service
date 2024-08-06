import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import submissionController from '../../controllers/submissionController';
import addSubmissionSchema from '../../dtos/addSubmissionDto';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function submissionRouter(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    // fastify.post('/', submissionController.createSubmission);
    fastify.post('/', {
        schema: {
            body: addSubmissionSchema
        },
        handler: submissionController.createSubmission
    });

    fastify.get('/:id', submissionController.getSubmission);
}

export default submissionRouter;