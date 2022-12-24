import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LessonUncheckedCreateWithoutCourseInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    body: z.string(),
    isPremium: z.boolean(),
    videoUrl: z.string(),
    markdownFileUrl: z.string(),
    file: z.string(),
  })
  .strict();

export const LessonUncheckedCreateWithoutCourseInputObjectSchema = Schema;
