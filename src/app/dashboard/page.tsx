import { api } from "@tok-wizard/trpc/server";
import { Button } from '@components/shadcn/ui/button';

export default async function Page() {
    // const messages = await api.message.getLatest.query();

    const hiddenMessage = await api.message.getHiddenMessage.query();

    console.log(hiddenMessage)

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                {/* Place your components from Shad's UI here */}
                <Button>Click me</Button>
            </div>
        </div>
    );
}
