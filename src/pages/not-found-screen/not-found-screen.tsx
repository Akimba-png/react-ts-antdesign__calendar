import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <>
    <h1>Page not Found</h1>
    <Link to={AppRoute.Main}>link to main page</Link>
    </>
  );
}

export default NotFoundScreen;