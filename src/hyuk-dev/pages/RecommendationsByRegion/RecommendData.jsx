import '../../css/recommendData.css'
import imgDefault from '../../../assets/images/no_image.png'
import { Link } from 'react-router-dom';

export function RecommendData ({data}) {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');

    function handleImgErr (e) {
        e.target.src = imgDefault;
    }
    return (
        <Link to='/hyuk/dataInfoDetails/' state={{infoData:data}} style={{ textDecoration: "none"}}>
        <div className='dataDiv'>
            <img className='dataImg' src={data.firstimage?data.firstimage:imgDefault} onError={handleImgErr}/>
            <div className='dataInfo'>
                <h3>{data.title}</h3>
                <div>{data.addr1}</div>
                <div>{data.addr2}</div>
            </div>
        </div>
        </Link>

    )
}