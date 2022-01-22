import React from 'react';
import styles from './css/Explore.module.css';
import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../json/youtubeData.json';


const ExploreCard = (data, index) => {
    return (
        <div key={`explore-card-${index}`}>
            <div>{index}</div>
            <div>제목: {data.title}</div>
            <div>업로더: {data.channelTitle}</div>
            <br />
        </div>
    );
}

const Explore = () => {

    return (
        <Layout activeMenu="explore">
            <ContentsLayout>
                {
                    youtubeData['data'].map( ExploreCard )
                }
            </ContentsLayout>
        </Layout>
    );
};

export default Explore;