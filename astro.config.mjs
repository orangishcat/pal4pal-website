// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const videoGroup = (program) => ({
  label: program,
  collapsed: true,
  items: [
    {
      label: "Session videos",
      collapsed: false,
      items: [
        {
          autogenerate: {
            directory: `resources/${program}/Session videos`,
          },
        },
      ],
    },
  ],
});

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },

  integrations: [
    starlight({
      title: "Pal4Pal Education",
      logo: {
        src: "./src/assets/logo.avif",
        alt: "Pal4Pal Education",
        replacesTitle: true,
      },
      customCss: ["./src/styles/resources.css", "katex/dist/katex.min.css"],
      tableOfContents: false,
    }),
    mdx(),
  ],
});
