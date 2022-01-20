import React, { useState } from 'react';
import styles from './css/Layout.module.css';
import Header from './Header';
import Menu from './Menu';


const Layout = ( {children, activeMenu} ) => {

    const [menuFlag, setMenuFlag] = useState(true);

    return (
        <div className={styles.container}>
            <Header menuFlag={menuFlag} setMenuFlag={setMenuFlag} />
            <div className={styles.layout}>
                <Menu activeMenu={activeMenu} menuFlag={menuFlag} />
                <div className={styles.contents}>{children}</div>
            </div>
        </div>
    );
};

export default Layout;