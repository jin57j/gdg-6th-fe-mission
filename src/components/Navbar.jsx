import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //  현재 주소가 '/admin'인지 확인
  const isAdminPage = location.pathname === '/admin';

  return (
    <nav className={styles.navbar}>
      {/* 왼쪽: 로고 아이콘 */}
      <div className={styles.logoIcon} onClick={() => navigate('/')} />

      {/* 가운데: 메뉴 리스트 (관리자 페이지가 아닐 때만 렌더링) */}
      {!isAdminPage && (
        <ul className={styles.menuList}>
          <li className={styles.menuItem} onClick={() => navigate('/category')}>
            카테고리 필터링
          </li>
          <li className={styles.menuItem} onClick={() => navigate('/price')}>
            가격 범위 필터링
          </li>
          <li className={styles.menuItem} onClick={() => navigate('/sorting')}>
            상품 정렬
          </li>
        </ul>
      )}

      {isAdminPage ? (
        <button className={styles.adminButton} onClick={() => navigate('/')}>
          소비자
        </button>
      ) : (
        <button className={styles.adminButton} onClick={() => navigate('/admin')}>
          관리자
        </button>
      )}
    </nav>
  );
};

export default Navbar;
