import type { Metadata } from 'next'
import { Sawarabi_Gothic } from 'next/font/google'
import './globals.css'

const SawarabiGothic = Sawarabi_Gothic({
    weight: ['400'],
    preload: false,
})

export const metadata: Metadata = {
    title: '0xf3 portfolio',
    description: '伏見 portfolio',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <body className={SawarabiGothic.className}>{children}</body>
        </html>
    )
}
