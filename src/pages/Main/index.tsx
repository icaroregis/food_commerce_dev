import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import LogoImg from '../../assets/logo.svg'
import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Sidebar />

      <section>
        <img src={LogoImg} alt='' />
        <Outlet />
      </section>
    </Container>
  )
}
