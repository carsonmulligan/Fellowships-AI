import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/sidebar'
import { ThemeProvider } from './components/theme-provider'
import { Notifications } from './components/notifications'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fellowships Calendar',
  description: 'Plan and collaborate on fellowship applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-background p-8">
              <div className="flex justify-end mb-4">
                <Notifications />
              </div>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

