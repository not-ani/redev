import { z } from "zod";

export const CourseScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "title",
  "description",
  "image",
]);
