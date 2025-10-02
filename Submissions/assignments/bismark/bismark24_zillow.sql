-- Metadata tables
CREATE TABLE DataDictionary (
    FieldName TEXT PRIMARY KEY,
    Description TEXT
);

CREATE TABLE Metrics (
    MetricName TEXT PRIMARY KEY,
    Description TEXT
);

-- Geographic tables
CREATE TABLE State (
    RegionID INTEGER PRIMARY KEY,
    StateName TEXT
);

CREATE TABLE County (
    RegionID INTEGER PRIMARY KEY,
    CountyName TEXT,
    StateID INTEGER,
    FOREIGN KEY (StateID) REFERENCES State(RegionID)
);

CREATE TABLE City (
    RegionID INTEGER PRIMARY KEY,
    CityName TEXT,
    CountyID INTEGER,
    FOREIGN KEY (CountyID) REFERENCES County(RegionID)
);

CREATE TABLE Zip (
    RegionID INTEGER PRIMARY KEY,
    ZipCode TEXT,
    CityID INTEGER,
    FOREIGN KEY (CityID) REFERENCES City(RegionID)
);

CREATE TABLE Neighborhood (
    RegionID INTEGER PRIMARY KEY,
    NeighborhoodName TEXT,
    ZipID INTEGER,
    FOREIGN KEY (ZipID) REFERENCES Zip(RegionID)
);

-- Crosswalk tables
CREATE TABLE Crosswalk_City (
    RegionID INTEGER,
    CityID INTEGER
);

CREATE TABLE Crosswalk_County (
    RegionID INTEGER,
    CountyID INTEGER
);

-- Time series tables
CREATE TABLE StateTimeSeries (
    RegionID INTEGER,
    Date TEXT,
    MedianValue REAL,
    RentIndex REAL,
    PRIMARY KEY (RegionID, Date),
    FOREIGN KEY (RegionID) REFERENCES State(RegionID)
);

CREATE TABLE CountyTimeSeries (
    RegionID INTEGER,
    Date TEXT,
    MedianValue REAL,
    RentIndex REAL,
    PRIMARY KEY (RegionID, Date),
    FOREIGN KEY (RegionID) REFERENCES County(RegionID)
);

CREATE TABLE CityTimeSeries (
    RegionID INTEGER,
    Date TEXT,
    MedianValue REAL,
    RentIndex REAL,
    PRIMARY KEY (RegionID, Date),
    FOREIGN KEY (RegionID) REFERENCES City(RegionID)
);

CREATE TABLE MetroTimeSeries (
    RegionID INTEGER,
    Date TEXT,
    MedianValue REAL,
    RentIndex REAL,
    PRIMARY KEY (RegionID, Date)
);

CREATE TABLE ZipTimeSeries (
    RegionID INTEGER,
    Date TEXT,
    MedianValue REAL,
    RentIndex REAL,
    PRIMARY KEY (RegionID, Date),
    FOREIGN KEY (RegionID) REFERENCES Zip(RegionID)
);

CREATE TABLE NeighborhoodTimeSeries (
    RegionID INTEGER,
    Date TEXT,
    MedianValue REAL,
    RentIndex REAL,
    PRIMARY KEY (RegionID, Date),
    FOREIGN KEY (RegionID) REFERENCES Neighborhood(RegionID)
);
