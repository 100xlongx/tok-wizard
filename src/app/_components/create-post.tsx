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
import { useUser } from "@clerk/nextjs";
import { api } from "@tok-wizard/trpc/react";

 
const formSchema = z.object({
  title: z.string().min(2).max(50),
  content: z.string().min(2).max(1000),
})

type FormType = z.infer<typeof formSchema>;

export function CreatePostWizard() {
  const { toast } = useToast();
  // const { user } = useUser();

  const { data: messages, refetch: refetchAllMessages } = api.message.getAll.useQuery();

  const { mutate, isLoading: isCreateMessageLoading } = api.message.create.useMutation({
    onSettled: () => {
      form.reset();
    },
    onSuccess: post => {
      toast({
        title: `Post ${post.title} created`,
        description: "Your post has been created",
        duration: 5000
      })

      refetchAllMessages().catch(console.error);
    },
    onError: error => {
      toast({
        title: "Error creating post",
        description: error.message,
        duration: 5000
      })
    }
  });

  const createPost = (post: FormType) => mutate({ title: post.title, content: post.content, authorId: '1'});
 
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: ""
    },
  })

  const PostView = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(createPost)} className="space-y-8">
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
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreateMessageLoading}>Submit</Button>
      </form>
    </Form>
  )

  return (
    <div>
      <PostView />
      {messages?.map?.((message) => (
        <div key={message.id}>
            <h1>{message.title}</h1>
            <p>{message.content}</p>
        </div>
      ))}
    </div>
  )
}
