import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN",
      title: "Core官方文档",
      description: "这是我的Core网站，基于Vuepress搭建",
    },
    "/en": {
      lang: "en-US",
      title: "Core Official Documentation",
      description: "This is a website for my Core, builded base on Vuepress",
    },
  },

  theme: defaultTheme({
    logo: "/images/Ante.png",
    navbar: ["/", "get-started"],
  }),
  
  bundler: viteBundler(),
});
