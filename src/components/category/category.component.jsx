import React from 'react'

import './category.style.scss'

// import image from '../../assets/image/Drake_O2@2x.png'

const Categorie = ({image, tag}) => (
    <div style={{ backgroundImage: `url(${image})` }} className="categorie">
        <span className='tag'>{tag}</span>
    </div>
) 
export default Categorie;