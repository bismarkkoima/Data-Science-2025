# 🏢 SQL Data Engineer Assignment - Employee Database

This assignment uses the **Employee Sample Database** (available free on Kaggle: https://www.kaggle.com/datasets/ashirwadsangwan/employee-database).

---

## 📌 Getting Started
1. Download dataset and install **DB Browser for SQLite** (https://sqlitebrowser.org/).
2. Import CSV files as tables:
   - `employees(emp_no, first_name, last_name, gender, hire_date)`
   - `salaries(emp_no, salary, from_date, to_date)`
   - `titles(emp_no, title, from_date, to_date)`
   - `departments(dept_no, dept_name)`
   - `dept_emp(emp_no, dept_no, from_date, to_date)`
   - `dept_manager(emp_no, dept_no, from_date, to_date)`

---

## 🟢 Beginner Level

### Q1: Employees per Department
Find the number of employees in each department.

**Expected Output:**  
- dept_name, emp_count

### Q2: Highest Salaries
List the top 5 employees with the highest salaries.

**Expected Output:**  
- emp_no, first_name, last_name, salary

---

## 🟡 Intermediate Level

### Q3: Managers
Find the current manager of each department.

**Expected Output:**  
- dept_name, manager_name

### Q4: Salary Growth
Find employees whose salary increased by more than 50% over time.

**Expected Output:**  
- emp_no, first_name, last_name, growth_percent

---

## 🔴 Advanced Level

### Q5: Longest Serving Employees
Find the top 5 longest-serving employees in the company.

**Expected Output:**  
- emp_no, name, years_of_service
