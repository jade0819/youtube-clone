import React from 'react';
import styles from './css/Search.module.css';
import Layout from '../components/shared/Layout';
import sortedYoutubeData from '../data/sortedYoutubeData.json';
import ContentsLayout from '../components/shared/ContentsLayout';
import SearchCard from '../components/search/SearchCard';
import { useLocation } from 'react-router-dom';


const Search = () => {
    const location = useLocation();
    const searchText = location.state.searchText;

    const searchData = sortedYoutubeData['data'].filter( item => {

        if( item.category === searchText || item.title.includes(searchText) || item.description.includes(searchText) || item.channelTitle.includes(searchText) || item.channelUrl.includes(searchText) )
            return true;

        return false;
    });


    return (
        <Layout activeMenu="subscription" searchKeyword={searchText}>
            <ContentsLayout>
                {
                    searchData.length > 0 ?
                    searchData.map( (data, index) => <SearchCard key={`search-card-${index}`} data={data} />)
                    :
                    <div className={styles.nodata}>데이터가 없습니다.</div>
                }
            </ContentsLayout>
        </Layout>
    );
};

export default Search;