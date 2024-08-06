import fetchProblemDetails from '../apis/problemServiceApi';
import { AddSubmission } from '../dtos/addSubmissionDto';
import BadrequestError from '../errors/BadrequestError';
import InternalServerError from '../errors/InternalServerError';
import submissionProducer from '../producers/submissionQueueProducer';
import SubmissionRepository from '../repositories/SubmissionRepository';

class SubmissionService {
    private submissionRepository;

    constructor(submissuinRepository: SubmissionRepository) {
        this.submissionRepository = submissuinRepository;
    }

    async addSubmission(submissionData: AddSubmission) {
        const problemId = submissionData.problemId;
        const userId = submissionData.userId;
        const problemResponseDetails = await fetchProblemDetails(problemId);
        if(!problemResponseDetails) {
            throw new InternalServerError(problemResponseDetails);
        }
        const languageCodeStub = problemResponseDetails.data.codeStubs.filter((codeStub) => codeStub.language.toLowerCase() == submissionData.language.toLowerCase());
        const endSnippet = (languageCodeStub[0].endSnippet) ? languageCodeStub[0].endSnippet : '';
        submissionData.code = `${languageCodeStub[0].startSnippet}\n\n${submissionData.code}\n\n${endSnippet}`;
        const submission = await this.submissionRepository.createSubmission(submissionData);
        if(!submission) {
            throw new BadrequestError('Submission Data', { submissionData });
        }
        await submissionProducer({
            [submission._id as unknown as string]: {
                code: submissionData.code,
                language: submissionData.language,
                testCases: problemResponseDetails.data.testCases,
                userId,
                submissionId: submission._id as unknown as string
            }
        });
        return submission;
    }

    async getSubmission(submissionId: string) {
        const submission = await this.submissionRepository.getSubmission(submissionId);
        return submission;
    }
}

export default SubmissionService;