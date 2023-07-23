import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

const UIWrapper = ({ children }: Props) => {
  return (
    <div className={styles.uiwrapper}>
      <div className={styles.help}>Help ?</div>
      <div className={styles.content}>{children}</div>
      <div className={styles.background} />
    </div>
  );
};

export default UIWrapper;
