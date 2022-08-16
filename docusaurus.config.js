// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Infinity Archive",
  tagline: "The resources of infinity",
  url: "https://infinity-archive.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "Infinity Archive",
        items: [
          {
            to: "docs/never-7/how-to-play-never-7",
            position: "left",
            activeBaseRegex: "docs/never-7",
            label: "Never 7",
          },
          {
            to: "docs/ever-17/how-to-play-ever-17",
            position: "left",
            activeBaseRegex: "docs/ever-17",
            label: "Ever 17",
          },
          {
            to: "docs/remember-11/how-to-play-remember-11",
            position: "left",
            activeBaseRegex: "docs/remember-11",
            label: "Remember 11",
          },
          {
            to: "docs/twelve-riven/how-to-play-12-riven",
            position: "left",
            activeBaseRegex: "docs/twelve-riven",
            label: "12Riven",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © Infinity Archive`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
