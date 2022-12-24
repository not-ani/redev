import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { LessonCountOrderByAggregateInputObjectSchema } from "./LessonCountOrderByAggregateInput.schema";
import { LessonMaxOrderByAggregateInputObjectSchema } from "./LessonMaxOrderByAggregateInput.schema";
import { LessonMinOrderByAggregateInputObjectSchema } from "./LessonMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LessonOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    courseId: z.lazy(() => SortOrderSchema).optional(),
    isPremium: z.lazy(() => SortOrderSchema).optional(),
    videoUrl: z.lazy(() => SortOrderSchema).optional(),
    markdownFileUrl: z.lazy(() => SortOrderSchema).optional(),
    file: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => LessonCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => LessonMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LessonMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LessonOrderByWithAggregationInputObjectSchema = Schema;
