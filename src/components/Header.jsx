import React from 'react'
import './Header.css'
import joshLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'

const Header = () => {
  return (
    <div className="header">
        <div className="logoContainer">
            <img src={joshLogo} alt="joshLogo"  className='joshLogo'/>
        </div>

        <div className="searchBar">
            <div className="searchIcon">
                <img src={searchIcon} alt="icon" />
            </div>
            <input type="text" className='searchInput' placeholder='Collection, item or user...'/>
        </div>

        <div className="headerItems">
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>

        <div className="headerActions">
            <div className="themeSwitch">
                <img src={themeSwitch} alt="Theme Icon" />
            </div>
        </div>
        
        <div className="loginButton">GET IN</div>
    </div>
  )
}

export default Header