import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import styles from './AdminPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content} style={{ flex: 1 }}>
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
