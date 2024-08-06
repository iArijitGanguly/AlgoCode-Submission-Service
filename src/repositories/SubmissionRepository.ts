import { AddSubmission } from '../dtos/addSubmissionDto';
import NotfoundError from '../errors/NotfoundError';
import Submission from '../models/submissionModel';

class SubmissionRepository {
    private submissionModel;
    
    constructor() {
        this.submissionModel = Submission;
    }

    async createSubmission(submissionData: AddSubmission) {
        const response = await this.submissionModel.create(submissionData);
        return response;
    }

    async getSubmission(id: string) {
        try {
            const response = await this.submissionModel.findById(id);
            if(!response) {
                throw new NotfoundError('Submission Id', id);
            }
            return response;
        } catch (error) {
            throw error;
        }
    }

    async updateSubmission(id: string, status: string) {
        await this.submissionModel.findByIdAndUpdate(id, { status });
    }
}

export default SubmissionRepository;