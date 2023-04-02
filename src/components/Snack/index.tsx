import { Container } from './style'

interface SnacksProps {
  snacks: any[]
}

export function Snack({ snacks }: SnacksProps) {
  return (
    <Container>
      {snacks.map((snack) => {
        return (
          <div key={snack.id} className='smack'>
            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.name} />
            <p>{snack.description}</p>

            <div>
              <strong>{snack.price}</strong>
              <button type='button'></button>
            </div>
          </div>
        )
      })}
    </Container>
  )
}
