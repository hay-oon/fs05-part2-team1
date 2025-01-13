import '../../css/main.css';
import { Link } from 'react-router-dom';
import mainVideo from '../../../assets/videos/hyuk_main_video.mp4';
import { useEffect } from 'react';

export function IntroduceHyuk() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mainDiv">
        <div className="mainSection">
          <h1 className='mainSectionTitle'>반려동물과 함께 여행을 떠나볼까요?</h1>
          <div className='buttonDiv'>
          <Link to={"/hyuk/select"}>
            <button className='mainButton'>네!</button>
          </Link>
          <Link to={"/hyuk/select"}>
            <button className='mainButton'>그래요!</button>
          </Link>
          </div>

        </div>
      </div>
      <video class='backgroundVideoContent' preload='auto' autoplay='true' muted='muted' loop='loop'>
              <source src={mainVideo} type='video/mp4' />
            </video>
    </>
  );
}
