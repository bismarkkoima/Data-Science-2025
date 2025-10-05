-- IMDb SQL Starter File

-- Q1: Movies by Director
SELECT d.name, COUNT(m.movie_id) AS movie_count
FROM directors d
JOIN movie_directors md ON d.director_id = md.director_id
JOIN movies m ON md.movie_id = m.movie_id
-- GROUP BY d.name
;

-- Q2: Popular Genres
SELECT genre, AVG(rating) AS avg_rating
FROM movies
-- GROUP BY genre
-- HAVING AVG(rating) > 7.5
;

-- Q3: Actor with Most Movies
SELECT a.name, COUNT(ma.movie_id) AS movie_count
FROM actors a
JOIN movie_actors ma ON a.actor_id = ma.actor_id
-- GROUP BY a.name
-- ORDER BY movie_count DESC
-- LIMIT 1
;

-- Q4: Directors with 3 Consecutive Years
-- Hint: Use window functions (LAG, LEAD) or self-joins.

-- Q5: Actor-Director Collaborations
SELECT a.name, d.name, COUNT(*) AS collaboration_count
FROM actors a
JOIN movie_actors ma ON a.actor_id = ma.actor_id
JOIN movies m ON ma.movie_id = m.movie_id
JOIN movie_directors md ON m.movie_id = md.movie_id
JOIN directors d ON md.director_id = d.director_id
-- GROUP BY a.name, d.name
-- HAVING COUNT(*) >= 3
;
