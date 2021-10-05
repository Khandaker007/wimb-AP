import React from "react";

// COMPONENT
import SimpleHeader from '../../components/simple-header/simple-header.component'
import InsideSidebar from '../../components/inside-sidebar/inside-sidebar.component'
import CategorieSidebar from "../../components/categorie-sidebar/categorie-sidebar.component";
import FormInput from "../../components/form-input-2/form-input-2.component";
import DropdownForm from "../../components/form-dropdown/form-dropdown.component";
import FormTextarea from "../../components/form-textarea/form-textarea.component";

import './connect-form.style.scss'

const ConnectForm = () => (
    <div className="connect-form">
        <div className="connect-form__sidebar">
            <InsideSidebar/>
        </div>
        <div className="connect-form__main">
            <div className="connect-form__main--header">
                <SimpleHeader heading='New Connect Page' buttonName='Done'/>
            </div>
            <div className="connect-form__main--form">
                <div className="form-align">
                    <div className="title-align">
                        <FormInput id='title' label='Title' placeholder='Sustainability Take Off'/>
                    </div>
                    <div className="category-align">
                        <DropdownForm label='Category' option1='select 1' value1='' option2='select 2' value2='' option3='select 3' value3=''/>                    
                    </div>
                    <div className="first-name">
                        <FormInput id='firstName' label='First Name' placeholder='first name' />                        
                    </div>               
                    <FormInput id='lastName' label='Last Name' placeholder='last name'/>
                    <FormInput id='company' label='Company' placeholder='company name'/>
                    <FormInput id='position' label='Position' placeholder='eg: CEO'/>
                    <div className="textarea-align">
                        <FormTextarea id='description' label='Description' placeholder='Description..'/>
                    </div>
                    <FormInput id='title' label='Title' placeholder='Sustainability Take Off'/>
                    <FormInput id='title' label='Title' placeholder='Sustainability Take Off'/>
                    <FormInput id='title' label='Title' placeholder='Sustainability Take Off'/>
                </div>
            </div>
        </div>
        <div className="connect-form__categories">
            <CategorieSidebar/>
        </div>
    </div>
)

export default ConnectForm;