'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from '@/src/routes'
import './globals.css'

const router = createBrowserRouter(routes)

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
