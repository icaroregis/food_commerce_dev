import { Container } from './style'
import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from '../../helpers/currencyFormat'
import { SkeletonSnack } from './SkeletonSnack'
import { SnackData } from '../../interfaces/SnackData'

interface SnacksProps {
  snacks: SnackData[]
}

export function Snack({ snacks }: SnacksProps) {
  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => {
            return <SkeletonSnack key={n} />
          })
        : snacks.map((snack) => {
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
