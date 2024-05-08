// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bartosz Jabłoński - IT Blog and Travel',
  tagline: 'Personal Website | Programmer, Entrepreneur, Travel Enthusiast | Bartosz Jabłoński - IT Blog and Travel',
  url: 'https://bartas93.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/images/favicon.ico',

  staticDirectories: ['public', 'static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bartas93', // Usually your GitHub org/user name.
  projectName: 'bartas93.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    localeConfigs: {
      'pl': {
        htmlLang: 'pl',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {
        title: `Portfolio`,
        logo: {
          alt: "Bartosz Jablonski Logo",
          src: "images/logo.svg",
          srcDark: "images/logo-white.svg",
          width: 150,
        },
        items: [
          {
            type: 'doc',
            docId: 'projects',
            position: 'left',
            label: 'Projects',
          },
          {
            to: '/blog', label: 'Blog', position: 'left'
          },
           {
            type: 'localeDropdown',
            position: 'right',
           },
          {
            href: 'https://github.com/bartas93/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Go to',
            items: [
              {
                label: 'Portfolio',
                to: '/',
              },
              {
                label: 'Projects',
                to: '/docs/projects',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/jablonski-bartosz93/',
              },
              {
                label: 'Github',
                href: 'https://github.com/bartas93',
              }
            ],
          },
          {
            title: 'Contact me',
            items: [
              {
                label: 'Email',
                href: 'mailto:jablonski.bartosz93@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bartosz Jabłoński`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ini', 'ignore', 'batch', 'powershell', 'java', 'json', 'bash'],
      },
      algolia: {

        appId: 'WZB7V822FZ',
        apiKey: 'b88aa5d591294bdd3ade61968cf16354',
        indexName: 'bartas93',
        contextualSearch: true,
        externalUrlRegex: 'bartas93\\.github\\.io',
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
