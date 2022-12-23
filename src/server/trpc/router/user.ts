import { z } from 'zod';
import { publicProcedure } from '../trpc';
import { router } from '../trpc';

const userRouter = router({

  create: publicProcedure
  .input(z.object({ id: z.string()}))
  .mutation(async ({input ,ctx }) => {
    const user = await ctx.prisma.user.create({
      data: {
        id: input.id,

      },
    });
    return user;
  }),

  delete: publicProcedure
  .input(z.object({ id: z.string()}))
  .mutation(async ({input ,ctx }) => {
    const user = await ctx.prisma.user.delete({
      where: {
        id: input.id,
      },
    });
    return user;
  }),
  
})
