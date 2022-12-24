import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const courseRouter = router({
  update: publicProcedure
    .input(z.object({}))
    .mutation(async ({ ctx, input }) => {
      return 1234;
    }),


});
