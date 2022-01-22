import React from 'react';
import styles from './css/HomeCard.module.css';


const HomeCard = ( data, index ) => {
    const {id, title, thumbnail, channelId, channelThumbnail, channelTitle, viewCount, date} = data;

    return (
        <a
            href={`https://www.youtube.com/watch?v=${id}`}
            key={`home-card-${index}`}
            className={styles.card}
        >
            <img
                className={styles.thumbnail}
                src={thumbnail}
                alt={`${title}의 썸네일`}
            />
            <div className={styles.info}>
                <a
                    href={`https://www.youyube.com/channel/${channelId}`}>
                    <img
                        className={styles.channelImg}
                        src={channelThumbnail}
                        alt={`${channelTitle}프로필 사진`}
                    />
                </a>

                <div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.uploader}>{channelTitle}</div>
                    <div className={styles.flex}>
                        <div className={styles.view}>{viewCount}</div>
                        <div className={styles.date}>{date}</div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default HomeCard;