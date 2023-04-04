import { useContext } from 'react'
import { SnackContext } from '../../../contexts/index'
import { Head } from '../../../components/Head'
import { Snack } from '../../../components/Snack'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Drinks() {
  const { drinks } = useContext(SnackContext)

  return (
    <>
      <Head title='Bebidas' description='As melhores bebidas de Fortaleza!!!' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snack snacks={drinks}></Snack>
    </>
  )
}
