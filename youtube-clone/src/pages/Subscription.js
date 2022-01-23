import React from 'react';
import Layout from '../components/shared/Layout';
import sortedYoutubeData from '../data/sortedYoutubeData.json';
import ContentsLayout from '../components/shared/ContentsLayout';
import SubscriptionCard from '../components/subscription/SubscriptionCard';


const Subscription = () => {
    
    return (
        <Layout activeMenu="subscription">
            <ContentsLayout>
                {
                    sortedYoutubeData['data'].map( (data, index) => <SubscriptionCard key={`subscription-card-${index}`} data={data} />)
                }
            </ContentsLayout>
        </Layout>
    );
};

export default Subscription;