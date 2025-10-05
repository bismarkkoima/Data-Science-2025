-- EmployeeDB SQL Starter File

-- Q1: Employees per Department
SELECT d.dept_name, COUNT(e.emp_no) AS emp_count
FROM employees e
JOIN dept_emp de ON e.emp_no = de.emp_no
JOIN departments d ON de.dept_no = d.dept_no
-- GROUP BY d.dept_name
;

-- Q2: Highest Salaries
SELECT e.emp_no, e.first_name, e.last_name, s.salary
FROM employees e
JOIN salaries s ON e.emp_no = s.emp_no
-- ORDER BY s.salary DESC
-- LIMIT 5
;

-- Q3: Current Managers
SELECT d.dept_name, CONCAT(e.first_name, ' ', e.last_name) AS manager_name
FROM employees e
JOIN dept_manager dm ON e.emp_no = dm.emp_no
JOIN departments d ON dm.dept_no = d.dept_no
-- WHERE dm.to_date = '9999-01-01'
;

-- Q4: Salary Growth > 50%
-- Hint: Compare MIN(salary) and MAX(salary) for each employee.

-- Q5: Longest Serving Employees
SELECT e.emp_no, e.first_name, e.last_name, (julianday('now') - julianday(e.hire_date)) / 365 AS years_of_service
FROM employees e
-- ORDER BY years_of_service DESC
-- LIMIT 5
;
