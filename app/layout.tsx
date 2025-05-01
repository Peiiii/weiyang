'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { routes } from '@/src/routes'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './globals.css'

const router = createHashRouter(routes)

export default function RootLayout() {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="vite-ui-theme"
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
