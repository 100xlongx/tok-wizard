import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@tok-wizard/server/api/trpc";


export const videoSubmissionRouter = createTRPCRouter({
    createVideoSubmission: protectedProcedure
    .input(z.object({
        title: z.string(),
        content: z.string() 
    }))
    .mutation(async ({ ctx, input }) => ctx.db.userVideoSubmission.create({
        data: {
            content: input.content,
            title: input.title,
            userId: ctx.session.userId
        }
    })),
    grabUserVideoSubmissions: protectedProcedure
    .query(async ({ ctx }) => ctx.db.userVideoSubmission.findMany({
        where: {
            userId: ctx.session.userId
        }
    }))
});