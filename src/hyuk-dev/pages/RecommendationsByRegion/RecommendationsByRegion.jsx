import { useEffect, useRef, useState } from 'react';
import '../../css/recommendationsByRegion.css';
import { searchKeyword } from 'hyuk-dev/api/searchKeyword';
import { RecommendData } from './RecommendData';
import { mockData } from 'hyuk-dev/data/mock';
import { areaBasedList } from 'hyuk-dev/api/areaBasedList';

export function RecommendationsByRegion() {
  const [datas, setDatas] = useState([]);
  const [datasDetail, setDatasDetail] = useState({});
  const [region, setRegion] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  console.log(
    'pageNo',
    pageNo,
    'datasDetail.totalCount',
    datasDetail.totalCount
  );

  //데이터 불러옴
  useEffect(() => {
    setPageNo(1);
    async function getData() {
      setIsLoading(true);
      const result = await areaBasedList(region, pageNo);
      setDatas(result.items.item);
      setDatasDetail(result);

      setIsLoading(false);
    }
    getData();
  }, [region]);

  //isEnd 검증
  useEffect(() => {
    if (isLoading) return;
    if (pageNo * 5 >= datasDetail.totalCount) {
      setIsEnd(true);
    } else {
      setIsEnd(false);
    }
  }, [pageNo, datasDetail]);

  //추가 생성
  useEffect(() => {
    if (!isEnd && !isLoading) {
      async function getMoreData() {
        setIsLoading(true);
        const result = await areaBasedList(region, pageNo);
        setDatas([...datas, ...result.items.item]);
        setIsLoading(false);
      }
      getMoreData();
    }
  }, [pageNo, isEnd]);

  //지역 선택
  function handleRegionClick(e) {
    if (!isLoading) setRegion(Number(e.target.id));
  }

  //옵저버에 스크롤이 닿았을 때
  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading && !isEnd) {
      setPageNo((prevPageNo) => prevPageNo + 1);
    }
  };

  //스크롤 감지 div
  useEffect(() => {
    const io = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });
    const observerTarget = document.getElementById('observer');

    if (observerTarget) {
      io.observe(observerTarget);
    }

    return () => io.disconnect();
  }, []);

  return (
    <div className="recommendationsBoundary">
      <div className="recommendationsList">
        <h2 className="listTitle">애견동반 여행지 리스트</h2>
        <div className="message">지역을 선택해주세요!</div>
        <div className="regionList">
          <div
            className={region === 1 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={1}
          >
            서울
          </div>
          <div
            className={region === 2 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={2}
          >
            인천
          </div>
          <div
            className={region === 3 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={3}
          >
            대전
          </div>
          <div
            className={region === 4 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={4}
          >
            대구
          </div>
          <div
            className={region === 5 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={5}
          >
            광주
          </div>
          <div
            className={region === 6 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={6}
          >
            부산
          </div>
          <div
            className={region === 7 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={7}
          >
            울산
          </div>
          <div
            className={region === 38 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={38}
          >
            전라남도
          </div>
          <div
            className={region === 39 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={39}
          >
            제주도
          </div>
          <div
            className={region === 31 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={31}
          >
            경기도
          </div>
          <div
            className={region === 32 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={32}
          >
            강원특별자치도
          </div>
          <div
            className={region === 33 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={33}
          >
            충청북도
          </div>
          <div
            className={region === 34 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={34}
          >
            충청남도
          </div>
          <div
            className={region === 35 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={35}
          >
            경상북도
          </div>
          <div
            className={region === 36 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={36}
          >
            경상남도
          </div>
          <div
            className={region === 37 ? 'selectedRegion' : 'unSelectedRegion'}
            onClick={handleRegionClick}
            id={37}
          >
            전북특별자치도
          </div>
        </div>
        {datas ? datas.map((data, i) => {
          return <RecommendData data={data} key={i} />;
        }):<div>데이터를 불러오는데 실패했습니다.</div>}
      </div>
      {isLoading && (
        <div style={{ textAlign: 'center' }}>데이터를 불러오는 중입니다...</div>
      )}
      <div id="observer" style={{ height: '10px' }}></div>
    </div>
  );
}
