//import { Hello } from './components/HelloWord.jsx'
import "./App.css"
import { Perfil } from './Perfil.jsx'
import { Img } from './Img.jsx'


export function App() {

const name = "AAPAP"
const age = 22
const imgURL = "https://randomuser.me/api/portraits/women/50.jpg"

return (
    <>
      <h1>Hello ? react</h1>
      <p>pagina web criada com react</p>

       
         
          
          <Perfil name="asd" age="22" />
         <Img name={name} age={age} imgurl="https://randomuser.me/api/portraits/women/50.jpg" />
       

      <button>asd</button>

    </>
  )
}

