import { z } from "zod";
import { LessonCreateWithoutCourseInputObjectSchema } from "./LessonCreateWithoutCourseInput.schema";
import { LessonUncheckedCreateWithoutCourseInputObjectSchema } from "./LessonUncheckedCreateWithoutCourseInput.schema";
import { LessonCreateOrConnectWithoutCourseInputObjectSchema } from "./LessonCreateOrConnectWithoutCourseInput.schema";
import { LessonUpsertWithWhereUniqueWithoutCourseInputObjectSchema } from "./LessonUpsertWithWhereUniqueWithoutCourseInput.schema";
import { LessonWhereUniqueInputObjectSchema } from "./LessonWhereUniqueInput.schema";
import { LessonUpdateWithWhereUniqueWithoutCourseInputObjectSchema } from "./LessonUpdateWithWhereUniqueWithoutCourseInput.schema";
import { LessonUpdateManyWithWhereWithoutCourseInputObjectSchema } from "./LessonUpdateManyWithWhereWithoutCourseInput.schema";
import { LessonScalarWhereInputObjectSchema } from "./LessonScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LessonUpdateManyWithoutCourseNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputObjectSchema),
        z
          .lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => LessonWhereUniqueInputObjectSchema),
        z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => LessonWhereUniqueInputObjectSchema),
        z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => LessonWhereUniqueInputObjectSchema),
        z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => LessonWhereUniqueInputObjectSchema),
        z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputObjectSchema),
        z
          .lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => LessonUpdateManyWithWhereWithoutCourseInputObjectSchema),
        z
          .lazy(() => LessonUpdateManyWithWhereWithoutCourseInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => LessonScalarWhereInputObjectSchema),
        z.lazy(() => LessonScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LessonUpdateManyWithoutCourseNestedInputObjectSchema = Schema;
