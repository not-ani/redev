import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LessonUpdateWithoutCourseInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    body: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isPremium: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    videoUrl: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    markdownFileUrl: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    file: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LessonUpdateWithoutCourseInputObjectSchema = Schema;
