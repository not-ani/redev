import { z } from "zod";
import { LessonCreateWithoutCourseInputObjectSchema } from "./LessonCreateWithoutCourseInput.schema";
import { LessonUncheckedCreateWithoutCourseInputObjectSchema } from "./LessonUncheckedCreateWithoutCourseInput.schema";
import { LessonCreateOrConnectWithoutCourseInputObjectSchema } from "./LessonCreateOrConnectWithoutCourseInput.schema";
import { LessonWhereUniqueInputObjectSchema } from "./LessonWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LessonCreateNestedManyWithoutCourseInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LessonCreateWithoutCourseInputObjectSchema),
        z.lazy(() => LessonCreateWithoutCourseInputObjectSchema).array(),
        z.lazy(() => LessonUncheckedCreateWithoutCourseInputObjectSchema),
        z
          .lazy(() => LessonUncheckedCreateWithoutCourseInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => LessonCreateOrConnectWithoutCourseInputObjectSchema),
        z
          .lazy(() => LessonCreateOrConnectWithoutCourseInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => LessonWhereUniqueInputObjectSchema),
        z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LessonCreateNestedManyWithoutCourseInputObjectSchema = Schema;
