import type { NavbarOptions } from "@vuepress/theme-default";
import { VERSION } from "../meta.js";

export const navbarEn: NavbarOptions = [
  {
    text: "Guide",
    children: [
      "/en/guide/introduction.md",
      "/en/guide/getting-started.md",
      "/en/guide/configuration.md",
      "/en/guide/page.md",
      "/en/guide/markdown.md",
      "/en/guide/assets.md",
      "/en/guide/i18n.md",
      "/en/guide/deployment.md",
      "/en/guide/theme.md",
      "/en/guide/plugin.md",
      "/en/guide/bundler.md",
      "/en/guide/migration.md",
      "/en/guide/troubleshooting.md",
    ],
  },
  {
    text: "Reference",
    children: [
      {
        text: "Core",
        children: [
          {
            text: "CLI",
            link: "/reference/cli.html",
          },
          "/en/reference/config.md",
          "/en/reference/frontmatter.md",
          "/en/reference/components.md",
          "/en/reference/plugin-api.md",
          "/en/reference/theme-api.md",
          "/en/reference/client-api.md",
          "/en/reference/node-api.md",
        ],
      },
      {
        text: "Bundlers",
        children: [
          "/en/eference/bundler/vite.md",
          "/en/eference/bundler/webpack.md",
        ],
      },
      {
        text: "Ecosystem",
        children: [
          {
            text: "Default Theme",
            link: "https://ecosystem.vuejs.press/themes/default/",
          },
          {
            text: "Plugins",
            link: "https://ecosystem.vuejs.press/plugins/",
          },
        ],
      },
    ],
  },

  {
    text: "Learn More",
    children: [
      {
        text: "Advanced",
        children: [
          "/en/advanced/architecture.md",
          "/en/advanced/plugin.md",
          "/en/advanced/theme.md",
          {
            text: "Cookbook",
            link: "/advanced/cookbook/",
          },
        ],
      },
      {
        text: "Resources",
        children: [
          {
            text: "Ecosystem",
            link: "https://ecosystem.vuejs.press/",
          },
          {
            text: "MarketPlace",
            link: "https://marketplace.vuejs.press",
          },
          {
            text: "Contributing Guide",
            link: "https://github.com/vuepress/core/blob/main/CONTRIBUTING.md",
          },
        ],
      },
    ],
  },
  // {
  //   text: `v${VERSION}`,
  //   children: [
  //     {
  //       text: "Changelog",
  //       link: "https://github.com/vuepress/core/blob/main/CHANGELOG.md",
  //     },
  //     {
  //       text: "v1.x",
  //       link: "https://v1.vuepress.vuejs.org",
  //     },
  //     {
  //       text: "v0.x",
  //       link: "https://v0.vuepress.vuejs.org",
  //     },
  //   ],
  // },
  // TODO: remove the type assertion
] as NavbarOptions;
