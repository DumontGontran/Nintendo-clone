import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.page'
import Error from './components/Error.component'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/search' element={null} />
        <Route path='/wishes' element={null} />
        <Route path='/account' element={null} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
