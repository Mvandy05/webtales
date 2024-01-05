import 'css/tailwind.css'
import 'pliny/search/algolia.css'

import localFont from 'next/font/local'

import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'

import { Metadata } from 'next'

const degular = localFont({
  src: [
    {
      path: '../../public/static/fonts/DegularTextThin.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/static/fonts/DegularTextRegular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/static/fonts/DegularTextSemiBold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/static/fonts/DegularTextBlack.woff',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--font-degular'
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
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                <main className="mb-auto">{children}</main>
              </SearchProvider>
              <Footer />
            </div>
          </SectionContainer>
  )
}
