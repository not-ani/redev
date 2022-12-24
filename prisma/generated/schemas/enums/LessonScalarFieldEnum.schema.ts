import { z } from "zod";

export const LessonScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "title",
  "body",
  "courseId",
  "isPremium",
  "videoUrl",
  "markdownFileUrl",
  "file",
]);
