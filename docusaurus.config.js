module.exports = {
  title: "leetcode-learning-notes",
  tagline: "",
  url: "https://github.com/memoriaXII/leetcode-learning-notes",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  projectName: "leetcode-learning-notes",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
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
          label: "Leetcode",
        },
        {
          href: "https://github.com/facebook/docusaurus",
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
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
      },
    ],
  ],
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
