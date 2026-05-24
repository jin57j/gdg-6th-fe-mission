import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';
import { useProductStore } from '../store/useProductStore';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
  const { items, loadCategoryData } = useProductStore();

  useEffect(() => {
    loadCategoryData();
  }, [loadCategoryData]);

  const handleCategoryClick = name => {
    console.log(`${name} 카테고리 클릭`);
    // 추후 필요 시 카테고리 필터링 API 연동 가능
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        <div className={styles.filterSection}>
          <select className={styles.select} onChange={e => handleCategoryClick(e.target.value)}>
            <option value="">카테고리 선택</option>
            <option value="의류">의류</option>
            <option value="전자기기">전자기기</option>
            <option value="화장품">화장품</option>
            <option value="식품">식품</option>
          </select>
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

export default CategoryPage;
