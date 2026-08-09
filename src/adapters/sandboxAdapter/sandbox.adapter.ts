import { Request, Response } from "express";
import debugLib from 'debug';
import Judge0Port from "../../ports/judge0Port/judge0.port";
import { ExecutionCodeRequest } from "../../domain/models/executionCodeRequest.interface";

const debug = debugLib('sandbox:adapter');
export default class SandboxAdapter{


    public static async sendSubmission(req: Request, res: Response){
        try{
            const body: ExecutionCodeRequest = req.body;
            debug('Init to send submission: Body: ', body);
            const result = await Judge0Port.submit(body);
            res.status(200).json({result});
        }catch(err: any){
            debug('Error with Judg0 submit: Rs: ', err);
            res.status(500).json({err});
        }
    }

    public static async getResult(req: Request, res: Response){
        try{
            const token = req.params.id;
            debug('Init to get result with token: ', token);
            const result = await Judge0Port.getResult(token);
            debug('Response Judge0: Rs: ', result);
            res.status(200).json({result});
        }catch(err: any){
            debug('Error with Judg0 resultt: Rs: ', err);
            res.status(500).json({err});
        }
    }
}