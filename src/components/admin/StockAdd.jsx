import { useState } from 'react';
import Button from '../Button';
import { updateStock } from '../../apis/productApi';
import styles from '../../pages/AdminPage.module.css';

const StockAdd = () => {
  const [stockForm, setStockForm] = useState({ name: '', quantity: '' });

  const handleAddStock = async () => {
    const { name, quantity } = stockForm;
    if (!name || !quantity) return alert('상품명과 수량을 입력해주세요.');

    try {
      await updateStock(name, Number(quantity));
      alert(`${name} 상품의 재고가 ${quantity}개 추가되었습니다.`);
      setStockForm({ name: '', quantity: '' });
    } catch {
      alert('재고 추가 중 오류가 발생했습니다.');
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>재고 추가</h2>
      <div className={styles.formBox}>
        <div className={styles.inputGrid}>
          <div className={styles.inputGroup}>
            <label>상품명</label>
            <input
              type="text"
              placeholder="상품명 입력..."
              value={stockForm.name}
              onChange={e => setStockForm({ ...stockForm, name: e.target.value })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>수량</label>
            <input
              type="number"
              placeholder="0"
              value={stockForm.quantity}
              onChange={e => setStockForm({ ...stockForm, quantity: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.btnRight}>
          <Button variant="secondary" onClick={handleAddStock}>
            추가
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StockAdd;
