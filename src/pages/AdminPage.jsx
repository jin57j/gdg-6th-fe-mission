import Navbar from '../components/Navbar';
import ProductRegister from '../components/admin/ProductRegister';
import StockAdd from '../components/admin/StockAdd';
import ProductDelete from '../components/admin/ProductDelete';
import styles from './AdminPage.module.css';

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        {/* 분리된 3개의 핵심 섹션 컴포넌트 */}
        <ProductRegister />
        <StockAdd />
        <ProductDelete />
      </main>
    </div>
  );
};

export default AdminPage;
