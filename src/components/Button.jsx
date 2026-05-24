import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary', // primary, secondary, danger 중 선택
  type = 'button',
  disabled = false,
  className = '', // 외부 페이지에서 줄 추가 스타일 (예: 마진, 너비 등)
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      // 기본 클래스 + variant 클래스 + 외부 주입 클래스를 안전하게 합침
      className={`${styles.btn} ${styles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
