import 'moment/locale/ko';
import moment from 'moment';

function ProcessViewCount( viewCount ) {
    
    if(viewCount < 1000)
        return `조회수 ${viewCount}회`;
    else if(viewCount < 10000)
        return `조회수 ${ (viewCount / 1000).toFixed(1) }천회`;
    else if(viewCount < 100000)
        return `조회수 ${ (viewCount / 10000).toFixed(1) }만회`;
    else if(viewCount < 1000000)
        return `조회수 ${ (viewCount / 100000).toFixed(0) }만회`;
    else
        return `조회수 ${ (viewCount / 1000000).toFixed(0) }억회`;
}

function ProcessUploadDate(uploadDate) {
    
    const date = moment(uploadDate);
    const standard = moment('2021-09-16T13:15:02');
    return date.from(standard)
}

export { ProcessViewCount , ProcessUploadDate };