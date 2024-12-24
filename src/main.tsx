import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CartItemProvider from './components/CartItemProvider.tsx'
import './index.pcss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartItemProvider>
      <App />
    </CartItemProvider>
  </StrictMode>
)
