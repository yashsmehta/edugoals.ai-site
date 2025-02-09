import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export function registerRoutes(app: Express) {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      
      const existing = await storage.getWaitlistByEmail(data.email);
      if (existing) {
        return res.status(400).json({ 
          message: "This email is already on the waitlist" 
        });
      }

      const entry = await storage.createWaitlistEntry(data);
      res.status(201).json(entry);
    } catch (err: any) {
      if (err.name === "ZodError") {
        return res.status(400).json({ 
          message: fromZodError(err).message 
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return createServer(app);
}
