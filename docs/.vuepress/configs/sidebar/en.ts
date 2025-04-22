import type { SidebarOptions } from "@vuepress/theme-default";

export const sidebarEn: SidebarOptions = {
  "/en/guide/": [
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
  ],
  "/en/advanced/": [
    {
      text: "Advanced",
      children: [
        "/en/advanced/architecture.md",
        "/en/advanced/plugin.md",
        "/en/advanced/theme.md",
      ],
    },
    {
      text: "Cookbook",
      children: [
        "/en/advanced/cookbook/README.md",
        "/en/advanced/cookbook/usage-of-client-config.md",
        "/en/advanced/cookbook/adding-extra-pages.md",
        "/en/advanced/cookbook/making-a-theme-extendable.md",
        "/en/advanced/cookbook/passing-data-to-client-code.md",
        "/en/advanced/cookbook/markdown-and-vue-sfc.md",
        "/en/advanced/cookbook/resolving-routes.md",
      ],
    },
  ],
  "/en/reference/": [
    {
      text: "Core",
      collapsible: true,
      children: [
        "/en/reference/cli.md",
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
      children: ["/reference/bundler/vite.md", "/reference/bundler/webpack.md"],
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
};
