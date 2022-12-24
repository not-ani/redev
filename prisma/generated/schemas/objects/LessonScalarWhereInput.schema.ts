import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LessonScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LessonScalarWhereInputObjectSchema),
        z.lazy(() => LessonScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LessonScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LessonScalarWhereInputObjectSchema),
        z.lazy(() => LessonScalarWhereInputObjectSchema).array(),
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
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    courseId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isPremium: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    videoUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    markdownFileUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    file: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const LessonScalarWhereInputObjectSchema = Schema;
