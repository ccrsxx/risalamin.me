import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { projectsData as projects } from '../common';

export function Project() {
  return (
    <section id='project' className='project'>
      <h2>These are some of my projects:</h2>
      <div className='project-wrapper'>
        {projects.map(({ title, href, img }, key) => (
          <a
            href={href}
            className='project-card'
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
