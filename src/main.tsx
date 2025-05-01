import RootLayout from '@/app/layout'
import Home from '@/app/page'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootLayout>
      <Home />
    </RootLayout>
  </React.StrictMode>
) 