SELECT 
    B.UniversityRollNo,
    B.TeamName,
    B.TeamLeader,
    B.Player2,
    B.Player3,
    B.Player4,
    T.Transaction_ID,
    T.Event,
    T.Amount,
    T.Verified
FROM 
    BGMI_Registrations B
LEFT JOIN 
    Transactions T 
ON 
    B.UniversityRollNo = T.UniversityRollNo
WHERE 
    T.UniversityRollNo = B.UniversityRollNo;


SELECT 
    count(B.UniversityRollNo) as records
FROM 
    BGMI_Registrations B
LEFT JOIN 
    Transactions T 
ON 
    B.UniversityRollNo = T.UniversityRollNo
WHERE 
    T.UniversityRollNo = B.UniversityRollNo;


