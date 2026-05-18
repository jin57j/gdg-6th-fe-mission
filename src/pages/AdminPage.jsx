import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from './AdminPage.module.css';

const AdminPage = () => {
  // 1. 상품 등록 상태
  const [registerForm, setRegisterForm] = useState({ name: '', price: '', qty: '', category: '' });
  // 2. 재고 추가 상태
  const [stockForm, setStockForm] = useState({ name: '', qty: '' });
  // 3. 상품 삭제 상태
  const [deleteName, setDeleteName] = useState('');

  // 1. 상품 등록 구현하기
  const handleRegister = () => {
    // 요구사항 1: 데이터 형태 객체 출력
    const newItem = {
      id: Date.now(), // 숫자로 된 임의의 id 생성
      itemName: registerForm.name,
      price: Number(registerForm.price),
      quantity: Number(registerForm.qty)
    };
    console.log(newItem);
    
    // 요구사항 2: 예시와 동일한 문자열 출력
    console.log(`${registerForm.name} ${registerForm.qty} ${registerForm.price} ${registerForm.category} 가 등록되었습니다.`);
  };

  // 2. 재고 추가 구현하기
  const handleAddStock = () => {
    // 요구사항: 예시와 동일한 문자열 출력
    console.log(`${stockForm.name} ${stockForm.qty} 가 추가되었습니다.`);
  };

  // 3. 상품 삭제 구현하기
  const handleDelete = () => {
    // 요구사항: 예시와 동일한 문자열 출력
    console.log(`${deleteName} 가 삭제되었습니다.`);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.content}>
        {/* 1. 상품 등록 섹션 */}
        <section className={styles.section}>
          <h2 className={styles.title}>상품 등록</h2>
          <div className={styles.formBox}>
            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label>상품명</label>
                <input type="text" placeholder="상품명 입력..." onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})} />
              </div>
              <div className={styles.inputGroup}>
                <label>수량</label>
                <input type="number" placeholder="0" onChange={(e) => setRegisterForm({...registerForm, qty: e.target.value})} />
              </div>
              <div className={styles.inputGroup}>
                <label>가격</label>
                <input type="number" placeholder="0" onChange={(e) => setRegisterForm({...registerForm, price: e.target.value})} />
              </div>
              <div className={styles.inputGroup}>
                <label>카테고리</label>
                <input type="text" placeholder="카테고리 선택" onChange={(e) => setRegisterForm({...registerForm, category: e.target.value})} />
              </div>
            </div>
            <p className={styles.notice}>* 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용해주세요.</p>
            <button className={styles.blueBtn} onClick={handleRegister}>등록</button>
          </div>
        </section>

        {/* 2. 재고 추가 섹션 */}
        <section className={styles.section}>
          <h2 className={styles.title}>재고 추가</h2>
          <div className={styles.formBox}>
            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label>상품명</label>
                <input type="text" placeholder="상품명 입력..." onChange={(e) => setStockForm({...stockForm, name: e.target.value})} />
              </div>
              <div className={styles.inputGroup}>
                <label>수량</label>
                <input type="number" placeholder="0" onChange={(e) => setStockForm({...stockForm, qty: e.target.value})} />
              </div>
            </div>
            <button className={styles.blueBtn} onClick={handleAddStock}>추가</button>
          </div>
        </section>

        {/* 3. 상품 삭제 섹션 */}
        <section className={styles.section}>
          <h2 className={styles.title}>상품 삭제</h2>
          <div className={styles.formBox}>
            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label>상품명</label>
                <input type="text" placeholder="상품명 입력..." onChange={(e) => setDeleteName(e.target.value)} />
              </div>
            </div>
            <div className={styles.btnRight}>
              <button className={styles.redBtn} onClick={handleDelete}>삭제</button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AdminPage;