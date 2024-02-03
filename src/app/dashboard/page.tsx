import { api } from "@tok-wizard/trpc/server";

export default async function Dashboard() {
    const posts = await api.message.getAll.query();

    console.log(posts);


    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                {/* Place your components from Shad's UI here */}
                Welcome to The Dashboard
            </div>
        </div>
    );
}
