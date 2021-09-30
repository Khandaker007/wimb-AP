import React from "react";

//COMPONENT
import arrow from '../../assets/icon/icon-arrow-right.svg'
import InsideSidebar from "../../components/inside-sidebar/inside-sidebar.component";
import CategorieSidebar from "../../components/categorie-sidebar/categorie-sidebar.component";


import './supplier-restaurent.style.scss'

const SupplierRestaurent = () => (
    <div className="supplier-restaurent">
        <div className="supplier-restaurent__sidebar">
            <InsideSidebar/>
        </div>
        <div className="supplier-restaurent__body">
            BODY
        </div>
        <div className="supplier-restaurent__categories">
            <CategorieSidebar/>
        </div>
    </div>
)

export default SupplierRestaurent;