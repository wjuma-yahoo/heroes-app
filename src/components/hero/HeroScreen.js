import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroScreen = () => {

  // Navigate Hook
  const navigate = useNavigate();

  // Getting heroeId from params
  const { heroeId } = useParams();

  // Obtain heroe
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

  // Error finding heroe redirect page /marvel
  if (!heroe) {
    return <Navigate to="/marvel" />
  }

  // Extraer heroe info
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = heroe;

  // Vars
  const imagePath = `/assets/${id}.jpg`;

  // Events
  const handleReturn = () => {
    navigate( -1 );
  }

  return (
    <div className="row">
      <div className="col-4">
        <img className="img-thumbnail animate__animated animate__fadeInLeft" src={imagePath} alt={superhero} />
      </div>
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{heroe.superhero}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> { alter_ego }</li>
              <li className="list-group-item"><b>Publisher:</b> { publisher }</li>
              <li className="list-group-item"><b>First appearance:</b> { first_appearance }</li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{characters}</p>
            <button onClick={handleReturn} className="btn btn-primary mt-3">Regresar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
