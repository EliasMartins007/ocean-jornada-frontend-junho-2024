
import { useEffect, useState } from 'react'
import Card from '../components/Card/Card'

function Home() {
const [itens, setItens] = useState([])

async function carregarDados(){
const apiURL = 'https://rickandmortyapi.com/api/character' 
const response = await fetch(apiURL)
const body = await response.json()

const results = body.results
console.log(results)


setItens(results)

}

useEffect(function () {
  carregarDados()
}, [])


  return (
    <>
    <div className="cards">
      {itens.map(function (elemento){
        return <Card item = {elemento}/>
      })}
      </div>
    </>
  )
}
export default Home
