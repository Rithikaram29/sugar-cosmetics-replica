import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginSignupPage from './pages/LoginSignupPage'
import CartPage from './pages/CartPage'
import AccountPage from './pages/AccountPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginSignupPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/account' element={<AccountPage/>}/>
    </Routes>
    </>
  )
}

export default App
