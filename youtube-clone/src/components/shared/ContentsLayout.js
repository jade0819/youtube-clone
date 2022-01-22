import React from 'react';
import styles from './css/ContentsLayout.module.css';

const ContentsLayout = ( {children} ) => {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>{children}</div>
        </div>
    );
};

export default ContentsLayout;