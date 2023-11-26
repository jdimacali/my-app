"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "full name must be at least 1 characters.",
  }),
  email: z
    .string()
    .min(3, {
      message: "Username must be at least 2 characters.",
    })
    .email({
      message: "Username must be a valid email.",
    }),
  message: z
    .string()
    .min(10, {
      message: "message must be at least 10 characters.",
    })
    .max(300, {
      message: "message must be under 300 characters.",
    }),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(`${values.username} ${values.email}, ${values.message}`);
  }
  return (
    <section className="h-[55rem] w-full bg-gray-800">
      <div className="flex flex-col items-center text-center justify-center text-white gap-y-20 py-20">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 space-x-1"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className="p-4 mb-6 flex flex-col gap-y-5">
                    <FormLabel className="text-3xl">Contact Us</FormLabel>
                    <FormDescription className="opacity-75 text-lg">
                      Reach out to us and let us know if there is anything we
                      can do for you
                    </FormDescription>
                  </div>
                  <div className="flex flex-col gap-6 max-w-[95vw] min-w-[32vw] ml-1 items-center">
                    <FormControl>
                      <Input
                        className="py-6 text-lg focus:opacity-100 opacity-80 hover:opacity-100 "
                        placeholder="Full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col gap-6 max-w-[95vw] min-w-[32vw] items-center ">
                    <FormControl>
                      <Input
                        className="py-6 text-lg focus:opacity-100 opacity-80 hover:opacity-100 "
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col gap-6 max-w-[95vw] min-w-[32vw] items-center">
                    <FormControl>
                      <Textarea
                        className="resize-none text-lg pb-10 focus:opacity-100 hover:opacity-100 opacity-80"
                        placeholder="Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription className="opacity-30 text-sm">
                      This form is protected by reCAPTCHA and the Google Privacy
                      Policy and Terms of Service apply.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-amber-700 p-6 rounded-xl max-sm:w-[90vw] transition-all hover:bg-amber-800 hover:opacity-90 mt-8 shadow-2xl"
            >
              <h3 className="text-lg m-3 drop-shadow-2xl">Submit</h3>
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
export default Page;