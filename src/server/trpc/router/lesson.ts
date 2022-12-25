import { TRPCError } from "@trpc/server";
import { LessonFindManySchema } from "../../../../prisma/generated/schemas/findManyLesson.schema";
import { LessonFindUniqueSchema } from "../../../../prisma/generated/schemas/findUniqueLesson.schema";
import { publicProcedure, router } from "../trpc";

export const lessonRouter = router({
    findUnique: publicProcedure
        .input(LessonFindUniqueSchema)
        .mutation(async ({ ctx, input }) => {
            const lesson = await ctx.prisma.lesson.findUniqueOrThrow({
                where: input.where,
            });

            if (lesson.isPremium && !ctx.session?.user?.isPremium) {
                throw new TRPCError({ code: "UNAUTHORIZED" });
            }
        }),

});
