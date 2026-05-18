import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';
import { fetchSortedData } from '../apis/productApi'; 
import styles from './SortingPage.module.css';

const SortingPage = () => {
  
  const [items, setItems] = useState([]);

  //  JSON 정렬 데이터를 받아옵니다.
  useEffect(() => {
    const getSortedData = async () => {
      const data = await fetchSortedData();
      if (data) {
        setItems(data); 
      }
    };
    getSortedData();
  }, []);

 
  const handleSort = (criteria) => {
    let sortedList = [...items]; 

    if (criteria === 'name') {
      // 이름순 (가나다) 정렬
      sortedList.sort((a, b) => a.itemName.localeCompare(b.itemName));
    } else if (criteria === 'price') {
      // 낮은 가격순 정렬
      sortedList.sort((a, b) => a.price - b.price);
    }

    setItems(sortedList);
    console.log(`${criteria} 기준으로 정렬됨`);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.content}>
        {/* 정렬 기준 선택 섹션 */}
        <div className={styles.filterSection}>
          <select 
            className={styles.select} 
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">정렬 기준 선택</option>
            <option value="name">이름순 (가나다)</option>
            <option value="price">낮은 가격순</option>
          </select>
        </div>

        {/* 정렬된 리스트 */}
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

export default SortingPage;