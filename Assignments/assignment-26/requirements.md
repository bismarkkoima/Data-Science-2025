#  Assignment Requirements: Titanic Dataset - Data Cleaning & Analysis

**Course:** Data Analytics Fundamentals  
**Assignment:** Titanic Data Cleaning & Analysis  
**Total Points:** 100 (+10 Bonus)  
**Dataset:** [Titanic Passenger Data](https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv)

---

##  Part 1: Data Quality Assessment (20 points)

###  Initial Data Exploration (5 points)
- Load the dataset and display basic information  
- Show the first 5 rows and dataset shape  
- Generate descriptive statistics for both numerical and categorical columns  

###  Missing Values Analysis (10 points)
- Identify all columns with missing values  
- Calculate missing value percentages  
- Create a summary table of missing data  

###  Data Types Assessment (5 points)
- Analyze data types for each column  
- Identify columns that need type conversion  
- Check for duplicate records  

---

##  Part 2: Data Preprocessing & Cleaning (30 points)

###  Handle Missing Values (15 points)
- **Age:** Fill missing values using the median age grouped by `Pclass` and `Sex`  
- **Embarked:** Fill missing values with the most frequent port  
- **Cabin:** Create a new binary feature `Has_Cabin` and drop the original column  
- **Fare:** Ensure no missing values exist (fill with median by `Pclass` if needed)  

###  Feature Engineering (15 points)
- Create `Age_Group` categories:  
  - Child (0–12), Teen (13–18), Adult (19–35), Middle (36–60), Senior (60+)  
- Create `Fare_Category` using quartiles: Low, Medium, High, Very High  
- Create `Family_Size` from `SibSp` and `Parch`  
- Create binary feature `Is_Alone`  
- Extract `Title` from `Name` and map to groups:  
  `Mr`, `Miss`, `Mrs`, `Master`, `Professional`, `Military`, `Royalty`, `Other`  

---

##  Part 3: Data Ethics & Bias Analysis (20 points)

###  Bias Identification (20 points)
- Analyze survival rates by gender and calculate the gender bias ratio  
- Analyze survival rates by passenger class (socioeconomic bias)  
- Examine age discrimination patterns  
- Investigate fare-based privilege in survival outcomes  
- Document findings and discuss potential ethical implications  

---

##  Part 4: Descriptive Analytics & Insights (30 points)

###  Comprehensive Analytics (15 points)
- Calculate overall survival rate and breakdown by key demographics  
- Generate numerical summaries for `Age`, `Fare`, and `Family_Size`  
- Create categorical distributions for `Pclass`, `Sex`, `Embarked`, `Age_Group`, and `Title`  

###  Analytical Tasks Application (15 points)
- **Classification:** Identify which features best predict survival  
- **Regression:** Analyze correlations between `Fare` / `Age` and survival  
- **Clustering:** Identify natural passenger groupings  
- **Co-occurrence:** Find common feature combinations among survivors  
- **Profiling:** Create typical survivor vs non-survivor profiles  
- **Anomaly Detection:** Identify unusual passenger records  
- **Data Reduction:** Determine most important features  

---

##  Deliverables

Submit a **Jupyter Notebook (`.ipynb`)** containing:

###  Code Implementation
- Complete data cleaning, preprocessing, and analysis code  

###  Markdown Explanations
- Detailed comments and reasoning for each step  

###  Visualizations (at least 5)
1. Missing values heatmap  
2. Survival rates by demographics  
3. Correlation heatmap  
4. Feature importance chart  
5. Anomaly detection results  

###  Summary Report
Include:
- Data quality issues and applied solutions  
- Key insights on survival patterns  
- Ethical and bias analysis  
- Most predictive features for survival  

---

##  Submission Format

assignment-26/

├── titanic_analysis.ipynb

├── cleaned_titanic.csv

└── README.md # Brief explanation of your approach


---

##  Evaluation Criteria

| **Criteria** | **Points** | **Description** |
|---------------|------------|-----------------|
| Data Quality Assessment | 20 | Comprehensive missing value analysis and data profiling |
| Data Cleaning | 30 | Proper handling of missing values and data validation |
| Feature Engineering | 15 | Creative and meaningful feature creation |
| Bias Analysis | 20 | Thorough ethical analysis and bias identification |
| Insights & Documentation | 15 | Clear explanations and meaningful insights |
| Code Quality | 10 | Readable, efficient, and well-commented code |

---

##  Bonus Challenge (Extra 10 points)

Identify and analyze **at least 3 data quality issues** that could lead to misleading conclusions if not properly addressed.  
For each issue, propose a clear and practical solution.

---

##  Learning Resources

- **Pandas Documentation:** [https://pandas.pydata.org/docs/](https://pandas.pydata.org/docs/)  
- **Data Cleaning Best Practices:** [https://towardsdatascience.com/data-cleaning-in-python-the-ultimate-guide-2020-c63b88bf0a0d](https://towardsdatascience.com/data-cleaning-in-python-the-ultimate-guide-2020-c63b88bf0a0d)  
- **Ethical AI Guidelines:** [https://aiethicsguidelines.org/](https://aiethicsguidelines.org/)

---




