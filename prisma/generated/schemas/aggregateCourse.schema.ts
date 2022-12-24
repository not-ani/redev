import { z } from "zod";
import { CourseWhereInputObjectSchema } from "./objects/CourseWhereInput.schema";
import { CourseOrderByWithRelationInputObjectSchema } from "./objects/CourseOrderByWithRelationInput.schema";
import { CourseWhereUniqueInputObjectSchema } from "./objects/CourseWhereUniqueInput.schema";
import { CourseCountAggregateInputObjectSchema } from "./objects/CourseCountAggregateInput.schema";
import { CourseMinAggregateInputObjectSchema } from "./objects/CourseMinAggregateInput.schema";
import { CourseMaxAggregateInputObjectSchema } from "./objects/CourseMaxAggregateInput.schema";

export const CourseAggregateSchema = z.object({
  where: CourseWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CourseOrderByWithRelationInputObjectSchema,
      CourseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: CourseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CourseCountAggregateInputObjectSchema])
    .optional(),
  _min: CourseMinAggregateInputObjectSchema.optional(),
  _max: CourseMaxAggregateInputObjectSchema.optional(),
});
