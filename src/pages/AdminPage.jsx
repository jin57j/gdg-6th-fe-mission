import { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from './AdminPage.module.css';
import { registerProduct, updateStock, deleteProductApi } from '../apis/productApi';

const AdminPage = () => {
  const [registerForm, setRegisterForm] = useState({ name: '', price: '', quantity: '', category: '' });
  const [stockForm, setStockForm] = useState({ name: '', quantity: '' });
  const [deleteName, setDeleteName] = useState('');

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
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        {/* 1. 상품 등록 */}
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
            <button className={styles.blueBtn} onClick={handleRegister}>
              등록
            </button>
          </div>
        </section>

        {/* 2. 재고 추가 */}
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
            <button className={styles.blueBtn} onClick={handleAddStock}>
              추가
            </button>
          </div>
        </section>

        {/* 3. 상품 삭제 */}
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
              <button className={styles.redBtn} onClick={handleDelete}>
                삭제
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
