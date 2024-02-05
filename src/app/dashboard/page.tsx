import { CreatePostWizard } from '@components/create-post';

export default async function Page() {
    // const messages = await api.message.getAll.query();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <CreatePostWizard/>
                {/* <Counter /> */}

            </div>
        </div>
    );
}
