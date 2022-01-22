import React from 'react';
import Layout from '../components/shared/Layout';
import 'moment/locale/ko';
import moment from 'moment';


const Subscription = () => {

    // year-month-dateThour-minute-second
    const time1 = moment('2022-01-22T08:00:03');
    const time2 = moment('2022-01-22T08:20:23');
    const time3 = moment('2022-01-23T09:50:33');

    console.log( 'time1과의 차이: ', time1.fromNow() );
    console.log( 'time2과의 차이: ', time2.fromNow() );
    console.log( 'time3과의 차이: ', time3.fromNow() );
    
    return (
        <Layout activeMenu="subscription">
            <div>
                *구독
            </div>
        </Layout>
    );
};

export default Subscription;