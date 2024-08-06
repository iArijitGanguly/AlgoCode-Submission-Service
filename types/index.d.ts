import SubmissionRepository from '../src/repositories/SubmissionRepository';
import SubmissionService from '../src/services/SubmissionService';

declare module 'fastify' {
    interface FastifyInstance {
        submissionService: SubmissionService,
        submissionRepository: SubmissionRepository
    }
}

interface Params {
    id: string
}