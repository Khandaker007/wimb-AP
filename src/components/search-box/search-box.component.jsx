import React from 'react'

// ICON
import search from '../../assets/icon/Icon-search.jpg'

import './search-box.style.scss'

const SearchBox = () => (
    <div className="search-box">
        <form action="#" className='search'>
            <input type="text" className='search__input' placeholder='Search'/>
            <a href="">
                <img src={search} alt="search icon" className='search__icon' />
            </a>
        </form>
    </div>
)

export default SearchBox;