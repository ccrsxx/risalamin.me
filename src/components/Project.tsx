import { FaChevronRight } from 'react-icons/fa';
import { projects } from '../common';

export function Project() {
  return (
    <section
      id='project'
      className='flex min-h-screen flex-col items-center justify-center gap-10 bg-main-blue px-5 py-24 sm:py-28'
    >
      <h2 className='text-xl font-bold underline underline-offset-4 sm:text-2xl'>
        These are some of my projects:
      </h2>
      <div className='grid w-full max-w-7xl grid-cols-auto-xs gap-10 xs:grid-cols-auto-fit'>
        {projects.map(({ title, href, img }, key) => (
          <a
            className='group rounded bg-main-gray shadow-xl transition-shadow duration-300 ease-out hover:shadow-2xl'
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            key={key}
          >
            <div className='h-52 xs:h-60 sm:h-80'>
              <img
                src={img}
                alt={title}
                className='h-full w-full rounded-t object-cover'
              />
            </div>
            <div className='flex h-14 items-center justify-center text-sm xs:text-lg sm:h-16'>
              <p>
                <span
                  className='mx-2 font-bold text-transparent transition-colors
                             duration-300 ease-out group-hover:text-red-500'
                >
                  &lt;
                </span>
                {title}
                <span
                  className='mx-2 font-bold text-transparent transition-colors 
                             duration-300 ease-out group-hover:text-red-500'
                >
                  /&gt;
                </span>
              </p>
            </div>
          </a>
        ))}
      </div>
      <a
        className='group rounded bg-main-gray px-6 py-3 text-lg transition-colors
                   duration-300 ease-out hover:bg-main-red'
        href='https://github.com/ccrsxx'
        target='_blank'
        rel='noopener noreferrer'
      >
        Show more{' '}
        <FaChevronRight
          className='ml-1 inline-block text-xl transition-transform
                     duration-500 ease-out group-hover:translate-x-3'
        />
      </a>
    </section>
  );
}
