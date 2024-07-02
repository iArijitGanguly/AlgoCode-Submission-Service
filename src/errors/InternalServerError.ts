import { StatusCodes } from 'http-status-codes';

import BaseError from './BaseError';

class InternalServerError extends BaseError {
    constructor(details: object) {
        super('Internal Server Error', StatusCodes.INTERNAL_SERVER_ERROR, 'Something went wrong!', details);
    }
}

export default InternalServerError;