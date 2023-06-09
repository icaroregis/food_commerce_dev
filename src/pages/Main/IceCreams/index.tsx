import { useSnack } from '../../../Hooks/useSnack'
import { Head } from '../../../components/Head'
import { Snack } from '../../../components/Snack'
import { SnackTitle } from '../../../components/SnackTitle'

export default function IceCreams() {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title='Sorvetes' description='Os melhores sorvetes de Fortaleza!!!' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snack snacks={iceCreams}></Snack>
    </>
  )
}
