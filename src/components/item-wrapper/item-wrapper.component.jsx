import React from 'react'
import Carousel from 'react-elastic-carousel';

import Item from '../item/item.component'

import arrowRight from '../../assets/icon/icon-arrow-right.svg'

import './item-wrapper.style.scss'
import '../../sass/typography.scss'

const ItemWrapper = ({heading, image, item}) => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 800, itemsToShow: 4 },
        { width: 1400, itemsToShow: 5 }
    ]

    return (
    <div className="item-wrapper">
        <h2 className='heading-2 pb-2'>{heading}</h2>
        <Carousel breakPoints={breakPoints}>
            <Item itemName={item} image={image}/>
            <Item itemName={item} image={image}/>
            <Item itemName={item} image={image}/>
            <Item itemName={item} image={image}/>
            <Item itemName={item} image={image}/>
            <Item itemName={item} image={image}/>
        </Carousel>
    </div>
)}

export default ItemWrapper