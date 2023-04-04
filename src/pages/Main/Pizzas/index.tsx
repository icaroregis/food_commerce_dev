import { useContext } from 'react'
import { SnackContext } from '../../../App'
import { Head } from '../../../components/Head'
import { Snack } from '../../../components/Snack'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Pizzas() {
  const { pizzas } = useContext(SnackContext)

  return (
    <>
      <Head title='Pizzas' description='As melhores pizzas de Fortaleza!!!' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snack snacks={pizzas}></Snack>
    </>
  )
}
