import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KyotoKanko TechBlog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Examples",
        items: [
          {
            text: "Tailwind CSS をアップデートしたらビルドエラーが発生した",
            link: "/1",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/kyoto-kanko" },
      { icon: "x", link: "https://x.com/kyoto_kanko_jp" },
    ],
  },
});
