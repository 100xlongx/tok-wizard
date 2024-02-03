
import { SignIn, UserButton, useUser, auth, currentUser, useAuth } from "@clerk/nextjs";
import { api } from "@tok-wizard/trpc/server";

export default async function Home() {
  // const {session} = useSession();
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  // const { userId } = auth();
  // const { isLoaded, userId, sessionId, getToken } = useAuth();

  // console.log(sessionId);

  // const user = await currentUser()

  // console.log(userId);
  // console.log(user);
  // const { user } = useUser();

  

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <UserButton afterSignOutUrl="/" />
        {/* <SignIn /> */}
        <UserButton />
      </div>
    </div>
  )
}