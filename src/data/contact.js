import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/vincentchen743',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/vincent.chen743',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/vincntchen/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/vincentchen743',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:vincent.chen743@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
