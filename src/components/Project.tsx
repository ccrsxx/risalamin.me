import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { quote, markdown, calculator, clock, python } from '../assets';

const projects = [
  { title: 'Random Quote Machine', href: 'random-quote-machine', img: quote },
  { title: 'Markdown Previewer', href: 'markdown-previewer', img: markdown },
  {
    title: 'TypeScript Calculator',
    href: 'typescript-calculator',
    img: calculator
  },
  { title: '25 + 5 Clock', href: 'clock-timer-reminder', img: clock },
  {
    title: 'Python Web Minigame',
    href: 'https://ccrsxx.herokuapp.com',
    img: python
  }
];

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
