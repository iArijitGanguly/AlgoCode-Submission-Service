type Evaluation = {
    output: string,
    status: string
}

export interface IJob {
    userId: string,
    submissionId: string,
    response: Evaluation[]
}