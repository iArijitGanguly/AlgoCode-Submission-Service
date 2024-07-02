import { AddSubmission } from '../dtos/addSubmissionDto';
import BadrequestError from '../errors/BadrequestError';
import submissionProducer from '../producers/submissionQueueProducer';
import SubmissionRepository from '../repositories/SubmissionRepository';

class SubmissionService {
    private submissionRepository;

    constructor(submissuinRepository: SubmissionRepository) {
        this.submissionRepository = submissuinRepository;
    }

    async addSubmission(submissionData: AddSubmission) {
        const submission = await this.submissionRepository.createSubmission(submissionData);
        if(!submission) {
            throw new BadrequestError('Submission Data', { submissionData });
        }
        console.log(submission);
        await submissionProducer(submissionData);
        return submission;
    }
}

export default SubmissionService;