import React, { useState } from "react";
import Calendar from 'react-calendar'

import './calendar.style.scss'

const CustomCalendar = () => {
    const [value, onChange] = useState(new Date());

    return <Calendar onChange={onChange} value={value}/>
}

export default CustomCalendar;