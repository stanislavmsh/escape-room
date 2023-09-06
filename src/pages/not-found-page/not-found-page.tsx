import { Link } from 'react-router-dom';
import Header from '../../components/header/header';


export default function NotFoundPage(): JSX.Element {

  return(

    <div className="wrapper">
      <Header />
      <section className="not--found">
        <h1>404. Page not found
        </h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>
  );
}
