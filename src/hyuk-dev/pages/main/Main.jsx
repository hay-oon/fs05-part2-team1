import '../../css/main.css';
import { Link } from 'react-router-dom';

export function IntroduceHyuk() {
  return (
    <>
      <div className="mainDiv">
        <div className="mainSection">
          <h1 className='mainSectionTitle'>반려동물과 함께 여행을 떠나볼까요?</h1>
          <Link to={"/hyuk/select"}>
            <button className='mainSectionButton'>네!</button>
          </Link>
        </div>
      </div>
    </>
  );
}
