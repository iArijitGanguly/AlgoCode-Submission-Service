import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';

import { Params } from '../../types';
import { AddSubmission } from '../dtos/addSubmissionDto';

async function createSubmission(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    const requestBody = req.body as AddSubmission;
    const response = await this.submissionService.addSubmission(requestBody);
    return res.status(StatusCodes.CREATED).send({
        success: true,
        message: 'Successfully created a submission',
        data: response,
        error: {}
    });
}

async function getSubmission(this: FastifyInstance, req: FastifyRequest<{Params: Params}>, res: FastifyReply) {
    try {
        const response = await this.submissionService.getSubmission(req.params.id);
        return res.status(StatusCodes.OK).send({
            success: true,
            message: 'Successfully fetched a submission',
            data: response,
            error: {}
        });
    } catch (error) {
        throw error;
    }
}

export default {
    createSubmission,
    getSubmission
};