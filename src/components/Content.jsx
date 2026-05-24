import styles from './Content.module.css';

const Content = () => {
  return (
    <main className={styles.container}>
      {/* 검색창 영역 */}
      <div className={styles.searchSection}>
        <input type="text" placeholder="상품 검색..." className={styles.searchInput} />
        <button className={styles.searchButton}>검색</button>
      </div>

      {/* 배경 로고 및 메시지 영역 */}
      <div className={styles.resultSection}>
        <div className={styles.bgLogo} />
        <p className={styles.message}>검색 결과가 없습니다.</p>
      </div>
    </main>
  );
};

export default Content;
