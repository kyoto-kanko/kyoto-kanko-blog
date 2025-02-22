import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja-JP',
  title: "KyotoKankoTechBlog",
  description: "KyotoKankoTechBlog",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    footer: {
      message: "© 2024 KyotoKankoTechBlog. All rights reserved.",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Network",
        collapsed: false,
        items: [
          {
            text: "DNSが名前解決する仕組み",
            link: "network/1",
          },
          {
            text: "購入したドメインをIPアドレスに紐付ける",
            link: "network/2",
          }
        ],
      },
      {
        text: "Security",
        collapsed: false,
        items: [
          {
            text: "サブドメインテイクオーバーにご注意を",
            link: "security/1",
          }
        ],
      },
      {
        text: "Frontend",
        collapsed: false,
        items: [
          {
            text: "Tailwind CSS をアップデートしたらビルドエラーが発生した",
            link: "frontend/1",
          },
        ],
      },
      {
        text: "Backend",
        collapsed: false,
        items: [
          {
            text: "",
            link: "backend/1",
          },
        ],
      },
      {
        text: "DomainDrivenDesign",
        collapsed: false,
        items: [
          {
            text: "",
            link: "domain-driven-design/1",
          },
        ],
      },
      {
        text: "Other",
        collapsed: false,
        items: [
          {
            text: "",
            link: "other/1",
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