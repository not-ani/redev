import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { LessonListRelationFilterObjectSchema } from "./LessonListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CourseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CourseWhereInputObjectSchema),
        z.lazy(() => CourseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CourseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CourseWhereInputObjectSchema),
        z.lazy(() => CourseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lessons: z.lazy(() => LessonListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const CourseWhereInputObjectSchema = Schema;
