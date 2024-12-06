import express from 'express';
import dotenv from 'dotenv';
import movieRoutes from './routes/movieRoutes';

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', movieRoutes); // Use the movie routes

// Global error handler
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
