export default function Card(props){

const item = props.item

    return (
    <div className="card">
    <h2>{item.name}</h2>
    <div className="tags">
    <div >status: Vivo</div>
    <div >Espécie: Humano</div>
    <div >Origem: Terra C-137</div>
    </div>
    <img src={item.image}/>
  </div>
    )
}
