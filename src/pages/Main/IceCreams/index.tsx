import { useContext } from 'react'
import { SnackContext } from '../../../App'
import { Head } from '../../../components/Head'
import { Snack } from '../../../components/Snack'
import { SnackTitle } from '../../../components/SnackTitle'

export default function IceCreams() {
  const { iceCreams } = useContext(SnackContext)

  return (
    <>
      <Head title='Sorvetes' description='Os melhores sorvetes de Fortaleza!!!' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snack snacks={iceCreams}></Snack>
    </>
  )
}
