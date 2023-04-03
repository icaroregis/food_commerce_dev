import { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { Snack } from '../../../components/Snack'
import { SnackTitle } from '../../../components/SnackTitle'
import { getIceCreams } from '../../../services/api'

export default function IceCreams() {
  const [iceCreams, setIceCreams] = useState([])

  useEffect(() => {
    async function getUser() {
      const response = await getIceCreams()
      setIceCreams(response.data)
    }

    getUser()
  }, [])

  return (
    <>
      <Head title='Sorvetes' description='Os melhores sorvetes de Fortaleza!!!' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snack snacks={iceCreams}></Snack>
    </>
  )
}
