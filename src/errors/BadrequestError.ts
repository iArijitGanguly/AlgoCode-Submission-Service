import { StatusCodes } from 'http-status-codes';

import BaseError from './BaseError';

class BadrequestError extends BaseError {
    constructor(propertyName: string, details: object) {
        super('This is a bad request', StatusCodes.BAD_REQUEST, `Invalid structure for ${propertyName} is provided`, details);
    }
}

export default BadrequestError;