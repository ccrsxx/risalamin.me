import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { projectsData as projects } from '../common';

export function Project() {
  return (
    <section
      id='project'
      className='flex min-h-screen flex-col items-center gap-10 bg-main-blue px-5 py-28 text-center'
    >
      <h2 className='text-2xl text-main-white underline underline-offset-4'>
        These are some of my projects:
      </h2>
      <div className='grid-cols- grid w-screen max-w-7xl grid-cols-auto-fit gap-5 children:rounded'>
        {projects.map(({ title, href, img }, key) => (
          <a
            className='bg-main-gray'
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            key={key}
          >
            <img src={img} alt='' className='project-card-img' />
            <div className='project-card-title-container'>
              <p className='project-card-title'>
                <span className='code'>&lt;</span>
                {title}
                <span className='code'>/&gt;</span>
              </p>
            </div>
          </a>
        ))}
      </div>
      <a
        href='https://github.com/ccrsxx'
        className='show-more-projects'
        target='_blank'
        rel='noopener noreferrer'
      >
        Show more{' '}
        <FontAwesomeIcon className='more-icon-projects' icon={faChevronRight} />
      </a>
    </section>
  );
}
