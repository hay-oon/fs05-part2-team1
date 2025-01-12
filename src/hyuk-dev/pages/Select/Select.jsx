import { Link } from 'react-router-dom'
import '../../css/select.css'

export function Select () {
    return (
        <div className="selectDiv">
            <div className='userSelectDiv'>
                <h3>원하는 정보를 선택하세요!</h3>
                <Link to='/hyuk/recommendationsByRegion/'>
                    <button>지역별 여행지 추천</button>
                </Link>
                <Link to='/hyuk/#'>
                    <button>내 위치 근처 지역의 여행지 추천</button>
                </Link>
                
            </div>
        </div>
    )
}