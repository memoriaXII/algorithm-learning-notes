module.exports = {
  title: "leetcode-learning-notes",
  tagline: "",
  url: "https://github.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  projectName: "leetcode-learning-notes",
  themeConfig: {
    zoom: {
      selector: ".markdown :not(em) > img",
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Learning Notes",
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Algorithm",
        },
        {
          href: "https://github.com/memoriaXII/leetcode-learning-notes",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["protobuf", "toml", "docker", "yaml"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editLocalizedFiles: true,
          sidebarCollapsible: true,
          sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  // plugins: [
  //   [
  //     require.resolve("docusaurus-plugin-image-zoom"),
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     {
  //       hashed: true,
  //       language: ["en", "zh"],
  //     },
  //   ],
  // ],
  i18n: {
    defaultLocale: "en",
    locales: ["zh", "en"],
    localeConfigs: {
      zh: {
        label: "中文",
      },
      en: {
        label: "English",
      },
    },
  },
};
