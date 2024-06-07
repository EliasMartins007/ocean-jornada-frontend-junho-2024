
import './App.css'
import Card from './components/Card/Card'

function App() {


  const item1 = {
    name: 'Rick',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const item2 = {
    name: 'Morty',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  
  const item3 = {
    name: 'Summer',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }

const itens = [item1, item2, item3]

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
export default App
