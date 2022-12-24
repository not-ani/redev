import { z } from "zod";
import { ExampleWhereUniqueInputObjectSchema } from "./objects/ExampleWhereUniqueInput.schema";
import { ExampleCreateInputObjectSchema } from "./objects/ExampleCreateInput.schema";
import { ExampleUpdateInputObjectSchema } from "./objects/ExampleUpdateInput.schema";

export const ExampleUpsertSchema = z.object({
  where: ExampleWhereUniqueInputObjectSchema,
  create: ExampleCreateInputObjectSchema,
  update: ExampleUpdateInputObjectSchema,
});
