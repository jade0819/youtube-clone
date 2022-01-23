import React from 'react';
import HorizontalCard from '../shared/HorizontalCard';
import styles from './SubscriptionCard.module.css';


const SubscriptionCard = ( {data} ) => {
    
    const {channelId, channelThumbnail, channelTitle} = data;

    return (
        <div className={styles.card}>
            <a
                className={styles.uploader}
                href={`https://www.youyube.com/channel/${channelId}`}
            >
                <img 
                    className={styles['channel-image']}
                    src={channelThumbnail}
                    alt={`${channelTitle} 프로필 사진`}
                />
                <div className={styles.name}>{channelTitle}</div>
            </a>
            
            <div className={styles.body}>
                <HorizontalCard data={data} />
            </div>
        </div>
    );
};

export default SubscriptionCard;