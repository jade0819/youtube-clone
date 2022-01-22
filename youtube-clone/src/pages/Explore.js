import React from 'react';
import styles from './css/Explore.module.css';
import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../json/youtubeData.json';
import ExploreCard from '../components/explore/ExploreCard';


const Explore = () => {

    return (
        <Layout activeMenu="explore">
            <ContentsLayout>
                {
                    youtubeData['data'].map( (data, index) => <ExploreCard key={`explore-card-${index}`} data={data}/> )
                }
            </ContentsLayout>
        </Layout>
    );
};

export default Explore;