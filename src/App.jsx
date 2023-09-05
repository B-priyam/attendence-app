import React from 'react'
import {Routes , BrowserRouter , Route} from "react-router-dom"
import Homepage from '../components/Pages/Homepage'
import MainPage from '../components/Pages/MainPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' Component={Homepage} />
            <Route path='/mainpage' Component={MainPage} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
