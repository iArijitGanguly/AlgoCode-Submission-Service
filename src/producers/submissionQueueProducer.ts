import submissionQueue from '../queues/submissionQueue';
import { SubmissionPayload } from '../types/SubmissionPayload';

async function submissionProducer(payload: Record<string, SubmissionPayload>) {
    await submissionQueue.add('SubmissionJob', payload);
}

export default submissionProducer;