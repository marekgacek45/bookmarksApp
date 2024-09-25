import { Rubik } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const rubik = Rubik({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
})

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL('https://bookmarks.marekgacekdev.pl'),
	title: 'Bookmarks - Essential Resources for Developers',
	description:
		"Discover a curated library of coding resources and sources at Marek Gacek's Coding Library. Explore tutorials, tools, and documentation to enhance your development skills and streamline your projects",
	openGraph: {
		title: 'Bookmarks - Essential Resources for Developers',
		description:
			"Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
		type: 'website',
		locale: 'en_US',
		url: 'https://bookmarks.marekgacekdev.pl',
		siteName: 'Bookmarks - Essential Resources for Developers',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${rubik.className} bg-gray-100 dark:bg-slate-900 antialiased`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
