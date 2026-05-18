// 1. 카테고리 데이터 불러오기
export const fetchCategoryData = async () => {
  try {
    const response = await fetch('/data/category.json');
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
    const response = await fetch('/data/item.json');
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
    const response = await fetch('/data/priceSelected.json');
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
    const response = await fetch('/data/sorted.json');
    if (!response.ok) throw new Error('정렬 데이터를 불러오는데 실패했습니다.');
    return await response.json();
  } catch (error) {
    console.error('Error fetching sorted data:', error);
    return null;
  }
};