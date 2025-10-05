# Comprehensive Lecture: Data Preprocessing, Cleaning, and Feature Selection

**Duration:** 2 Hours (120 Minutes)

---

## Part 1: Introduction and Necessity of Data Pre-processing (15 Minutes)

### 1.1 The Data Science Time Commitment
Data preprocessing is not a quick step; it is where data scientists dedicate the majority of their efforts.

- Data scientists spend **more than 50% of their time** on Data preprocessing.  
- Collecting data is the **second most time-consuming** component.  
- In comparison, tuning algorithms occupies only a **small part** of a data scientist's time.  

### 1.2 Why We Need Data Pre-processing
Real-world data is rarely clean. It frequently suffers from data quality issues.

- **Incomplete:** Data may lack attributes or contain missing values.  
- **Noisy:** Data includes incorrect records, such as outliers.  
- **Inconsistent:** Data contains conflicting records or discrepancies.  

**Examples of Dirty Data**:
- Missing values (blank or NULL).  
- Invalid values (e.g., wrong gender input).  
- Repeated identifiers (lack of uniqueness).  
- Misspellings.  

### 1.3 The Goal: Avoiding *"Garbage in, Garbage out"*
- Dirty data as input → useless output.  
- Leads to failed projects or meaningless models.  
- Pre-processing includes **Data Cleaning, Feature Selection, Feature Reduction**.  

---

## Part 2: Data Cleaning and Statistical Preprocessing (45 Minutes)

### 2.1 Handling Missing Values and Noise
Missing values are the most common issue in analytics.  

| Method              | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Deletion**        | Remove records with missing values.                                         |
| **Dummy Substitution** | Replace missing values with placeholders (`UNKNOWN`, `0`).                |
| **Mean Substitution**  | Replace with average of known values ($\bar{x}$).                        |
| **Frequent Substitution** | Replace with most frequent value (e.g., `"chicken"`).                  |
| **Regression Substitution** | Predict missing values with regression (e.g., ARIMA for time series). |

### 2.2 Dealing with Outliers
Outliers are data points that deviate significantly.  

**Approaches:**
- **Keep them:** Sometimes they contain critical info.  
- **Exclude them:**  
  - Trimming (remove).  
  - Replacement (replace with nearest normal point).  

**Detection Tools:** Scatter Plot, Box Plot.  

### 2.3 Data Normalization
- **Min-Max Normalization:**  
  $$X_{norm} = \frac{X - X_{min}}{X_{max} - X_{min}}$$  

- **Z-score Normalization (Standardization):**  
  $$X_{Z} = \frac{X - \mu}{\delta}$$  

### 2.4 Data Down-Sampling
- **Record down-sampling:** Keep representative subset.  
- **Attribute down-sampling:** Select only important features.  

### 2.5 Data Cleaning Tools
- **Data Wrangler** (Stanford).  
- **OpenRefine** (Google).  

---

**(Short Break / Review: 5 Minutes)**

---

## Part 3: Feature Engineering & Selection (20 Minutes)

### 3.1 Understanding Features
Features are measurable properties.  
**Example:** In face recognition → Nose, Mouth, Eyes.  

### 3.2 Feature Extraction & Engineering
- Derive new features (e.g., from `Date` → `Day`, `Month`).  
- Trade-off: More features may help OR hurt.  

### 3.3 Goal of Feature Selection
Remove **redundant or irrelevant** features.  
**Benefits:**  
- Simplifies models.  
- Reduces training time.  
- Avoids curse of dimensionality.  
- Improves generalization.  

### 3.4 Curse of Dimensionality
- High dimensions need **many samples**.  
- Sparse data → poor model performance.  

---

## Part 4: Feature Selection Methods (30 Minutes)

### 4.1 Categories
| Category | Description |
|----------|-------------|
| **Filter** | Select features independent of model (e.g., stats). |
| **Wrapper** | Select based on model performance. |
| **Model-based** | Features selected during model training. |

### 4.2 Filter Methods
- **Chi-Squared ($\chi^2$):** Tests independence between variables.  
- **Mutual Information (MI):** Measures dependency using entropy.  

### 4.3 Model-based Methods
- **Regularization (LASSO):** Shrinks coefficients, selects non-zero ones.  
  - LASSO Objective:  
    $$\operatorname{argmin} \frac{||Y - W \times X||_2^2}{n} + \lambda ||W||_1$$  

- **Tree-based Models:** (Decision Trees, Random Forests) rank features by importance.  

---

## Part 5: Feature Reduction with PCA (30 Minutes)

### 5.1 Definition
Reduce dimensions while **preserving variance**.  

- **Feature Selection:** remove features.  
- **Feature Reduction:** transform into fewer dimensions.  

### 5.2 Methods
- **Unsupervised:** PCA, ICA, Autoencoders.  
- **Supervised:** LDA.  

### 5.3 PCA Workflow
1. Calculate mean $\mu$.  
2. Center data $\tilde{X}$.  
3. Covariance matrix $\Sigma = \frac{1}{N} \tilde{X}^T \tilde{X}$.  
4. Find eigenvectors/eigenvalues.  
5. Select top $K$ eigenvectors.  
6. Project: $X' = e^T \tilde{X}$.  

Final reduced dataset = **Principal Components**.  

---

✅ **Lecture Duration: 2 Hours (120 Minutes)**
