import { AddSubmission } from '../dtos/addSubmissionDto';
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

    async updateSubmission(id: string, status: string) {
        await this.submissionModel.findByIdAndUpdate(id, { status });
    }
}

export default SubmissionRepository;