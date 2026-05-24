import React, { useState } from 'react';
import styles from './Item.module.css';

const Item = ({ item }) => {
  // 1. 수량 상태
  const [count, setCount] = useState('');
  // 2. 장바구니 담기 완료 여부
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!count || count <= 0) {
      alert('수량을 입력해주세요!');
      return;
    }
    // 버튼 비활성화 상태로 변경
    setIsAdded(true);
    console.log(`${item.itemName} ${count}개가 장바구니에 담겼습니다.`);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.infoSection}>
        <h3 className={styles.itemName}>{item.itemName}</h3>
        <div className={styles.priceInfo}>
          <span className={styles.price}>{item.price} 원</span>
          <span className={styles.stock}>남은 수량: {item.quantity}개</span>
        </div>
      </div>

      <div className={styles.actionSection}>
        <input
          type="number"
          placeholder="개수 입력..."
          className={styles.countInput}
          value={count}
          onChange={e => setCount(e.target.value)}
          disabled={isAdded}
        />
        <button
          className={`${styles.cartButton} ${isAdded ? styles.disabled : ''}`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? '담기 완료' : '장바구니'}
        </button>
      </div>
    </div>
  );
};

export default Item;
