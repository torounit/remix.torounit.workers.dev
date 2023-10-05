/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare module "__STATIC_CONTENT_MANIFEST" {
  const manifest: string;
  export default manifest;
}

interface Env {
  WORDPRESS_URL: string;
  POSTS: KVNamespace;
}

