import React, { useMemo } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { NoResults } from './NoResults';
import { HeroesMatches } from './HeroesMatches';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q='' } = queryString.parse(location.search);

  const [formValue, onFormChange] = useForm({
    searchText: q
  });

  const { searchText } = formValue;

  const searchResult = useMemo(() => getHeroesByName(q), [q]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (searchText === '') return; 

    navigate(`?q=${searchText}`);
  }

  return (
    <div className="row search">
      <div className="col-5">

        <h1>Busqueda</h1>

        <form onSubmit={onFormSubmit}>
          <div className="mb-2">
            <input
              name="searchText"
              type="text"
              placeholder="Buscar heroe ..."
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={onFormChange}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Buscar</button>
          </div>
        </form>

      </div>
      <div className="col-7">
        {
          (searchResult.length > 0)
          ? <HeroesMatches heroes={searchResult} q={q} />
          : <div className="mt-3">
              {
                (q === '')
                ? <NoResults />
                : (searchResult.length === 0 && q !== '')
                    && <p className="mb-0 alert alert-info">No hay resultados para la busqueda <b>{q}</b></p>
              }
            </div>
        }
      </div>
    </div>
  );
}
