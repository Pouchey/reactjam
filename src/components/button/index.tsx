import styles from './style.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
}

const Button = ({ children, color = 'primary', ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
