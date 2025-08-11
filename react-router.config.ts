import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  // Only use basename for production builds (GitHub Pages)
  basename: process.env.NODE_ENV === "production" ? "/birthday-app" : "/",
} satisfies Config;
