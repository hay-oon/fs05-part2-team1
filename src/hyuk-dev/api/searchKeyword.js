export async function searchKeyword(keyword) {
  // 기본정보
  const baseUrl =
    'https://apis.data.go.kr/B551011/KorPetTourService/';
  const serviceKey =
    'AYFVlEd0R0QZWnDU3jbAkBnymp64940DxOVcMerjuDzMmqVUQ9nVmCLspL%2FZIwCwh0%2F2bu9Qp4%2FbkAcxmybS1w%3D%3D';
  const MobileOS = 'ETC';
  const MobileApp = 'PetTourRecommendation';

  // 변화되는 정보
  const apiName = 'searchKeyword';

  const url = `${baseUrl}`+
  `${apiName}?` +
  `serviceKey=${serviceKey}` +
  `&MobileOS=${MobileOS}` +
  `&MobileApp=${MobileApp}` +
  `&keyword=${keyword}` +
  `&numOfRows=30` +
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
