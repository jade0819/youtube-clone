import React from 'react';
import styles from './css/HorizontalCard.module.css';
import { ProcessViewCount, ProcessUploadDate } from '../../utils';
// import 'moment/locale/ko';
// import moment from 'moment';


const HorizontalCard = ( {data} ) => {
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
                        <a
                            href={`https://www.youtube.com/channel/${data.channelId}`}
                            className={styles.uploader}
                        >
                        {data.channelTitle}
                        </a>
                        <div className={styles.view}>
                            { ProcessViewCount(data.viewCount) }
                        </div>
                        <div className={styles.time}>
                            {/* { moment(data.date).fromNow() } */}
                            { ProcessUploadDate(data.date) }
                        </div>
                    </div>
                    <div className={styles.desc}>{data.description}</div>
                </div>
            </div>
        </a>
    );
};

export default HorizontalCard;