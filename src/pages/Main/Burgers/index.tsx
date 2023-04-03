import { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snack } from '../../../components/Snack/index'
import { getBurguers } from '../../../services/api'

export default function Burgers() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    async function getUser() {
      const response = await getBurguers()
      setBurgers(response.data)
    }

    getUser()
  }, [])

  return (
    <>
      <Head title='Hambúrgueres' description='O melhor Hamburguer de Fortaleza!!!' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snack snacks={burgers}></Snack>
    </>
  )
}
