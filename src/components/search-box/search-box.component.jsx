import React from 'react'

// ICON
import search from '../../assets/icon/icon-search-dark.svg'

import './search-box.style.scss'

const SearchBox = () => (
    <div className="search-box">
        <form action="#" className='search'>
            <input type="text" className='search__input' placeholder='Search'/>
            <button type='submit' className='search__button'>
                <img src={search} alt="search icon" className='search__button--icon'/>
            </button>            
        </form>
    </div>
)

export default SearchBox;