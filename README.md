# Take Home Coding
This project is a take home asssessment for NodeJS Coding.

## Requirements
- Use Node v21 or higher (current LTS)
- Use Typescript
- Do not use a framework (Nest JS)
- Welcome to use any other dependencies (Express, Axios, Got, etc)
- Include unit tests

## Take Home Assessment
Create an API that returns the following information
1. An array of movies for a given release year showing the title, release_date, vote_average and a list of editors.
2. For each year, 100 movies should be returned for en-US sorted descending by popularity
3. Your API should let a user send in the primary release years
4. Following APIs should be used:
- Discover Movie API: https://developer.themoviedb.org/reference/discover-movie

Request should be: https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&primary_release_year=2019&sort_by=popularity.desc';

- Credits API: https://developer.themoviedb.org/reference/movie-credits ("known_for_department": "Editing" and use name)

4. Do not commit your bearer token to the repo; use an ignored .env file

5. 

For 2019, the response should include the following object
Note the order of the  editors names does not matter;
```
[
    {
        title: 'Joker'
        release_date: 'January 1, 2019'
        vote_average: 8.19,
        editors: [
            "Jill Bogdanowicz",
            "Jason Saulog",
            "Cindy Bond",
            "Jeff Groth",
            "Jeff Mee",
            "Ray Neapolitan",
            "Thomas J. Cabela"
        ]
    }
]
```
