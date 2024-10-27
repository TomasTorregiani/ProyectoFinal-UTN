import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Nosotros } from './pages/Nosotros'
import { Home } from './pages/Home'
import { Actividades } from './pages/Actividades'
import { Productos } from './pages/Productos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route path='/actividades' element={<Actividades/>}></Route>
          <Route path='/productos' element={<Productos/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
