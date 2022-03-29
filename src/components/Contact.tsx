import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contactsData as contacts } from '../common';

export function Contact() {
  return (
    <section id='contact' className='contact'>
      <h2>Let&apos;s work together...</h2>
      <p>Communicate with here!</p>
      <div className='contact-links'>
        {contacts.map(({ title, ref, icon }) => (
          <a
            className='contact-details'
            href={ref}
            target='_blank'
            rel='noopener noreferrer'
            key={title}
          >
            <FontAwesomeIcon className='contact-icon' icon={icon} /> {title}
          </a>
        ))}
      </div>
    </section>
  );
}
