import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';

import { AddSubmission } from '../dtos/addSubmissionDto';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function createSubmission(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    //TODO: Need proper validation for icoming data

    const requestBody = req.body as AddSubmission;
    const response = await this.submissionService.addSubmission(requestBody);
    return res.status(StatusCodes.CREATED).send({
        success: true,
        message: 'Successfully created a submission',
        data: response,
        error: {}
    });
}

export default {
    createSubmission
};