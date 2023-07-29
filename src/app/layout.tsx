import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'synuns blog',
  description: '시넌쓰의 개발 블로그',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
