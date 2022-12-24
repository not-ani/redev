import { z } from "zod";
import { CourseCreateNestedOneWithoutLessonsInputObjectSchema } from "./CourseCreateNestedOneWithoutLessonsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LessonCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    body: z.string(),
    course: z.lazy(() => CourseCreateNestedOneWithoutLessonsInputObjectSchema),
    isPremium: z.boolean(),
    videoUrl: z.string(),
    markdownFileUrl: z.string(),
    file: z.string(),
  })
  .strict();

export const LessonCreateInputObjectSchema = Schema;
