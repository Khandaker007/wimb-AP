import React from "react";

//COMPONENT
import arrow from '../../assets/icon/icon-arrow-right.svg'
import InsideSidebar from "../../components/inside-sidebar/inside-sidebar.component";
import CategorieSidebar from "../../components/categorie-sidebar/categorie-sidebar.component";
import ContactItem from "../../components/contact-item/contact-item.component";
import ButtonModify from "../../components/button-modify/button-modify.component";

// IMAGE
import logo from '../../assets/image/supplier-restaurant/logo.png'
import dining1 from '../../assets/image/supplier-restaurant/amazonico-dining-room-1.png'
import dining2 from '../../assets/image/supplier-restaurant/amazonico-dining-room-2.png'
import dining3 from '../../assets/image/supplier-restaurant/amazonico-dining-room-3.png'
import dining4 from '../../assets/image/supplier-restaurant/amazonico-dining-room-4.png'
import food1 from '../../assets/image/supplier-restaurant/amazonico-food-1.png'
import food2 from '../../assets/image/supplier-restaurant/amazonico-food-2.png'
import food3 from '../../assets/image/supplier-restaurant/amazonico-food-3.png'
import menu from '../../assets/image/supplier-restaurant/amazonico-menu.png'

import './supplier-restaurent.style.scss'

const SupplierRestaurent = () => (
    <div className="supplier-restaurant">
        <div className="supplier-restaurant__sidebar">
            <InsideSidebar/>
        </div>
        <div className="supplier-restaurant__main">
            <div className="supplier-restaurant__main--header">
                <h2 className='heading-2'>Amazonico</h2>
                <button className='btn-done'>Done</button>
            </div>
            <div className="supplier-restaurant__main--content">
                <div className="restaurant-info">
                    <div className="tag">
                        <p className="tag-item">Restaurant</p>
                        <p className="tag-item">Latin</p>
                        <p className="tag-item">Shushi</p>
                        <p className="tag-item">London</p>
                        <ButtonModify buttonName='Add/Remove'/>
                    </div>

                    <p>Luxe rainforest-themed restaurant 
                        for Latin American flavours & sushi, 
                        with a glass-fronted kitchen.
                    </p>
                    <ButtonModify buttonName='Edit' marginBottom/>

                    <p>Average Main: <span>£28</span></p>
                    <ButtonModify buttonName='Edit' inline/>

                    <div className="group-btn">
                        <button className='btn btn-perk'>
                            {/* <img src={parkerBenefit} alt="icon" /> */}
                            Perks
                        </button>
                        <button className='btn'>Service Level Agreement</button>
                    </div>
                </div>
                <div className="contact">
                    <h3 className='heading-3 pb-2'>Contact</h3>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                </div>
            </div>
            <div className="supplier-restaurant__main--image-upload">
                <div className="image-group">
                    <div className="image-group__align">
                        <img src={logo} alt="logo" className='image' />
                        <img src={dining1} alt="logo" className='image' />
                        <img src={dining2} alt="logo" className='image' />
                        <img src={dining3} alt="logo" className='image' />
                        <img src={dining4} alt="logo" className='image' />
                        <img src={food1} alt="logo" className='image' />
                        <img src={food2} alt="logo" className='image' />
                        <img src={food3} alt="logo" className='image' />
                    </div>
                    <button className='upload-btn'>+</button>
                </div>
            </div>
            <div className="supplier-restaurant__main--menu">
                <div className="heading-menu">
                    <h3 className='heading-3'>Menu</h3>
                    <ButtonModify buttonName='Add/Remove'/>
                </div>
                <img src={menu} alt="menu image" className='menu-image'/>
            </div>
        </div>
        <div className="supplier-restaurent__categories">
            <CategorieSidebar/>
        </div>
    </div>
)

export default SupplierRestaurent;