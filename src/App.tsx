import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'
import { ContextProvider } from './contexts'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <ContextProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </ContextProvider>
      </Theme>
    </BrowserRouter>
  )
}
