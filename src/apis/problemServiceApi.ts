import { AxiosResponse } from 'axios';

import axiosInstance from '../configs/axiosInstance';
import serverConfig from '../configs/serverConfig';
import { AddSubmission } from '../dtos/addSubmissionDto';
import { ProblemDto } from '../dtos/problemDetailsDto';
import NotfoundError from '../errors/NotfoundError';

const { PROBLEM_SERVICE_URL } = serverConfig;
const PROBLEM_SERVICE_API_URL = `${PROBLEM_SERVICE_URL}/api/v1`;

async function fetchProblemDetails(problemId: string) {
    try {
        const uri = PROBLEM_SERVICE_API_URL + `/problems/${problemId}`;
        const response: AxiosResponse<ProblemDto, AddSubmission> = await axiosInstance.get(uri);
        return response.data;
    } catch (error) {
        throw new NotfoundError('Problem Id', problemId);
    }
}

export default fetchProblemDetails;