import type { NavbarOptions } from "@vuepress/theme-default";
// import { VERSION } from "../meta.js";

export const navbarZh: NavbarOptions = [
  {
    text: "指南",
    children: ["/guide/getting-started.md"],
  },
  {
    text: "参考",
    children: [
      
      {
        text: "协议",
        children: [
          "/reference/main.md",
        ],
      },
      {
        text: "测试Page",
        children: [
          "/reference/Page1.md",
          "/reference/Page2.md",
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
  },
  {
    text: "了解更多",
    children: [
      {
        text:"advanced主界面",
        children:[
          "/advanced/main.md",
        ]
      },
      {
        text: "深入",
        children: [
          "/advanced/confidentiality-agreement.md",
          "/advanced/corecommit.md",
          "/advanced/theme.md",
          {
            text: "Cookbook",
            link: "/advanced/cookbook/",
          },
        ],
      },
      {
        text: "其他资源",
        children: [
          {
            text: "生态系统",
            link: "https://ecosystem.vuejs.press/zh/",
          },
          {
            text: "市场",
            link: "https://marketplace.vuejs.press/zh/",
          },
          {
            text: "贡献指南",
            link: "https://github.com/vuepress/core/blob/main/CONTRIBUTING_zh.md",
          },
        ],
      },
    ],
  },
  // {
  //   text: `v${VERSION}`,
  //   children: [
  //     {
  //       text: "更新日志",
  //       link: "https://github.com/vuepress/core/blob/main/CHANGELOG.md",
  //     },
  //     {
  //       text: "v1.x",
  //       link: "https://v1.vuepress.vuejs.org/zh/",
  //     },
  //     {
  //       text: "v0.x",
  //       link: "https://v0.vuepress.vuejs.org/zh/",
  //     },
  //   ],
  // },
  // TODO: remove the type assertion
] as NavbarOptions;
