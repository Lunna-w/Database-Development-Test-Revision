const questions = [
    //... put your 60 questions here with the structure shown below
    {
        questionText: "1. By working with unstructured data, it is __",
        answers: [
            { answerText: "a. Difficult to extract meaningful insights.", isCorrect: true },
            { answerText: "b. Structured and organized for easy analysis.", isCorrect: false },
            { answerText: "c. Requires minimal data preprocessing.", isCorrect: false },
            { answerText: "d. Easy to analyse and draw conclusions from.", isCorrect: false }
        ]
    },
    {
        questionText: "2. What is structured data?",
        answers: [
            { answerText: "a. Data that is organized in a tabular structure.", isCorrect: true },
            { answerText: "b. Data that is organized in a hierarchical structure.", isCorrect: false },
            { answerText: "c. Data that is organized in a graph structure.", isCorrect: false },
            { answerText: "d. Data that is organized in a random structure.", isCorrect: false }
        ]
    },
    {
        questionText: "4. What is unstructured data?",
        answers: [
            { answerText: "a. Data that is organized and easy to analyse.", isCorrect: false },
            { answerText: "b. Data that is stored in a traditional database system.", isCorrect: false },
            { answerText: "c. Data that does not have a predefined structure or organization.", isCorrect: true },
            { answerText: "d. Data that is only accessible to authorized users", isCorrect: false }
        ]
    },
    {
        questionText: "4. What are the benefits of using structured data?",
        answers: [
            { answerText: "a. All of the given statements", isCorrect: true },
            { answerText: "b. Improved data organization and management", isCorrect: false },
            { answerText: "c. Enhanced data analysis capabilities", isCorrect: false },
            { answerText: "d. Increased data accessibility and usability", isCorrect: false }
        ]
    },
    {
        questionText: "5. Which technology is commonly used to store and process big data?",
        answers: [
            { answerText: "a. Optical storage devices", isCorrect: false },
            { answerText: "b. Cloud computing", isCorrect: true },
            { answerText: "c. Relational databases", isCorrect: false },
            { answerText: "d. Mainframe computers", isCorrect: false }
        ]
    },
    {
        questionText: "6. Which data model is commonly used for structured data?",
        answers: [
            { answerText: "a. Object-oriented data model", isCorrect: false },
            { answerText: "b. Relational data model", isCorrect: true },
            { answerText: "c. Hierarchical data model", isCorrect: false },
            { answerText: "d. NoSQL data model", isCorrect: false }
        ]
    },
    {
        questionText: "7. How is unstructured data typically stored?",
        answers: [
            { answerText: "a. In a text file or document", isCorrect: false },
            { answerText: "b. In a data warehouse", isCorrect: true },
            { answerText: "c. In a relational database", isCorrect: false },
            { answerText: "d. In a spreadsheet", isCorrect: false }
        ]
    },
    {
        questionText: "8. Which of the following is not a characteristic of big data?",
        answers: [
            { answerText: "a. Variety", isCorrect: false},
            { answerText: "b. Validity", isCorrect: true },
            { answerText: "c. Volume", isCorrect: false },
            { answerText: "d. Velocity", isCorrect: false }
        ]
    },
    {
        questionText: "9. Which of the following is an example of structured data?",
        answers: [
            { answerText: "a. Video file", isCorrect: false },
            { answerText: "b. Relational database", isCorrect: true },
            { answerText: "c. PDF document", isCorrect: false },
            { answerText: "d. Image file", isCorrect: false }
        ]
    },
    {
        questionText: "10. What are the main characteristics of structured data?",
        answers: [
            { answerText: "a. It has a predefined schema.", isCorrect: false },
            { answerText: "b. All of the given statements", isCorrect: true },
            { answerText: "c. It is easy to search and retrieve specific information", isCorrect: false },
            { answerText: "d. It can be easily organized and analysed", isCorrect: false }
        ]
    },
    {
        questionText: "11. Which of the following techniques is commonly used to analyse unstructured data?",
        answers: [
            { answerText: "a. Statistical analysis", isCorrect: false },
            { answerText: "b. Machine learning", isCorrect: false },
            { answerText: "c. Data mining", isCorrect: true },
            { answerText: "d. Data visualization", isCorrect: false }
        ]
    },
    {
        questionText: "12. Structured data can be easily queried and analyzed.",
        answers: [
            { answerText: "a. True", isCorrect: true },
            { answerText: "b. False.", isCorrect: false },
        ]
    },
    {
        questionText: "13. What is big data?",
        answers: [
            { answerText: "a. A method of analysing data using statistical techniques", isCorrect: false },
            { answerText: "b. A large volume of complex and unstructured data", isCorrect: true },
            { answerText: "c. A collection of small datasets", isCorrect: false },
            { answerText: "d. A type of computer programming language", isCorrect: false }
        ]
    },
    {
        questionText: "14. Structured data is only used in computer science and technology fields.",
        answers: [
            { answerText: "a. True", isCorrect: false },
            { answerText: "b. False", isCorrect: true },

        ]
    },
    {
        questionText: "15. Which of the following is an example of unstructured data?",
        answers: [
            { answerText: "a. Online form with required fields", isCorrect: true },
            { answerText: "b. Database table with defined fields and constraints", isCorrect: false },
            { answerText: "c. Email containing text and attachments.", isCorrect: true },
            { answerText: "d. Spreadsheet with labelled columns and rows", isCorrect: false }
        ]
    },
    {
        questionText: "16. Structured data can be represented using XML or JSON formats.",
        answers: [
            { answerText: "a. True", isCorrect: true },
            { answerText: "b. False", isCorrect: false },

        ]
    },
    {
        questionText: "17. What is one key advantage of using Advantage DBMS?",
        answers: [
            { answerText: "a. High scalability and performance", isCorrect: true },
            { answerText: "b. Open-source licensing", isCorrect: false },
            { answerText: "c. Only supports single-user applications", isCorrect: false },
            { answerText: "d. Strictly schema-based data modeling", isCorrect: false }
        ]
    },
    {
        questionText: "18. Which component of a DBMS is responsible for defining the structure of the database, including tables, fields, and relationships?",
        answers: [
            { answerText: "a. Security Module", isCorrect: false },
            { answerText: "b. Query Processor", isCorrect: false },
            { answerText: "c. Transaction Manager", isCorrect: false },
            { answerText: "d. Data Dictionary", isCorrect: true }
        ]
    },
    {
        questionText: "19. Which of the following is NOT a feature of Advantage Database Management System?",
        answers: [
            { answerText: "a. Data replication", isCorrect: false },
            { answerText: "b. Full-text search", isCorrect: false },
            { answerText: "c. Integrated backup and recovery", isCorrect: false },
            { answerText: "d. Limited support for concurrent users", isCorrect: true }
        ]
    },
    {
        questionText: "20. Which of the following is not a standard type of DBMS model?",
        answers: [
            { answerText: "a. Linear", isCorrect: true },
            { answerText: "b. Network", isCorrect: false },
            { answerText: "c. Relational", isCorrect: false },
            { answerText: "d. Hierarchical", isCorrect: false }
        ]
    },
    {
        questionText: "21. Which DBMS service ensures that multiple users can access and modify data concurrently without conflicts?",
        answers: [
            { answerText: "a. Data Encryption", isCorrect: false },
            { answerText: "b. Data Backup", isCorrect: false },
            { answerText: "c. Data Validation", isCorrect: false },
            { answerText: "d. Concurrency Control", isCorrect: true }
        ]
    },
    {
        questionText: "22. What is a significant disadvantage of using a Database Management System (DBMS)?",
        answers: [
            { answerText: "a. Increased data accessibility", isCorrect: false },
            { answerText: "b. Improved data security", isCorrect: false },
            { answerText: "c. Enhanced data consistency", isCorrect: false },
            { answerText: "d. Data redundancy", isCorrect: true }
        ]
    },
    {
        questionText: "23. What is the primary purpose of the DBMS recovery manager?",
        answers: [
            { answerText: "a. To improve query performance", isCorrect: false },
            { answerText: "b. To prevent unauthorized access to the database", isCorrect: false },
            { answerText: "c. To create data reports and summaries", isCorrect: false },
            { answerText: "d. To ensure data is backed up and can be restored in case of failure", isCorrect: true }
        ]
    },
    {
        questionText: "24. What is a primary function of a DBMS?",
        answers: [
            { answerText: "a. Data visualization", isCorrect: false },
            { answerText: "b. Data analysis", isCorrect: false },
            { answerText: "c. Data transmission", isCorrect: false },
            { answerText: "d. Data storage", isCorrect: true }
        ]
    },
    {
        questionText: "25. Which of the following is a challenge associated with database management systems in distributed environments?",
        answers: [
            { answerText: "a. Enhanced data security", isCorrect: false },
            { answerText: "b. Data synchronization difficulties", isCorrect: true },
            { answerText: "c. Improved data availability", isCorrect: false },
            { answerText: "d. Simplified data backup", isCorrect: false }
        ]
    },
    {
        questionText: "26. Which of the following is a limitation of a DBMS in terms of performance?",
        answers: [
            { answerText: "a. Increased data scalability", isCorrect: false },
            { answerText: "b. Overhead in query processing", isCorrect: true },
            { answerText: "c. Reduced data integrity", isCorrect: false },
            { answerText: "d. Faster data retrieval", isCorrect: false }
        ]
    },
    {
        questionText: "27. What can be a drawback of using a DBMS for small-scale projects?",
        answers: [
            { answerText: "a. Data centralization", isCorrect: false },
            { answerText: "b. Simplified data sharing", isCorrect: false },
            { answerText: "c. Excessive resource consumption", isCorrect: true },
            { answerText: "d. Improved data organization", isCorrect: false }
        ]
    },
    {
        questionText: "28. Which type of DBMS allows data to be stored in tables with rows and columns?",
        answers: [
            { answerText: "a. Relational DBMS", isCorrect: true },
            { answerText: "b. Object-Oriented DBMS", isCorrect: false },
            { answerText: "c. NoSQL DBMS", isCorrect: false },
            { answerText: "d. Hierarchical DBMS", isCorrect: false }
        ]
    },
    {
        questionText: "29. What is the fundamental concept in the Relational Model of databases?",
        answers: [
            { answerText: "a. Rows", isCorrect: false },
            { answerText: "b. Tables", isCorrect: true },
            { answerText: "c. Attributes", isCorrect: false },
            { answerText: "d. Relationships", isCorrect: false }
        ]
    },
    {
        questionText: "30. In the Relational Model, a row is known as a:",
        answers: [
            { answerText: "a. Attribute", isCorrect: false },
            { answerText: "b. Relation", isCorrect: false },
            { answerText: "c. Tuple", isCorrect: true },
            { answerText: "d. Entity", isCorrect: false }
        ]
    },
    {
        questionText: "31. What is a foreign key in a relational database?",
        answers: [
            { answerText: "a. A key used for encryption and decryption.", isCorrect: false },
            { answerText: "b. An attribute that is not indexed.", isCorrect: false },
            { answerText: "c. An attribute that links to the primary key in another table.", isCorrect: true },
            { answerText: "d. An attribute that can only take on specific values.", isCorrect: false }
        ]
    },
    {
        questionText: "32. What does the term 'cardinality' refer to in a relational database?",
        answers: [
            { answerText: "a. The total number of tables in a database.", isCorrect: false },
            { answerText: "b. The number of rows in a table.", isCorrect: true },
            { answerText: "c. The number of attributes in a table.", isCorrect: false },
            { answerText: "d. The uniqueness and number of values in a column.", isCorrect: false }
        ]
    },
    {
        questionText: "33. In the Relational Model, a column is known as a:",
        answers: [
            { answerText: "a. Attribute", isCorrect: true },
            { answerText: "b. Relation", isCorrect: false },
            { answerText: "c. Tuple", isCorrect: false },
            { answerText: "d. Entity", isCorrect: false }
        ]
    },
    {
        questionText: "34. Which of the following best describes a primary key in a relational database?",
        answers: [
            { answerText: "a. A unique identifier for a row in a table.", isCorrect: true },
            { answerText: "b. An indexed attribute.", isCorrect: false },
            { answerText: "c. A foreign key from another table.", isCorrect: false },
            { answerText: "d. A non-unique identifier for a row in a table.", isCorrect: false }
        ]
    },
    {
        questionText: "35. In the Relational Model, a table is also known as a:",
        answers: [
            { answerText: "a. Record", isCorrect: false },
            { answerText: "b. Relation", isCorrect: true },
            { answerText: "c. Tuple", isCorrect: false },
            { answerText: "d. Entity", isCorrect: false }
        ]
    },
    {
        questionText: "36. What does the term 'degree' refer to in a relational database?",
        answers: [
            { answerText: "a. The number of rows in a table", isCorrect: false },
            { answerText: "b. The number of attributes in a table.", isCorrect: true },
            { answerText: "c. The total number of tables in a database.", isCorrect: false },
            { answerText: "d. The uniqueness and number of values in a column.", isCorrect: false }
        ]
    },
    {
        questionText: "37. What problem does the Entity-Relationship Model often face when modeling complex relationships between entities?",
        answers: [
            { answerText: "a. Lack of data integrity", isCorrect: false },
            { answerText: "b. Data duplication", isCorrect: false },
            { answerText: "c. Difficulty handling many-to-many relationships", isCorrect: true },
            { answerText: "d. Scalability issues", isCorrect: false }
        ]
    },
    {
        questionText: "38. In a one-to-one (1:1) relationship, how many instances of one entity can be associated with a single instance of another entity?",
        answers: [
            { answerText: "a. One", isCorrect: true },
            { answerText: "b. Zero", isCorrect: false },
            { answerText: "c. Many", isCorrect: false },
            { answerText: "d. It depends on the specific implementation", isCorrect: false }
        ]
    },
    {
        questionText: "39. In a many-to-many (*:*) relationship, how many instances of one entity can be associated with many instances of another entity?",
        answers: [
            { answerText: "a. One", isCorrect: false },
            { answerText: "b. Zero", isCorrect: false },
            { answerText: "c. Many", isCorrect: true },
            { answerText: "d. It depends on the specific implementation", isCorrect: false }
        ]
    },
    {
        questionText: "40. What is the cardinality notation used to represent a mandatory relationship in ERM?",
        answers: [
            { answerText: "a. 0:*", isCorrect: false },
            { answerText: "b. *:*", isCorrect: false },
            { answerText: "c. 1:1", isCorrect: false },
            { answerText: "d. 1", isCorrect: true }
        ]
    },
    {
        questionText: "41. In a zero-to-many (0:N) relationship, how many instances of one entity can be associated with many instances of another entity?",
        answers: [
            { answerText: "a. One", isCorrect: false },
            { answerText: "b. Zero", isCorrect: false },
            { answerText: "c. Many", isCorrect: true },
            { answerText: "d. It depends on the specific implementation", isCorrect: false }
        ]
    },
    {
        questionText: "42. Which cardinality represents a situation where one entity instance must be associated with at least one instance of another entity?",
        answers: [
            { answerText: "a. Zero-to-Many (0: *)", isCorrect: false },
            { answerText: "b. Many-to-One (*:1))", isCorrect: false },
            { answerText: "c. One-to-Many (1:*)", isCorrect: true },
            { answerText: "d. One-to-One (1:1)", isCorrect: false }
        ]
    },
    {
        questionText: "43. What does cardinality '0' represent in an Entity-Relationship Model (ERM)?",
        answers: [
            { answerText: "a. Many-to-Many relationship", isCorrect: false },
            { answerText: "b. Mandatory relationship", isCorrect: false },
            { answerText: "c. One-to-Many relationship", isCorrect: false },
            { answerText: "d. No relationship", isCorrect: true }
        ]
    },
    {
        questionText: "44. In the Entity-Relationship Model (ERM), what is the cardinality of a relationship with a '1' on one side and a '*' on the otherside?",
        answers: [
            { answerText: "a. Zero-to-Many (0: *)", isCorrect: false },
            { answerText: "b. Many-to-One (*:1))", isCorrect: false },
            { answerText: "c. One-to-Many (1:*)", isCorrect: true },
            { answerText: "d. One-to-One (1:1)", isCorrect: false }
        ]
    },
    {
        questionText: "45. What is the cardinality of a relationship where an entity on one side is associated with at most one entity on the other side?",
        answers: [
            { answerText: "a. Zero-to-Many (0: *)", isCorrect: false },
            { answerText: "b. Many-to-One (*:1))", isCorrect: true },
            { answerText: "c. One-to-Many (1:*)", isCorrect: false },
            { answerText: "d. One-to-One (1:1)", isCorrect: false }
        ]
    },
    {
        questionText: "46. When dealing with a rapidly changing business environment, what problem might the Entity-Relationship Model face?",
        answers: [
            { answerText: "a. Overemphasis on data integrity", isCorrect: false },
            { answerText: "b. Lack of normalization", isCorrect: false },
            { answerText: "c. Inadequate support for queries", isCorrect: false },
            { answerText: "d. Difficulty in adapting to changes", isCorrect: true }
        ]
    },
    {
        questionText: "47. Which type of relationship cardinality ensures that each entity instance on one side of the relationship is associated with one and only one entity instance on the other side?",
        answers: [
            { answerText: "a. Zero-to-Many (0: *)", isCorrect: false },
            { answerText: "b. Many-to-One (*:1))", isCorrect: false },
            { answerText: "c. One-to-Many (1:*)", isCorrect: false },
            { answerText: "d. One-to-One (1:1)", isCorrect: true }
        ]
    },
    {
        questionText: "48. What does cardinality represent in an Entity-Relationship Model (ERM)",
        answers: [
            { answerText: "a. The number of instances in a relationship", isCorrect: true },
            { answerText: "b. The primary key of an entity", isCorrect: false },
            { answerText: "c. The type of attribute", isCorrect: false },
            { answerText: "d. d. The uniqueness of an entity", isCorrect: false }
        ]
    },
    {
        questionText: "49. Which operation in SQL allows you to combine rows from two or more tables based on a related column between them?",
        answers: [
            { answerText: "a. INSERT", isCorrect: false },
            { answerText: "b. JOIN", isCorrect: true },
            { answerText: "c. SELECT", isCorrect: false },
            { answerText: "d. UPDATE", isCorrect: false }
        ]
    },
    {
        questionText: "50. What does SQL stand for in the context of relational databases?",
        answers: [
            { answerText: "a. Sequential Query Language", isCorrect: false },
            { answerText: "b. Standard Query Library", isCorrect: false },
            { answerText: "c. Simple Query Logic", isCorrect: false },
            { answerText: "d. Structured Query Language", isCorrect: true }
        ]
    },
    {
        questionText: "51. In the Relational Model, what is a Cartesian product or cross join?",
        answers: [
            { answerText: "a. A type of index on a table.", isCorrect: false },
            { answerText: "b. A join that returns all possible combinations of rows from two tables.", isCorrect: true },
            { answerText: "c. A data type for storing text values.", isCorrect: false },
            { answerText: "d. A type of table with no attributes.", isCorrect: false }
        ]
    },
    {
        questionText: "52. Which SQL clause is used to add new rows to a table?",
        answers: [
            { answerText: "a. INSERT INTO", isCorrect: true },
            { answerText: "b. FROM", isCorrect: false },
            { answerText: "c. WHERE", isCorrect: false },
            { answerText: "d. VALUES", isCorrect: false }
        ]
    },
    {
        questionText: "53. Which aggregate function is used to find the highest value in a column?",
        answers: [
            { answerText: "a. COUNT", isCorrect: false },
            { answerText: "b. MAX", isCorrect: true },
            { answerText: "c. AVG", isCorrect: false },
            { answerText: "d. SUM", isCorrect: false }
        ]
    },
    {
        questionText: "54. What is the purpose of the SQL ORDER BY clause?",
        answers: [
            { answerText: "a. To join multiple tables together.", isCorrect: false },
            { answerText: "b. To group rows based on a common attribute.", isCorrect: false },
            { answerText: "c. To filter rows in a table.", isCorrect: false },
            { answerText: "d. To sort the result set in a specific order.", isCorrect: true }
        ]
    },
    {
        questionText: "55. Which SQL statement is used to retrieve data from a database in the Relational Model?",
        answers: [
            { answerText: "a. UPDATE", isCorrect: false },
            { answerText: "b. SELECT", isCorrect: true },
            { answerText: "c. INSERT", isCorrect: false },
            { answerText: "d. DELETE", isCorrect: false }
        ]
    },
    {
        questionText: "56. What does the AVG() aggregate function return in SQL?",
        answers: [
            { answerText: "a. The sum of all values in a column", isCorrect: false },
            { answerText: "b. The maximum value in a column", isCorrect: false },
            { answerText: "c. The total number of rows in a table", isCorrect: false },
            { answerText: "d. The average value of a numerical column", isCorrect: true }
        ]
    },
    {
        questionText: "57. Which aggregate function is used to calculate the lowest value in a column?",
        answers: [
            { answerText: "a. AVG", isCorrect: false },
            { answerText: "b. SUM", isCorrect: false },
            { answerText: "c. COUNT", isCorrect: false },
            { answerText: "d. MIN", isCorrect: true }
        ]
    },
    {
        questionText: "58. Which SQL aggregate function is used to calculate the total sum of a numerical column?",
        answers: [
            { answerText: "a. AVG", isCorrect: false },
            { answerText: "b. SUM", isCorrect: true },
            { answerText: "c. COUNT", isCorrect: false },
            { answerText: "d. MAX", isCorrect: false }
        ]
    },
    {
        questionText: "59. Which of the following is not a data manipulation language (DML) command in SQL?",
        answers: [
            { answerText: "a. UPDATE", isCorrect: false },
            { answerText: "b. CREATE", isCorrect: true },
            { answerText: "c. INSERT", isCorrect: false },
            { answerText: "d. DELETE", isCorrect: false }
        ]
    },
    {
        questionText: "60. What is the result of the COUNT(*) aggregate function in SQL?",
        answers: [
            { answerText: "a. The average of all values in a column", isCorrect: false },
            { answerText: "b. The maximum value in a column", isCorrect: false },
            { answerText: "c. The total number of rows in a table", isCorrect: true },
            { answerText: "d. The minimum value in a column", isCorrect: false }
        ]
    },
    {
        questionText: "61. In a LEFT JOIN operation, if there are no matching rows in the right table, what will be included in the result set for the right table columns?",
        answers: [
            { answerText: "a. NULL values", isCorrect: true },
            { answerText: "b. Values from the left table", isCorrect: false },
            { answerText: "c. Empty strings", isCorrect: false },
            { answerText: "d. Zeroes", isCorrect: false }
        ]
    },
    {
        questionText: "62. Which SQL keyword is used to specify the sorting order in an ORDER BY clause?",
        answers: [
            { answerText: "a. SORT", isCorrect: false },
            { answerText: "b. DESC", isCorrect: true },
            { answerText: "C. ASC", isCorrect: false },
            { answerText: "d. ORDER", isCorrect: false }
        ]
    },
    {
        questionText: "63. What is the purpose of a DBMS query language like SQL (Structured Query Language)?",
        answers: [
            { answerText: "a. To manage hardware resources", isCorrect: false },
            { answerText: "b. To design user interfaces", isCorrect: false },
            { answerText: "c. To interact with and retrieve data from the database", isCorrect: true },
            { answerText: "d. To implement encryption and security measures", isCorrect: false }
        ]
    },
    {
        questionText: "64. In which normal form is a relation considered free from partial dependencies?",
        answers: [
            { answerText: "a. 1NF (First Normal Form)", isCorrect: false },
            { answerText: "b. 3NF (Third Normal Form)", isCorrect: false },
            { answerText: "c. 2NF (Second Normal Form)", isCorrect: true },
    
        ]
    },
    {
        questionText: "65. What is the primary goal of normalization in a relational database?",
        answers: [
            { answerText: "a. To improve query performance", isCorrect: false },
            { answerText: "b. To organize data to reduce anomalies", isCorrect: true },
            { answerText: "c. To increase data redundancy", isCorrect: false },
            { answerText: "d. To minimize data integrity", isCorrect: false }
        ]
    },
    {
        questionText: "66. Which of the following is not a normal form in database normalization?",
        answers: [
            { answerText: "a. 2NF (Second Normal Form)", isCorrect: false },
            { answerText: "b. 0NF (Zeroth Normal Form)", isCorrect: true },
            { answerText: "c. 1NF (First Normal Form)", isCorrect: false },
            { answerText: "d. 3NF (Third Normal Form)", isCorrect: false }
        ]
    },
    {
        questionText: "67. Which normal form deals with the removal of transitive dependencies?",
        answers: [
            { answerText: "a. 1NF (First Normal Form)", isCorrect: false },
            { answerText: "b. 3NF (Third Normal Form)", isCorrect: true },
            { answerText: "c. 2NF (Second Normal Form)", isCorrect: false }
        ]
    },
    {
        questionText: "68. An attribute is said to be in the second normal form (2NF) if it is in:",
        answers: [
            { answerText: "a. 2NF and there are no partial dependencies.", isCorrect: false },
            { answerText: "b. 3NF and there are no transitive dependencies.", isCorrect: false },
            { answerText: "c. 1NF and there are no transitive dependencies.", isCorrect: false },
            { answerText: "d. 1NF and there are no partial dependencies.", isCorrect: true }
        ]
    },
    {
        questionText: "69. During which phase of the DSDLC are data models, entity-relationship diagrams, and data dictionaries typically created?",
        answers: [
            { answerText: "a. Maintainance", isCorrect: false },
            { answerText: "b. Design", isCorrect: true },
            { answerText: "c. Testing", isCorrect: false },
            { answerText: "d. Implementation", isCorrect: false }
        ]
    },
    {
        questionText: "70. What is the primary focus of the Implementation phase in the DSDLC?",
        answers: [
            { answerText: "a. Identifying system requirements", isCorrect: false },
            { answerText: "b. Creating user documentation", isCorrect: false },
            { answerText: "c. Building the physical database", isCorrect: true },
            { answerText: "d. Developing the user interface", isCorrect: false }
        ]
    },
    {
        questionText: "71. What is the primary goal of the Database System Development Lifecycle (DSDLC)?",
        answers: [
            { answerText: "a. Developing efficient algorithms", isCorrect: false },
            { answerText: "b. Managing project timelines", isCorrect: false },
            { answerText: "c. Designing attractive user interfaces", isCorrect: false },
            { answerText: "d. Creating a well-structured and functional database system", isCorrect: true }
        ]
    },
    {
        questionText: "72. During which phase of the DSDLC is user training and system documentation typically provided?",
        answers: [
            { answerText: "a. Maintainance", isCorrect: false },
            { answerText: "b. Design", isCorrect: false },
            { answerText: "c. Analysis", isCorrect: false },
            { answerText: "d. Implementation", isCorrect: true }
        ]
    },
    {
        questionText: "73. What is the purpose of the Testing phase in the DSDLC?",
        answers: [
            { answerText: "a. Documenting system specifications", isCorrect: false },
            { answerText: "b. Gathering user requirements", isCorrect: false },
            { answerText: "c. Evaluating the system for correctness and performance", isCorrect: true },
            { answerText: "d. Developing the final database schema", isCorrect: false }
        ]
    },
    {
        questionText: "74. Which DSDLC phase involves the creation of models or mock-ups to gather user feedback and refine the system design?",
        answers: [
            { answerText: "a. Prototypes", isCorrect: true },
            { answerText: "b. Testing", isCorrect: false },
            { answerText: "c. Analysis", isCorrect: false },
            { answerText: "d. Implementation", isCorrect: false }
        ]
    },
    

];

let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

function displayQuestion(question) {
    const questionDiv = document.getElementById('question');
    // Since the question number is already provided in the question text, we don't repeat it
    questionDiv.textContent = question.questionText;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = 'answer' + index;
        input.name = 'answer';
        input.dataset.isCorrect = answer.isCorrect;

        const label = document.createElement('label');
        label.htmlFor = 'answer' + index;
        label.textContent = answer.answerText;
        answersDiv.appendChild(input);
        answersDiv.appendChild(label);

        // Event listener for when an answer is selected
        label.addEventListener('click', () => {
            // Disable all inputs to prevent changing the answer
            document.querySelectorAll('#answers input[type="radio"]').forEach(inp => {
                inp.disabled = true;
            });

            // Highlight the correct and incorrect answers
            const correctLabel = document.querySelector(`label[for=answer${index}]`);
            if (answer.isCorrect) {
                correctLabel.classList.add('correct');
                correctCount++;
            } else {
                const correctAnswerIndex = question.answers.findIndex(ans => ans.isCorrect);
                const correctAnswerLabel = document.querySelector(`label[for=answer${correctAnswerIndex}]`);
                correctAnswerLabel.classList.add('correct');
                correctLabel.classList.add('incorrect');
                wrongCount++;
            }
            updateCounters();
        });
    });
}

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function updateCounters() {
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
}

// Updated event listener for the Next Question button
document.getElementById('next').addEventListener('click', function() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(questions[currentQuestionIndex]);
        // Update the total number of questions and the current question index
        document.getElementById('progress').textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    } else {
        // End of the quiz, handle accordingly
        alert('End of the quiz');
    }
});

displayQuestion(questions[currentQuestionIndex]);
document.getElementById('progress').textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;