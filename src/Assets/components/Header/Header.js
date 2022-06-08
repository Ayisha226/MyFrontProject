import React, {useState} from 'react';
import '../../css/main.css'
import Navbar from './Nav/Navbar';


const Header = () => {
    let [isScrollUp, setIsScrollUp] = useState(true);
    let [isTop, setIsTop] = useState(true);

    window.onscroll = function (e) {
        if (this.scrollY === 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
        setIsScrollUp(this.oldScroll > this.scrollY);
        this.oldScroll = this.scrollY;
    };

    return (
        <div className={` pt-2 header ${isTop ? `` : isScrollUp ? `sticky` : `hide`} `}>
            <Navbar />


        </div>

    )
}

export default Header
