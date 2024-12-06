import { Request, Response } from 'express';
import { getMoviesByYear } from '../services/movieService';

export const getMovies = async (req: Request, res: Response): Promise<void> => {
    const { year, page = '1' } = req.query;

    // Parse year and page parameters with base 10 radix
    const parsedYear = parseInt(year as string, 10);
    const parsedPage = parseInt(page as string, 10);

    if (isNaN(parsedYear)) {
        res.status(400).json({ message: 'Year is required and should be a valid number.' });
        return;
    }

    if (isNaN(parsedPage) || parsedPage <= 0) {
        res.status(400).json({ message: 'Page must be a positive integer.' });
        return;
    }

    try {
        const movies = await getMoviesByYear(parsedYear, parsedPage);
        res.json(movies);
    } catch (err) {
        console.error('Error in getMovies:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
