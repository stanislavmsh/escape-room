import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import styles from './not-found-page.module.css';


export default function NotFoundPage(): JSX.Element {

  return(

    <div className="wrapper">
      <Header />
      <section className="not--found">
        <p className={`title title--size-s ${styles['not--found']}`}>404. Page not found</p>
        <div className={`title ${styles['back']}`} >
          <Link to="/">Вернуться на главную</Link>
        </div>
      </section>
    </div>
  );
}
