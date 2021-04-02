SELECT a.ID, a.UserName, b.UserName AS ParentUserName
FROM USER a
LEFT JOIN USER b 
	ON b.ID = a.Parent
ORDER BY a.ID;
