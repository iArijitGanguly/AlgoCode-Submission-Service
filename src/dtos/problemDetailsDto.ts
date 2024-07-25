export interface TestCase {
    input: string,
    output: string
}

interface CodeStub {
    language: string,
    startSnippet: string,
    userSnippet: string,
    endSnippet: string
}

export interface ProblemDto {
    data: {
        title: string,
        description: string,
        diffculty: string,
        testCases: TestCase[],
        codeStubs: CodeStub[],
        editorial?: string
    }
}