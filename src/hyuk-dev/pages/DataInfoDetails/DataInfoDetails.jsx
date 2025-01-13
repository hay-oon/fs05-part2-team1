import '../../css/dataInfoDetails.css';
import { useLocation } from 'react-router-dom';
import imgDefault from '../../../assets/images/no_image.png';
import { useEffect, useState } from 'react';
import { detailIntro } from '../../api/detailIntro.js';
import { detailPetTour } from 'hyuk-dev/api/detailPetTour';

export function DataInfoDetails() {
  const location = useLocation();
  const infoData = location.state.infoData;
  const [detailIntroData, setDetailIntroData] = useState({});
  const [detailPetTourData, setDetailPetTourData] = useState({});

  function handleImgErr(e) {
    e.target.src = imgDefault;
  }

  useEffect(() => {
    async function getData() {
      const result = await detailIntro(infoData);
      setDetailIntroData(result);
    }
    getData();

    async function getTourData() {
      const tourResult = await detailPetTour(infoData);
      setDetailPetTourData(tourResult);
    }
    getTourData();
  }, []);

  return (
    <div className="dataInfoDiv">
      <img
        className="dataInfoImg"
        src={infoData.firstimage ? infoData.firstimage : imgDefault}
        onError={handleImgErr}
      />
      <h2>{infoData.title}</h2>
      <p>{infoData.addr1}</p>
      {infoData.tel && <p>tel.{infoData.tel}</p>}
      {detailIntroData.usetime && (
        <div className="usetime">
          <h3>영업 시간</h3>
          {detailIntroData.usetime}
        </div>
      )}
        <h4>애견 동반 여부</h4>
      <div className="tags">
        {detailPetTourData.acmpyTypeCd && (
          <div> {detailPetTourData.acmpyTypeCd}</div>
        )}
        {detailPetTourData.etcAcmpyInfo && (
          <div>{detailPetTourData.etcAcmpyInfo}</div>
        )}
      </div>
    </div>
  );
}
