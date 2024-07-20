import type { Section, SocialLink } from '$lib/types';
import type { LayoutLoad } from './$types';

const sections: Section[] = [
  {
    title: 'Résumé',
    destination: 'resume'
  },
  {
    title: 'Projects',
    destination: 'projects'
  }
];

const socialLinks: SocialLink[] = [
  {
    imgResource: 'social_git.svg',
    imgAlt: 'Link to GitHub profile',
    url: 'https://github.com/imyourmanzi'
  },
  {
    imgResource: 'social_in.png',
    imgAlt: 'Link to LinkedIn profile',
    url: 'https://www.linkedin.com/in/mattrmanzi/'
  }
];

export const load: LayoutLoad = () => {
  return { sections, socialLinks };
};
