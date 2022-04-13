import { contacts } from '../common';

export function Contact() {
  return (
    <section
      id='contact'
      className='flex min-h-[90vh] flex-col items-center justify-center gap-10 bg-main-gray text-center'
    >
      <div className='grid gap-3'>
        <h2 className='font-raleway text-4xl sm:text-5xl'>
          Let&apos;s work together...
        </h2>
        <p className='text-xl italic'>Communicate with here!</p>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        {contacts.map(({ title, ref, Icon }) => (
          <a
            className='flex items-center gap-2 p-3 text-xl transition-transform
                       duration-500 ease-out hover:translate-y-4 hover:text-white'
            href={ref}
            target='_blank'
            rel='noopener noreferrer'
            key={title}
          >
            <Icon className='inline-block text-xl' /> {title}
          </a>
        ))}
      </div>
    </section>
  );
}
