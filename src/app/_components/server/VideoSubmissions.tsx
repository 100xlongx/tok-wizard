/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ne5nzgu0GXa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
//  import Link from "next/link"
//  import { currentUser } from '@clerk/nextjs';
//  import { Button } from "./shadcn/ui/button";
//  import LogoutButton from "./LogoutButton";
//  import { SVGProps } from "react";
 // import { Button } from "./shadcn/ui/button";
 import { api } from "@tok-wizard/trpc/server";
 
 export default async function VideoSubmissions() {
  const submissions = await api.videoSubmission.grabUserVideoSubmissions.query();

   return (
       <div>
        <h1>Current Submissions</h1>
        {submissions.map((submission) => (
          <div key={submission.id}>
            <h2>title: {submission.title}</h2>
            <p>content: {submission.content}</p>
          </div>
        ))}
       </div>
   )
 }
 