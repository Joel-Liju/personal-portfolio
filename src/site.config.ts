// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Joel Jacob',
  role: 'Software engineer',
  email: 'joelliju10@gmail.com',
  description:
    'Portfolio of Joel Jacob — backend and full-stack software engineering, with an emphasis on reliability, clarity, and the details most people skip.',
  status: 'Currently seeking new opportunities — open to full-time, contract, and freelance work.',
  social: [
    { label: 'GitHub', href: 'https://github.com/joel-liju' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joel-liju-jacob/' }
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Hobbies', href: '/hobbies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
