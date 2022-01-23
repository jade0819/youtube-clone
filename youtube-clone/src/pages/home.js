import React, { useState } from 'react';
import styles from './css/Home.module.css';
import youtubeData from '../data/youtubeData.json';
import Layout from '../components/shared/Layout';
import HomeFilter from '../components/home/HomeFilter';
import HomeCard from '../components/home/HomeCard';


const target = ['전체', 'Music', 'Entertainment', 'Comedy'];

const Home = () => {
    const [filter, setFilter] = useState('전체');

    const targetList = (item, index) => {
        return (
            <HomeFilter 
                key={`home-filter-${index}`}
                filter={filter}
                text={item}
                onClickFilter={ () => setFilter(item) }
            />
        );
    }

    function targetFilter(value) {
        if( filter === '전체' || value.category === filter)
            return true;

        return false;
    }


    return (
        <Layout activeMenu="home">
            <div className={styles.header}>
                { target.map(targetList) }
            </div>
            <div>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {
                            youtubeData['data'].filter(targetFilter).map( HomeCard )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;