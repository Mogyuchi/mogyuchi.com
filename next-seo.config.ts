import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | Mogyuchi",
  defaultTitle: "Mogyuchi",
  description: "Official website of Mogyuchi.",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mogyuchi.vercel.app/",
    title: "もぎゅち",
    description: "Official website of Mogyuchi.",
    site_name: "Mogyuchi",
    images: [{ url: "https://mogyuchi.com/assets/ogp.jpg" }],
  },
  twitter: {
    handle: "@Mogyuchi",
    site: "@Mogyuchi",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "any",
    },
    {
      rel: "icon",
      href: "/icon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      href: "/icons/apple-touch-icon.png",
    },
  ],
};

export default SEO;
