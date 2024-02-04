"use client"

import { api } from "@tok-wizard/trpc/react";

export function Front() {
    const { data } = api.message.getAll.useQuery();
    // const { user } = useUser();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-4xl font-bold">Welcome to T3</h1>
                <p className="text-lg">A fullstack TypeScript framework</p>
                {data?.map?.((item, index) => (
                    <div key={index}>{item.content}</div>
                ))}
            </div>
        </div>
    )
}