drop TABLE RegistrationForm;
drop TABLE BGMI_Registrations;
drop TABLE Transactions;

CREATE TABLE RegistrationForm (
    UniversityRollNo bigint PRIMARY KEY,
    EmailAddress VARCHAR(255) UNIQUE NOT NULL,
    FirstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    Branch VARCHAR(100) NOT NULL,
    Department VARCHAR(100) NOT NULL,
    Year INT NOT NULL,
    PhoneNumber VARCHAR(15) NOT NULL,
    SelectedEvents TEXT[],
    Gender VARCHAR(10) NOT NULL,
    Semester int NOT NULL
);

CREATE TABLE BGMI_Registrations (
    UniversityRollNo bigint PRIMARY KEY,
    TeamName VARCHAR(100) NOT NULL,
    TeamLeader VARCHAR(100) NOT NULL,
    Player2 VARCHAR(100),
    Player3 VARCHAR(100),
    Player4 VARCHAR(100)
);

CREATE TABLE Transactions (
    Transaction_ID VARCHAR(255) PRIMARY KEY,
    UniversityRollNo bigint NOT NULL,
    Event VARCHAR(100) NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL,
    Verified BOOLEAN NOT NULL DEFAULT FALSE
);


