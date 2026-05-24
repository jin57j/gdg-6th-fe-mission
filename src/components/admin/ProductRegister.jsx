import { useState } from 'react';
import Button from '../Button';
import { registerProduct } from '../../apis/productApi';
import styles from '../../pages/AdminPage.module.css';

const ProductRegister = () => {
  const [registerForm, setRegisterForm] = useState({ name: '', price: '', quantity: '', category: '' });

  const handleRegister = async () => {
    const { name, price, quantity } = registerForm;
    if (!name || !price || !quantity) {
      return alert('상품명, 수량, 가격을 모두 입력해주세요.');
    }

    const newItem = {
      itemName: name,
      price: Number(price),
      quantity: Number(quantity),
    };

    try {
      const result = await registerProduct(newItem);
      console.log('서버 응답 결과:', result);
      alert(`${name} 상품이 성공적으로 등록되었습니다.`);
      setRegisterForm({ name: '', price: '', quantity: '', category: '' });
    } catch {
      alert('상품 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>상품 등록</h2>
      <div className={styles.formBox}>
        <div className={styles.inputGrid}>
          <div className={styles.inputGroup}>
            <label>상품명</label>
            <input
              type="text"
              placeholder="상품명 입력..."
              value={registerForm.name}
              onChange={e => setRegisterForm({ ...registerForm, name: e.target.value })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>수량</label>
            <input
              type="number"
              placeholder="0"
              value={registerForm.quantity}
              onChange={e => setRegisterForm({ ...registerForm, quantity: e.target.value })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>가격</label>
            <input
              type="number"
              placeholder="0"
              value={registerForm.price}
              onChange={e => setRegisterForm({ ...registerForm, price: e.target.value })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>카테고리</label>
            <input
              type="text"
              placeholder="카테고리 선택"
              value={registerForm.category}
              onChange={e => setRegisterForm({ ...registerForm, category: e.target.value })}
            />
          </div>
        </div>
        <p className={styles.notice}>* 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용해주세요.</p>

        <div className={styles.btnRight}>
          <Button variant="secondary" onClick={handleRegister}>
            등록
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductRegister;
