import { TestCase } from '../dtos/problemDetailsDto';

export interface SubmissionPayload {
    code: string,
    language: string,
    testCases: TestCase[]
    userId: string,
    submissionId: string
}