import React from 'react'

// COMPONENT
import SearchBox from '../../components/search-box/search-box.component'
import Categorie from '../../components/category/category.component'

// IMAGE
import mnkyhouse from '../../assets/image/Mnkyhouse.png'
import scallops from '../../assets/image/Scallops.png'
import sushi from '../../assets/image/sushi.png'
import prawn from '../../assets/image/10.png'
import hakkasan from '../../assets/image/hakkasan.png'
import train from '../../assets/image/le-train.png'
import park from '../../assets/image/park.png'
import roka from '../../assets/image/Roka.png'
import chotto from '../../assets/image/chotto.png'
import zuma from '../../assets/image/zuma.png'

// ICON
import arrow from '../../assets/icon/icon-dropdown.svg'

import './suppliers-dining.style.scss'

const SuppliersDining = () => (
    <div className="suppliers-dining">
        <div className="suppliers-dining__filter">
            <h3 className='heading-3 heading'>Filter</h3>
            <ul className="side-nav">
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">Categories</a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">Most Popular</a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">Upcoming</a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">Updates</a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">Calendar</a>
                </li>
            </ul>
        </div>
        <div className="suppliers-dining__categories">
            <div className="suppliers-dining__categories--header">
                <h3 className='heading-3'>Dining</h3>
                <div className='group'>
                    <SearchBox/>
                    <button className='btn'>Add</button>
                    <button className='btn'>Manage</button>
                </div>
            </div>
            <div className="suppliers-dining__categories--recents">
                <h4 className='heading-4 heading'>Recents</h4>
                <div className="recents-list">
                    <Categorie image={scallops} tag='Amazonico'/>
                    <Categorie image={prawn} tag='Bagatelle'/>
                    <Categorie image={mnkyhouse} tag='MNKY House'/>
                    <Categorie image={sushi} tag='Sushi Samba'/>
                </div>
            </div>
            <div className="suppliers-dining__categories--all-categories">
                <h4 className='heading-4 heading'>All Categories</h4>
                <div className="categorie-list">
                    <Categorie image={chotto} tag='Chotto Matte'/>
                    <Categorie image={hakkasan} tag='Hakkasan'/>
                    <Categorie image={zuma} tag='Zuma'/>
                    <Categorie image={train} tag='Le Train Bleu'/>
                    <Categorie image={park} tag='Park Chinois'/>
                    <Categorie image={roka} tag='Roka'/>
                </div>
            </div>
        </div>
        <div className="suppliers-dining__all-categories">
            <div className="suppliers-dining__all-categories--header">
                <img src={arrow} alt="arrow icon" />
                <p>All Categories</p>
            </div>
            <ul className="categorie-list">
                <li className="categorie-list__item">
                    <a href="#" className="categorie-list__link">Dining</a>
                </li>
                <li className="categorie-list__item">
                    <a href="#" className="categorie-list__link">Fashion</a>
                </li>
                <li className="categorie-list__item">
                    <a href="#" className="categorie-list__link">Travel</a>
                </li>
                <li className="categorie-list__item">
                    <a href="#" className="categorie-list__link">Entertainment</a>
                </li>
                <li className="categorie-list__item">
                    <a href="#" className="categorie-list__link">Nightlife</a>
                </li>
                <li className="categorie-list__item">
                    <a href="#" className="categorie-list__link">Events</a>
                </li>
                <li className="categorie-list__item">
                    <a href="#" className="categorie-list__link">Experiences</a>
                </li>
                <li className="categorie-list__item">
                    <a href="#" className="categorie-list__link">Culture</a>
                </li>
                <li className="categorie-list__item">
                    <a href="#" className="categorie-list__link">Art</a>
                </li>
            </ul>
        </div>
    </div>
)

export default SuppliersDining;