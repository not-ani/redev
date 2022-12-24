import { z } from "zod";
import { ExampleCreateInputObjectSchema } from "./objects/ExampleCreateInput.schema";

export const ExampleCreateOneSchema = z.object({
  data: ExampleCreateInputObjectSchema,
});
