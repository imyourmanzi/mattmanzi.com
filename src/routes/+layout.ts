import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import type { Section, SocialLink } from '$lib/types';
import type { LayoutLoad } from './$types';

/**
 * Languages supported for code highlighting (see `CodeBlock` component).
 */
const supportedLanguages = [
  ['css', css],
  ['javascript', javascript]
] as const;
export type SupportedLanguages = (typeof supportedLanguages)[number][0];

// register all supported languages
supportedLanguages.forEach(([supportedLanguage, languageFn]) => {
  hljs.registerLanguage(supportedLanguage, languageFn);
});

/**
 * Sections of the website.
 */
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

/**
 * Links in the footer that send people to social media and the like.
 */
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
