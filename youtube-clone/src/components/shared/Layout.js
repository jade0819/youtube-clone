import React from 'react';
import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';


const Layout = ( {children} ) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.layout}>
                <Menu />
                <div className={styles.contents}>{children}</div>
            </div>
        </div>
    );
};

export default Layout;