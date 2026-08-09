export interface ExecutionCodeRequest{
    sourceCode: string;
    languageId: number;
    stdin?: string;
}