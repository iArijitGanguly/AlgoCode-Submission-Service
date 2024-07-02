import { AddSubmission } from '../dtos/addSubmissionDto';
import submissionQueue from '../queues/submissionQueue';

async function submissionProducer(payload: AddSubmission) {
    await submissionQueue.add('SubmissionQueue', payload);
}

export default submissionProducer;