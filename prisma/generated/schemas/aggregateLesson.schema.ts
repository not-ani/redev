import { z } from "zod";
import { LessonWhereInputObjectSchema } from "./objects/LessonWhereInput.schema";
import { LessonOrderByWithRelationInputObjectSchema } from "./objects/LessonOrderByWithRelationInput.schema";
import { LessonWhereUniqueInputObjectSchema } from "./objects/LessonWhereUniqueInput.schema";
import { LessonCountAggregateInputObjectSchema } from "./objects/LessonCountAggregateInput.schema";
import { LessonMinAggregateInputObjectSchema } from "./objects/LessonMinAggregateInput.schema";
import { LessonMaxAggregateInputObjectSchema } from "./objects/LessonMaxAggregateInput.schema";

export const LessonAggregateSchema = z.object({
  where: LessonWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LessonOrderByWithRelationInputObjectSchema,
      LessonOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: LessonWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LessonCountAggregateInputObjectSchema])
    .optional(),
  _min: LessonMinAggregateInputObjectSchema.optional(),
  _max: LessonMaxAggregateInputObjectSchema.optional(),
});
