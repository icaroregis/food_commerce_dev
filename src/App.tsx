import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'
import { ContextProvider } from './contexts/SnackContext'
import { CartProvider } from './contexts/CartContext'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <ContextProvider>
          <CartProvider>
            <AppRoutes />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </ContextProvider>
      </Theme>
    </BrowserRouter>
  )
}
