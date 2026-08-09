import { Router } from "express";

import { resolve } from "dns/promises";
import SandboxAdapter from "./sandboxAdapter/sandbox.adapter";

const router = Router();

router.get("/V1/product/sandbox/getResult/:id", async (req, res) => {
    return await SandboxAdapter.getResult(req, res);
});

router.post("/V1/product/sandbox/submit", async (req, res) => {
    return await SandboxAdapter.sendSubmission(req, res);
});

export default router;