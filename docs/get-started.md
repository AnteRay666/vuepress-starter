# Get Started

This is a normal page, which contains VuePress basics.
你好，这里是测试内容，请帮我实现他。

## Pages

You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.

See [routing][] for more details.

## Content

Every markdown file [will be rendered to HTML, then converted to a Vue SFC][content].

VuePress support basic markdown syntax and [some extensions][synatex-extensions], you can also [use Vue features][vue-feature] in it.

## Configuration

VuePress use a `.vuepress/config.js`(or .ts) file as [site configuration][config], you can use it to config your site.

For [client side configuration][client-config], you can create `.vuepress/client.js`(or .ts).

Meanwhile, you can also add configuration per page with [frontmatter][].

## Layouts and customization

Here are common configuration controlling layout of `@vuepress/theme-default`:

- [navbar][]
- [sidebar][]

Check [default theme docs][default-theme] for full reference.

You can [add extra style][style] with `.vuepress/styles/index.scss` file.

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file

# Rule

## 简介

该文件用于规范我们的文档。请确保所有文档符合以下规范。

## 文档规范

```markdown
# 文档标题

## 简介

## 子标题？

内容
```

## 对[HistoryFixed](HistoryFixed.md)的规定

除创建初外，其他修改都必须符合以下规范：
注意 : 每次修改最低以天为单位，如果在同一天内进行多次修改，只需要在第一次修改后添加即可。
注意 : 内容需要精简。

```markdown
- 日期

  内容
```

示例：

```markdown
- 2000-01-01

  我们添加了一个新的功能。具体是实现了整体框架的搭建。
```
