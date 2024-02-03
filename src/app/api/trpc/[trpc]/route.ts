import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";

import { env } from "@tok-wizard/env";
import { appRouter } from "@tok-wizard/server/api/root";
import { createTRPCContext } from "@tok-wizard/server/api/trpc";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createContext = async (opts: CreateNextContextOptions) => {
  return createTRPCContext(opts);
};

const handler = (req: CreateNextContextOptions) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };
