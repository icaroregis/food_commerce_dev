import { useSnack } from '../../../Hooks/useSnack'
import { Head } from '../../../components/Head'
import { Snack } from '../../../components/Snack'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Pizzas() {
  const { pizzas } = useSnack()

  return (
    <>
      <Head title='Pizzas' description='As melhores pizzas de Fortaleza!!!' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snack snacks={pizzas}></Snack>
    </>
  )
}
