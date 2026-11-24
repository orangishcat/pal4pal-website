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
      sidebar: [
        { label: "Overview", link: "/resources/" },
        ...[
          "2024-25 Math Carnival",
          "2025-26 AIME Workshop",
          "2025-26 Math Carnival",
        ].map(videoGroup),
        {
          label: "2025–26 Misc Resources",
          collapsed: false,
          items: [
            {
              label: "Overview",
              link: "/resources/2025-26",
            },
            {
              label: "Slides",
              collapsed: true,
              items: [
                { autogenerate: { directory: "resources/2025-26/slides" } },
              ],
            },
            {
              label: "Problems",
              collapsed: true,
              items: [1, 2, 3, 4, 5].map((n) => ({
                label: `Team ${n}`,
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: `resources/2025-26/problem/team-${n}`,
                    },
                  },
                ],
              })),
            },
          ],
        },
        videoGroup("2026 Summer Precalculus"),
      ],
    }),
    mdx(),
  ],
});
