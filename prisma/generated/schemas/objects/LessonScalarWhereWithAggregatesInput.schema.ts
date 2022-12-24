import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LessonScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => LessonScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    courseId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    isPremium: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    videoUrl: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    markdownFileUrl: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    file: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const LessonScalarWhereWithAggregatesInputObjectSchema = Schema;
