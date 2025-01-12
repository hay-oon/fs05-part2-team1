import '../../css/recommendData.css'
import imgDefault from '../../../assets/images/no_image.png'

export function RecommendData ({data}) {
    function handleImgErr (e) {
        e.target.src = imgDefault;
    }
    return (
        <div className='dataDiv'>
            <img className='dataImg' src={data.firstimage?data.firstimage:imgDefault} onError={handleImgErr}/>
            <div className='dataInfo'>
                <h3>{data.title}</h3>
                <div>{data.addr1}</div>
                <div>{data.addr2}</div>
            </div>
        </div>

    )
}