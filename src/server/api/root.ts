import { messageRouter } from "@tok-wizard/server/api/routers/message";
import { createTRPCRouter } from "@tok-wizard/server/api/trpc";
import { videoSubmissionRouter } from "./routers/videoSubmission";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  message: messageRouter,
  videoSubmission: videoSubmissionRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
