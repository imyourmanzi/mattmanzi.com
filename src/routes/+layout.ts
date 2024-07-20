import type { Section } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  return {
    sections: [
      {
        title: 'Résumé',
        destination: 'resume'
      }
    ] as Section[],
    socialLinks: [
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
    ]
  };
};
