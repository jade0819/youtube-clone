import React from 'react';
import styles from './css/HomeFilter.module.css';

const HomeFilter = ( {filter, text, onClickFilter} ) => {
    return (
        <button className={ filter === text ? styles.black : styles.gray} onClick={onClickFilter}>
            {text}
        </button>
    );
};

export default HomeFilter;