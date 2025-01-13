import '../../css/searchByKeyword.css';
import searchButtonImg from '../../../assets/images/hyuk-search-icon.png'
import { useState } from 'react';
import { searchKeyword } from 'hyuk-dev/api/searchKeyword';
import { RecommendData } from '../RecommendationsByRegion/RecommendData';

export function SearchByKeyword(){
    const [searchData,setSearchData] = useState();
    const [keyword,setKeyword] = useState('');
    
    async function handleSearchClick() {
        const response = await searchKeyword(keyword);
        setSearchData(response);
    }
    console.log(searchData);
    function handleSearchInput(e) {
        setKeyword(e.target.value);
    }
    return(
        <div className="searchByKeywordDiv">
            <h3>검색어를 입력하세요!</h3>
            <div className='searchBar'>
                <input className='searchInput' onChange={handleSearchInput}></input>
                <img className='searchImage' src={searchButtonImg} onClick={handleSearchClick}/>
            </div>
            {
                searchData && searchData.map((data, i) => {
                    return <RecommendData data={data} key={i} />;
                })

            }
        </div>
    )
}