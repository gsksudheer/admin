import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Pages
import HomePage from './Pages/Home/homePage';
import List from './Pages/list/List';
import Payments from './Pages/list/payments';
import Temp from './Pages/temp'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<List />} />
      <Route path="/payments" element={<Payments />} />

    </Routes>
    </>
  )
}

export default App