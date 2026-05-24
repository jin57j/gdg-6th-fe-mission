import { useState, useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';
import { fetchPriceSelectedData } from '../apis/productApi'; 
import styles from './PricePage.module.css';

const PricePage = () => {
  //  초기값 설정
  const [items, setItems] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  //  JSON 데이터 가져오기
  useEffect(() => {
    const getPriceData = async () => {
      const data = await fetchPriceSelectedData();
      if (data) {
        setItems(data.items || []);      // 상품 리스트 저장
        setMinPrice(data.low || 0);      // 초기 최소 가격 설정
        setMaxPrice(data.high || 0);     // 초기 최대 가격 설정
      }
    };
    getPriceData();
  }, []);

  const handleSearch = () => {
    console.log(`가격 검색: ${minPrice}원 ~ ${maxPrice}원`);
 
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.content}>
        {/* 가격 입력 섹션 */}
        <div className={styles.filterSection}>
          <input 
            type="number" 
            className={styles.priceInput}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="최소 가격"
          />
          <input 
            type="number" 
            className={styles.priceInput}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="최대 가격"
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            검색
          </button>
        </div>

        {/* 결과 리스트 */}
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

export default PricePage;