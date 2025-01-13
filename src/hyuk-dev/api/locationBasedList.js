export async function locationBasedList(longitude,latitude,pageNo) {
    // 기본정보
    const baseUrl =
      'https://apis.data.go.kr/B551011/KorPetTourService/';
    const serviceKey =
      'PXuIQOq2fdqGdnEGgF4OduaVMgvVK%2BPGa%2FarCi7B%2B36oXTLcH%2Bwnc%2F92xaDP%2FZHITRrN%2FCz1Jn6QmNQlYnTmuQ%3D%3D';
    const MobileOS = 'ETC';
    const MobileApp = 'PetTourRecommendation';
  
    // 변화되는 정보
    const apiName = 'locationBasedList';

  
    const url = `${baseUrl}`+
    `${apiName}?` +
    `serviceKey=${serviceKey}` +
    `&MobileOS=${MobileOS}` +
    `&MobileApp=${MobileApp}` +
    `&mapX=${longitude}` +
    `&mapY=${latitude}` +
    `&pageNo=${pageNo}` +
    `&radius=10000` +
    `&numOfRows=50` +
    `&_type=json`;
  
    try {
      const response = await fetch(url, { method: 'GET' });
  
      // 응답 상태
      if (!response.ok) {
        throw new Error(`Response Error - ${response.status}`);
      }
  
      const result = await response.json();
      return result.response.body.items.item;

    } catch (err) {
      console.error('Error - ', err);
      return { error: err.message };
    }
}
  