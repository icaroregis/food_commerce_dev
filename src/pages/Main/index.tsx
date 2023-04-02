import { Container } from './styles'
import { Outlet } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'
import Sidebar from '../../components/Sidebar'

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
