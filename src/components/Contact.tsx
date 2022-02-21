import {
  faGithub,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faAt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contacts = [
  { title: 'Github', ref: 'https://github.com/ccrsxx', icon: faGithub },
  { title: 'Twitter', ref: 'https://twitter.com/ccrsxx', icon: faTwitter },
  { title: 'WhatsApp', ref: 'https://wa.me/6285925300629', icon: faWhatsapp },
  { title: 'Email', ref: 'mailto:aminrisal@gmail.com', icon: faAt },
  { title: 'Phone', ref: 'tel:+62-859-2530-0629', icon: faMobileAlt }
];

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
