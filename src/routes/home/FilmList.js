import * as S from './FilmListStyled';
import Poster from '../../components/shared/Poster';
import { Link } from 'react-router-dom';

export default function FilmList({filmList, setSelectedFilmID}){
    return (
        <S.FilmList>
            {filmList.map((film, index)=>
            <Link to={`/filme/${film.id}`}>
                <Poster
                onClick={()=>setSelectedFilmID(film.id)}
                key={index}
                filmTitle={film.title}
                img={film.posterURL}/>
            </Link>
            )}   
        </S.FilmList>
    );
}