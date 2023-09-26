import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllGames from "./components/allGames/AllGames"
import Header from './components/header/Header'
import GameDetail from './components/gameDetails/GameDetails'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<AllGames />} />
        <Route path='/game/:id' element={<GameDetail />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App