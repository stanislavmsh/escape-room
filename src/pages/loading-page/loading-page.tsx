import styles from './loading-page.module.css';

export default function LoadingScreen(): JSX.Element {
  return (
    <img className={styles.loading} src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/29888.png" alt='Loading icon' />
  );
}
