
import { useSelector } from 'react-redux'
import './App.css'
import Contaier from './componentes/Container'
import Controle from './componentes/Controle'
import DisplayCounter from './componentes/DisplayCounter'
import Header from './componentes/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Privacy from './componentes/Privacy'

function App() {
  const privacy = useSelector(store => store.privacy);

  return (
    
    <center className="px-4 py-5 my-5 text-center">
    <Contaier>
    <Header/>
    <div className="col-lg-6 mx-auto">
      {privacy ? <Privacy/> : <DisplayCounter/>};
      <Controle/>
    </div>
    </Contaier>
  </center>
    
       
  
  )
}

export default App
