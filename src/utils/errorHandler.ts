import { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';

import BaseError from '../errors/BaseError';

function errorHandler(err: Error, _req: FastifyRequest, res: FastifyReply) {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).send({
            success: false,
            message: err.message,
            error: err.details,
            data: {}
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: 'Something went wrong!',
        error: err,
        data: {}
    });
}

export default errorHandler;