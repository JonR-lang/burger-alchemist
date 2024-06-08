import { useState } from "react";
import { useSubscribeToNewsletter } from "@/hooks/queryhooks/useSubscribeToNewsletter";
import { useToast } from "./ui/use-toast";

const NewsletterFooter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { mutate: subscribe, isPending } = useSubscribeToNewsletter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subscribe(email, {
      onSuccess: (data) => {
        toast({
          description: data.message,
          variant: "yellowBorder",
        });
      },
      onError: (error) => {
        toast({
          description: error.message,
          variant: "destructive",
        });
      },
      onSettled: () => {
        setEmail("");
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-md flex flex-col gap-2'>
      <label
        htmlFor='newsletter'
        className='text-center md:text-left uppercase'>
        Newsletter
      </label>
      <div className='flex gap-2'>
        <input
          type='email'
          id='newsletter'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=' w-full outline outline-1 outline-slate-300 px-2 rounded-md focus:outline-1 shadow-sm  focus:outline-primary-two'
          placeholder='Enter your email'
        />
        <button
          type='submit'
          className='bg-accent-one text-white px-4 py-2 rounded-md'
          disabled={isPending}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewsletterFooter;
