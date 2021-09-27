import React from 'react';

import "./calendarLarge.style.scss";

// COMPONENTS
import CalendarEvent from "../calendarEvent/calendarEvent.component";

// ICONS
import left from "../../assets/icon/icon-arrow-left.svg";
import right from "../../assets/icon/icon-arrow-right.svg";
import dropdown from "../../assets/icon/icon-dropdown-green.svg";

const CalendarLarge = () => (
    <div className="calendar-large">
        <div className="calendar-large-header">
            <div>&nbsp;</div>
            <div className="calendar-large-navigation">
                <img src={left} alt="left-icon" className="left-icon" />
                <span className="month-selector">June 2020</span>
                <img src={right} alt="right-icon" className="right-icon" />
            </div>
            <div className="upcoming-reservations">
                Upcoming Reservations
                <img src={dropdown} alt="dropdown-icon-green" className="dropdown-icon-green" />
            </div>
        </div>
        <div className="calendar-large-body">
            <div className="monday">Monday</div>
            <div className="tuesday">Tuesday</div>
            <div className="wednesday">Wednesday</div>
            <div className="thursday">Thursday</div>
            <div className="friday">Friday</div>
            <div className="saturday">Saturday</div>
            <div className="sunday">Sunday</div>
            <div className="date-1">
                <CalendarEvent />
                <CalendarEvent />
                <span>1</span>
            </div>
            <div className="date-2">
                <CalendarEvent />
                <span>2</span>
            </div>
            <div className="date-3">
                <span>3</span>
            </div>
            <div className="date-4">
                <span>4</span>
            </div>
            <div className="date-5">
                <span>5</span>
            </div>
            <div className="date-6">
                <span>6</span>
            </div>
            <div className="date-7">
                <span>7</span>
            </div>
            <div className="date-8">
                <span>8</span>
            </div>
            <div className="date-9">
                <span>9</span>
            </div>
            <div className="date-10">
                <span>10</span>
            </div>
            <div className="date-11">
                <span>11</span>
            </div>
            <div className="date-12">
                <span>12</span>
            </div>
            <div className="date-13">
                <span>13</span>
            </div>
            <div className="date-14">
                <span>14</span>
            </div>
            <div className="date-15">
                <span>15</span>
            </div>
            <div className="date-16">
                <span>16</span>
            </div>
            <div className="date-17">
                <span>17</span>
            </div>
            <div className="date-18">
                <span>18</span>
            </div>
            <div className="date-19">
                <span>19</span>
            </div>
            <div className="date-20">
                <span>20</span>
            </div>
            <div className="date-21">
                <span>21</span>
            </div>
            <div className="date-22">
                <span>22</span>
            </div>
            <div className="date-23">
                <span>23</span>
            </div>
            <div className="date-24">
                <span>24</span>
            </div>
            <div className="date-25">
                <CalendarEvent />
                <CalendarEvent />
                <CalendarEvent />
                <span>25</span>
            </div>
            <div className="date-26">
                <span>26</span>
            </div>
            <div className="date-27">
                <span>27</span>
            </div>
            <div className="date-28">
                <span>28</span>
            </div>
            <div className="date-29">
                <span>29</span>
            </div>
            <div className="date-30">
                <span>30</span>
            </div>
            <div className="date-1">
                <CalendarEvent />
                <CalendarEvent />
                <span>1</span>
            </div>
            <div className="date-2">
                <CalendarEvent />
                <span>2</span>
            </div>
            <div className="date-3">
                <span>3</span>
            </div>
            <div className="date-4">
                <span>4</span>
            </div>
            <div className="date-5">
                <span>5</span>
            </div>
        </div>
    </div>
)

export default CalendarLarge;