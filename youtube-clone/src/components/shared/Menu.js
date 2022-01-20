import React from 'react';
import styles from './css/Menu.module.css';
import { Link } from 'react-router-dom';
import { TiHome } from "react-icons/ti";
import { FaRegCompass } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";



const Menu = ( {activeMenu, menuFlag} ) => {
    return (
        <div>
            {
                menuFlag && 
                <div className={styles.menu}>
                    <Link to="/" className={activeMenu === 'home' ? styles.focused : styles.link}>
                        <TiHome className={styles.icon} />홈
                    </Link>

                    <Link to="/explore" className={activeMenu === 'explore' ? styles.focused : styles.link}>
                        <FaRegCompass className={styles.icon} />탐색
                    </Link>

                    <Link to="/subscription" className={activeMenu === 'subscription' ? styles.focused : styles.link}>
                        <MdSubscriptions className={styles.icon} />구독
                    </Link>
                </div>
            }
        </div>
    );
};

export default Menu;