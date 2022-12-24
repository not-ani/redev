import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { LessonOrderByRelationAggregateInputObjectSchema } from "./LessonOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CourseOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    lessons: z
      .lazy(() => LessonOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CourseOrderByWithRelationInputObjectSchema = Schema;
