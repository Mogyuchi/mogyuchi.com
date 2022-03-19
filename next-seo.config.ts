import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | Mogyuchi",
  defaultTitle: "Mogyuchi",
  description: "Official website of Mogyuchi.",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mogyuchi.com/",
    title: "もぎゅち",
    description: "Official website of Mogyuchi.",
    site_name: "Mogyuchi",
    images: [{ url: "https://mogyuchi.com/ogp/1.png" }],
  },
  twitter: {
    handle: "@Mogyuchi",
    site: "@Mogyuchi",
    cardType: "summary",
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
