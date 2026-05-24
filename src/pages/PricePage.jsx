import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';
import Button from '../components/Button'; // 공통 버튼 임포트
import { useProductStore } from '../store/useProductStore';
import styles from './PricePage.module.css';

const PricePage = () => {
  const { items, minPrice, maxPrice, loadPriceData, setMinPrice, setMaxPrice } = useProductStore();

  useEffect(() => {
    loadPriceData();
  }, [loadPriceData]);

  const handleSearch = () => {
    console.log(`가격 검색: ${minPrice}원 ~ ${maxPrice}원`);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        <div className={styles.filterSection}>
          <input
            type="number"
            className={styles.priceInput}
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
            placeholder="최소 가격"
          />
          <input
            type="number"
            className={styles.priceInput}
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            placeholder="최대 가격"
          />

          {/* 공통 버튼 컴포넌트 적용 */}
          <Button variant="secondary" onClick={handleSearch}>
            검색
          </Button>
        </div>

        <div className={styles.itemList}>
          <p className={styles.resultCount}>내 구매 내역</p>
          {items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricePage;
