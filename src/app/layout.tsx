import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import siteMetadata from "@/data/siteMetadata";
import { siteUrl } from "@/config";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import MaxWidthContainer from "@/components/max-width-container";

// Font you can change if you want to use other font
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },

  description: siteMetadata.description,

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* favicons */}
        <link
          rel="icon"
          type="image/png"
          href={`${siteUrl}/favicons/favicon-96x96.png`}
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${siteUrl}/favicons/favicon.svg`}
        />
        <link rel="shortcut icon" href={`${siteUrl}/favicons/favicon.ico`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${siteUrl}/favicons/apple-touch-icon.png`}
        />
        <meta name="apple-mobile-web-app-title" content="NextBlog" />
        <link rel="manifest" href={`${siteUrl}/favicons/site.webmanifest`} />

        <link rel="canonical" href={siteMetadata.siteUrl} />

        {/* theme-colors */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>

      <body className={`${space_grotesk.className} antialiased`}>
        <ThemeProvider>
          <MaxWidthContainer>
            <Header />
            {children}
          </MaxWidthContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
