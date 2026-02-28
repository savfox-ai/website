import { defineConfig } from '@rspress/core';
import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';

const siteUrl = 'https://savfox.ai/';

export default defineConfig({
  plugins: [
    pluginOpenGraph({
      title: 'Savfox - AI-Powered Coding Agent for the Terminal',
      type: 'website',
      url: siteUrl,
      image: 'https://savfox.ai/images/logos/savfox.svg',
      description:
        'Savfox - AI-powered coding agent with chat bridges, gateway server, and multi-platform support',
    }),
  ],
  root: 'docs',
  title: 'Savfox',
  lang: 'en',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Savfox - AI-Powered Coding Agent',
      description:
        'Savfox - AI-powered coding agent with chat bridges, gateway server, and multi-platform support',
      editLink: {
        docRepoBaseUrl:
          'https://github.com/savfox-ai/savfox/tree/main/website/docs',
        text: 'Edit this page on GitHub',
      },
      outlineTitle: 'On this page',
      outline: true,
      lastUpdated: true,
      lastUpdatedText: 'Last Updated',
      prevPageText: 'Previous Page',
      nextPageText: 'Next Page',
      searchPlaceholderText: 'Search Docs',
      searchNoResultsText: 'No results found',
      searchSuggestedQueryText: 'Try searching for',
    },
    {
      lang: 'zh-hans',
      label: '简体中文',
      title: 'Savfox - AI 驱动的终端编程助手',
      description:
        'Savfox - AI 驱动的终端编程助手，支持聊天桥接、网关服务器和多平台',
      editLink: {
        docRepoBaseUrl:
          'https://github.com/savfox-ai/savfox/tree/main/website/docs',
        text: '在 GitHub 上编辑此页',
      },
      outlineTitle: '在本页上',
      outline: true,
      lastUpdated: true,
      lastUpdatedText: '最后更新',
      prevPageText: '上一页',
      nextPageText: '下一页',
      searchPlaceholderText: '搜索文档',
      searchNoResultsText: '未找到结果',
      searchSuggestedQueryText: '尝试搜索',
    },
  ],
  icon: '/images/icons/savfox.png',
  logo: {
    light: '/images/logos/savfox.svg',
    dark: '/images/logos/savfox.svg',
  },
  themeConfig: {
    hideNavbar: 'auto',
    enableContentAnimation: true,
    enableScrollToTop: true,
    overview: {
      filterNameText: 'Filter',
      filterPlaceholderText: 'Enter keyword',
      filterNoResultText: 'No matching API found',
    },
    footer: {
      message: 'Apache 2.0 Licensed | Copyright © 2024-present Savfox Team',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/savfox-ai/savfox',
      },
    ],
  },
  llms: true,
  markdown: {
    mermaid: true,
  },
});
