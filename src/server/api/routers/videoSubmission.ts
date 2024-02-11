import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@tok-wizard/server/api/trpc";
// import { TRPCError } from "@trpc/server";


export const videoSubmissionRouter = createTRPCRouter({
    createVideoSubmission: publicProcedure
    .input(z.object({
        title: z.string(),
        content: z.string() 
    }))
    .mutation(async ({ ctx, input }) => {
        console.log('hello!!!!');
        console.log(ctx);

        return ctx.db.userVideoSubmission.create({
            data: {
                content: input.content,
                title: input.title
            }
        });
    }) 
});