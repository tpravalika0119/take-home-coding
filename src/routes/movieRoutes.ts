import { Router } from 'express';
import { getMovies } from '../controllers/movieController';

const router = Router();

router.get('/movies', getMovies); // Route to get movies by year

export default router;
