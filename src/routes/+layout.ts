import type { Section, SocialLink } from '$lib/types';
import type { LayoutLoad } from './$types';

/**
 * Sections of the website.
 */
const sections: Section[] = [
  {
    title: 'Résumé',
    iconClass: 'fa-solid fa-file-lines',
    destination: 'resume'
  },
  {
    title: 'Projects',
    iconClass: 'fa-solid fa-code',
    destination: 'projects'
  }
];

/**
 * Links in the footer that send people to social media and the like.
 */
const socialLinks: SocialLink[] = [
  {
    iconClass: 'fa-brands fa-square-github',
    url: 'https://github.com/imyourmanzi'
  },
  {
    iconClass: 'fa-brands fa-linkedin',
    url: 'https://www.linkedin.com/in/mattrmanzi/'
  }
];

export const load: LayoutLoad = () => {
  return { sections, socialLinks };
};
