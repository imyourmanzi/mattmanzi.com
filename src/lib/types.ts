/**
 * Data needed to define a section of the website, like those seen in the nav bar.
 */
export type Section = {
  /**
   * Display name of the section
   */
  title: string;
  /**
   * CSS class specifying which icon to use on the home page link
   */
  iconClass: string;
  /**
   * Destination base URI to reach the section
   */
  destination: string;
};

/**
 * Data needed to display a social link at the bottom of the site layout.
 */
export type SocialLink = {
  /**
   * CSS class specifying which icon to use when displaying the link
   */
  iconClass: string;
  /**
   * Full URL where the link directs to
   */
  url: string;
};
