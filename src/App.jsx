//import { Hello } from './components/HelloWord.jsx'
import "./App.css"
import { Perfil } from './Perfil.jsx'
import { Img } from './Img.jsx'


export function App() {

const name = "AAPAP"
const age = 22
const imgURL = "https://randomuser.me/api/portraits/women/50.jpg"
const imgURL2 = "https://randomuser.me/api/portraits/women/33.jpg"

return (
    <>
      <div className="titleConteiner">

        <h1>Hello ? react</h1>
        <p>pagina web criada com react</p>
      </div>

      <div className="usersContainer">

        <Img name={name} age={age} imgurl={imgURL} />
        <Img name={"Persona"} age={29} imgurl={imgURL2} />
      </div>
    </>
  )
}

