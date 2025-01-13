import { useEffect, useState } from 'react';
import '../../css/nearMyLocation.css';
import { locationBasedList } from 'hyuk-dev/api/locationBasedList';
import { RecommendData } from '../RecommendationsByRegion/RecommendData';
export function NearMyLocation() {
  const [latitude, setLatitude] = useState(''); //위도
  const [longitude, setLongitude] = useState(''); //경도
  const [nearData, setNearData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  function success(e) {
    setLatitude(e.coords.latitude); //위도값
    setLongitude(e.coords.longitude); //경도
  }

  function fail(e) {
    alert('위치를 불러오는데 실패하였습니다.');
  }

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      setPageNo((prevPageNo) => prevPageNo + 1);
    }
  };

  useEffect(() => {
    if (!isLoading && longitude && latitude) {
      setIsLoading(true);
      async function getData() {
        const result = await locationBasedList(longitude, latitude);
        setNearData(result);
      }
      getData();
      setIsLoading(false);
    }
  }, [longitude,latitude]);


  // useEffect(() => {
  //   if (pageNo === 1) return;
  //   async function getMoreData() {
  //     setIsLoading(true);
  //     const result = await locationBasedList(longitude, latitude, pageNo);
  //     setNearData([...nearData, ...result]);
  //     setIsLoading(false);
  //   }
  //   getMoreData();
  // }, [pageNo]);

  // useEffect(() => {
  //   const io = new IntersectionObserver(handleObserver, {
  //     threshold: 0,
  //   });
  //   const observerTarget = document.getElementById('observer');

  //   if (observerTarget) {
  //     io.observe(observerTarget);
  //   }

  //   return () => io.disconnect();
  // }, []);


  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(success, fail);
    }
  }, []);

  console.log('nearData:', nearData);

  return (
    <div className="nearMyLocationDiv">
      <h2>주변의 애견동반 여행지</h2>
      {nearData ? nearData.map((data, i) => {
        return <RecommendData data={data} key={i} />;
      }): <div>주변에서 찾을 수 없습니다.</div>}
      <div id="observer" style={{ height: '10px' }}></div>
    </div>
  );
}
