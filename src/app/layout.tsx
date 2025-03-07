import type { Metadata } from 'next'

import StyledComponentsRegistry from '@/lib/registry'
import { GlobalCss } from '../styles/globals'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Help Desk System',
  description: 'Made by Gustavo Kasaki'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <GlobalCss />
            {children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
