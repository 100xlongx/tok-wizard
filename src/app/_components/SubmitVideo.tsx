"use client";

import { Button } from "./shadcn/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/shadcn/ui/form";
import { Input } from "@components/shadcn/ui/input"
import { Textarea } from "@components/shadcn/ui/textarea"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useToast } from "@components/shadcn/ui/use-toast"
import { api } from "@tok-wizard/trpc/react";
import { router } from "@trpc/server";
import { useRouter } from "next/navigation";

 
const formSchema = z.object({
  title: z.string().min(2).max(50),
  content: z.string().min(2).max(1000),
})

type FormType = z.infer<typeof formSchema>;

export function SubmitVideoForm() {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate, isLoading: isSubmitVideoLoading } = api.videoSubmission.createVideoSubmission.useMutation({
    onSettled: () => {
      form.reset();
    },
    onSuccess: video => {
      toast({
        title: `Post ${video.title} created`,
        description: "Your post has been created",
        duration: 5000
      })

      router.refresh();

    //   refetchAllMessages().catch(console.error);
    },
    onError: error => {
      toast({
        title: "Error creating post",
        description: error.message,
        duration: 5000
      })
    }
  });

  const createVideoSubmission = (post: FormType) => mutate({ title: post.title, content: post.content });
 
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: ""
    },
  })

  const PostView = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(createVideoSubmission)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormDescription>
                Title of your post
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Content of the post"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the text that will be converted to audio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitVideoLoading}>Submit</Button>
      </form>
    </Form>
  )

  return (
    <div>
      <PostView />
      {/* {messages?.map?.((message) => (
        <div key={message.id}>
            <h1>{message.title}</h1>
            <p>{message.content}</p>
        </div>
      ))} */}
    </div>
  )
}
