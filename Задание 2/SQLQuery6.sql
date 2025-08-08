SET STATISTICS TIME ON;
SET STATISTICS IO ON;
GO

-- Создание иерархии подразделений от сотрудника 710253
WITH SubdivisionHierarchy AS (
    SELECT 
        s.id, 
        0 AS level
    FROM testdb.dbo.subdivisions s
    JOIN testdb.dbo.collaborators c ON c.subdivision_id = s.id
    WHERE c.id = 710253

    UNION ALL

    SELECT 
        s.id, 
        sh.level + 1
    FROM testdb.dbo.subdivisions s
    JOIN SubdivisionHierarchy sh ON s.parent_id = sh.id
    WHERE s.id NOT IN (100055, 100059)
)

-- Сам запрос
SELECT 
    c.id,
    c.name,
    s.name AS sub_name,
    s.id AS sub_id,
    sh.level,
    COUNT(*) OVER (PARTITION BY c.subdivision_id) AS colls_count
FROM testdb.dbo.collaborators c
JOIN testdb.dbo.subdivisions s ON c.subdivision_id = s.id
JOIN SubdivisionHierarchy sh ON s.id = sh.id
WHERE c.age < 40 AND c.id != 710253
ORDER BY sh.level;
