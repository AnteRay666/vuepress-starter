import type { SidebarOptions } from "@vuepress/theme-default";

export const sidebarZh: SidebarOptions = {
  "/guide/": [
    {
      text: "指南",
      children: [
        "/guide/introduction.md",
        "/guide/getting-started.md",
      ],
    },
  ],
  "/advanced/": [
    {
      text:"主界面",
      children:[
        "/advanced/main.md",
      ]
    },
    {
      text: "深入",
      children: [
        "/advanced/confidentiality-agreement.md",
        "/advanced/plugin.md",
  
      ],
    },
    {
      text: "Cookbook",
      children: [
        "/advanced/cookbook/README.md",
        "/advanced/cookbook/usage-of-client-config.md",
      ],
    },
  ],
  "/reference/": [
    {
      text: "核心",
      collapsible: true,
      children: [
        "/reference/main.md",
      ],
    },
    {
      text: "打包工具",
      children: [
        "/reference/bundler/vite.md",
        "/reference/bundler/webpack.md",
      ],
    },
    {
      text: "生态系统",
      children: [
        {
          text: "默认主题",
          link: "https://ecosystem.vuejs.press/zh/themes/default/",
        },
        {
          text: "插件",
          link: "https://ecosystem.vuejs.press/zh/plugins/",
        },
      ],
    },
  ],
};
