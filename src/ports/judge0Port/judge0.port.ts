import config from "../../config";
import { ExecutionCodeRequest } from "../../domain/models/executionCodeRequest.interface";

export default class Judge0Port{
    private static readonly baseUrl = config.JUDGE0_URL;

    public static async submit(data: ExecutionCodeRequest){
        const response = await fetch(
            `${this.baseUrl}/submissions`,
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  source_code: data.sourceCode,
                  language_id: data.languageId,
                  stdin: data.stdin ?? ''
                })
            }
        );
        return response.json();
    }

    public static async getResult(token: string){
        const response = await fetch(
             `${this.baseUrl}/submissions/${token}`
        );

        return response.json()
    }
}