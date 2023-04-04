import { useContext } from 'react'
import { SnackContext } from '../../../contexts/index'
import { Head } from '../../../components/Head'
import { Snack } from '../../../components/Snack/index'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Burgers() {
  const { burgers } = useContext(SnackContext)

  return (
    <>
      <Head title='Hambúrgueres' description='O melhor Hamburguer de Fortaleza!!!' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snack snacks={burgers}></Snack>
    </>
  )
}
