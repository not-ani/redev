import { z } from "zod";
import { ExampleWhereInputObjectSchema } from "./objects/ExampleWhereInput.schema";
import { ExampleOrderByWithRelationInputObjectSchema } from "./objects/ExampleOrderByWithRelationInput.schema";
import { ExampleWhereUniqueInputObjectSchema } from "./objects/ExampleWhereUniqueInput.schema";
import { ExampleScalarFieldEnumSchema } from "./enums/ExampleScalarFieldEnum.schema";

export const ExampleFindManySchema = z.object({
  where: ExampleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ExampleOrderByWithRelationInputObjectSchema,
      ExampleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ExampleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExampleScalarFieldEnumSchema).optional(),
});
