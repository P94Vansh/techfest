select * from RegistrationForm;
select * from BGMI_Registrations;
select * from Transactions;

 SELECT 
        rf.UniversityRollNo,
        rf.EmailAddress,
        rf.FirstName,
        rf.LastName,
        rf.Branch,
        rf.Department,
        rf.Year,
        rf.PhoneNumber,
        rf.SelectedEvents,
        rf.Gender,
        rf.Semester,
        t.Transaction_ID,
        t.Event,
        t.Amount,
        t.Verified
      FROM 
        RegistrationForm rf
      LEFT JOIN 
        Transactions t
      ON 
        rf.UniversityRollNo = t.UniversityRollNo;


SELECT *
FROM RegistrationForm
WHERE 'Engineers'' Got Talent' = ANY(SelectedEvents);
