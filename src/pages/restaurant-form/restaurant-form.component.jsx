import React from "react";

// COMPONENT
import SimpleHeader from '../../components/simple-header/simple-header.component'
import InsideSidebar from '../../components/inside-sidebar/inside-sidebar.component'
import CategorySidebar from "../../components/category-sidebar/category-sidebar.component";
import FormInput from "../../components/form-input-2/form-input-2.component";
import DropdownForm from "../../components/form-dropdown/form-dropdown.component";
import FormTextarea from "../../components/form-textarea/form-textarea.component";

import './restaurant-form.style.scss'

const RestaurantForm = () => (
    <div className="restaurant-form">
        <div className="restaurant-form__sidebar">
            <InsideSidebar/>
        </div>
        <div className="restaurant-form__main">
            <div className="restaurant-form__main--header">
                <SimpleHeader heading='New Restaurant' buttonName='Done'/>
            </div>
            <div className="restaurant-form__main--form">
                <div className="form-align">
                    <div className="title-align">
                        <FormInput id='title' label='Restaurant Name' placeholder='Sustainability Take Off'/>
                    </div>
                    <div className="cuisine-align dropdown-menu">
                        <DropdownForm label='Cuisine' option1='select 1' value1='' option2='select 2' value2='' option3='select 3' value3=''/>                    
                    </div>
                    <div className="location-align dropdown-menu">
                        <DropdownForm label='Location' option1='select 1' value1='' option2='select 2' value2='' option3='select 3' value3=''/>                    
                    </div>
                    <div className="textarea-align">
                        <FormTextarea id='description' label='Description' placeholder='Description..'/>
                    </div>
                    <FormInput id='title' label='Date' placeholder='Wed 24th June 2022'/>
                    <FormInput id='title' label='Time' placeholder='20:00 - 21:30'/>
                    <FormInput id='title' label='Tags' placeholder='Search'/>
                </div>
            </div>
        </div>
        <div className="restaurant-form__connections">
            <CategorySidebar/>
        </div>
    </div>
)

export default RestaurantForm;