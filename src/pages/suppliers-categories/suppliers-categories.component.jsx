import React from "react";

// COMPONENT
import SearchBox from "../../components/search-box/search-box.component";
import Categorie from "../../components/category/category.component";
import CustomCalendar from "../../components/calendar/calendar.component";
import Checkbox from "../../components/checkbox/checkbox.component";

// IMAGE
import dining from "../../assets/image/dining.png";
import fashion from "../../assets/image/fashion.png";
import travel from "../../assets/image/travel.png";
import privates from "../../assets/image/private.png";

import "./suppliers-categories.style.scss";
import "../../sass/typography.scss";

const SuppliersCategories = () => (
  <div className="suppliers-categories">
    <div className="suppliers-categories__filter">
      <h3 className="heading-3 heading">Filter</h3>
      <ul className="side-nav">
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            Categories
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            Most Popular
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            Upcoming
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            Updates
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            Calendar
          </a>
        </li>
      </ul>
    </div>
    <div className="suppliers-categories__categories">
      <div className="suppliers-categories__categories--header">
        <h3 className="heading-3">Categories</h3>
        <div className='group'>
            <SearchBox/>
            <button className='btn'>Add</button>
            <button className='btn'>Manage</button>
        </div>
      </div>
      <div className="suppliers-categories__categories--recents">
        <h4 className="heading-4 heading">Recents</h4>
        <div className="recents-list">
          <Categorie image={dining} tag="Dining" />
          <Categorie image={privates} tag="Private" />
          <Categorie image={travel} tag="Travel" />
          <Categorie image={fashion} tag="Fashion" />
        </div>
      </div>
      <div className="suppliers-categories__categories--all-categories">
        <h4 className="heading-4 heading">All Categories</h4>
        <div className="categorie-list">
          <Categorie image={dining} tag="Dining" />
          <Categorie image={privates} tag="Private" />
          <Categorie image={travel} tag="Travel" />
          <Categorie image={travel} tag="Travel" />
          <Categorie image={travel} tag="Travel" />
          <Categorie image={travel} tag="Travel" />
        </div>
      </div>
    </div>
    <div className="suppliers-categories__calendar">
      <div className="calendar-area">
        {/* <CustomCalendar /> */}
      </div>
      <h4 className="heading-4 pb-1">Title</h4>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        vehicula erat, nec malesuada lorem. Ut rutrum vulputate arcu quis
        commodo. Donec finibus metus vel metus sollicitudin, a pellentesque ante
        auctor. Curabitur non blandit tellus.
        <br />
        <br />
        Ut rutrum vulputate arcu quis commodo. Donec finibus metus vel metus
        sollicitudin, a pellentesque ante auctor. Curabitur non blandit tellus.
      </p>
      <Checkbox id='check' label='Hi'/>
    </div>
  </div>
);

export default SuppliersCategories;
