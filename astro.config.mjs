import { defineConfig } from "astro/config";
import NetlifyCMS from 'astro-netlify-cms';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    sitemap(),
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          {
            label: "Blog",
            name: "blog",
            media_folder: "/public/images",
            public_folder: "/images",
            folder: "/src/pages/posts",
            create: true,
            fields: [
              {label: "Title", name: "title", widget: "string"},
              {label: "Publish Date", name: "pubDate", widget: "datetime"},
              {label: "Slug", name: "slug", widget: "string"},
              {label: "Description", name: "description", widget: "string"},
              {label: "Hero Image", name: "hero", widget: "image", required: false},
              {label: "Youtube", name: "youtube", widget: "string", required: false},
              {label: "Body", name: "body", widget: "markdown"},
              {label: "Tags", name: "tags", widget: "list", required: false},
              {label: "Layout", name: "layout", widget: "hidden", default: "../../layouts/BlogPostLayout.astro"}
            ]
          }
        ],
      },
    }),
  ],
  site: "https://astro-theme-creek.netlify.app/",
});
