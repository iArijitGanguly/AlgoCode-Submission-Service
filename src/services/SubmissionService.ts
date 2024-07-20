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
        const problemResponseDetails = await fetchProblemDetails(problemId);
        if(!problemResponseDetails) {
            throw new InternalServerError(problemResponseDetails);
        }
        const languageCodeStub = problemResponseDetails.data.codeStubs.filter((codeStub) => codeStub.language.toLowerCase() == submissionData.language.toLowerCase());
        console.log(languageCodeStub);
        const endSnippet = (languageCodeStub[0].endSnippet) ? languageCodeStub[0].endSnippet : '';
        submissionData.code = `${languageCodeStub[0].startSnippet}\n\n${submissionData.code}\n\n${endSnippet}`;
        const submission = await this.submissionRepository.createSubmission(submissionData);
        if(!submission) {
            throw new BadrequestError('Submission Data', { submissionData });
        }
        console.log(submission);
        await submissionProducer({
            [submission._id as unknown as string]: {
                code: submissionData.code,
                language: submissionData.language,
                inputCase: problemResponseDetails.data.testCases[0].input,
                outputCase: problemResponseDetails.data.testCases[0].output
            }
        });
        return submission;
    }
}

export default SubmissionService;