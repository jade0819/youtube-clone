import React from 'react';
import styles from './css/Explore.module.css';
import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import HorizontalCard from '../components/shared/HorizontalCard';


const Explore = () => {

    return (
        <Layout activeMenu="explore">
            <ContentsLayout>
                {
                    youtubeData['data'].map( (data, index) => <HorizontalCard key={`explore-card-${index}`} data={data}/> )
                }
            </ContentsLayout>
        </Layout>
    );
};

export default Explore;