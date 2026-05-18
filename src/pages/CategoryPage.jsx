import React, { useState, useEffect } from 'react'; // 수정 1: 여기!
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';
import { fetchCategoryData } from '../apis/productApi';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
  const [items, setItems] = useState([]);

  // 데이터를 서버에서 받아옵니다.
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchCategoryData(); // fetch 함수 실행
      console.log("서버에서 온 데이터:", data);
      if (data) {
        setItems(data); 
      }
    };
    getProducts();
  }, []);

  const handleCategoryClick = (name) => {
    console.log(`${name} 카테고리 클릭`);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.content}>
        {/* 카테고리 선택 드롭다운  */}
        <div className={styles.filterSection}>
          <select 
            className={styles.select} 
            onChange={(e) => handleCategoryClick(e.target.value)}
          >
            <option value="">카테고리 선택</option>
            <option value="의류">의류</option>
            <option value="전자기기">전자기기</option>
            <option value="화장품">화장품</option>
            <option value="식품">식품</option>
          </select>
        </div>

        {/* 선택된 카테고리의 상품 리스트 */}
        <div className={styles.itemList}>
          <p className={styles.resultCount}>내 구매 내역</p>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;