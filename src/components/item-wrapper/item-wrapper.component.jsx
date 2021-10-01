import React from 'react'

import Item from '../item/item.component'

import arrowRight from '../../assets/icon/icon-arrow-right.svg'

import './item-wrapper.style.scss'
import '../../sass/typography.scss'

const ItemWrapper = ({heading, image, item}) => (
    <div className="item-wrapper">
        <h2 className='heading-2 pb-2'>{heading}</h2>
        <div className="items">
            <Item itemName={item} image={image}/>
            <Item itemName={item} image={image}/>
            <Item itemName={item} image={image}/>
            <button className="swipe-btn">
                <img src={arrowRight} alt="arrow icon" />
            </button>
        </div>
    </div>
)

export default ItemWrapper