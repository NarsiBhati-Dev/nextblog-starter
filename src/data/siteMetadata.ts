import { siteUrl } from "@/config";

if (!siteUrl) {
  throw new Error(
    "❌ NEXT_PUBLIC_SITE_URL is missing or empty! Check your .env file."
  );
}

const SITE_URL = siteUrl.replace(/\/$/, "");

const siteMetadata = {
  title: "NextBlog Blog Starter",
  author: "Narsi Bhati",
  headerTitle: "NextBlog",
  description:
    "Modern, SEO-optimized blog starter built with Next.js and Tailwind CSS",

  language: "en-US",
  theme: "system", // system, dark or light

  siteUrl: SITE_URL,
  siteRepo: "https://github.com/NarsiBhati-Dev/NextBlog.git",

  siteLogo: `${SITE_URL}/static/images/nextblog-logo.png`,
  socialBanner: `${SITE_URL}/static/images/nextblog-banner.png`,

  email: "address@yoursite.com",
  github: "https://github.com",
  facebook: "https://facebook.com/yourusername",
  youtube: "https://youtube.com",
  linkedin: "https://www.linkedin.com",
  x: "https://x.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  threads: "https://www.threads.net/@yourusername",
  medium: "https://medium.com/@yourusername",

  locale: "en-US",

  stickyNav: false,
};

export default siteMetadata;
