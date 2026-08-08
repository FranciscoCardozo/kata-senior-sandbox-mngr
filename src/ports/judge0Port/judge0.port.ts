import config from "../../config";
import { ExecutionCodeRequest } from "../../domain/models/executionCodeRequest.interface";
import debugLib from 'debug';

const debug = debugLib('jusdge0:Port');
export default class Judge0Port{
    private static readonly baseUrl = config.JUDGE0_URL;

    public static async submit(data: ExecutionCodeRequest): Promise<any>{
        const finalUrl = `${this.baseUrl}/submissions?wait=true`;
        const headers = {'Content-Type': 'application/json'};
        const body = JSON.stringify({
                  source_code: data.sourceCode,
                  language_id: data.languageId,
                  stdin: data.stdin ?? ''
                });
        console.log('init fetch with url: %s, headers: %s, body: %s', this.baseUrl);
        console.log('init fetch with url: %s, headers: %s, body: %s', headers);
        console.log('init fetch with url: %s, headers: %s, body: %s', body);
        const response = await fetch(
            finalUrl,
            {
                method: 'POST',
                headers,
                body
            }
        );

        console.log('RESPONSE FETCH', response);
        console.log('status:', response.status);
        console.log('body:', await response.text());

        return response.json();
    }

    public static async getResult(token: string): Promise<any>{
        const response = await fetch(
             `${this.baseUrl}/submissions/${token}`
        );

        return response.json();
    }
}