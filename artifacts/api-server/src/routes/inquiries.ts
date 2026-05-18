import { Router } from "express";
import { db, inquiriesTable } from "@workspace/db";
import { SubmitInquiryBody } from "@workspace/api-zod";

const router = Router();

router.post("/inquiries", async (req, res) => {
  const parsed = SubmitInquiryBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { fullName, phone, studentClass, subject, branch, message } = parsed.data;

  const [inquiry] = await db
    .insert(inquiriesTable)
    .values({ fullName, phone, studentClass, subject, branch: branch ?? null, message: message ?? null })
    .returning({ id: inquiriesTable.id });

  res.status(201).json({ id: inquiry.id, message: "Inquiry submitted successfully. We'll contact you within 24 hours." });
});

export default router;
