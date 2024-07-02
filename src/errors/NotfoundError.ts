import { StatusCodes } from 'http-status-codes';

import BaseError from './BaseError';

class NotfoundError extends BaseError {
    constructor(resourceName: string, resourceValue: string) {
        super('Resource Not Found', StatusCodes.NOT_FOUND, `The requested resource: ${resourceName} with value ${resourceValue} is not found`, {
            resourceName,
            resourceValue
        });
    }
}

export default NotfoundError;