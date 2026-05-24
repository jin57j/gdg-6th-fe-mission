import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import styles from './AdminPage.module.css'; // 구조용 컨테이너 스타일 공유

const MainPage = () => {
  return (
    <div className={styles.container}>
      {/* 1. 상단 바 */}
      <Navbar />

      {/* 2. 중앙 검색 및 로고 영역 */}
      <div style={{ flex: 1 }}>
        <Content />
      </div>

      {/* 3. 하단 구매 버튼 */}
      <Footer />
    </div>
  );
};

export default MainPage;
