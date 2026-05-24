import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';
import { useProductStore } from '../store/useProductStore';
import styles from './SortingPage.module.css';

const SortingPage = () => {
  const { items, loadSortedData, setItems } = useProductStore();

  useEffect(() => {
    loadSortedData();
  }, [loadSortedData]);

  const handleSort = criteria => {
    if (!criteria) return;

    // 불변성을 지키며 새로운 배열 생성 후 정렬
    const sortedList = [...items].sort((a, b) => {
      if (criteria === 'name') {
        return a.itemName.localeCompare(b.itemName);
      }
      if (criteria === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

    setItems(sortedList);
    console.log(`${criteria} 기준으로 정렬됨`);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        <div className={styles.filterSection}>
          <select className={styles.select} onChange={e => handleSort(e.target.value)}>
            <option value="">정렬 기준 선택</option>
            <option value="name">이름순 (가나다)</option>
            <option value="price">낮은 가격순</option>
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

export default SortingPage;
