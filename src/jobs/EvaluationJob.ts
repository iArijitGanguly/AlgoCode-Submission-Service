// import { Job } from 'bullmq';

// import { IJob } from '../types/bullMqJobDefinition';

// class EvaluationJob implements IJob {
//     name: string;
//     payload: Record<string, unknown>;

//     constructor(payload: Record<string, unknown>) {
//         this.name = this.constructor.name;
//         this.payload = payload;
//     }

//     handle = (job?: Job) => {
//         console.log('Handler of this job called');
//         console.log(job);
//     };

//     failed = (job?: Job) => {
//         console.log('job failed', job?.id);
//     };
// }

// export default EvaluationJob;