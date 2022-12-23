import { router, publicProcedure, protectedProcedure, premiumProcedure } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  getPremiumMessage: premiumProcedure.query(() => {
    return "you can now see this premium message!";
  }),
});
