# Assessment

This API takes a year (YYYY format) as input and returns one page of movies for that year, sorted by descending popularity. The movies include details such as:

- **Title**
- **Release Date**
- **Vote Average**
- **Editors** (optional, fetched from the Movie Credit API).

The service is robust and will not fail if the Movie Credit API fails. If the Movie Credit API fails, the `editors` field will return an empty array.

---

## Instructions to Run and Test the API

### Prerequisites

1. Ensure you have a valid **TMDB API Key**.

## Steps to Run

1. Install Dependencies
   ```bash
   npm install
2. Add your TMDB API Key to the .env file in the project root
   ```
   TMDB_API_KEY=your_tmdb_api_key_here
3. Start the Server
   ```bash
   npx ts-node src/app.ts
4. To run the Tests
   ```bash
   npx jest