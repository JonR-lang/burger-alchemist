<div className='grid grid-cols-2 gap-3'>
  <div className='flex flex-col'>
    <label htmlFor='name' className='text-xs text-zinc-400 font-semibold'>
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
    <label htmlFor='subject' className='text-xs text-zinc-400 font-semibold'>
      Your Subject
    </label>
    <input
      className='bg-transparent focus:outline-none border-b border-b-zinc-200 py-1'
      type='text'
      id='subject'
    />
  </div>

  <div className='col-span-full flex flex-col'>
    <label htmlFor='message' className='text-xs text-zinc-400 font-semibold'>
      Your Message
    </label>
    <textarea
      id='message'
      className='bg-transparent focus:outline-none border-b border-b-zinc-200 py-1'
    />
  </div>
</div>;
