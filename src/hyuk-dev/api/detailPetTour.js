export async function detailPetTour(infoData) {
    // 기본정보
    const baseUrl =
      'https://apis.data.go.kr/B551011/KorPetTourService/';
    const serviceKey =
      'AYFVlEd0R0QZWnDU3jbAkBnymp64940DxOVcMerjuDzMmqVUQ9nVmCLspL%2FZIwCwh0%2F2bu9Qp4%2FbkAcxmybS1w%3D%3D';
    const MobileOS = 'ETC';
    const MobileApp = 'PetTourRecommendation';
  
    // 변화되는 정보
    const apiName = 'detailPetTour';

  
    const url = `${baseUrl}`+
    `${apiName}?` +
    `serviceKey=${serviceKey}` +
    `&MobileOS=${MobileOS}` +
    `&MobileApp=${MobileApp}` +
    `&contentId=${infoData.contentid}` +
    `&_type=json`;
  
    try {
      const response = await fetch(url, { method: 'GET' });
  
      // 응답 상태
      if (!response.ok) {
        throw new Error(`Response Error - ${response.status}`);
      }
  
      const result = await response.json();
      return result.response.body.items.item[0];
  
    } catch (err) {
      console.error('Error - ', err);
      return { error: err.message };
    }
}
export async function detailIntro(infoData) {
    // 기본정보
    const baseUrl =
      'https://apis.data.go.kr/B551011/KorPetTourService/';
    const serviceKey =
      'AYFVlEd0R0QZWnDU3jbAkBnymp64940DxOVcMerjuDzMmqVUQ9nVmCLspL%2FZIwCwh0%2F2bu9Qp4%2FbkAcxmybS1w%3D%3D';
    const MobileOS = 'ETC';
    const MobileApp = 'PetTourRecommendation';
  
    // 변화되는 정보
    const apiName = 'detailIntro';

  
    const url = `${baseUrl}`+
    `${apiName}?` +
    `serviceKey=${serviceKey}` +
    `&MobileOS=${MobileOS}` +
    `&MobileApp=${MobileApp}` +
    `&contentId=${infoData.contentid}` +
    `&contentTypeId=${infoData.contenttypeid}` +
    `&_type=json`;
  
    try {
      const response = await fetch(url, { method: 'GET' });
  
      // 응답 상태
      if (!response.ok) {
        throw new Error(`Response Error - ${response.status}`);
      }
  
      const result = await response.json();
      return result.response.body.items.item[0];
  
    } catch (err) {
      console.error('Error - ', err);
      return { error: err.message };
    }
}
  