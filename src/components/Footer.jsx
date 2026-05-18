import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button className={styles.buyButton}>
        장바구니 구매하기
      </button>
    </footer>
  );
};

export default Footer;