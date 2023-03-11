import type { Section } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  return {
    sections: [
      {
        title: 'Photography',
        destination: 'photos'
      },
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
        imgResource: 'social_ig.png',
        imgAlt: 'Link to Instagram profile',
        url: 'https://www.instagram.com/imyourmanzi/'
      },
      {
        imgResource: 'social_fb.svg',
        imgAlt: 'Link to Facebook profile',
        url: 'https://www.facebook.com/imyourmanzi'
      },
      {
        imgResource: 'social_tw.svg',
        imgAlt: 'Link to Twitter profile',
        url: 'https://twitter.com/imyourmanzi'
      },
      {
        imgResource: 'social_in.png',
        imgAlt: 'Link to LinkedIn profile',
        url: 'https://www.linkedin.com/in/mattrmanzi/'
      }
    ]
  };
};
