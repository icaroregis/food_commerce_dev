import { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { Snack } from '../../../components/Snack'
import { SnackTitle } from '../../../components/SnackTitle'
import { getPizzas } from '../../../services/api'

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    async function getAllPizzas() {
      const response = await getPizzas()
      setPizzas(response.data)
    }

    getAllPizzas()
  }, [])

  return (
    <>
      <Head title='Pizzas' description='As melhores pizzas de Fortaleza!!!' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snack snacks={pizzas}></Snack>
    </>
  )
}
