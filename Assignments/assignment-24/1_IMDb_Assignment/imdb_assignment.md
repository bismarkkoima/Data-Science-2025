# 🎬 SQL Data Engineer Assignment - IMDb Movies Dataset

Welcome to the **IMDb SQL Assignment**!  
This assignment uses the popular **IMDb Movies dataset** (available free on Kaggle: https://www.kaggle.com/datasets/ashirwadsangwan/imdb-dataset).

---

## 📌 Getting Started
1. Download dataset and install **DB Browser for SQLite** (https://sqlitebrowser.org/).
2. Import CSV files as tables:
   - `movies` (movie_id, title, year, genre, rating, votes)
   - `actors` (actor_id, name)
   - `movie_actors` (movie_id, actor_id)
   - `directors` (director_id, name)
   - `movie_directors` (movie_id, director_id)

---

## 🟢 Beginner Level

### Q1: Movies by Director
Find the number of movies directed by each director.

**Expected Output:**  
- director_name, movie_count

**Starter Query:**
```sql
SELECT d.name, COUNT(m.movie_id) AS movie_count
FROM directors d
JOIN movie_directors md ON d.director_id = md.director_id
JOIN movies m ON md.movie_id = m.movie_id
-- Add GROUP BY
;
```

### Q2: Popular Genres
List genres where the average rating is above 7.5.

**Expected Output:**  
- genre, avg_rating

---

## 🟡 Intermediate Level

### Q3: Actor with Most Movies
Find the actor who appeared in the most movies.

**Expected Output:**  
- actor_name, movie_count

### Q4: Consecutive Movie Years
Find directors who released movies in **three consecutive years**.

**Expected Output:**  
- director_name

---

## 🔴 Advanced Level

### Q5: Top Collaborations
Find the **actor-director pairs** that collaborated on at least 3 movies.

**Expected Output:**  
- actor_name, director_name, collaboration_count
