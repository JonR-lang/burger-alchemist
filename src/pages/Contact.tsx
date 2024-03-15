const Contact = () => {
  return (
    <div className='min-h-screen'>
      <h1>Get In Touch</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit
        illum nisi. Nulla alias hic, repellendus consequatur, enim, nesciunt ?
      </p>

      <div className='flex max-w-4xl mx-auto border p-2 rounded-md'>
        <div className='flex-1 bg-red-300 rounded-md p-4'>
          <h2>Contact information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a
            repellat recusandae necessitatibus porro quod soluta officiis
            maiores aut fugit.
          </p>
          <div className='flex flex-col'>
            <span>phone number</span>
            <span>mail</span>
            <span>location</span>
          </div>
        </div>

        <form className='flex flex-col flex-[2] p-3 gap-6'>
          <div className='grid grid-cols-2 gap-3'>
            <div className='flex flex-col'>
              <label
                htmlFor='name'
                className='text-xs text-zinc-400 font-semibold'>
                Your Name
              </label>
              <input
                className='bg-transparent focus:outline-none border-b border-b-zinc-200 py-1'
                type='text'
                id='name'
              />
            </div>

            <div className='flex flex-col'>
              <label
                htmlFor='email'
                className='text-xs text-zinc-400 font-semibold  hover:text-red-400'>
                Your Email
              </label>
              <input
                className='bg-transparent border-b border-b-zinc-200 py-1 peer'
                type='text'
                id='email'
              />
            </div>

            <div className='col-span-full flex flex-col'>
              <label
                htmlFor='subject'
                className='text-xs text-zinc-400 font-semibold'>
                Your Subject
              </label>
              <input
                className='bg-transparent focus:outline-none border-b border-b-zinc-200 py-1'
                type='text'
                id='subject'
              />
            </div>

            <div className='col-span-full flex flex-col'>
              <label
                htmlFor='message'
                className='text-xs text-zinc-400 font-semibold'>
                Your Message
              </label>
              <textarea
                id='message'
                className='bg-transparent focus:outline-none border-b border-b-zinc-200 py-1'
              />
            </div>
          </div>

          <button
            type='submit'
            className='px-3 py-2 bg-primary-two text-white text-sm rounded self-start'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
