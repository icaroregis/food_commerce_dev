import { useState } from 'react'
import { Container } from './styles'
import { NavLink } from 'react-router-dom'
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
            <NavLink to='/'>
              <BurgerIcon />
              <span>Hambúrgueres</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='pizzas'>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='drinks'>
              <BebidaIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='ice-creams'>
              <SorveteIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
