

// 1. 카테고리 데이터 불러오기
export const fetchCategoryData = async () => {
  try {
    const response = await fetch('http://192.168.228.137:8080/products');
    if (!response.ok) throw new Error('카테고리 데이터를 불러오는데 실패했습니다.');
    return await response.json();
  } catch (error) {
    console.error('Error fetching category data:', error);
    return null;
  }
};

// 2. 전체 아이템 데이터 불러오기 (필요시)
export const fetchItemData = async () => {
  try {
    const response = await fetch('http://192.168.228.137:8080/products/name="사과"');
    if (!response.ok) throw new Error('아이템 데이터를 불러오는데 실패했습니다.');
    return await response.json();
  } catch (error) {
    console.error('Error fetching item data:', error);
    return null;
  }
};

// 3. 가격순 데이터 불러오기
export const fetchPriceSelectedData = async () => {
  try {
    const response = await fetch('http://192.168.228.137:8080/products');
    if (!response.ok) throw new Error('가격 데이터를 불러오는데 실패했습니다.');
    return await response.json();
  } catch (error) {
    console.error('Error fetching price data:', error);
    return null;
  }
};

// 4. 정렬된 데이터 불러오기
export const fetchSortedData = async () => {
  try {
    const response = await fetch('http://192.168.228.137:8080/products');
    if (!response.ok) throw new Error('정렬 데이터를 불러오는데 실패했습니다.');
    return await response.json();
  } catch (error) {
    console.error('Error fetching sorted data:', error);
    return null;
  }
};

export const registerProduct = async (productData) => {
  try {
    const response = await fetch('http://192.168.228.137:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData), // 프론트에서 만든 객체를 JSON으로 변환해서 전송
    });

    if (!response.ok) throw new Error('상품 등록에 실패했습니다.');
    return await response.json(); // 또는 성공했다는 텍스트 반환
  } catch (error) {
    console.error('Error register:', error);
    throw error;
  }
};

// 2. 재고 추가/수정 (일반적으로 PUT 또는 PATCH 사용)
// URL 예시: 백엔드에서 이름으로 조회해서 업데이트 한다고 가정
export const updateStock = async (name, qty) => {
  try {
    const response = await fetch(`http://192.168.228.137:8080/products/${name}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: qty }),
    });

        if (!response.ok) throw new Error('재고 추가에 실패했습니다.');
    return true; 
  } catch (error) {
    console.error('Error update stock:', error);
    throw error;
  }
};

// 3. 상품 삭제 (DELETE 요청)
export const deleteProductApi = async () => {
  try {
    const response = await fetch(`http://192.168.228.137:8080/products/name`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('상품 삭제에 실패했습니다.');
    return true;
  } catch (error) {
    console.error('Error delete:', error);
    throw error;
  }
};