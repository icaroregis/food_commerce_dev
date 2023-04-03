import { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { Snack } from '../../../components/Snack'
import { SnackTitle } from '../../../components/SnackTitle'
import { getDrinks } from '../../../services/api'

export default function Drinks() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function getUser() {
      const response = await getDrinks()
      setDrinks(response.data)
    }

    getUser()
  }, [])
  return (
    <>
      <Head title='Bebidas' description='As melhores bebidas de Fortaleza!!!' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snack snacks={drinks}></Snack>
    </>
  )
}
