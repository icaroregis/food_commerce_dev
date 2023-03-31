import { useState } from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import menuImg from '../../assets/menu.svg'
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as BebidaIcon } from '../../assets/soda.svg'
import { ReactComponent as SorveteIcon } from '../../assets/ice-cream.svg'

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuImg} alt='ícone de menu' />
      </button>

      <nav>
        <ul>
          <li>
            <Link to={''} className='active'>
              <BurgerIcon />
              <span>Hambúrgueres</span>
            </Link>
          </li>

          <li>
            <Link to={''}>
              <PizzaIcon />
              <span>Pizzas</span>
            </Link>
          </li>

          <li>
            <Link to={''}>
              <BebidaIcon />
              <span>Bebidas</span>
            </Link>
          </li>

          <li>
            <Link to={''}>
              <SorveteIcon />
              <span>Sorvetes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
