import { router } from "../trpc";
import { authRouter } from "./auth";
import { courseRouter } from "./course";
import { exampleRouter } from "./example";
import { lessonRouter } from "./lesson";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  lesson: lessonRouter,
  course: courseRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
