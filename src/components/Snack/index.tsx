import { Container } from './style'
import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from '../../helpers/currencyFormat'

interface SnacksProps {
  snacks: any[]
}

export function Snack({ snacks }: SnacksProps) {
  return (
    <Container>
      {snacks.map((snack) => {
        return (
          <div key={snack.id} className='snack'>
            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.name} />
            <p>{snack.description}</p>

            <div>
              <strong>{currencyFormat(snack.price)}</strong>
              <button type='button'>
                <FiPlus />
              </button>
            </div>
          </div>
        )
      })}
    </Container>
  )
}
