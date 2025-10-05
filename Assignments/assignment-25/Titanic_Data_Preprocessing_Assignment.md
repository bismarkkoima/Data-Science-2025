
# 📝 Assignment: Data Preprocessing & Cleaning with Titanic Dataset

Welcome to **Module 3: Data Preprocessing (ETL)** 🎯  
This assignment uses the **Kaggle Titanic Dataset** to give you hands-on practice with **data cleaning, normalization, and feature engineering**.

Dataset: [Titanic Dataset on Kaggle](https://www.kaggle.com/c/titanic/data)

---

## 📌 Part 1: Data Cleaning

1. **Handle Missing Values**
   - Identify missing values in the dataset (`Age`, `Cabin`, `Embarked` are common).
   - Apply at least **two methods** of handling missing values (e.g., mean substitution for `Age`, frequent substitution for `Embarked`).

2. **Remove or Transform Outliers**
   - Use a **boxplot** (Age, Fare) to detect outliers.
   - Decide whether to keep, trim, or replace the outliers.

3. **Normalize Numerical Columns**
   - Apply **Min-Max Normalization** to the `Fare` column.
   - Apply **Z-score Normalization** to the `Age` column.

---

## 📌 Part 2: Feature Engineering

1. **Create a New Feature**
   - Create a binary column `is_child`:
     - `1` if `Age < 16`
     - `0` otherwise.

2. **Encode Categorical Variables**
   - Convert the `Sex` column into binary numeric format (Male = 1, Female = 0).
   - Encode `Embarked` using dummy substitution (UNKNOWN for missing values).

3. **Down-Sample Features**
   - Keep only the following features for your final dataset:
     - `Survived, Pclass, Sex, Age, Fare, Embarked, is_child`

---

## 📌 Part 3: Deliverables

1. **Cleaned Titanic Dataset**: Save as `titanic_clean.csv`  
2. **Operation Notes**: Create a markdown/text file `observations.md` including:
   - Number of missing values handled per column
   - Method chosen for missing values
   - Number of outliers removed/kept
   - Normalization formulas applied
   - Final shape of dataset (rows × columns)

3. **Code Notebook (Optional)**: A Jupyter Notebook (`titanic_cleaning.ipynb`) if you used Python (Pandas, NumPy, etc.).

---

## 📌 Submission Guidelines

- Push your deliverables (`titanic_clean.csv`, `observations.md`, and optional `titanic_cleaning.ipynb`) to your **GitHub Classroom Repo**.  
- Commit message:  
  ```
  Completed Titanic Data Preprocessing Assignment
  ```
- Deadline: **One week from date assigned**.

---

## 📌 Grading Rubric (Total 100 Points)

| Section | Points |
|---------|---------|
| Missing Values handled correctly (at least 2 methods) | 20 |
| Outliers detected and processed (document reasoning) | 20 |
| Normalization applied correctly (Fare: Min-Max, Age: Z-score) | 20 |
| Feature Engineering (`is_child`, encoding Sex & Embarked) | 20 |
| Deliverables well-structured and documented | 10 |
| Submission to GitHub Repo | 10 |

---

## ✅ Answer Guide (Instructor Reference)

1. **Missing Values**
   - Age: Replace with mean or median (e.g., mean age ≈ 29.7).
   - Embarked: Replace blanks with mode (most frequent = 'S').
   - Cabin: Drop column or mark missing as "Unknown".

2. **Outliers**
   - Fare has some extreme outliers (> $500). These can be capped at 500 or left depending on reasoning.

3. **Normalization**
   - Min-Max: `Fare_norm = (Fare - min(Fare)) / (max(Fare) - min(Fare))`
   - Z-score: `Age_norm = (Age - mean(Age)) / std(Age)`

4. **Feature Engineering**
   - `is_child`: Apply rule (Age < 16 → 1 else 0).
   - Sex: Male = 1, Female = 0.
   - Embarked: Encode as S=1, C=2, Q=3, Unknown=0.

5. **Final Columns**
   - `Survived, Pclass, Sex, Age_norm, Fare_norm, Embarked, is_child`

---
