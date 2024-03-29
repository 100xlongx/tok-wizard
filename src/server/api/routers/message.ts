import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@tok-wizard/server/api/trpc";

export const messageRouter = createTRPCRouter({
    create: publicProcedure
        .input(z.object({ content: z.string().max(255), authorId: z.string(), title: z.string().max(30) }))
        .output(z.object({ title: z.string(), content: z.string(), authorId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.message.create({
                data: {
                    title: input.title,
                    content: input.content,
                    authorId: input.authorId,
                },
            });
    }),

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.db.message.findMany();
    }),

    getLatest: publicProcedure.query(({ ctx }) => {
        return ctx.db.message.findFirst({
            orderBy: { createdAt: "desc" },
        });
    }),
    getHiddenMessage: protectedProcedure.query(({ ctx }) => {
        return { hello: "world" };
    })
});
