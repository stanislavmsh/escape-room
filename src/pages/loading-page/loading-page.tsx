import styles from './loading-page.module.css';

export default function LoadingScreen(): JSX.Element {
  return (
    <img className={styles.loading} src="https://www.freeiconspng.com/uploads/load-icon-png-14.png" alt='Loading icon' />
  );
}
