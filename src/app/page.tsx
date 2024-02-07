import { Button } from "./_components/shadcn/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {/* <UserButton afterSignOutUrl="/" /> */}

        <h1> Welcome to this app</h1>
        <Link href="/dashboard" passHref>
            <Button>Visit Dashboard</Button>
        </Link>
        {/* <Button>Visit Dashboard</Button> */}
        {/* <Front/> */}
      </div>
    </div>
  )
}