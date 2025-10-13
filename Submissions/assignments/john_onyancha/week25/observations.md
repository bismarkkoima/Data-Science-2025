# Titanic Data Preprocessing Observations

Step 1: Cleaning the Data

Handling Missing Values:

Age: Filled in 177 missing entries.
Cabin: Addressed 687 missing entries.
Embarked: Fixed 2 missing entries.

Approach for Missing Values:

Age: Used the average value to fill in gaps.(Mean Substitution)
Embarked: Used the most common value.(Mode Substitution)
Cabin: Marked missing entries as "Unknown."

Outlier Analysis:

Identified outliers in the Age and Fare columns using boxplots.
Decided not to adjust or remove outliers.

Normalization Techniques:

Fare: Applied Min-Max normalization using the formula: (Value - Minimum) / (Maximum - Minimum). (`X_normalized = (X - X_min) / (X_max - X_min)`)
Age: Applied Z-score normalization using the formula: (Value - Mean) / Standard Deviation.(`X_normalized = (X - μ) / σ`)

Step 2: Feature Engineering

Final Dataset Dimensions:

    Rows: 891
    Columns: 9
