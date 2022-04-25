import PropTypes from 'prop-types';

import './HeroesMatches.css';

import { Todos } from './Todos';

export const HeroesMatches = ({ heroes, q }) => {

  return (
    <div className="card heroesMatches">
      <div className="card-body">

        <ul className="nav nav-tabs">
          <li className="nav-item"><a href="/" data-bs-target="#todos" className="nav-link active">Todo</a></li>
          <li className="nav-item"><a href="/" data-bs-target="#images" className="nav-link">Imagenes</a></li>
          <li className="nav-item"><a href="/" data-bs-target="#videos" className="nav-link">Videos</a></li>
        </ul>

        <div className="mt-3">
          <p>
            Cerca de
            <span className="heroesMatches__length"> {heroes.length} </span>
            resultados
            <span className="heroesMatches__time"> {0} </span>
            segundos
          </p>
          <h3>Se muestran resultados de <span className="heroesMatches__q">{q}</span></h3>
        </div>

        <div className="tab-content mt-3">
          <div className="tab-pane active" id="todos">
            <Todos heroes={heroes} />
          </div>
          <div className="tab-pane" id="images">Solo las imagenes van en esta vista...</div>
          <div className="tab-pane" id="videos">Solo los videos van en esta vista...</div>
        </div>

      </div>
    </div>
  )
}

HeroesMatches.propTypes = {
  heroes: PropTypes.array.isRequired,
  q: PropTypes.string.isRequired
}
