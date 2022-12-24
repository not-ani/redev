import { z } from "zod";
import { LessonCreateNestedManyWithoutCourseInputObjectSchema } from "./LessonCreateNestedManyWithoutCourseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CourseCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    lessons: z
      .lazy(() => LessonCreateNestedManyWithoutCourseInputObjectSchema)
      .optional(),
  })
  .strict();

export const CourseCreateInputObjectSchema = Schema;
