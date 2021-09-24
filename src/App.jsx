import { useState } from 'react'

import Dashboard from './pages/dashboard/dashboard.component'
import RestaurantModule from "./pages/restaurantModule/restaurantModule.component";

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RestaurantModule />
    </>
  )
}

export default App
