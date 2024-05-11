// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this

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
  plugins:[
    'plugin-image-zoom',
      async function myPlugin(context, options) {
    return {
      name: "docusaurus-tailwindcss",
      configurePostCss(postcssOptions) {
        // Appends TailwindCSS and AutoPrefixer.
        postcssOptions.plugins.push(require("postcss-import"));
        postcssOptions.plugins.push(require("tailwindcss"));
        postcssOptions.plugins.push(require("autoprefixer"));
        return postcssOptions;
      },
    };
  },],
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
        logo: {
          alt: "Bartosz Jablonski Logo",
          src: "images/logo.svg",
          srcDark: "images/logo-white.svg",
          width: 150,
        },
        items: [
          {
            to: '/about', label: 'About', position: 'left'
          },
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
                label: 'Home',
                to: '/',
              },
              {
                label: 'About',
                to: '/about',
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
            title: 'Projects',
            items: [
              {
                label: 'T8t - discord bot',
                to: '/docs/category/t8t---discord-tournaments',
              },
              {
                label: 'Camply',
                to: '/docs/camply',
              },
            ],
          },
          {
            title: 'External',
            items: [
              {
                label: 'Contact via Email',
                href: 'mailto:jablonski.bartosz93@gmail.com',
              },
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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bartosz Jabłoński`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ini', 'ignore', 'batch', 'powershell', 'java', 'json', 'bash'],
      },
      algolia: {

        appId: 'M3DHZC040W',
        apiKey: 'ae17c845b82bc6d72f3b63600663865d',
        indexName: 'bartas93io',
        contextualSearch: true,
        externalUrlRegex: 'bartas93\\.github\\.io',
        searchParameters: {},
        searchPagePath: 'search',
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          background: 'rgba(0,0,0,0.4)',
          scrollOffset: 0,
        },
      },
    }),
};

module.exports = config;
