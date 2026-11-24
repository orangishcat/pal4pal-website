// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    starlight({
      title: "Pal4Pal Education",
      pagefind: false,
      tableOfContents: false,
      customCss: ["./src/styles/starlight.css"],
      components: {
        PageFrame: "./src/components/starlight/PageFrame.astro",
        PageTitle: "./src/components/starlight/PageTitle.astro",
        ThemeProvider: "./src/components/starlight/ThemeProvider.astro",
      },
      head: [
        {
          tag: "script",
          content:
            'window.MathJax = { tex: { inlineMath: [["\\\\(", "\\\\)"]], displayMath: [["\\\\[", "\\\\]"]] }, svg: { fontCache: "global" } };',
        },
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://cdn.jsdelivr.net/npm/mathjax@4.1.0/tex-svg.js",
          },
        },
      ],
      plugins: [
        starlightBlog({
          prefix: "resources",
          title: "Resources",
          navigation: "none",
          postCount: 12,
          rss: false,
        }),
      ],
    }),
    mdx(),
  ],
});
