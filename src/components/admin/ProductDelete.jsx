import { useState } from 'react';
import Button from '../Button';
import { deleteProductApi } from '../../apis/productApi';
import styles from '../../pages/AdminPage.module.css';

const ProductDelete = () => {
  const [deleteName, setDeleteName] = useState('');

  const handleDelete = async () => {
    if (!deleteName) return alert('삭제할 상품명을 입력해주세요.');

    if (window.confirm(`정말로 ${deleteName} 상품을 삭제하시겠습니까?`)) {
      try {
        await deleteProductApi(deleteName);
        alert(`${deleteName} 상품이 삭제되었습니다.`);
        setDeleteName('');
      } catch {
        alert('商品 삭제 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>상품 삭제</h2>
      <div className={styles.formBox}>
        <div className={styles.inputGrid}>
          <div className={styles.inputGroup}>
            <label>상품명</label>
            <input
              type="text"
              placeholder="상품명 입력..."
              value={deleteName}
              onChange={e => setDeleteName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.btnRight}>
          {/* 공통 버튼 적용 (위험 액션이므로 danger 타입 적용) */}
          <Button variant="danger" onClick={handleDelete}>
            삭제
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDelete;
