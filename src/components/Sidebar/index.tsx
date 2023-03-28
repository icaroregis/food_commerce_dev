import { Container } from './styles'
import { Link } from 'react-router-dom'
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import menuImg from '../../assets/menu.svg'

export default function Sidebar() {
  return (
    <Container>
      <button type='button'>
        <img src={menuImg} alt='ícone de menu' />
      </button>

      <nav>
        <ul>
          <li>
            <Link to={''}>
              <BurgerIcon />
              <span>Hambúrgueres</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
