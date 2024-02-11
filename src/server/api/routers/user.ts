import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@tok-wizard/server/api/trpc";
import { TRPCError } from "@trpc/server";


export const userRouter = createTRPCRouter({
    test: protectedProcedure.query(async ({ ctx }) => {
        const hello = "Hello, world!";

        return hello;
    }),
    getUser: publicProcedure
    .input(z.object({
        clerkId: z.string()
    }))
    .output(z.object({
        id: z.string(),
        name: z.string().nullable()
    }))
    .query(async ({ ctx, input }) => {
        const clerkId = input.clerkId;

        // const user = await ctx.db.user.findUnique({
        //     where: {
        //         clerkId: clerkId
        //     }
        // });

        const user = {
            id: '1',
            name: "matt wise"
        };
        
        if (!user) {
            throw new TRPCError({
                code: "NOT_FOUND",
                message: "User not found"
            })
        }

        return {
            id: user.id,
            name: user.name,
        };
    })
});