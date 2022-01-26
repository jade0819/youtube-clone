import React from 'react';
import styles from './css/SearchCard.module.css';
import { ProcessViewCount } from '../../utils';
import 'moment/locale/ko';
import moment from 'moment';


const SearchCard = ( {data} ) => {

    return (
        <a href={`https://www.youtube.com/watch?v=${data.id}`}>
            <div className={styles.card}>
                <img
                    className={styles.thumbnail}
                    src={data.thumbnail}
                    alt={`${data.title}의 썸네일`}
                />
                <div className={styles.info}>
                    <div className={styles.title}>{data.title}</div>
                    <div className={styles.meta}>
                        <div className={styles.view}>
                            { ProcessViewCount(data.viewCount) }
                        </div>
                        <div className={styles.time}>
                            { moment(data.date).fromNow() }
                        </div>
                    </div>
                    <a
                        className={styles.uploader}
                        href={`https://www.youyube.com/channel/${data.channelId}`}
                    >
                        <img 
                            className={styles['channel-image']}
                            src={data.channelThumbnail}
                            alt={`${data.channelTitle} 프로필 사진`}
                        />
                        <div className={styles.name}>{data.channelTitle}</div>
                    </a>
                    <div className={styles.desc}>{data.description}</div>
                </div>
            </div>
        </a>
    );
};

export default SearchCard;