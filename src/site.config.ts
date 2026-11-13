// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Joel Liju Jacob',
  role: 'Software engineer',
  email: 'hello@joellijujacob.com',
  description:
    'Portfolio of Joel Liju Jacob — backend and full-stack software engineering, with an emphasis on reliability, clarity, and the details most people skip.',
  status: 'Currently seeking new opportunities — open to full-time, contract, and freelance work.',
  social: [
    { label: 'WhatsApp', href: 'https://wa.me/joellijujacob?text=Hi%20Joel,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20get%20in%20touch.' },
    { label: 'GitHub', href: 'https://github.com/joel-liju' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joel-liju-jacob/' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Hobbies', href: '/hobbies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
