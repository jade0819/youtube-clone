import React from 'react';
import styles from './css/Header.module.css';
import youtube_logo from '../../images/youtube_logo.png';
import { Link } from 'react-router-dom';

import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';


const Header = ({menuFlag, setMenuFlag}) => {
    return (
        <div className={styles.header}>
            <div className={styles.tab}>
                <FiMenu className={styles.icon} onClick={() => setMenuFlag(!menuFlag)} />
                <Link to="/">
                    <img src={youtube_logo} alt="로고" className={styles.logo} />
                </Link>
            </div>

            <div className={styles['center-tab']}>
                <input className={styles.input} />
                <IoSearchOutline className={styles['search-icon']} />
            </div>

            <div className={styles.tab}>
                <BsGrid3X3Gap className={styles.icon} />
                <HiOutlineDotsVertical className={styles.icon} />
            </div>
        </div>
    );
};

export default Header;