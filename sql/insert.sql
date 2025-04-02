INSERT INTO RegistrationForm (
    UniversityRollNo, 
    EmailAddress, 
    FirstName, 
    LastName, 
    Branch, 
    Department, 
    Year, 
    PhoneNumber, 
    SelectedEvents, 
    Gender, 
    Semester
) VALUES (
    123456789,                
    'student@example.com',    
    'John',                   
    'Doe',                    
    'Computer Science',       
    'Engineering',            
    3,                        
    '1234567890',             
    ARRAY['Event1', 'Event2'],
    'Male',                   
    6                         
);

INSERT INTO BGMI_Registrations (
    UniversityRollNo, 
    TeamName, 
    TeamLeader, 
    Player2, 
    Player3, 
    Player4
) VALUES (
    123456789,
    'Team Alpha',
    'Alice Smith',
    'Bob Johnson',
    'Carol Davis',
    'David Wilson'
);


INSERT INTO Transactions (
    Transaction_ID, 
    UniversityRollNo, 
    Event, 
    Amount, 
    Verified
) VALUES (
    'TXN002',
    123456789,
    'Event Registration',
    150.00,
    TRUE
);
