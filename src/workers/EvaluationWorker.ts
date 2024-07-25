import axios from 'axios';
import { Job, Worker } from 'bullmq';

import redisConnection from '../configs/redisConfig';
import SubmissionRepository from '../repositories/SubmissionRepository';
import { IJob } from '../types/bullMqJobDefinition';

const submissionRepository = new SubmissionRepository();

function EvaluationWorker(queueName: string) {
    new Worker(
        queueName,
        async (job: Job<IJob>) => {
            if(job.name == 'EvaluationJob') {
                const submissionId = job.data.submissionId;
                const userId = job.data.userId;
                const response = job.data.response;
                const payload = job.data;
                console.log(payload);

                let statusToUpdate = 'SUCCESS';
                for(const evaluation of response) {
                    if(evaluation.status == 'ERROR') {
                        if(evaluation.output == 'MLE') {
                            statusToUpdate = 'MLE';
                            break;
                        }
                        else {
                            statusToUpdate = 'TLE';
                            break;
                        }
                    }
                    else if(evaluation.status == 'WA') {
                        statusToUpdate = 'WA';
                        break;
                    }
                }

                await submissionRepository.updateSubmission(submissionId, statusToUpdate);

                try {
                    const response = await axios.post('http://localhost:3003/sendPayload', {
                        userId,
                        payload
                    });
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                }
                return true;
            }
        },
        { connection: redisConnection }
    );
}

export default EvaluationWorker;