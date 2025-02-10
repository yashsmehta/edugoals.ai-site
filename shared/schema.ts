import { z } from "zod";

export const insertWaitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  profession: z.string().min(2, "Please specify your profession")
});

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
