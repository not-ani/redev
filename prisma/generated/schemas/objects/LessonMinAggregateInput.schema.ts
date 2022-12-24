import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LessonMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    title: z.literal(true).optional(),
    body: z.literal(true).optional(),
    courseId: z.literal(true).optional(),
    isPremium: z.literal(true).optional(),
    videoUrl: z.literal(true).optional(),
    markdownFileUrl: z.literal(true).optional(),
    file: z.literal(true).optional(),
  })
  .strict();

export const LessonMinAggregateInputObjectSchema = Schema;
