import { useState } from 'react'

import Dashboard from './pages/dashboard/dashboard.component'
import RestaurantModule from "./pages/restaurantModule/restaurantModule.component";
import ProposePopup from './components/proposePopup/proposePopup.component';
import CalendarLarge from './components/calendarLarge/calendarLarge.component';


import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RestaurantModule />
      <ProposePopup />
      <CalendarLarge />
    </>
  )
}

export default App
