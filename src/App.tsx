import { useContext } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import { AuthContext } from './contexts/Auth/AuthContext'
import Login from './pages/Login'

function App() {
  const auth = useContext(AuthContext)

  const handleLogout = async () => {
    await auth.signout()
    window.location.href = window.location.href
  }

  return (
    // <div className="App">
    //   <header>
    //     <h1>Header do site</h1>
    //     <nav>
    //       <Link to="/">Home</Link>
    //       <Link to="/private">Página Privada</Link>
    //       {auth.user && <button onClick={handleLogout}>Sair</button>}
    //     </nav>
    //   </header>
    //   <hr />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Routes>
    // </div>
  )
}

export default App
