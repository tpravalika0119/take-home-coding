import request from 'supertest';
import app from '../src/app';

describe('GET /api/movies', () => {
    it('should return a list of movies for the given year', async () => {
        const response = await request(app).get('/api/movies').query({ year: 2019 });

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('title');
        expect(response.body[0]).toHaveProperty('release_date');
        expect(response.body[0]).toHaveProperty('vote_average');
        expect(response.body[0]).toHaveProperty('editors');
    });

    it('should return a 400 error if no year is provided', async () => {
        const response = await request(app).get('/api/movies').query({});
        expect(response.status).toBe(400);
    });

    it('should return a 400 error if the year is invalid', async () => {
        const response = await request(app).get('/api/movies').query({ year: 'invalid' });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Year is required and should be a valid number.');
    });

    it('should return a 400 error if page is invalid', async () => {
        const response = await request(app).get('/api/movies').query({ year: 2019, page: '0' });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Page must be a positive integer.');
    });
});
