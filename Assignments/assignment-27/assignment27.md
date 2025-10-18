
# Assignment 2: Titanic Dataset - Visualization & Dashboard

Now here's Assignment 2 focused on visualization:

```markdown
# Assignment 2: Titanic Dataset - Interactive Visualization & Dashboard

**Due Date:** November 1, 2024  
**Points:** 100 points  
**Dataset:** Your cleaned Titanic dataset from Assignment 26  
**Tools:** Tableau Public, Power BI, or Python (Plotly/Dash)  
**Objective:** Create compelling visualizations and an interactive dashboard to communicate Titanic survival insights

---

##  Assignment Overview

Transform your cleaned Titanic dataset into an interactive visualization dashboard that tells the story of survival patterns, demographic insights, and historical context.

##  Learning Objectives

- Design effective visualizations for different data types
- Create interactive dashboards for data exploration
- Apply visualization best practices
- Communicate data insights effectively
- Build web-based data applications

##  Required Dataset

Use the cleaned Titanic dataset you created in Assignment 1, which should include:
- Original features: Pclass, Sex, Age, Fare, Embarked, Survived
- Engineered features: Age_Group, Fare_Category, Family_Size, Is_Alone, Title, Has_Cabin

##  Tasks & Requirements

### **Part 1: Foundational Visualizations (40 points)**

Create 5 core visualizations that reveal key insights about the Titanic disaster:

1. **Survival Overview Dashboard (10 points)**
   - Overall survival rate gauge chart
   - Survival by gender stacked bar chart
   - Survival by passenger class grouped bar chart
   - All charts should be linked for interactivity

2. **Demographic Analysis (10 points)**
   - Age distribution histogram with survival overlay
   - Fare distribution by survival status (box plot or violin plot)
   - Family size impact on survival (stacked bar chart)

3. **Multivariate Analysis (10 points)**
   - Scatter plot: Age vs Fare colored by survival with passenger class as size
   - Heatmap: Correlation matrix of key numerical features
   - Parallel coordinates plot for multivariate pattern discovery

4. **Geographic & Temporal Insights (10 points)**
   - Embarkation port survival analysis (bar chart)
   - Ticket class distribution by embarkation port
   - Fare distribution across different ports

### **Part 2: Interactive Dashboard Creation (40 points)**

5. **Web-Based Dashboard (20 points)**
   Create an interactive dashboard with the following components:
   - **Filters Panel:** Gender, Passenger Class, Age Group, Embarkation Port
   - **Main Visualization Area:** Dynamic charts that update based on filters
   - **Summary Statistics:** Key metrics that update in real-time
   - **Drill-down Capability:** Click on chart elements to see detailed information

6. **Dashboard Features (20 points)**
   - **Tooltips:** Detailed information on hover
   - **Cross-filtering:** Selection in one chart filters others
   - **Responsive Design:** Works on different screen sizes
   - **Export Functionality:** Ability to export charts or filtered data

### **Part 3: Visualization Best Practices (20 points)**

7. **Design Principles Application (10 points)**
   - Apply appropriate color schemes (considering color blindness)
   - Use effective chart types for different data relationships
   - Implement clear labeling and annotations
   - Ensure proper scaling and axis formatting

8. **Storytelling & Insights (10 points)**
   - Create a narrative flow through the dashboard
   - Highlight the 3 most important survival insights
   - Include explanatory text and annotations
   - Provide context about historical significance

## 🎨 Tool Options (Choose One)

### **Option A: Tableau Public**
- Create a Tableau workbook with multiple dashboards
- Publish to Tableau Public and submit the link
- Include tooltips, filters, and interactive elements

### **Option B: Power BI**
- Develop a Power BI report with multiple pages
- Use DAX for calculated measures
- Implement bookmarks and tooltips for navigation

### **Option C: Python (Plotly/Dash)**
- Build an interactive web app using Plotly Dash
- Deploy using Heroku, Streamlit Cloud, or similar
- Include callback functions for interactivity

### **Option D: D3.js (Advanced)**
- Create custom visualizations using D3.js
- Build an interactive HTML dashboard
- Implement smooth transitions and animations

##  Deliverables

### **Required Submissions:**

1. **Interactive Dashboard** (Live URL or executable file)
2. **Documentation PDF** containing:
   - Dashboard overview and navigation instructions
   - Explanation of design choices and visualization rationale
   - Key insights discovered through the visualizations
   - Screenshots of all major visualizations

3. **Source Files** (depending on chosen tool):
   - Tableau: .twbx workbook file
   - Power BI: .pbix file
   - Python: Complete source code and requirements.txt
   - D3.js: HTML, CSS, and JavaScript files

### **Submission Structure:**

assignment2/

├── dashboard/ (or source files)

├── documentation.pdf

├── screenshots/ (folder with PNG screenshots)

└── README.md (setup instructions)
