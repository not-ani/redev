import { z } from "zod";
import { LessonUncheckedCreateNestedManyWithoutCourseInputObjectSchema } from "./LessonUncheckedCreateNestedManyWithoutCourseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CourseUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    lessons: z
      .lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputObjectSchema)
      .optional(),
  })
  .strict();

export const CourseUncheckedCreateInputObjectSchema = Schema;
