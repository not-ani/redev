import { z } from "zod";
import { ExampleUpdateInputObjectSchema } from "./objects/ExampleUpdateInput.schema";
import { ExampleWhereUniqueInputObjectSchema } from "./objects/ExampleWhereUniqueInput.schema";

export const ExampleUpdateOneSchema = z.object({
  data: ExampleUpdateInputObjectSchema,
  where: ExampleWhereUniqueInputObjectSchema,
});
