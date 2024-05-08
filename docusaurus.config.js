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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/github0null/eide-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/github0null/eide-docs/tree/master',
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
        title: `Bartosz Jabłoński`,
        logo: {
          alt: "Bartosz Jablonski Logo",
          src: "images/logo.svg",
          srcDark: "images/logo-white.svg",
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog', label: 'Blog', position: 'left'
          },
          {
            href: 'https://github.com/github0null/eide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'EIDE Forum',
                href: 'https://discuss.em-ide.com',
              },
              {
                label: 'Github Issues',
                href: 'https://github.com/github0null/eide/issues',
              },
              {
                label: 'Github Discussions',
                href: 'https://github.com/github0null/eide/discussions',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Source Code',
                href: 'https://github.com/github0null/eide',
              },
              {
                label: 'SourceForge',
                href: 'https://em-ide.sourceforge.io/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} bartas93.github.io`,
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
