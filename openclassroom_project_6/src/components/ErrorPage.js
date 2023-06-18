import { useRouteError } from "react-router-dom";
import Nav from './Nav';
import '../styles/ErrorPage.css';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
        <Nav />
        <div className="error_page_div">
            <h1 className="h1_error_page">404</h1>
            <h2 className="h2_error_page">Oups! La page que vous demandez n'existe pas.</h2>
            <a className="a_error_page" href={`/`}>Retourner sur la page d’accueil</a>
        </div>
    </div>
  );
}

export default ErrorPage
