import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSubmitContactForm } from "@/hooks/queryhooks/useSubmitContactForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please input an email",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const { mutate: submitForm, isPending } = useSubmitContactForm();
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    submitForm(values, {
      onSuccess: (data) => {
        toast({
          description: data.message,
          variant: "yellowBorder",
        });
      },
      onError: (error) => {
        console.log(error.message);
        toast({
          description: error.message,
          variant: "destructive",
        });
      },
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col flex-[1.8] p-3 gap-6'>
        <div className='grid grid-cols-2 gap-3'>
          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem className='col-span-full md:col-span-1 flex flex-col'>
                <FormLabel className='md:text-xs text-zinc-400 font-semibold'>
                  Your Name
                </FormLabel>
                <FormControl>
                  <input
                    className='bg-transparent focus:outline-none border-b border-b-zinc-200 p-1'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='font-normal text-xs' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='col-span-full md:col-span-1 flex flex-col'>
                <FormLabel className='md:text-xs text-zinc-400 font-semibold'>
                  Your Email
                </FormLabel>
                <FormControl>
                  <input
                    className='bg-transparent focus:outline-none border-b border-b-zinc-200 p-1'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='font-normal text-xs' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='subject'
            render={({ field }) => (
              <FormItem className='col-span-full flex flex-col'>
                <FormLabel className='md:text-xs text-zinc-400 font-semibold'>
                  Subject
                </FormLabel>
                <FormControl>
                  <input
                    className='bg-transparent focus:outline-none border-b border-b-zinc-200 p-1'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='font-normal text-xs' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='col-span-full flex flex-col'>
                <FormLabel className='md:text-xs text-zinc-400 font-semibold'>
                  Message
                </FormLabel>
                <FormControl>
                  <textarea
                    id='message'
                    className='bg-transparent focus:outline-none border-b border-b-zinc-200 p-1'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='font-normal text-xs' />
              </FormItem>
            )}
          />
        </div>
        <button
          type='submit'
          disabled={isPending}
          className='px-4 py-2 bg-accent-one text-white  md:text-sm rounded-md md:self-start self-stretch'>
          Send Message
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
