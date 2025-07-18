import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <Navbar/>
        <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
        <Outlet/>
        </main>
      </AuthProvider>
    </>
  )
}

export default App
