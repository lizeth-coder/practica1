import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Error from './pages/Error';
import Usuario from './pages/Usuario';
import RutasPrivadas from './routes/RutasPrivadas';
import RutasPublicas from './routes/RutasPublicas';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RutasPrivadas><Home/></RutasPrivadas>}/>
        <Route path='/login' element={<RutasPublicas><Login/></RutasPublicas>}/>
        <Route path='/registro' element={<RutasPublicas><Registro/></RutasPublicas>}/>
        <Route path='/usuario/:nombre' element={<RutasPrivadas><Usuario/></RutasPrivadas>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
