import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CourseScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CourseScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CourseScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CourseScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CourseScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CourseScalarWhereWithAggregatesInputObjectSchema).array(),
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
    description: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const CourseScalarWhereWithAggregatesInputObjectSchema = Schema;
