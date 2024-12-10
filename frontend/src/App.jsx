import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginSignupPage from './pages/LoginSignupPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginSignupPage/>}/>
    </Routes>
    </>
  )
}

export default App
