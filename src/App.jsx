
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
  return (
    <>
    <div className="cards">
      <Card item = {item1}/>
      <Card item = {item2}/>
      </div>
    </>
  )
}
export default App
