import React from 'react';
import Detail from '../Detail';
import { movies } from '../movieDummy';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

export default function Movie({ title, poster_path, vote_average, detail }) {
    return (
        <div className="app-container">
            {movies.results.map((item) => {
                return (
                    <div id="mc" className="movie-container">
                        <img src={IMG_BASE_URL + item.poster_path} alt="영화 포스터" />
                        <div className="movie-info">
                            <h4>{item.title}</h4>
                            <span>{itme.vote_average}</span>
                        </div>
                        <Detail title={item.title} detail={item.detail} />
                    </div>
                );
            })}
        </div>
    );
}
