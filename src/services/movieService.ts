import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

interface Movie {
    title: string;
    release_date: string;
    vote_average: number;
    editors: string[];
}

interface MovieCredits {
    crew: {
        known_for_department: string;
        name: string;
    }[];
}

export async function getMoviesByYear(year: number, page: number = 1): Promise<Movie[]> {
    if (isNaN(year)) {
        throw new Error('The year parameter must be a valid number.');
    }

    try {
        // Fetch movies for the given year, sorted by descending popularity
        const discoverResponse = await axios.get(`${BASE_URL}discover/movie`, {
            params: {
                language: 'en-US',
                page,
                primary_release_year: year,
                sort_by: 'popularity.desc',
                api_key: TMDB_API_KEY,
            },
        });

        const movies = discoverResponse.data.results;

        // Fetch editors (movie credits)
        for (const movie of movies) {
            try {
                const creditsResponse = await axios.get<MovieCredits>(`${BASE_URL}movie/${movie.id}/credits`, {
                    params: { api_key: TMDB_API_KEY },
                });

                const editors = creditsResponse.data.crew
                    .filter((person) => person.known_for_department === 'Editing')
                    .map((editor) => editor.name);

                movie.editors = editors;
            } catch (err) {
                console.error(`Error fetching credits for movie: ${movie.title}`, err);
                movie.editors = [];
            }
        }

        return movies.map((movie: any) => ({
            title: movie.title,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            editors: movie.editors || [],
        }));
    } catch (err) {
        console.error('Error fetching movies from TMDB:', err);
        throw new Error('Error fetching movie data');
    }
}
