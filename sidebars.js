/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Never 7",
      items: [
        "never-7/how-to-play-never-7",
        "never-7/never-7-media",
        "never-7/never-7-flowchart",
        "never-7/kurumi-cure",
      ],
    },
    {
      type: "category",
      label: "Ever 17",
      items: [
        "ever-17/how-to-play-ever-17",
        "ever-17/ever-17-media",
        "ever-17/ever-17-flowchart",
      ],
    },
    {
      type: "category",
      label: "Remember 11",
      items: [
        "remember-11/how-to-play-remember-11",
        "remember-11/remember-11-media",
        "remember-11/remember-11-flowchart",
        "remember-11/remember-11-save",
      ],
    },
    {
      type: "category",
      label: "12Riven",
      items: [
        "twelve-riven/how-to-play-12-riven",
        "twelve-riven/twelve-riven-media",
        "twelve-riven/twelve-riven-playtrough-video",
      ],
    },
  ],
};

module.exports = sidebars;
