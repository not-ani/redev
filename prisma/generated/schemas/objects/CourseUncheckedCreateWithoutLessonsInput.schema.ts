import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CourseUncheckedCreateWithoutLessonsInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
  })
  .strict();

export const CourseUncheckedCreateWithoutLessonsInputObjectSchema = Schema;
