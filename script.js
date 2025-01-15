const questions = {
    DBMS1: {
        time: 60 * 10, // 10 minutes in seconds
        questions: [
            {
                question: "What is a database?",
                answers: [
                    { text: "A collection of interrelated data", correct: true },
                    { text: "A programming language", correct: false },
                    { text: "A hardware device", correct: false },
                    { text: "An operating system", correct: false },
                ]
            },
            {
                question: "What is a database?",
                answers: [
                    { text: "A programming language", correct: false },
                    { text: "A hardware device", correct: false },
                    { text: "A collection of interrelated data", correct: true },
                    { text: "An operating system", correct: false },
                ]
            },
            {
                question: "What does DBMS stand for?",
                answers: [
                    { text: "Data Backup Management System", correct: false },
                    { text: "Database Management System", correct: true },
                    { text: "Database Manipulation Software", correct: false },
                    { text: "Digital Backup Management System", correct: false },
                ]
            },
            {
                question: "Which of these is an advantage of a DBMS?",
                answers: [
                    { text: "Manual data entry is required", correct: false },
                    { text: "Increased data inconsistency", correct: false },
                    { text: "Data is harder to access", correct: false },
                    { text: "Data redundancy is reduced", correct: true },
                ]
            },
            {
                question: "What is the physical level of database abstraction?",
                answers: [
                    { text: "Defines the relationships between data", correct: false },
                    { text: "Provides a user view of the data", correct: false },
                    { text: "Describes how data is stored", correct: true },
                    { text: "Describes data constraints", correct: false },
                ]
            },
            {
                question: "What is a schema in a database?",
                answers: [
                    { text: "A type of database management system", correct: false },
                    { text: "The current content of the database", correct: false },
                    { text: "A programming language for databases", correct: false },
                    { text: "The logical structure of the database", correct: true },
                ]
            },
            {
                question: "What is physical data independence?",
                answers: [
                    { text: "The ability to access data efficiently", correct: false },
                    { text: "The ability to modify the physical schema without affecting the logical schema", correct: true },
                    { text: "The ability to perform concurrent transactions", correct: false },
                    { text: "The ability to modify the logical schema without affecting applications", correct: false },
                ]
            },
            {
                question: "Which data model uses tables to represent data?",
                answers: [
                    { text: "Hierarchical model", correct: false },
                    { text: "Object-based model", correct: false },
                    { text: "Network model", correct: false },
                    { text: "Relational model", correct: true },
                ]
            },
            {
                question: "What does a Data Manipulation Language (DML) do?",
                answers: [
                    { text: "Compiles the database code", correct: false },
                    { text: "Defines the database schema", correct: false },
                    { text: "Accesses and manipulates data in a database", correct: true },
                    { text: "Manages storage devices", correct: false },
                ]
            },
            {
                question: "What is a primary key?",
                answers: [
                    { text: "A unique identifier for a record in a table", correct: true },
                    { text: "A foreign key reference", correct: false },
                    { text: "A key used to encrypt data", correct: false },
                    { text: "A field that allows duplicate values", correct: false },
                ]
            },
            {
                question: "What does the storage manager do?",
                answers: [
                    { text: "Provides an interface between low-level data and application programs", correct: true },
                    { text: "Executes SQL commands", correct: false },
                    { text: "Manages user access", correct: false },
                    { text: "Performs query optimization", correct: false },
                ]
            },
            {
                question: "What is a foreign key?",
                answers: [
                    { text: "An attribute that creates a relationship between two tables", correct: true },
                    { text: "A key for encrypting the database", correct: false },
                    { text: "A unique identifier for records", correct: false },
                    { text: "A primary key for an index", correct: false },
                ]
            },
            {
                question: "Which type of DML is used to retrieve data?",
                answers: [
                    { text: "Data definition language", correct: false },
                    { text: "Transaction language", correct: false },
                    { text: "Query language", correct: true },
                    { text: "Procedural language", correct: false },
                ]
            },
            {
                question: "What is the role of the concurrency control manager?",
                answers: [
                    { text: "To ensure consistency during concurrent transactions", correct: true },
                    { text: "To handle database recovery", correct: false },
                    { text: "To define data structures", correct: false },
                    { text: "To manage physical storage", correct: false },
                ]
            },
            {
                question: "What does an ER model represent?",
                answers: [
                    { text: "Concurrent transactions", correct: false },
                    { text: "Entities and their relationships", correct: true },
                    { text: "Database queries", correct: false },
                    { text: "Physical storage of data", correct: false },
                ]
            },
            {
                question: "What is the null value in a database?",
                answers: [
                    { text: "A value indicating missing or unknown information", correct: true },
                    { text: "A default value for attributes", correct: false },
                    { text: "A value that repeats", correct: false },
                    { text: "A special value used as a key", correct: false },
                ]
            },
            {
                question: "What is a candidate key?",
                answers: [
                    { text: "A minimal superkey", correct: true },
                    { text: "A key used for indexing", correct: false },
                    { text: "A redundant key", correct: false },
                    { text: "A key that references another table", correct: false },
                ]
            },
            {
                question: "Which SQL command is used to create a table?",
                answers: [
                    { text: "ALTER TABLE", correct: false },
                    { text: "SELECT", correct: false },
                    { text: "CREATE TABLE", correct: true },
                    { text: "INSERT INTO", correct: false },
                ]
            },
            {
                question: "What does a data dictionary store?",
                answers: [
                    { text: "Temporary data", correct: false },
                    { text: "SQL queries", correct: false },
                    { text: "Metadata about the database", correct: true },
                    { text: "Actual data values", correct: false },
                ]
            },
            {
                question: "What is the relational model based on?",
                answers: [
                    { text: "Set theory and predicate logic", correct: true },
                    { text: "Hierarchical structure", correct: false },
                    { text: "Object-oriented programming", correct: false },
                    { text: "Network topology", correct: false },
                ]
            },
            {
                question: "What is a tuple in the context of a database?",
                answers: [
                    { text: "A row in a table", correct: true },
                    { text: "A column in a table", correct: false },
                    { text: "A schema definition", correct: false },
                    { text: "A relationship between tables", correct: false },
                ]
            },
            {
                question: "What is normalization in DBMS?",
                answers: [
                    { text: "A process to organize data and reduce redundancy", correct: true },
                    { text: "A method to store unstructured data", correct: false },
                    { text: "A way to backup data", correct: false },
                    { text: "A database language", correct: false },
                ]
            },
            {
                question: "What is the purpose of a transaction log?",
                answers: [
                    { text: "To store temporary results", correct: false },
                    { text: "To record all transactions and database changes", correct: true },
                    { text: "To manage user access", correct: false },
                    { text: "To handle query optimization", correct: false },
                ]
            },
            {
                question: "Which normal form ensures no transitive dependency?",
                answers: [
                    { text: "Second Normal Form (2NF)", correct: false },
                    { text: "Third Normal Form (3NF)", correct: true },
                    { text: "First Normal Form (1NF)", correct: false },
                    { text: "Boyce-Codd Normal Form (BCNF)", correct: false },
                ]
            },
            {
                question: "What is a composite key?",
                answers: [
                    { text: "A key composed of two or more attributes", correct: true },
                    { text: "A key that contains only one attribute", correct: false },
                    { text: "A key used only for indexing", correct: false },
                    { text: "A foreign key", correct: false },
                ]
            },
            {
                question: "What does ACID stand for in DBMS?",
                answers: [
                    { text: "Atomicity, Consistency, Isolation, Durability", correct: true },
                    { text: "Accuracy, Complexity, Integrity, Durability", correct: false },
                    { text: "Access, Change, Isolation, Data", correct: false },
                    { text: "Atomicity, Complexity, Integrity, Data", correct: false },
                ]
            },
            {
                question: "What is an index in a database?",
                answers: [
                    { text: "A data structure to improve query performance", correct: true },
                    { text: "A method to store data permanently", correct: false },
                    { text: "A table that contains duplicate data", correct: false },
                    { text: "A type of database schema", correct: false },
                ]
            },
            {
                question: "What is the purpose of the SELECT statement in SQL?",
                answers: [
                    { text: "To retrieve data from the database", correct: true },
                    { text: "To define the database structure", correct: false },
                    { text: "To update existing data", correct: false },
                    { text: "To delete data from the database", correct: false },
                ]
            },
            {
                question: "What is the difference between DELETE and TRUNCATE in SQL?",
                answers: [
                    { text: "DELETE can be rolled back, TRUNCATE cannot", correct: true },
                    { text: "TRUNCATE can delete specific rows, DELETE cannot", correct: false },
                    { text: "Both are used to modify schema", correct: false },
                    { text: "DELETE permanently removes schema", correct: false },
                ]
            },
            {
                question: "What is a clustered index?",
                answers: [
                    { text: "An index that reorders the physical rows in the table", correct: true },
                    { text: "An index stored in a separate location from the table", correct: false },
                    { text: "An index used only for numeric data", correct: false },
                    { text: "An index that allows duplicate values", correct: false },
                ]
            },
            {
                question: "What is a non-clustered index?",
                answers: [
                    { text: "An index stored separately from the table", correct: true },
                    { text: "An index that modifies the physical order of rows", correct: false },
                    { text: "An index used exclusively for primary keys", correct: false },
                    { text: "An index that ensures unique data", correct: false },
                ]
            },
            {
                question: "Which SQL clause is used to filter data?",
                answers: [
                    { text: "WHERE", correct: true },
                    { text: "GROUP BY", correct: false },
                    { text: "ORDER BY", correct: false },
                    { text: "HAVING", correct: false },
                ]
            },
            {
                question: "What is a foreign key constraint?",
                answers: [
                    { text: "It enforces referential integrity between tables", correct: true },
                    { text: "It ensures a column is unique", correct: false },
                    { text: "It prevents null values", correct: false },
                    { text: "It encrypts data in the column", correct: false },
                ]
            },
            {
                question: "What is a view in SQL?",
                answers: [
                    { text: "A virtual table based on a query", correct: true },
                    { text: "A permanent storage table", correct: false },
                    { text: "A schema of the database", correct: false },
                    { text: "A special index", correct: false },
                ]
            },
            {
                question: "What is the use of the JOIN operation in SQL?",
                answers: [
                    { text: "To combine rows from two or more tables", correct: true },
                    { text: "To update rows in a table", correct: false },
                    { text: "To delete rows from multiple tables", correct: false },
                    { text: "To create a new schema", correct: false },
                ]
            },
            {
                question: "Which of these is a type of JOIN in SQL?",
                answers: [
                    { text: "INNER JOIN", correct: true },
                    { text: "OUTER LINK", correct: false },
                    { text: "TABLE JOIN", correct: false },
                    { text: "MERGE JOIN", correct: false },
                ]
            },
            {
                question: "What does the COUNT function do in SQL?",
                answers: [
                    { text: "Counts the number of rows in a result set", correct: true },
                    { text: "Adds all numeric values in a column", correct: false },
                    { text: "Returns the maximum value in a column", correct: false },
                    { text: "Groups rows based on a condition", correct: false },
                ]
            },
            {
                question: "What is the purpose of the GROUP BY clause in SQL?",
                answers: [
                    { text: "To group rows with the same values in specified columns", correct: true },
                    { text: "To filter rows", correct: false },
                    { text: "To sort the result set", correct: false },
                    { text: "To retrieve only unique rows", correct: false },
                ]
            },
            {
                question: "What does the HAVING clause do in SQL?",
                answers: [
                    { text: "Filters groups based on conditions", correct: true },
                    { text: "Filters individual rows based on conditions", correct: false },
                    { text: "Sorts the result set", correct: false },
                    { text: "Groups rows based on conditions", correct: false },
                ]
            },
            {
                question: "What is the purpose of a rollback in DBMS?",
                answers: [
                    { text: "To undo changes made during a transaction", correct: true },
                    { text: "To optimize query performance", correct: false },
                    { text: "To commit changes permanently", correct: false },
                    { text: "To lock database rows", correct: false },
                ]
            },
            {
                question: "What is the main function of a database trigger?",
                answers: [
                    { text: "To automatically execute a specified action in response to events", correct: true },
                    { text: "To define the structure of a table", correct: false },
                    { text: "To filter query results", correct: false },
                    { text: "To create database indexes", correct: false },
                ]
            }
            // ...other computer questions...
        ]
    },
    computerArchitecture: {
        time: 60 * 15, // 15 minutes in seconds
        questions: [
            {
                question: "What is the primary function of the ALU in a CPU?",
                answers: [
                    { text: "To store data temporarily", correct: false },
                    { text: "To decode instructions", correct: false },
                    { text: "To perform arithmetic and logical operations", correct: true },
                    { text: "To manage input/output devices", correct: false },
                ]
            },
            {
                question: "What does the control unit of the CPU do?",
                answers: [
                    { text: "It executes instructions", correct: false },
                    { text: "It stores data permanently", correct: false },
                    { text: "It performs arithmetic operations", correct: false },
                    { text: "It controls the flow of data between CPU components", correct: true },
                ]
            },
            {
                question: "Which type of memory is volatile?",
                answers: [
                    { text: "Hard Disk", correct: false },
                    { text: "ROM", correct: false },
                    { text: "RAM", correct: true },
                    { text: "Flash Memory", correct: false },
                ]
            },
            {
                question: "What is a register in computer architecture?",
                answers: [
                    { text: "A network protocol", correct: false },
                    { text: "A device for storing large amounts of data", correct: false },
                    { text: "A peripheral device", correct: false },
                    { text: "A high-speed storage location within the CPU", correct: true },
                ]
            },
            {
                question: "What is the main function of a cache in a computer?",
                answers: [
                    { text: "To decode instructions", correct: false },
                    { text: "To manage hardware drivers", correct: false },
                    { text: "To store frequently accessed data for quick retrieval", correct: true },
                    { text: "To provide permanent storage", correct: false },
                ]
            },
            {
                question: "What is pipelining in CPU architecture?",
                answers: [
                    { text: "A way to execute only one instruction at a time", correct: false },
                    { text: "A process to fetch instructions", correct: false },
                    { text: "A process to increase parallelism by overlapping instruction execution", correct: true },
                    { text: "A method of input/output data transfer", correct: false },
                ]
            },
            {
                question: "Which type of memory is used to store the BIOS?",
                answers: [
                    { text: "Virtual Memory", correct: false },
                    { text: "Cache Memory", correct: false },
                    { text: "ROM", correct: true },
                    { text: "RAM", correct: false },
                ]
            },
            {
                question: "What is the purpose of a bus in a computer system?",
                answers: [
                    { text: "To manage hardware interrupts", correct: false },
                    { text: "To control the clock speed", correct: false },
                    { text: "To transfer data between components", correct: true },
                    { text: "To store frequently used data", correct: false },
                ]
            },
            {
                question: "What does MAR stand for in computer architecture?",
                answers: [
                    { text: "Memory Address Register", correct: true },
                    { text: "Machine Access Register", correct: false },
                    { text: "Main Access Routine", correct: false },
                    { text: "Memory Allocation Range", correct: false },
                ]
            },
            {
                question: "What does the term 'clock speed' refer to in a CPU?",
                answers: [
                    { text: "The speed at which instructions are fetched and executed", correct: true },
                    { text: "The time it takes to access memory", correct: false },
                    { text: "The speed of the hard disk", correct: false },
                    { text: "The duration of an I/O operation", correct: false },
                ]
            },
            {
                question: "Which component is responsible for executing instructions in a CPU?",
                answers: [
                    { text: "The Control Unit", correct: false },
                    { text: "The Memory Unit", correct: false },
                    { text: "The Arithmetic Logic Unit (ALU)", correct: true },
                    { text: "The I/O Controller", correct: false },
                ]
            },
            {
                question: "What is a multiplexer used for in digital circuits?",
                answers: [
                    { text: "To divide a signal into multiple outputs", correct: false },
                    { text: "To perform arithmetic operations", correct: false },
                    { text: "To store data temporarily", correct: false },
                    { text: "To select one input from multiple inputs and forward it", correct: true },
                ]
            },
            {
                question: "Which memory type is the fastest?",
                answers: [
                    { text: "Hard Disk", correct: false },
                    { text: "Cache Memory", correct: true },
                    { text: "RAM", correct: false },
                    { text: "ROM", correct: false },
                ]
            },
            {
                question: "What is an instruction cycle?",
                answers: [
                    { text: "The cycle during which the CPU fetches, decodes, and executes an instruction", correct: true },
                    { text: "The cycle to refresh memory", correct: false },
                    { text: "The time taken for an I/O operation", correct: false },
                    { text: "The cycle for initializing hardware", correct: false },
                ]
            },
            {
                question: "What is a hazard in pipelining?",
                answers: [
                    { text: "An error in memory allocation", correct: false },
                    { text: "A fault in the I/O system", correct: false },
                    { text: "A signal processing delay", correct: false },
                    { text: "A situation that prevents the next instruction from executing in its designated cycle", correct: true },
                ]
            },
            {
                question: "What is a Von Neumann architecture?",
                answers: [
                    { text: "A design where the same memory stores instructions and data", correct: true },
                    { text: "A hardware design for multitasking", correct: false },
                    { text: "An architecture for GPU systems", correct: false },
                    { text: "An architecture for non-volatile memory", correct: false },
                ]
            },
            {
                question: "What is the main advantage of RISC architecture?",
                answers: [
                    { text: "Simplicity of instructions allowing faster execution", correct: true },
                    { text: "Reduced memory usage", correct: false },
                    { text: "Complex instructions enabling fewer clock cycles", correct: false },
                    { text: "Integration with virtual memory", correct: false },
                ]
            },
            {
                question: "What does the PC (Program Counter) store?",
                answers: [
                    { text: "The address of the next instruction to be executed", correct: true },
                    { text: "The base address of the stack", correct: false },
                    { text: "The data being processed", correct: false },
                    { text: "The result of the last operation", correct: false },
                ]
            },
            {
                question: "What is the primary function of the stack in a CPU?",
                answers: [
                    { text: "To store temporary data and return addresses", correct: true },
                    { text: "To decode instructions", correct: false },
                    { text: "To execute arithmetic operations", correct: false },
                    { text: "To manage peripheral devices", correct: false },
                ]
            },
            {
                question: "Which of the following is an example of secondary storage?",
                answers: [
                    { text: "ROM", correct: false },
                    { text: "Cache", correct: false },
                    { text: "Hard Disk Drive", correct: true },
                    { text: "RAM", correct: false },
                ]
            },
            {
                question: "What is the primary function of the ALU in a CPU?",
                answers: [
                    { text: "To decode instructions", correct: false },
                    { text: "To store data temporarily", correct: false },
                    { text: "To perform arithmetic and logical operations", correct: true },
                    { text: "To manage input/output devices", correct: false },
                ]
            },
            {
                question: "What does the control unit of the CPU do?",
                answers: [
                    { text: "It controls the flow of data between CPU components", correct: true },
                    { text: "It executes instructions", correct: false },
                    { text: "It stores data permanently", correct: false },
                    { text: "It performs arithmetic operations", correct: false },
                ]
            },
            {
                question: "Which type of memory is volatile?",
                answers: [
                    { text: "ROM", correct: false },
                    { text: "Flash Memory", correct: false },
                    { text: "Hard Disk", correct: false },
                    { text: "RAM", correct: true },
                ]
            },
            {
                question: "What is a register in computer architecture?",
                answers: [
                    { text: "A network protocol", correct: false },
                    { text: "A peripheral device", correct: false },
                    { text: "A device for storing large amounts of data", correct: false },
                    { text: "A high-speed storage location within the CPU", correct: true },
                ]
            },
            {
                question: "What is the main function of a cache in a computer?",
                answers: [
                    { text: "To decode instructions", correct: false },
                    { text: "To store frequently accessed data for quick retrieval", correct: true },
                    { text: "To provide permanent storage", correct: false },
                    { text: "To manage hardware drivers", correct: false },
                ]
            },
            {
                question: "What is pipelining in CPU architecture?",
                answers: [
                    { text: "A way to execute only one instruction at a time", correct: false },
                    { text: "A process to fetch instructions", correct: false },
                    { text: "A method of input/output data transfer", correct: false },
                    { text: "A process to increase parallelism by overlapping instruction execution", correct: true },
                ]
            },
            {
                question: "Which type of memory is used to store the BIOS?",
                answers: [
                    { text: "RAM", correct: false },
                    { text: "ROM", correct: true },
                    { text: "Virtual Memory", correct: false },
                    { text: "Cache Memory", correct: false },
                ]
            },
            {
                question: "What is the purpose of a bus in a computer system?",
                answers: [
                    { text: "To manage hardware interrupts", correct: false },
                    { text: "To control the clock speed", correct: false },
                    { text: "To store frequently used data", correct: false },
                    { text: "To transfer data between components", correct: true },
                ]
            },
            {
                question: "What does MAR stand for in computer architecture?",
                answers: [
                    { text: "Main Access Routine", correct: false },
                    { text: "Memory Allocation Range", correct: false },
                    { text: "Machine Access Register", correct: false },
                    { text: "Memory Address Register", correct: true },
                ]
            },
            {
                question: "What does the term 'clock speed' refer to in a CPU?",
                answers: [
                    { text: "The time it takes to access memory", correct: false },
                    { text: "The duration of an I/O operation", correct: false },
                    { text: "The speed of the hard disk", correct: false },
                    { text: "The speed at which instructions are fetched and executed", correct: true },
                ]
            },
            {
                question: "Which component is responsible for executing instructions in a CPU?",
                answers: [
                    { text: "The Control Unit", correct: false },
                    { text: "The Arithmetic Logic Unit (ALU)", correct: true },
                    { text: "The Memory Unit", correct: false },
                    { text: "The I/O Controller", correct: false },
                ]
            },
            {
                question: "What is a multiplexer used for in digital circuits?",
                answers: [
                    { text: "To store data temporarily", correct: false },
                    { text: "To perform arithmetic operations", correct: false },
                    { text: "To divide a signal into multiple outputs", correct: false },
                    { text: "To select one input from multiple inputs and forward it", correct: true },
                ]
            },
            {
                question: "Which memory type is the fastest?",
                answers: [
                    { text: "RAM", correct: false },
                    { text: "Hard Disk", correct: false },
                    { text: "Cache Memory", correct: true },
                    { text: "ROM", correct: false },
                ]
            },
            {
                question: "What is an instruction cycle?",
                answers: [
                    { text: "The cycle to refresh memory", correct: false },
                    { text: "The cycle during which the CPU fetches, decodes, and executes an instruction", correct: true },
                    { text: "The time taken for an I/O operation", correct: false },
                    { text: "The cycle for initializing hardware", correct: false },
                ]
            },
            {
                question: "What is a hazard in pipelining?",
                answers: [
                    { text: "A fault in the I/O system", correct: false },
                    { text: "An error in memory allocation", correct: false },
                    { text: "A signal processing delay", correct: false },
                    { text: "A situation that prevents the next instruction from executing in its designated cycle", correct: true },
                ]
            },
            {
                question: "What is a Von Neumann architecture?",
                answers: [
                    { text: "An architecture for GPU systems", correct: false },
                    { text: "An architecture for non-volatile memory", correct: false },
                    { text: "A hardware design for multitasking", correct: false },
                    { text: "A design where the same memory stores instructions and data", correct: true },
                ]
            },
            {
                question: "What is the main advantage of RISC architecture?",
                answers: [
                    { text: "Reduced memory usage", correct: false },
                    { text: "Complex instructions enabling fewer clock cycles", correct: false },
                    { text: "Integration with virtual memory", correct: false },
                    { text: "Simplicity of instructions allowing faster execution", correct: true },
                ]
            },
            {
                question: "What does the PC (Program Counter) store?",
                answers: [
                    { text: "The base address of the stack", correct: false },
                    { text: "The data being processed", correct: false },
                    { text: "The result of the last operation", correct: false },
                    { text: "The address of the next instruction to be executed", correct: true },
                ]
            },
            {
                question: "What is the primary function of the stack in a CPU?",
                answers: [
                    { text: "To decode instructions", correct: false },
                    { text: "To manage peripheral devices", correct: false },
                    { text: "To execute arithmetic operations", correct: false },
                    { text: "To store temporary data and return addresses", correct: true },
                ]
            },
            {
                question: "Which of the following is an example of secondary storage?",
                answers: [
                    { text: "ROM", correct: false },
                    { text: "Cache", correct: false },
                    { text: "RAM", correct: false },
                    { text: "Hard Disk Drive", correct: true },
                ]
            },
            {
                question: "Which of the following is NOT a feature of the Von Neumann architecture?",
                answers: [
                    { text: "Shared program and data memory", correct: false },
                    { text: "Separate buses for data and instructions", correct: true },
                    { text: "Sequential execution of instructions", correct: false },
                    { text: "Single control unit for operations", correct: false },
                ]
            },
            {
                question: "In two's complement, what is the range of values for an 8-bit signed integer?",
                answers: [
                    { text: "-127 to 128", correct: false },
                    { text: "-128 to 127", correct: true },
                    { text: "-128 to 128", correct: false },
                    { text: "0 to 255", correct: false },
                ]
            },
            {
                question: "What does the LC-3 LD instruction do?",
                answers: [
                    { text: "Loads a value into memory", correct: false },
                    { text: "Loads a value from memory into a register", correct: true },
                    { text: "Stores a value into a register", correct: false },
                    { text: "Loads the address of a label", correct: false },
                ]
            },
            {
                question: "What is the output of a 4-input AND gate when all inputs are 1?",
                answers: [
                    { text: "0", correct: false },
                    { text: "1", correct: true },
                    { text: "Depends on the circuit", correct: false },
                    { text: "Undefined", correct: false },
                ]
            },
            {
                question: "Which addressing mode uses a constant value in the instruction?",
                answers: [
                    { text: "Register addressing", correct: false },
                    { text: "Immediate addressing", correct: true },
                    { text: "Indirect addressing", correct: false },
                    { text: "Direct addressing", correct: false },
                ]
            },
            {
                question: "In LC-3, what does the instruction STR R1, R2, #3 do?",
                answers: [
                    { text: "Loads a value from memory into R1", correct: false },
                    { text: "Stores the value of R1 into memory at address R2 + 3", correct: true },
                    { text: "Adds 3 to the value in R1", correct: false },
                    { text: "Subtracts 3 from R1 and stores the result in R2", correct: false },
                ]
            },
            {
                question: "What is the binary equivalent of decimal 7 in 4 bits?",
                answers: [
                    { text: "1100", correct: false },
                    { text: "0111", correct: true },
                    { text: "1001", correct: false },
                    { text: "1110", correct: false },
                ]
            },
            {
                question: "What is the purpose of the MAR (Memory Address Register)?",
                answers: [
                    { text: "Stores data being read or written", correct: false },
                    { text: "Holds the address of memory to be accessed", correct: true },
                    { text: "Performs arithmetic operations", correct: false },
                    { text: "Stores intermediate instruction results", correct: false },
                ]
            },
            {
                question: "What does the NOT instruction do in LC-3?",
                answers: [
                    { text: "Performs logical OR", correct: false },
                    { text: "Inverts all bits of a register", correct: true },
                    { text: "Subtracts two values", correct: false },
                    { text: "Performs a bitwise AND", correct: false },
                ]
            },
            {
                question: "What is the decimal equivalent of the binary number 10101?",
                answers: [
                    { text: "18", correct: false },
                    { text: "21", correct: true },
                    { text: "19", correct: false },
                    { text: "20", correct: false },
                ]
            },
            {
                question: "What is a key feature of assembly language?",
                answers: [
                    { text: "It is hardware-independent", correct: false },
                    { text: "It uses mnemonics to represent instructions", correct: true },
                    { text: "It is the fastest programming language", correct: false },
                    { text: "It supports direct object-oriented concepts", correct: false },
                ]
            },
            {
                question: "What is the carry bit used for in addition?",
                answers: [
                    { text: "To indicate overflow in subtraction", correct: false },
                    { text: "To indicate an extra bit resulting from addition", correct: true },
                    { text: "To determine the sign of the result", correct: false },
                    { text: "To store intermediate results", correct: false },
                ]
            },
            {
                question: "What does the BRzp instruction in LC-3 do?",
                answers: [
                    { text: "Branches if the condition code is zero", correct: false },
                    { text: "Branches if the condition code is positive or zero", correct: true },
                    { text: "Branches regardless of condition codes", correct: false },
                    { text: "Branches if the condition code is negative", correct: false },
                ]
            },
            {
                question: "What is the hexadecimal equivalent of the binary number 110111?",
                answers: [
                    { text: "2F", correct: false },
                    { text: "37", correct: true },
                    { text: "3B", correct: false },
                    { text: "1D", correct: false },
                ]
            },
            {
                question: "Which LC-3 instruction is used to halt the program?",
                answers: [
                    { text: "LD", correct: false },
                    { text: "HALT", correct: true },
                    { text: "BR", correct: false },
                    { text: "ADD", correct: false },
                ]
            },
            {
                question: "What does the Z flag in condition codes indicate?",
                answers: [
                    { text: "Result is negative", correct: false },
                    { text: "Result is zero", correct: true },
                    { text: "Result caused overflow", correct: false },
                    { text: "Carry occurred", correct: false },
                ]
            },
            {
                question: "In two's complement, what is the binary representation of -6 in 4 bits?",
                answers: [
                    { text: "1000", correct: false },
                    { text: "1010", correct: true },
                    { text: "1101", correct: false },
                    { text: "1111", correct: false },
                ]
            },
            {
                question: "Which of these is NOT a combinational circuit?",
                answers: [
                    { text: "Multiplexer", correct: false },
                    { text: "Flip-Flop", correct: true },
                    { text: "Decoder", correct: false },
                    { text: "Adder", correct: false },
                ]
            },
            {
                question: "What does the program counter (PC) in LC-3 do?",
                answers: [
                    { text: "Stores the currently executing instruction", correct: false },
                    { text: "Holds the address of the next instruction", correct: true },
                    { text: "Stores the result of arithmetic operations", correct: false },
                    { text: "Indicates overflow in arithmetic operations", correct: false },
                ]
            },
            {
                question: "What does the XOR operation return when both inputs are the same?",
                answers: [
                    { text: "True", correct: false },
                    { text: "False", correct: true },
                    { text: "Undefined", correct: false },
                    { text: "Depends on the circuit", correct: false },
                ]
            },
            {
                question: "What is the main advantage of two's complement representation?",
                answers: [
                    { text: "Easy representation of fractions", correct: false },
                    { text: "Simplifies arithmetic operations", correct: true },
                    { text: "Supports larger range of values", correct: false },
                    { text: "Eliminates overflow errors", correct: false },
                ]
            },
            {
                question: "Which operation does the NOR gate perform?",
                answers: [
                    { text: "XOR", correct: false },
                    { text: "Outputs 0 if at least one input is 1", correct: true },
                    { text: "AND", correct: false },
                    { text: "NOT", correct: false },
                ]
            },
            {
                question: "In LC-3, what does the TRAP instruction do?",
                answers: [
                    { text: "Performs arithmetic operations", correct: false },
                    { text: "Invokes operating system routines", correct: true },
                    { text: "Loads data from memory", correct: false },
                    { text: "Performs logical operations", correct: false },
                ]
            },
            {
                question: "What is the binary representation of decimal -5 in 4-bit two's complement?",
                answers: [
                    { text: "1101", correct: true },
                    { text: "1110", correct: false },
                    { text: "1011", correct: false },
                    { text: "0111", correct: false },
                ]
            },
            {
                question: "What is the role of the instruction register (IR) in LC-3?",
                answers: [
                    { text: "Stores data for arithmetic operations", correct: false },
                    { text: "Holds the current instruction being executed", correct: true },
                    { text: "Maintains memory addresses", correct: false },
                    { text: "Tracks program execution", correct: false },
                ]
            },
            {
                question: "Which LC-3 instruction uses immediate addressing?",
                answers: [
                    { text: "JSR", correct: false },
                    { text: "ADD R1, R2, #4", correct: true },
                    { text: "AND R1, R2, R3", correct: false },
                    { text: "STR R1, R2, #0", correct: false },
                ]
            },
            {
                question: "What is the primary difference between RAM and ROM?",
                answers: [
                    { text: "RAM is faster than ROM", correct: false },
                    { text: "RAM is volatile, while ROM is non-volatile", correct: true },
                    { text: "ROM is used for temporary storage", correct: false },
                    { text: "RAM is used to store instructions", correct: false },
                ]
            },
            {
                question: "What is the result of 0110 OR 1001 in binary?",
                answers: [
                    { text: "1010", correct: false },
                    { text: "1111", correct: true },
                    { text: "1000", correct: false },
                    { text: "1100", correct: false },
                ]
            },
            {
                question: "In the Von Neumann architecture, what does the control unit do?",
                answers: [
                    { text: "Executes arithmetic operations", correct: false },
                    { text: "Decodes instructions and directs operations", correct: true },
                    { text: "Stores temporary data", correct: false },
                    { text: "Fetches instructions from memory", correct: false },
                ]
            },
            {
                question: "What is the decimal equivalent of the binary 1101 in unsigned representation?",
                answers: [
                    { text: "14", correct: false },
                    { text: "13", correct: true },
                    { text: "15", correct: false },
                    { text: "12", correct: false },
                ]
            },
            {
                question: "Which data type is best for storing a true/false value?",
                answers: [
                    { text: "Character", correct: false },
                    { text: "Boolean", correct: true },
                    { text: "Integer", correct: false },
                    { text: "Floating-point", correct: false },
                ]
            },
            {
                question: "What is the purpose of an assembler in assembly language programming?",
                answers: [
                    { text: "Executes assembly code", correct: false },
                    { text: "Converts assembly code to machine code", correct: true },
                    { text: "Generates executable files", correct: false },
                    { text: "Decodes instructions", correct: false },
                ]
            },
            {
                question: "In LC-3, what does the BRnzp instruction do?",
                answers: [
                    { text: "Branches if the condition code is zero", correct: false },
                    { text: "Branches regardless of condition code", correct: true },
                    { text: "Performs an unconditional jump", correct: false },
                    { text: "Branches if negative and zero", correct: false },
                ]
            },
            {
                question: "What is the size of a single address in a 32-bit system?",
                answers: [
                    { text: "8 bits", correct: false },
                    { text: "32 bits", correct: true },
                    { text: "16 bits", correct: false },
                    { text: "64 bits", correct: false },
                ]
            },
            {
                question: "What is the primary purpose of the stack pointer (SP)?",
                answers: [
                    { text: "Tracks program instructions", correct: false },
                    { text: "Points to the top of the stack", correct: true },
                    { text: "Stores register values", correct: false },
                    { text: "Performs memory fetches", correct: false },
                ]
            },
            {
                question: "What does the NOT instruction in LC-3 do?",
                answers: [
                    { text: "Performs a logical OR operation", correct: false },
                    { text: "Inverts all bits of a register", correct: true },
                    { text: "Performs a subtraction", correct: false },
                    { text: "Performs a multiplication", correct: false },
                ]
            },
            {
                question: "What is the result of the bitwise AND operation on 1010 and 1100?",
                answers: [
                    { text: "1010", correct: false },
                    { text: "1000", correct: true },
                    { text: "1110", correct: false },
                    { text: "0100", correct: false },
                ]
            },
            {
                question: "Which gate is called the universal gate?",
                answers: [
                    { text: "AND", correct: false },
                    { text: "NAND", correct: true },
                    { text: "OR", correct: false },
                    { text: "XOR", correct: false },
                ]
            },
            {
                question: "What is the purpose of the Z flag in condition codes?",
                answers: [
                    { text: "Indicates a carry", correct: false },
                    { text: "Indicates the result is zero", correct: true },
                    { text: "Indicates overflow", correct: false },
                    { text: "Indicates the result is negative", correct: false },
                ]
            },
            {
                question: "Which type of memory is faster but more expensive?",
                answers: [
                    { text: "Hard Disk", correct: false },
                    { text: "Cache Memory", correct: true },
                    { text: "RAM", correct: false },
                    { text: "ROM", correct: false },
                ]
            },
            {
                question: "What is the size of a word in the LC-3 architecture?",
                answers: [
                    { text: "16 bytes", correct: false },
                    { text: "16 bits", correct: true },
                    { text: "8 bits", correct: false },
                    { text: "8 bytes", correct: false },
                ]
            },
            {
                question: "Which datatype can represent signed integers using two's complement?",
                answers: [
                    { text: "Boolean", correct: false },
                    { text: "Integer", correct: true },
                    { text: "Character", correct: false },
                    { text: "Floating-point", correct: false },
                ]
            },
            {
                question: "What operation does the XOR gate perform?",
                answers: [
                    { text: "AND", correct: false },
                    { text: "Outputs 1 when inputs differ", correct: true },
                    { text: "OR", correct: false },
                    { text: "NOT", correct: false },
                ]
            },
            {
                question: "What is the primary function of the Von Neumann architecture?",
                answers: [
                    { text: "Specialized memory for instructions", correct: false },
                    { text: "A shared memory for instructions and data", correct: true },
                    { text: "Exclusive memory for data only", correct: false },
                    { text: "Parallel processing", correct: false },
                ]
            },
            {
                question: "Which LC-3 instruction is used to branch unconditionally?",
                answers: [
                    { text: "AND", correct: false },
                    { text: "JMP", correct: true },
                    { text: "BRz", correct: false },
                    { text: "ADD", correct: false },
                ]
            },
            {
                question: "What is the result of 1011 AND 1101 in binary?",
                answers: [
                    { text: "1111", correct: false },
                    { text: "1001", correct: true },
                    { text: "1100", correct: false },
                    { text: "1010", correct: false },
                ]
            },
            {
                question: "What does the LC-3 instruction ADD R1, R2, #5 do?",
                answers: [
                    { text: "Adds the value of R2 and 5, stores in R1", correct: true },
                    { text: "Adds the value of R1 and 5", correct: false },
                    { text: "Subtracts 5 from R2, stores in R1", correct: false },
                    { text: "Performs bitwise addition on R1 and R2", correct: false },
                ]
            },
            {
                question: "What is the maximum positive value in 4-bit two's complement representation?",
                answers: [
                    { text: "-8", correct: false },
                    { text: "+7", correct: true },
                    { text: "+8", correct: false },
                    { text: "+15", correct: false },
                ]
            },
            {
                question: "Which instruction in LC-3 loads a value indirectly through memory?",
                answers: [
                    { text: "LDI", correct: true },
                    { text: "LDR", correct: false },
                    { text: "LEA", correct: false },
                    { text: "STR", correct: false },
                ]
            },
            {
                question: "What is the binary equivalent of decimal 13?",
                answers: [
                    { text: "1110", correct: false },
                    { text: "1101", correct: true },
                    { text: "1011", correct: false },
                    { text: "1001", correct: false },
                ]
            },
            {
                question: "Which flip-flop type toggles its output on every clock pulse when enabled?",
                answers: [
                    { text: "SR Flip-Flop", correct: false },
                    { text: "T Flip-Flop", correct: true },
                    { text: "D Flip-Flop", correct: false },
                    { text: "JK Flip-Flop", correct: false },
                ]
            },
            {
                question: "What is the result of a NOT operation on binary 1010?",
                answers: [
                    { text: "1010", correct: false },
                    { text: "0101", correct: true },
                    { text: "1111", correct: false },
                    { text: "1001", correct: false },
                ]
            },
            {
                question: "What does the program counter (PC) in LC-3 store?",
                answers: [
                    { text: "Data for the next instruction", correct: false },
                    { text: "Address of the next instruction", correct: true },
                    { text: "Decoded instruction value", correct: false },
                    { text: "Result of the last operation", correct: false },
                ]
            },
            {
                question: "What is the primary purpose of an instruction decoder?",
                answers: [
                    { text: "To execute instructions", correct: false },
                    { text: "To interpret and control CPU actions based on instructions", correct: true },
                    { text: "To fetch instructions from memory", correct: false },
                    { text: "To store results of operations", correct: false },
                ]
            },
            {
                question: "Which operation is performed by the OR gate?",
                answers: [
                    { text: "AND", correct: false },
                    { text: "Outputs 1 if at least one input is 1", correct: true },
                    { text: "NOT", correct: false },
                    { text: "XOR", correct: false },
                ]
            },
            {
                question: "What is the role of the MAR (Memory Address Register) in a computer?",
                answers: [
                    { text: "To store temporary results", correct: false },
                    { text: "To hold the address of memory being accessed", correct: true },
                    { text: "To decode fetched instructions", correct: false },
                    { text: "To manage control signals", correct: false },
                ]
            },
            {
                question: "What is the decimal equivalent of binary 1110 in unsigned representation?",
                answers: [
                    { text: "12", correct: false },
                    { text: "14", correct: true },
                    { text: "13", correct: false },
                    { text: "15", correct: false },
                ]
            },
            {
                question: "What is the result of 0110 XOR 1010 in binary?",
                answers: [
                    { text: "1011", correct: false },
                    { text: "1100", correct: true },
                    { text: "1001", correct: false },
                    { text: "1111", correct: false },
                ]
            },
            {
                question: "Which LC-3 instruction is used to invoke a subroutine?",
                answers: [
                    { text: "JMP", correct: false },
                    { text: "JSR", correct: true },
                    { text: "BRz", correct: false },
                    { text: "LEA", correct: false },
                ]
            },
            {
                question: "What is the name of the register that stores the status flags in LC-3?",
                answers: [
                    { text: "PC", correct: false },
                    { text: "PSR", correct: true },
                    { text: "MAR", correct: false },
                    { text: "IR", correct: false },
                ]
            },
            {
                question: "What is the purpose of the control signals in the CPU?",
                answers: [
                    { text: "Perform arithmetic operations", correct: false },
                    { text: "Coordinate the execution of instructions", correct: true },
                    { text: "Store data temporarily", correct: false },
                    { text: "Fetch data from external devices", correct: false },
                ]
            },
            {
                question: "Which gate outputs 1 only if the inputs are different?",
                answers: [
                    { text: "NAND", correct: false },
                    { text: "XOR", correct: true },
                    { text: "AND", correct: false },
                    { text: "NOR", correct: false },
                ]
            },
            {
                question: "In LC-3, which instruction is used to load an immediate value into a register?",
                answers: [
                    { text: "STR", correct: false },
                    { text: "LDI", correct: false },
                    { text: "AND", correct: false },
                    { text: "LEA", correct: true },
                ]
            },
            {
                question: "What is the binary representation of -7 in 2's complement using 4 bits?",
                answers: [
                    { text: "1110", correct: true },
                    { text: "0111", correct: false },
                    { text: "1000", correct: false },
                    { text: "1101", correct: false },
                ]
            },
            {
                question: "Which LC-3 addressing mode allows branching to a label within 256 instructions?",
                answers: [
                    { text: "Direct addressing", correct: false },
                    { text: "Immediate addressing", correct: false },
                    { text: "PC-relative addressing", correct: true },
                    { text: "Indirect addressing", correct: false },
                ]
            },
            {
                question: "What does the NOT instruction in LC-3 do?",
                answers: [
                    { text: "Adds two registers", correct: false },
                    { text: "Performs a bitwise complement of a register", correct: true },
                    { text: "Subtracts one register from another", correct: false },
                    { text: "Loads a value into a register", correct: false },
                ]
            },
            {
                question: "Which flip-flop is commonly used to store a single bit of data?",
                answers: [
                    { text: "D Flip-Flop", correct: true },
                    { text: "JK Flip-Flop", correct: false },
                    { text: "T Flip-Flop", correct: false },
                    { text: "SR Flip-Flop", correct: false },
                ]
            },
            {
                question: "What is the primary function of a multiplexer?",
                answers: [
                    { text: "Perform arithmetic operations", correct: false },
                    { text: "Select one input from multiple inputs", correct: true },
                    { text: "Store multiple data bits", correct: false },
                    { text: "Invert a binary signal", correct: false },
                ]
            },
            {
                question: "What is the result of performing 1011 OR 1100 in binary?",
                answers: [
                    { text: "1101", correct: false },
                    { text: "1111", correct: true },
                    { text: "1010", correct: false },
                    { text: "1001", correct: false },
                ]
            },
            {
                question: "What is the main drawback of the Von Neumann architecture?",
                answers: [
                    { text: "Limited memory size", correct: false },
                    { text: "The bottleneck caused by shared memory for data and instructions", correct: true },
                    { text: "High cost of implementation", correct: false },
                    { text: "Lack of support for modern operating systems", correct: false },
                ]
            },
            {
                question: "What does the LC-3 instruction STR R1, R2, #5 do?",
                answers: [
                    { text: "Stores the value of R1 at memory[R2 + 5]", correct: true },
                    { text: "Stores the sum of R1 and R2 at memory location 5", correct: false },
                    { text: "Stores the value of R2 at memory[R1 + 5]", correct: false },
                    { text: "Stores the immediate value 5 in R1", correct: false },
                ]
            },
            {
                question: "What is the primary purpose of the MDR (Memory Data Register)?",
                answers: [
                    { text: "To manage control signals", correct: false },
                    { text: "To store data being transferred to/from memory", correct: true },
                    { text: "To hold the address of the next instruction", correct: false },
                    { text: "To decode the fetched instruction", correct: false },
                ]
            },
            {
                question: "Which instruction in LC-3 modifies the program counter directly?",
                answers: [
                    { text: "ADD", correct: false },
                    { text: "BR", correct: true },
                    { text: "STR", correct: false },
                    { text: "LD", correct: false },
                ]
            },
            {
                question: "What is the output of 1101 XOR 1011 in binary?",
                answers: [
                    { text: "0110", correct: true },
                    { text: "1111", correct: false },
                    { text: "1010", correct: false },
                    { text: "1001", correct: false },
                ]
            },
            {
                question: "In assembly language, what does the term 'mnemonic' refer to?",
                answers: [
                    { text: "A memory location", correct: false },
                    { text: "A symbolic name for an opcode", correct: true },
                    { text: "A type of data structure", correct: false },
                    { text: "A method for encoding data", correct: false },
                ]
            },
            {
                question: "What does the LC-3 TRAP instruction do?",
                answers: [
                    { text: "Performs a conditional branch", correct: false },
                    { text: "Invokes an operating system routine", correct: true },
                    { text: "Loads a value from memory", correct: false },
                    { text: "Stores a value into memory", correct: false },
                ]
            },
            {
                question: "What does the AND instruction in LC-3 perform?",
                answers: [
                    { text: "Subtracts one register from another", correct: false },
                    { text: "Performs a bitwise AND of two operands", correct: true },
                    { text: "Adds two registers together", correct: false },
                    { text: "Performs a bitwise OR of two operands", correct: false },
                ]
            },
            {
                question: "What is the decimal equivalent of binary 1111 in unsigned representation?",
                answers: [
                    { text: "14", correct: false },
                    { text: "15", correct: true },
                    { text: "16", correct: false },
                    { text: "13", correct: false },
                ]
            },
            {
                question: "Which of the following is not a component of the LC-3 instruction set?",
                answers: [
                    { text: "ADD", correct: false },
                    { text: "JMP", correct: false },
                    { text: "SUB", correct: true },
                    { text: "LEA", correct: false },
                ]
            },
            {
                question: "What does the Z flag indicate in LC-3?",
                answers: [
                    { text: "A negative result", correct: false },
                    { text: "A zero result", correct: true },
                    { text: "A positive result", correct: false },
                    { text: "An overflow", correct: false },
                ]
            },
            {
                question: "What is the primary advantage of the Von Neumann architecture?",
                answers: [
                    { text: "Separates data and instructions", correct: false },
                    { text: "Uses a single memory for data and instructions", correct: true },
                    { text: "Allows parallel processing", correct: false },
                    { text: "Uses dual memory units", correct: false },
                ]
            },
            {
                question: "What is the role of the MAR (Memory Address Register)?",
                answers: [
                    { text: "Stores the address of the next instruction", correct: false },
                    { text: "Holds the address of the memory location being accessed", correct: true },
                    { text: "Holds the data being processed", correct: false },
                    { text: "Manages control signals for the CPU", correct: false },
                ]
            },
            {
                question: "What does the PC (Program Counter) contain during execution?",
                answers: [
                    { text: "The current instruction being executed", correct: false },
                    { text: "The address of the next instruction to fetch", correct: true },
                    { text: "The result of the last computation", correct: false },
                    { text: "The opcode of the current instruction", correct: false },
                ]
            },
            {
                question: "What is the binary representation of the decimal number -5 in 2's complement (using 4 bits)?",
                answers: [
                    { text: "1011", correct: true },
                    { text: "0101", correct: false },
                    { text: "1111", correct: false },
                    { text: "1001", correct: false },
                ]
            },
            {
                question: "Which gate outputs 1 only if all its inputs are 1?",
                answers: [
                    { text: "OR", correct: false },
                    { text: "AND", correct: true },
                    { text: "NAND", correct: false },
                    { text: "XOR", correct: false },
                ]
            },
            {
                question: "What does the instruction ADD R1, R2, R3 do in LC-3 assembly?",
                answers: [
                    { text: "Subtracts R3 from R2 and stores in R1", correct: false },
                    { text: "Adds the contents of R2 and R3, stores in R1", correct: true },
                    { text: "Multiplies R2 and R3, stores in R1", correct: false },
                    { text: "Divides R2 by R3 and stores in R1", correct: false },
                ]
            },
            {
                question: "Which of the following is true about immediate addressing in LC-3?",
                answers: [
                    { text: "The operand is in memory", correct: false },
                    { text: "The operand is directly specified in the instruction", correct: true },
                    { text: "The operand is stored in a register", correct: false },
                    { text: "The operand is accessed through an I/O device", correct: false },
                ]
            },
            {
                question: "What does the instruction BRz LABEL do in LC-3?",
                answers: [
                    { text: "Branches unconditionally to LABEL", correct: false },
                    { text: "Branches to LABEL if the zero flag is set", correct: true },
                    { text: "Branches to LABEL if the negative flag is set", correct: false },
                    { text: "Branches to LABEL if the positive flag is set", correct: false },
                ]
            },
            {
                question: "What is the purpose of the opcode in an assembly instruction?",
                answers: [
                    { text: "Specifies the data to be processed", correct: false },
                    { text: "Defines the operation to perform", correct: true },
                    { text: "Specifies the memory address to access", correct: false },
                    { text: "Indicates the next instruction to fetch", correct: false },
                ]
            },
            {
                question: "What is the result of performing NOT 1010 in binary (4 bits)?",
                answers: [
                    { text: "1110", correct: false },
                    { text: "0101", correct: true },
                    { text: "1001", correct: false },
                    { text: "1100", correct: false },
                ]
            },
            {
                question: "What is the significance of the IR (Instruction Register) in CPU operations?",
                answers: [
                    { text: "Stores the address of the next instruction", correct: false },
                    { text: "Holds the currently executed instruction", correct: true },
                    { text: "Manages arithmetic operations", correct: false },
                    { text: "Stores data for I/O operations", correct: false },
                ]
            },
            {
                question: "What is the primary feature of the NAND gate?",
                answers: [
                    { text: "It outputs 1 if any input is 1", correct: false },
                    { text: "It outputs 0 only if all inputs are 1", correct: true },
                    { text: "It outputs 1 only if all inputs are 1", correct: false },
                    { text: "It inverts the input signal", correct: false },
                ]
            },
            {
                question: "In LC-3 assembly, what is the effect of JMP R2?",
                answers: [
                    { text: "Jumps to the memory location stored in R2", correct: true },
                    { text: "Jumps to the next instruction in sequence", correct: false },
                    { text: "Branches conditionally to the location in R2", correct: false },
                    { text: "Adds R2 to the program counter", correct: false },
                ]
            },
            {
                question: "What is the role of the ALU in the CPU?",
                answers: [
                    { text: "Executes instructions stored in memory", correct: false },
                    { text: "Performs arithmetic and logical operations", correct: true },
                    { text: "Manages the control flow of instructions", correct: false },
                    { text: "Handles data transfers to I/O devices", correct: false },
                ]
            },
            {
                question: "Which of the following is an LC-3 instruction format?",
                answers: [
                    { text: "Register-Immediate-Register", correct: true },
                    { text: "Opcode-Flag-Memory", correct: false },
                    { text: "Address-Opcode-Operand", correct: false },
                    { text: "Flag-Register-Immediate", correct: false },
                ]
            },
            {
                question: "What is the output of 1101 AND 1010 in binary?",
                answers: [
                    { text: "1111", correct: false },
                    { text: "1000", correct: true },
                    { text: "1011", correct: false },
                    { text: "1100", correct: false },
                ]
            },
            {
                question: "Which component is responsible for instruction decoding in the CPU?",
                answers: [
                    { text: "ALU", correct: false },
                    { text: "Control Unit", correct: true },
                    { text: "Registers", correct: false },
                    { text: "Cache memory", correct: false },
                ]
            },
            {
                question: "In 2's complement, what does flipping all bits and adding 1 achieve?",
                answers: [
                    { text: "Calculates the square root", correct: false },
                    { text: "Negates the number", correct: true },
                    { text: "Converts binary to decimal", correct: false },
                    { text: "Finds the magnitude of a number", correct: false },
                ]
            },
            {
                question: "Which addressing mode uses the memory address in the instruction directly?",
                answers: [
                    { text: "Immediate addressing", correct: false },
                    { text: "Direct addressing", correct: true },
                    { text: "Indirect addressing", correct: false },
                    { text: "Indexed addressing", correct: false },
                ]
            },
            {
                question: "What does the LC-3 instruction LDR R1, R2, #2 do?",
                answers: [
                    { text: "Loads the immediate value 2 into R1", correct: false },
                    { text: "Loads the value at memory[R2 + 2] into R1", correct: true },
                    { text: "Loads the value at memory[R1 + 2] into R2", correct: false },
                    { text: "Loads the sum of R1 and R2 into R2", correct: false },
                ]
            },
            {
                question: "What is the key characteristic of sign-magnitude representation?",
                answers: [
                    { text: "It is used for error detection", correct: false },
                    { text: "The most significant bit indicates the sign", correct: true },
                    { text: "All bits are used for magnitude", correct: false },
                    { text: "It is primarily for floating-point numbers", correct: false },
                ]
            },
            {
                question: "In binary arithmetic, what is the sum of 1011 and 0010?",
                answers: [
                    { text: "1010", correct: false },
                    { text: "1110", correct: false },
                    { text: "1101", correct: true },
                    { text: "1001", correct: false },
                ]
            },
            {
                question: "What happens during the 'decode' stage of the CPU cycle?",
                answers: [
                    { text: "The CPU fetches data from registers", correct: false },
                    { text: "The CPU executes the instruction", correct: false },
                    { text: "The instruction is stored in memory", correct: false },
                    { text: "The CPU interprets the fetched instruction", correct: true },
                ]
            },
            {
                question: "What is the hexadecimal equivalent of binary 11001101?",
                answers: [
                    { text: "DC", correct: false },
                    { text: "C1", correct: false },
                    { text: "CD", correct: true },
                    { text: "D1", correct: false },
                ]
            },
            {
                question: "In two's complement, what does negating 0110 produce?",
                answers: [
                    { text: "0111", correct: false },
                    { text: "0101", correct: false },
                    { text: "1010", correct: true },
                    { text: "1001", correct: false },
                ]
            },
            {
                question: "What is the binary subtraction result of 1000 - 0100?",
                answers: [
                    { text: "1100", correct: false },
                    { text: "0110", correct: false },
                    { text: "0100", correct: true },
                    { text: "0010", correct: false },
                ]
            },
            {
                question: "What does the least significant bit (LSB) represent in binary numbers?",
                answers: [
                    { text: "The position of the decimal point", correct: false },
                    { text: "The largest value", correct: false },
                    { text: "The sign of the number", correct: false },
                    { text: "The smallest value", correct: true },
                ]
            },
            {
                question: "Which operation does the OR gate perform in digital logic?",
                answers: [
                    { text: "Outputs 0 if any input is 1", correct: false },
                    { text: "Outputs 1 if any input is 1", correct: true },
                    { text: "Outputs 1 only if all inputs are 1", correct: false },
                    { text: "Inverts the input", correct: false },
                ]
            },
            {
                question: "What is the binary result of NOT 1010?",
                answers: [
                    { text: "1111", correct: false },
                    { text: "1001", correct: false },
                    { text: "0110", correct: false },
                    { text: "0101", correct: true },
                ]
            },
            {
                question: "What is the primary function of registers in a CPU?",
                answers: [
                    { text: "To execute instructions directly", correct: false },
                    { text: "To store data temporarily during execution", correct: true },
                    { text: "To manage data between the CPU and memory", correct: false },
                    { text: "To store instructions permanently", correct: false },
                ]
            },
            {
                question: "In the fetch-decode-execute cycle, what comes after the decode stage?",
                answers: [
                    { text: "Memory write", correct: false },
                    { text: "Fetch", correct: false },
                    { text: "Interrupt handling", correct: false },
                    { text: "Execute", correct: true },
                ]
            },
            {
                question: "How does a half-adder differ from a full-adder?",
                answers: [
                    { text: "A half-adder produces no carry-out", correct: false },
                    { text: "A half-adder cannot handle carry-in", correct: true },
                    { text: "A half-adder is used for subtraction", correct: false },
                    { text: "A half-adder uses more logic gates", correct: false },
                ]
            },
            {
                question: "What does an XOR gate do?",
                answers: [
                    { text: "Always outputs 0", correct: false },
                    { text: "Inverts the output", correct: false },
                    { text: "Outputs 1 only if inputs are different", correct: true },
                    { text: "Outputs 1 only if inputs are the same", correct: false },
                ]
            },
            {
                question: "What is the decimal value of binary 111?",
                answers: [
                    { text: "5", correct: false },
                    { text: "6", correct: false },
                    { text: "8", correct: false },
                    { text: "7", correct: true },
                ]
            },
            {
                question: "Which component in a CPU is responsible for coordinating activities?",
                answers: [
                    { text: "Registers", correct: false },
                    { text: "Arithmetic Logic Unit", correct: false },
                    { text: "Cache memory", correct: false },
                    { text: "Control Unit", correct: true },
                ]
            },
            {
                question: "What is the binary result of adding 0101 and 0011?",
                answers: [
                    { text: "1010", correct: false },
                    { text: "0100", correct: false },
                    { text: "1000", correct: true },
                    { text: "1100", correct: false },
                ]
            },
            {
                question: "What is the result of 2's complement subtraction: 1101 - 0110?",
                answers: [
                    { text: "1011", correct: false },
                    { text: "0111", correct: true },
                    { text: "1000", correct: false },
                    { text: "0101", correct: false },
                ]
            },
            {
                question: "In CPU architecture, what is cache memory used for?",
                answers: [
                    { text: "Storing instructions permanently", correct: false },
                    { text: "Storing frequently accessed data", correct: true },
                    { text: "Performing arithmetic operations", correct: false },
                    { text: "Managing I/O devices", correct: false },
                ]
            },
            {
                question: "What is the binary result of ANDing 1110 with 1011?",
                answers: [
                    { text: "1101", correct: false },
                    { text: "1111", correct: false },
                    { text: "1010", correct: true },
                    { text: "1000", correct: false },
                ]
            },
            {
                question: "What is the result of ORing 0101 and 0010 in binary?",
                answers: [
                    { text: "0110", correct: false },
                    { text: "0011", correct: false },
                    { text: "0111", correct: true },
                    { text: "0100", correct: false },
                ]
            },
            {
                question: "What is the main purpose of two's complement in computer systems?",
                answers: [
                    { text: "To represent negative numbers", correct: true },
                    { text: "To add floating-point numbers", correct: false },
                    { text: "To store characters", correct: false },
                    { text: "To perform multiplication", correct: false },
                ]
            },
            {
                question: "In two's complement, what is the result of adding 1011 and 0101?",
                answers: [
                    { text: "10000", correct: true },
                    { text: "1101", correct: false },
                    { text: "1110", correct: false },
                    { text: "1010", correct: false },
                ]
            },
            {
                question: "Which data type is typically used to store large decimal values?",
                answers: [
                    { text: "Float", correct: false },
                    { text: "Double", correct: true },
                    { text: "Boolean", correct: false },
                    { text: "Character", correct: false },
                ]
            },
            {
                question: "What is the purpose of the ALU in a CPU?",
                answers: [
                    { text: "To perform arithmetic and logical operations", correct: true },
                    { text: "To manage cache memory", correct: false },
                    { text: "To control I/O devices", correct: false },
                    { text: "To fetch instructions", correct: false },
                ]
            },
            {
                question: "In binary, what is the result of ANDing 1101 with 1011?",
                answers: [
                    { text: "1001", correct: true },
                    { text: "1110", correct: false },
                    { text: "1010", correct: false },
                    { text: "1100", correct: false },
                ]
            },
            {
                question: "Which of the following is a signed data type in C++?",
                answers: [
                    { text: "int", correct: true },
                    { text: "unsigned char", correct: false },
                    { text: "unsigned int", correct: false },
                    { text: "void", correct: false },
                ]
            },
            {
                question: "What is the hexadecimal equivalent of binary 11110011?",
                answers: [
                    { text: "F3", correct: true },
                    { text: "3F", correct: false },
                    { text: "CF", correct: false },
                    { text: "FC", correct: false },
                ]
            },
            {
                question: "What does the program counter (PC) in a CPU store?",
                answers: [
                    { text: "The address of the next instruction", correct: true },
                    { text: "The result of arithmetic operations", correct: false },
                    { text: "The current program status", correct: false },
                    { text: "Temporary data", correct: false },
                ]
            },
            {
                question: "In binary subtraction, what is 1010 - 0101?",
                answers: [
                    { text: "0101", correct: true },
                    { text: "1101", correct: false },
                    { text: "0110", correct: false },
                    { text: "1001", correct: false },
                ]
            },
            {
                question: "What is the most significant bit (MSB) in a binary number?",
                answers: [
                    { text: "The leftmost bit", correct: true },
                    { text: "The rightmost bit", correct: false },
                    { text: "The middle bit", correct: false },
                    { text: "The least significant bit", correct: false },
                ]
            },
            {
                question: "What happens during the 'fetch' stage of the CPU cycle?",
                answers: [
                    { text: "The CPU retrieves an instruction from memory", correct: true },
                    { text: "The CPU decodes an instruction", correct: false },
                    { text: "The CPU executes an instruction", correct: false },
                    { text: "The CPU performs error checking", correct: false },
                ]
            },
            {
                question: "How does pipelining improve CPU performance?",
                answers: [
                    { text: "By overlapping the execution of multiple instructions", correct: true },
                    { text: "By reducing memory size", correct: false },
                    { text: "By increasing cache levels", correct: false },
                    { text: "By managing input/output devices", correct: false },
                ]
            },
            {
                question: "What is the binary representation of decimal 13?",
                answers: [
                    { text: "1101", correct: true },
                    { text: "1010", correct: false },
                    { text: "1110", correct: false },
                    { text: "1001", correct: false },
                ]
            },
            {
                question: "Which of the following represents a valid two's complement addition?",
                answers: [
                    { text: "1010 + 0110 = 0000", correct: false },
                    { text: "1001 + 0011 = 1100", correct: true },
                    { text: "1111 + 1010 = 0111", correct: false },
                    { text: "1100 + 0101 = 0010", correct: false },
                ]
            },
            {
                question: "What is the function of the control unit in a CPU?",
                answers: [
                    { text: "It directs operations of the processor", correct: true },
                    { text: "It performs arithmetic calculations", correct: false },
                    { text: "It stores temporary data", correct: false },
                    { text: "It fetches instructions from memory", correct: false },
                ]
            },
            {
                question: "What is the binary equivalent of hexadecimal 'A'?",
                answers: [
                    { text: "1010", correct: true },
                    { text: "0110", correct: false },
                    { text: "1001", correct: false },
                    { text: "1100", correct: false },
                ]
            },
            {
                question: "In a two's complement system, what is the result of negating 00001101?",
                answers: [
                    { text: "11110011", correct: true },
                    { text: "10001101", correct: false },
                    { text: "11110010", correct: false },
                    { text: "00001110", correct: false },
                ]
            },
            {
                question: "Which component is responsible for carrying out arithmetic operations in a CPU?",
                answers: [
                    { text: "Arithmetic Logic Unit (ALU)", correct: true },
                    { text: "Control Unit", correct: false },
                    { text: "Registers", correct: false },
                    { text: "Cache memory", correct: false },
                ]
            },
            {
                question: "What does the term 'word size' refer to in a CPU?",
                answers: [
                    { text: "The number of bits processed at a time", correct: true },
                    { text: "The size of the CPU cache", correct: false },
                    { text: "The number of instructions per cycle", correct: false },
                    { text: "The number of processing cores", correct: false },
                ]
            },
            {
                question: "What is the binary addition of 0110 and 0011?",
                answers: [
                    { text: "1001", correct: true },
                    { text: "0101", correct: false },
                    { text: "1101", correct: false },
                    { text: "1010", correct: false },
                ]
            },
            {
                question: "What is the primary role of a CPU in a computer system?",
                answers: [
                    { text: "To store long-term data", correct: false },
                    { text: "To display graphical content", correct: false },
                    { text: "To provide internet connectivity", correct: false },
                    { text: "To process instructions and manage tasks", correct: true },
                ]
            },
            {
                question: "Which component serves as the bridge between the CPU and memory?",
                answers: [
                    { text: "Hard Disk Drive (HDD)", correct: false },
                    { text: "Network Interface Card (NIC)", correct: false },
                    { text: "Arithmetic Logic Unit (ALU)", correct: false },
                    { text: "Memory Management Unit (MMU)", correct: true },
                ]
            },
            {
                question: "What does the program counter (PC) in a CPU do?",
                answers: [
                    { text: "Manages I/O devices", correct: false },
                    { text: "Executes arithmetic operations", correct: false },
                    { text: "Holds the address of the next instruction", correct: true },
                    { text: "Stores temporary data", correct: false },
                ]
            },
            {
                question: "What is pipelining in computer architecture?",
                answers: [
                    { text: "Using a single register for multiple instructions", correct: false },
                    { text: "Executing multiple instructions simultaneously in different stages", correct: true },
                    { text: "Connecting multiple CPUs for parallel processing", correct: false },
                    { text: "Storing data temporarily in cache memory", correct: false },
                ]
            },
            {
                question: "Which cache level is closest to the CPU?",
                answers: [
                    { text: "L2", correct: false },
                    { text: "Virtual memory", correct: false },
                    { text: "L3", correct: false },
                    { text: "L1", correct: true },
                ]
            },
            {
                question: "What is a primary function of the control unit in a CPU?",
                answers: [
                    { text: "Manages external devices", correct: false },
                    { text: "Performs arithmetic calculations", correct: false },
                    { text: "Directs operations of the processor", correct: true },
                    { text: "Stores program data", correct: false },
                ]
            },
            {
                question: "What does 'fetch' refer to in the fetch-decode-execute cycle?",
                answers: [
                    { text: "Decoding the fetched instruction", correct: false },
                    { text: "Retrieving an instruction from memory", correct: true },
                    { text: "Storing data in the memory", correct: false },
                    { text: "Executing the instruction", correct: false },
                ]
            },
            {
                question: "In binary addition, what is the sum of 1 + 1?",
                answers: [
                    { text: "1", correct: false },
                    { text: "0", correct: false },
                    { text: "11", correct: false },
                    { text: "10", correct: true },
                ]
            },
            {
                question: "What is the purpose of registers in a CPU?",
                answers: [
                    { text: "To store data temporarily for quick access", correct: true },
                    { text: "To manage input and output operations", correct: false },
                    { text: "To store permanent data", correct: false },
                    { text: "To provide power to the CPU", correct: false },
                ]
            },
            {
                question: "Which of the following is a type of non-volatile memory?",
                answers: [
                    { text: "RAM", correct: false },
                    { text: "Cache memory", correct: false },
                    { text: "ROM", correct: true },
                    { text: "Registers", correct: false },
                ]
            },
            {
                question: "What is the result of applying NOT to binary 1010?",
                answers: [
                    { text: "1111", correct: false },
                    { text: "0101", correct: true },
                    { text: "0000", correct: false },
                    { text: "1100", correct: false },
                ]
            },
            {
                question: "What is an interrupt in a CPU?",
                answers: [
                    { text: "A command that multiplies data", correct: false },
                    { text: "A method of storing data in the CPU", correct: false },
                    { text: "A process of fetching instructions from memory", correct: false },
                    { text: "A signal that diverts the CPU to execute a different task", correct: true },
                ]
            },
            {
                question: "Which is true about virtual memory?",
                answers: [
                    { text: "It only stores cache data", correct: false },
                    { text: "It allows more memory to be used than physically available", correct: true },
                    { text: "It is stored in ROM", correct: false },
                    { text: "It is faster than registers", correct: false },
                ]
            },
            {
                question: "What is the binary representation of decimal 7?",
                answers: [
                    { text: "101", correct: false },
                    { text: "110", correct: false },
                    { text: "111", correct: true },
                    { text: "100", correct: false },
                ]
            },
            {
                question: "What does two's complement help with in computer architecture?",
                answers: [
                    { text: "Optimizing cache memory", correct: false },
                    { text: "Storing character data", correct: false },
                    { text: "Performing floating-point arithmetic", correct: false },
                    { text: "Representing negative numbers", correct: true },
                ]
            },
            {
                question: "What is the role of a clock signal in a CPU?",
                answers: [
                    { text: "To perform multiplication", correct: false },
                    { text: "To store time data", correct: false },
                    { text: "To manage user input", correct: false },
                    { text: "To synchronize operations", correct: true },
                ]
            },
            {
                question: "What is the most significant bit (MSB) in a binary number?",
                answers: [
                    { text: "The least frequently used bit", correct: false },
                    { text: "The rightmost bit", correct: false },
                    { text: "The leftmost bit", correct: true },
                    { text: "The middle bit", correct: false },
                ]
            },
            {
                question: "Which technique improves CPU performance by overlapping instruction execution?",
                answers: [
                    { text: "Caching", correct: false },
                    { text: "Branching", correct: false },
                    { text: "Pipelining", correct: true },
                    { text: "Loop unrolling", correct: false },
                ]
            },
            {
                question: "What is the hexadecimal equivalent of binary 1101?",
                answers: [
                    { text: "C", correct: false },
                    { text: "B", correct: false },
                    { text: "E", correct: false },
                    { text: "D", correct: true },
                ]
            },
            {
                question: "What does the term 'word size' in a CPU refer to?",
                answers: [
                    { text: "The size of registers", correct: false },
                    { text: "The size of cache memory", correct: false },
                    { text: "The number of instructions per cycle", correct: false },
                    { text: "The number of bits processed at a time", correct: true },
                ]
            },
            // ...other math questions...
        ]
    },
    compArchitecture19: {
        time: 60 * 20, // 20 minutes in seconds
        questions: [
            {
                "question": "What is the next step in instruction processing after the Execute step?",
                "answers": [
                    { "text": "Evaluate address", "correct": false },
                    { "text": "Fetch operands", "correct": false },
                    { "text": "Store results", "correct": true },
                    { "text": "Decode", "correct": false }
                ]
            },
            {
                "question": "Which of these is an operate instruction in LC?",
                "answers": [
                    { "text": "BR", "correct": false },
                    { "text": "LD", "correct": false },
                    { "text": "ST", "correct": false },
                    { "text": "NOT", "correct": true }
                ]
            },
            {
                "question": "An AND gate has 5 transistors",
                "answers": [
                    { "text": "True", "correct": false },
                    { "text": "False", "correct": true }
                ]
            },
            {
                "question": "How is the Machine Control Register used to stop CPU?",
                "answers": [
                    { "text": "gate the clock signal", "correct": true },
                    { "text": "put off the power", "correct": false },
                    { "text": "zero the clock", "correct": false },
                    { "text": "all of the above", "correct": false }
                ]
            },
            {
                "question": "What is decimal 25 in 8-bit binary?",
                "answers": [
                    { "text": "11110000", "correct": false },
                    { "text": "00011001", "correct": true },
                    { "text": "11110000", "correct": false },
                    { "text": "11110100", "correct": false }
                ]
            },
            {
                "question": "How many registers does LC have?",
                "answers": [
                    { "text": "4", "correct": false },
                    { "text": "8", "correct": false },
                    { "text": "16", "correct": false },
                    { "text": "32", "correct": true }
                ]
            },
            {
                "question": "The input to R — S latch are normally at High (1). What is the output Q when S is made 0?",
                "answers": [
                    { "text": "0", "correct": true },
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": false }
                ]
            },
            {
                "question": "P-type transistor has what charge at its gate?",
                "answers": [
                    { "text": "half negative charge", "correct": false },
                    { "text": "negative charge", "correct": false },
                    { "text": "no charge", "correct": false },
                    { "text": "positive charge", "correct": true }
                ]
            },
            {
                "question": "How many transistors are used in gate NOR?",
                "answers": [
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": true },
                    { "text": "4", "correct": false },
                    { "text": "5", "correct": false }
                ]
            },
            {
                "question": "How many instructions does LC have?",
                "answers": [
                    { "text": "8", "correct": false },
                    { "text": "12", "correct": true },
                    { "text": "16", "correct": false },
                    { "text": "32", "correct": false }
                ]
            },
            {
                "question": "Which instruction loads data from register R0 into register R1",
                "answers": [
                    { "text": "ADD Rl, R0, R0", "correct": false },
                    { "text": "ADD Rl, R0, #-1", "correct": false },
                    { "text": "AND Rl, R0, R0", "correct": false },
                    { "text": "AND Rl, R0, #-1", "correct": true }
                ]
            },
            {
                "question": "A combinational circuit has no memory and gives same output for same inputs.",
                "answers": [
                    { "text": "True", "correct": true },
                    { "text": "False", "correct": false }
                ]
            },
            {
                "question": "How many interrupt vector addresses are in LC?",
                "answers": [
                    { "text": "128", "correct": false },
                    { "text": "256", "correct": false },
                    { "text": "512", "correct": false },
                    { "text": "1,024", "correct": true }
                ]
            },
            {
                "question": "On a 32 bit computer with 64 registers, 32 instructions and a LD R3, R2, offset base instruction. How many bit offset can you have",
                "answers": [
                    { "text": "32 - 5 - 5 = 22", "correct": true },
                    { "text": "32 - 5 - 6 = 21", "correct": false },
                    { "text": "32 - 5 - 6 - 6 = 15", "correct": false },
                    { "text": "32 - 6 - 6 = 20", "correct": false }
                ]
            },
            {
                "question": "How many NAND gates in an R — S latch",
                "answers": [
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": true },
                    { "text": "3", "correct": false },
                    { "text": "4", "correct": false }
                ]
            },
            {
                "question": "An OR gate has 4 transistors",
                "answers": [
                    { "text": "True", "correct": false },
                    { "text": "False", "correct": true }
                ]
            },
            {
                "question": "How many NAND gates are used in a D-latch with a write enable and one bit data input",
                "answers": [
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": true },
                    { "text": "3", "correct": false },
                    { "text": "4", "correct": false }
                ]
            },
            {
                "question": "To get the PC value into the MAR, which control signals should we issue?",
                "answers": [
                    { "text": "gate.PC", "correct": false },
                    { "text": "gate.PC; load.MAR", "correct": true },
                    { "text": "gate.PC; load.IR", "correct": false },
                    { "text": "gate.MDR; load.IR", "correct": false }
                ]
            },
            {
                "question": "When we design with both N-type and P-type, the circuit is called",
                "answers": [
                    { "text": "complementary MOS (CMOS)", "correct": true },
                    { "text": "MOS", "correct": false },
                    { "text": "negative MOS", "correct": false },
                    { "text": "superior MOS", "correct": false }
                ]
            },
            {
                "question": "What is the decimal number for this 8 bit binary number 00011100",
                "answers": [
                    { "text": "15", "correct": false },
                    { "text": "28", "correct": true },
                    { "text": "32", "correct": false },
                    { "text": "41", "correct": false }
                ]
            },
            {
                "question": "What instruction would you use to load data from R0 register to the other, R1 register",
                "answers": [
                    { "text": "ADD Rl, R0, R0", "correct": false },
                    { "text": "ADD Rl, R0, #0", "correct": true },
                    { "text": "AND Rl, R0, R0", "correct": false },
                    { "text": "AND Rl, R0, #0", "correct": false }
                ]
            },
            {
                "question": "On a 32 bit computer with 64 registers and 32 instructions, how many bits are unused in an ADD Rl, R2, R3?",
                "answers": [
                    { "text": "32 — 5 — 3 * 6 = 9", "correct": true },
                    { "text": "32 — 5 — 3 *5 = 12", "correct": false },
                    { "text": "32 — 3 * 6 = 14", "correct": false },
                    { "text": "32 — 3 * 5 = 17", "correct": false }
                ]
            },
            {
                "question": "Given the truth table for a full adder < A, B, Cin, S, Cout > truth table, what is the equation for the sum Cout?",
                "answers": [
                    { "text": "A' *B' * Cin + A'*B* Cin' + A*B'* Cin' + A * B * Cin", "correct": true },
                    { "text": "A' *B'* Cin + A'*B* Cin' + A*B'* Cin' + A' * B' * Cin'", "correct": false },
                    { "text": "A' * B * Cin + A*B'* Cin + A* B * Cin' + A! *B'* Cin'", "correct": false },
                    { "text": "A' * B * Cin + A*B'* Cin + A* B * Cin' + A * B * Cin", "correct": false }
                ]
            },
            {
                "question": "How many NAND gates does a 2 bit D latch register have?",
                "answers": [
                    { "text": "2", "correct": true },
                    { "text": "4", "correct": false },
                    { "text": "8", "correct": false },
                    { "text": "16", "correct": false }
                ]
            },
            {
                "question": "How many steps in processing instructions cycle on LC computer?",
                "answers": [
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": false },
                    { "text": "5", "correct": false },
                    { "text": "6", "correct": true }
                ]
            },
            {
                "question": "A sequential circuit has memory and gives different output for same inputs.",
                "answers": [
                    { "text": "True", "correct": true },
                    { "text": "False", "correct": false }
                ]
            },
            {
                "question": "The Instruction Register (IR) contains",
                "answers": [
                    { "text": "next instruction", "correct": false },
                    { "text": "current instruction", "correct": true },
                    { "text": "past instruction", "correct": false },
                    { "text": "all of the above", "correct": false }
                ]
            },
            {
                "question": "Operation carried out by a NOT gate are also termed as",
                "answers": [
                    { "text": "inverting", "correct": true },
                    { "text": "converting", "correct": false },
                    { "text": "reverting", "correct": false },
                    { "text": "reversing", "correct": false }
                ]
            },
            {
                "question": "How many unique numbers in an 8 bit register?",
                "answers": [
                    { "text": "128", "correct": false },
                    { "text": "255", "correct": false },
                    { "text": "256", "correct": true },
                    { "text": "1024", "correct": false }
                ]
            },
            {
                "question": "What is sum of 00000101 and 00000011?",
                "answers": [
                    { "text": "00000101", "correct": false },
                    { "text": "00001000", "correct": true },
                    { "text": "00000111", "correct": false },
                    { "text": "11000111", "correct": false }
                ]
            },
            {
                "question": "How many times does Indirect addressing use the MAR of memory subsystem?",
                "answers": [
                    { "text": "Once", "correct": true },
                    { "text": "Twice", "correct": false },
                    { "text": "Thrice", "correct": false },
                    { "text": "Zero", "correct": false }
                ]
            },
            {
                "question": "The memory subsystem of the LC computer has two internal registers. Which register contains the address to read?",
                "answers": [
                    { "text": "MDR", "correct": false },
                    { "text": "MAR", "correct": true },
                    { "text": "PSR", "correct": false },
                    { "text": "RED", "correct": false }
                ]
            },
            {
                "question": "A PC relative addressing mode adds an offset in the instruction to a register to get address in memory to access which register?",
                "answers": [
                    { "text": "PSR", "correct": false },
                    { "text": "IR", "correct": false },
                    { "text": "PC", "correct": true },
                    { "text": "MCR", "correct": false }
                ]
            },
            {
                "question": "What is the next step in instruction processing after the Fetch step?",
                "answers": [
                    { "text": "Evaluate address", "correct": true },
                    { "text": "Decode", "correct": false },
                    { "text": "Execute operation", "correct": false },
                    { "text": "Store results", "correct": false }
                ]
            },
            {
                "question": "What is decimal -56 in 8 bit binary?",
                "answers": [
                    { "text": "11110110", "correct": false },
                    { "text": "11001000", "correct": false },
                    { "text": "11110000", "correct": false },
                    { "text": "11010101", "correct": true }
                ]
            },
            {
                "question": "Which of these are not part of Von Neumann computer model?",
                "answers": [
                    { "text": "control unit", "correct": false },
                    { "text": "memory", "correct": false },
                    { "text": "output", "correct": false },
                    { "text": "system unit", "correct": true }
                ]
            },
            {
                "question": "How many transistors are there in a typical computer?",
                "answers": [
                    { "text": "1,000", "correct": false },
                    { "text": "100,000", "correct": false },
                    { "text": "1,000,000", "correct": false },
                    { "text": "> 100,000,000", "correct": true }
                ]
            },
            {
                "question": "An n —input decoder has how many outputs?",
                "answers": [
                    { "text": "2 *n outputs", "correct": false },
                    { "text": "2^n outputs", "correct": true },
                    { "text": "n outputs", "correct": false },
                    { "text": "n* n outputs", "correct": false }
                ]
            },
            {
                "question": "A logic gate having two or more inputs and when both inputs are logic 1 then output will be logic 1 is said to be",
                "answers": [
                    { "text": "OR gate", "correct": false },
                    { "text": "AND gate", "correct": true },
                    { "text": "OUT gate", "correct": false },
                    { "text": "IN gate", "correct": false }
                ]
            },
            {
                "question": "How many types of metal-oxide-silicon (MOS) transistors?",
                "answers": [
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": true },
                    { "text": "3", "correct": false },
                    { "text": "5", "correct": false }
                ]
            },
            {
                "question": "A n multiplexer has how many outputs?",
                "answers": [
                    { "text": "1 output", "correct": true },
                    { "text": "2 output", "correct": false },
                    { "text": "n outputs", "correct": false },
                    { "text": "2^n outputs", "correct": false }
                ]
            },
            {
                "question": "On a 32 bit computer with 64 registers, 32 instructions and a LD R3, offset PC relative instruction. How many bit offset can you have?",
                "answers": [
                    { "text": "32 - 5 - 5 = 22", "correct": true },
                    { "text": "32 - 5 - 6 = 21", "correct": false },
                    { "text": "32 - 6 - 6 = 21", "correct": false },
                    { "text": "none of the above", "correct": false }
                ]
            },
            {
                "question": "A NOT gate is made up of ............ transistors.",
                "answers": [
                    { "text": "one N-type and one P-type", "correct": true },
                    { "text": "two N-type", "correct": false },
                    { "text": "two P-type", "correct": false },
                    { "text": "two N-type and two P-type", "correct": false }
                ]
            },
            {
                "question": "Which instruction is using immediate addressing?",
                "answers": [
                    { "text": "ADD R1, R2, R3", "correct": false },
                    { "text": "NOT R1, R2", "correct": false },
                    { "text": "AND R1, R2, #1", "correct": true },
                    { "text": "BRz PCoffset", "correct": false }
                ]
            },
            {
                "question": "The LC has 16-bit address space. What is its addressability?",
                "answers": [
                    { "text": "4 bits", "correct": false },
                    { "text": "8 bits", "correct": false },
                    { "text": "16 bits", "correct": true },
                    { "text": "32 bits", "correct": false }
                ]
            },
            {
                "question": "How many D latches are used in a memory with address space of 2 and addressability of 2?",
                "answers": [
                    { "text": "2", "correct": true },
                    { "text": "4", "correct": false },
                    { "text": "8", "correct": false },
                    { "text": "16", "correct": false }
                ]
            },
            {
                "question": "The LC computer we work with has 16 instructions. Which instruction is not one of them?",
                "answers": [
                    { "text": "ADD", "correct": false },
                    { "text": "BR", "correct": false },
                    { "text": "NOT", "correct": false },
                    { "text": "SUB", "correct": true }
                ]
            },
            {
                "question": "What is the binary for instruction ADD R1, R2, R3?",
                "answers": [
                    { "text": "1111 1010 1100 0011", "correct": false },
                    { "text": "1111 0100 1000 0011", "correct": false },
                    { "text": "0001 0010 1000 0011", "correct": true },
                    { "text": "0001 0100 1000 0011", "correct": false }
                ]
            },
            {
                "question": "Which sub unit of LC implements the finite state machine?",
                "answers": [
                    { "text": "Control unit", "correct": true },
                    { "text": "Memory", "correct": false },
                    { "text": "Output unit", "correct": false },
                    { "text": "Processing unit", "correct": false }
                ]
            },
            {
                "question": "Apart from the 8 registers of LC machine there are other registers. Which register is used for status?",
                "answers": [
                    { "text": "MCR", "correct": false },
                    { "text": "PC", "correct": false },
                    { "text": "PSR", "correct": true },
                    { "text": "STA", "correct": false }
                ]
            },
            {
                "question": "How many transistors used in gate NAND?",
                "answers": [
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": true },
                    { "text": "4", "correct": false },
                    { "text": "5", "correct": false }
                ]
            },
            {
                "question": "The LC has operate, load, store and control instruction types. Which of these instructions is not a control instruction?",
                "answers": [
                    { "text": "AND", "correct": true },
                    { "text": "BR", "correct": false },
                    { "text": "JMP", "correct": false },
                    { "text": "JSR", "correct": false }
                ]
            },
            {
                "question": "A transistor acts like a .................",
                "answers": [
                    { "text": "relay", "correct": false },
                    { "text": "short circuit", "correct": false },
                    { "text": "switch", "correct": true },
                    { "text": "valve", "correct": false }
                ]
            },
            {
                "question": "N-type transistor has one connection to?",
                "answers": [
                    { "text": "ground", "correct": false },
                    { "text": "power +V volts", "correct": true },
                    { "text": "both a & b", "correct": false },
                    { "text": "none of the above", "correct": false }
                ]
            },
            {
                "question": "A n multiplexer has how many inputs?",
                "answers": [
                    { "text": "2n data and n bit selector", "correct": true },
                    { "text": "n data and 2^n bit selector", "correct": false },
                    { "text": "n data and n bit selector", "correct": false },
                    { "text": "2n data and 2n bit selector", "correct": false }
                ]
            },
            {
                "question": "How many numbers are in an n bit register?",
                "answers": [
                    { "text": "2", "correct": false },
                    { "text": "2^n", "correct": true },
                    { "text": "2n", "correct": false },
                    { "text": "n", "correct": false }
                ]
            },
            {
                "question": "To get the MDR loaded into IR, which control signals should we issue?",
                "answers": [
                    { "text": "gate.PC", "correct": false },
                    { "text": "gate.MAR; load.IR", "correct": false },
                    { "text": "gate.MDR; load.IR", "correct": true },
                    { "text": "gate.PC; load.IR", "correct": false }
                ]
            },
            {
                "question": "A JMP Register instruction, JMP R1, performs what operation?",
                "answers": [
                    { "text": "Rl j - PC", "correct": false },
                    { "text": "PC j - Rl", "correct": true },
                    { "text": "PC j- MAR", "correct": false },
                    { "text": "MAR j- PC", "correct": false }
                ]
            },
            {
                "question": "Which LC instruction type uses the PSR?",
                "answers": [
                    { "text": "BR", "correct": true },
                    { "text": "JMP", "correct": false },
                    { "text": "LD", "correct": false },
                    { "text": "ST", "correct": false }
                ]
            },
            {
                "question": "Given the truth table for a full adder < A, B, Cin, S, Cout > truth table, what is the equation for the sum S?",
                "answers": [
                    { "text": "A' *B' * Cin + A'*B* Cin' + A*B'*Cin' + A * B * Cin", "correct": true },
                    { "text": "A1 *B' * Cin + A'*B* Cin' 4- A * B' * Cin' + A' * B' * Cin'", "correct": false },
                    { "text": "A' * B* Cin + A* B' * Cin + A* B * Cin' + A' * B' * Cin'", "correct": false },
                    { "text": "A1 * B* Cin + A* B' * Cin + A * B * Cin' + A * B * Cin", "correct": false }
                ]
            },
            {
                "question": "In implementing finite state machine with registers, why do we use 2 master slave flip flops using clock phases?",
                "answers": [
                    { "text": "cannot read and write same register at the same time", "correct": true },
                    { "text": "read and write any time", "correct": false },
                    { "text": "read whenever want", "correct": false },
                    { "text": "none of the above", "correct": false }
                ]
            },
            {
                "question": "The input to R — S latch are normally at High (1). What is the output Q when R is made 0?",
                "answers": [
                    { "text": "0", "correct": false },
                    { "text": "1", "correct": true },
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": false }
                ]
            },
            {
                "question": "P-type transistor has one connection to?",
                "answers": [
                    { "text": "ground", "correct": false },
                    { "text": "power +V volts", "correct": true },
                    { "text": "both a & b", "correct": false },
                    { "text": "none of the above", "correct": false }
                ]
            },
            {
                "question": "N-type transistor conducts (short) when gate has",
                "answers": [
                    { "text": "negative volt", "correct": false },
                    { "text": "positive volts", "correct": true },
                    { "text": "zero volts", "correct": false },
                    { "text": "all of the above", "correct": false }
                ]
            },
            {
                "question": "What is largest number in an 8 bit register?",
                "answers": [
                    { "text": "128", "correct": false },
                    { "text": "255", "correct": true },
                    { "text": "256", "correct": false },
                    { "text": "1024", "correct": false }
                ]
            },
            {
                "question": "Which of these instructions set register Rl equal to zero?",
                "answers": [
                    { "text": "NOT R1, R2", "correct": false },
                    { "text": "ADD R1, R2, #0", "correct": false },
                    { "text": "AND R1, R2, #0", "correct": true },
                    { "text": "AND R1, R2, #-1", "correct": false }
                ]
            },
            {
                "question": "What is the two complement of 8-bit number 00000101 (+5)?",
                "answers": [
                    { "text": "11111010", "correct": true },
                    { "text": "11111011", "correct": false },
                    { "text": "11110111", "correct": false },
                    { "text": "11111110", "correct": false }
                ]
            },
            {
                "question": "How many trap vectors in LC?",
                "answers": [
                    { "text": "128", "correct": false },
                    { "text": "256", "correct": false },
                    { "text": "512", "correct": false },
                    { "text": "1,024", "correct": true }
                ]
            },
            {
                "question": "A transistor has how many connections?",
                "answers": [
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": true },
                    { "text": "5", "correct": false }
                ]
            },
            {
                "question": "What is the charge at the gate of an N-type transistor?",
                "answers": [
                    { "text": "half positive charge", "correct": false },
                    { "text": "negative charge", "correct": true },
                    { "text": "no charge", "correct": false },
                    { "text": "positive charge", "correct": false }
                ]
            }
            // ...other questions...
        ]
    },
    csc211Quiz1: {
        time: 60 * 5, 
        questions: [
            {
                question: "If m is a power of 2, the number of select lines required for an m-input mux is:",
                answers: [
                    { text: "log₂(m)", correct: true },
                    { text: "m", correct: false },
                    { text: "2m", correct: false },
                    { text: "2 x m", correct: false }
                ]
            },
            {
                question: "The actual processing of information in the computer is done in the control unit.",
                answers: [
                    { text: "False", correct: false },
                    { text: "True", correct: true }
                ]
            },
            {
                question: "The addressability of LC-3 memory is:",
                answers: [
                    { text: "2⁴ bits", correct: false },
                    { text: "2¹⁶ - 1 bits", correct: false },
                    { text: "2¹⁶ locations", correct: true },
                    { text: "2⁴ locations", correct: false }
                ]
            },
            {
                question: "Which of the following conditions is not allowed in an R-S latch?",
                answers: [
                    { text: "R is negated, S is asserted", correct: false },
                    { text: "R is negated, S is negated", correct: false },
                    { text: "R is asserted, S is negated", correct: false },
                    { text: "R is asserted, S is asserted", correct: true }
                ]
            },
            {
                question: "JMP is an example of a/an:",
                answers: [
                    { text: "Data movement instruction", correct: false },
                    { text: "Control and operate instruction", correct: false },
                    { text: "Control instruction", correct: true },
                    { text: "Operate instruction", correct: false }
                ]
            },
            {
                question: "Instructions are used to change the sequence of instruction execution. Which type of instruction is it?",
                answers: [
                    { text: "Data movement", correct: false },
                    { text: "Control", correct: true },
                    { text: "Operate", correct: false },
                    { text: "Control and operate", correct: false }
                ]
            },
            {
                question: "Which of the following circuits involves storage?",
                answers: [
                    { text: "Decoder", correct: false },
                    { text: "D Latch", correct: true },
                    { text: "S Latch", correct: false },
                    { text: "Mux", correct: false }
                ]
            },
            {
                question: "The Von Neumann model consists of how many parts?",
                answers: [
                    { text: "3", correct: false },
                    { text: "4", correct: false },
                    { text: "5", correct: true },
                    { text: "6", correct: false }
                ]
            },
            {
                question: "A computer memory contains:",
                answers: [
                    { text: "Neither instruction nor data", correct: false },
                    { text: "Both instructions and data", correct: true },
                    { text: "Data only", correct: false },
                    { text: "Instruction only", correct: false }
                ]
            },
            {
                question: "The minimum number of transistors required to implement a two-input AND gate is:",
                answers: [
                    { text: "4", correct: true },
                    { text: "2", correct: false },
                    { text: "6", correct: false },
                    { text: "8", correct: false }
                ]
            }
            // ...other science questions...
        ]
    },
    CSC211: {
        time: 60 * 20, // 20 minutes in seconds
        questions: [
            {
                "question": "What is the sum of the following 2’s complement binary numbers: 01 + 1011?",
                "answers": [
                    { "text": "1100", "correct": false },
                    { "text": "1000", "correct": true },
                    { "text": "0110", "correct": false },
                    { "text": "1110", "correct": false }
                ]
            },
            {
                "question": "What is the result of adding the following unsigned binary numbers: 11 + 01010101?",
                "answers": [
                    { "text": "01010110", "correct": false },
                    { "text": "01010100", "correct": false },
                    { "text": "01010111", "correct": true },
                    { "text": "10101010", "correct": false }
                ]
            },
            {
                "question": "What is the 2’s complement representation of −27 using 8 bits?",
                "answers": [
                    { "text": "11100101", "correct": true },
                    { "text": "11011111", "correct": false },
                    { "text": "10011011", "correct": false },
                    { "text": "11101011", "correct": false }
                ]
            },
            {
                "question": "Which operation causes overflow when adding the following four-bit 2’s complement numbers: 1100 + 0100?",
                "answers": [
                    { "text": "Overflow occurs", "correct": true },
                    { "text": "No overflow", "correct": false },
                    { "text": "Both numbers are positive", "correct": false },
                    { "text": "Both numbers are negative", "correct": false }
                ]
            },
            {
                "question": "What condition indicates an overflow when adding two 2’s complement numbers?",
                "answers": [
                    { "text": "The carry bit is 1", "correct": false },
                    { "text": "The result is too large to fit in the bit width", "correct": true },
                    { "text": "The sum is negative", "correct": false },
                    { "text": "The sum is zero", "correct": false }
                ]
            },
            {
                "question": "What is the minimum number of bits needed to represent −64 in 2’s complement?",
                "answers": [
                    { "text": "7 bits", "correct": false },
                    { "text": "8 bits", "correct": true },
                    { "text": "9 bits", "correct": false },
                    { "text": "6 bits", "correct": false }
                ]
            },
            {
                "question": "What operation causes an overflow when adding two 16-bit unsigned numbers?",
                "answers": [
                    { "text": "The sum exceeds 16 bits", "correct": true },
                    { "text": "The result is negative", "correct": false },
                    { "text": "The sum is smaller than expected", "correct": false },
                    { "text": "The carry bit is 1", "correct": false }
                ]
            },
            {
                "question": "Which operation is used to isolate the status bit of machine 2 as the sign bit in a BUSYNESS pattern?",
                "answers": [
                    { "text": "ADD operation", "correct": false },
                    { "text": "AND operation", "correct": true },
                    { "text": "OR operation", "correct": false },
                    { "text": "XOR operation", "correct": false }
                ]
            },
            {
                "question": "What is the result of the following AND operation: 01010111 AND 11010111?",
                "answers": [
                    { "text": "11010111", "correct": false },
                    { "text": "01010111", "correct": false },
                    { "text": "01010101", "correct": true },
                    { "text": "11010101", "correct": false }
                ]
            },
            {
                "question": "What is the IEEE floating point representation of the decimal number 3.75?",
                "answers": [
                    { "text": "0 10000000 11100000000000000000000", "correct": true },
                    { "text": "0 10000001 11110000000000000000000", "correct": false },
                    { "text": "0 10000010 11000000000000000000000", "correct": false },
                    { "text": "0 10000000 10000000000000000000000", "correct": false }
                ]
            },
            {
                question: "Given n bits, how many distinct combinations of the n bits exist?",
                answers: [
                    { text: "2ⁿ", correct: true },
                    { text: "n²", correct: false },
                    { text: "2n", correct: false },
                    { text: "n!", correct: false }
                ]
            },
            {
                question: "How many bits are needed to represent 26 distinct characters?",
                answers: [
                    { text: "5", correct: false },
                    { text: "6", correct: true },
                    { text: "7", correct: false },
                    { text: "8", correct: false }
                ]
            },
            {
                question: "How many bits are needed to distinguish between uppercase and lowercase versions of all 26 characters?",
                answers: [
                    { text: "1", correct: false },
                    { text: "6", correct: false },
                    { text: "7", correct: true },
                    { text: "12", correct: false }
                ]
            },
            {
                question: "If there are 400 students in your class, what is the minimum number of bits required to assign each student a unique bit pattern?",
                answers: [
                    { text: "7", correct: false },
                    { text: "8", correct: false },
                    { text: "9", correct: true },
                    { text: "10", correct: false }
                ]
            },
            {
                question: "How many more students can be admitted to the class without requiring additional bits if there are 400 students?",
                answers: [
                    { text: "99", correct: false },
                    { text: "100", correct: true },
                    { text: "199", correct: false },
                    { text: "255", correct: false }
                ]
            },
            {
                question: "Given n bits, how many unsigned integers can be represented?",
                answers: [
                    { text: "2n", correct: false },
                    { text: "2ⁿ", correct: true },
                    { text: "n²", correct: false },
                    { text: "2n - 1", correct: false }
                ]
            },
            {
                question: "What is the range of unsigned integers that can be represented with n bits?",
                answers: [
                    { text: "0 to 2ⁿ - 1", correct: true },
                    { text: "0 to 2ⁿ", correct: false },
                    { text: "−2^(n−1) to 2^(n−1)", correct: false },
                    { text: "−2ⁿ to 2ⁿ", correct: false }
                ]
            },
            {
                question: "Write the 5-bit 1’s complement representation of −7.",
                answers: [
                    { text: "10001", correct: false },
                    { text: "11111", correct: false },
                    { text: "11000", correct: false },
                    { text: "10111", correct: true }
                ]
            },
            {
                question: "Write the 5-bit signed magnitude representation of 7.",
                answers: [
                    { text: "00111", correct: true },
                    { text: "11111", correct: false },
                    { text: "00011", correct: false },
                    { text: "10011", correct: false }
                ]
            },
            {
                question: "What is the 2’s complement representation of −32 in 6 bits?",
                answers: [
                    { text: "111000", correct: false },
                    { text: "110000", correct: true },
                    { text: "101000", correct: false },
                    { text: "100000", correct: false }
                ]
            },
            {
                question: "What is the largest positive number that can be represented in an eight-bit 2’s complement code?",
                answers: [
                    { text: "127", correct: true },
                    { text: "128", correct: false },
                    { text: "255", correct: false },
                    { text: "255", correct: false }
                ]
            },
            {
                question: "What is the greatest magnitude negative number that can be represented in an eight-bit 2’s complement code?",
                answers: [
                    { text: "−127", correct: false },
                    { text: "−128", correct: true },
                    { text: "−256", correct: false },
                    { text: "−255", correct: false }
                ]
            },
            {
                question: "How many bits are required to represent Avogadro’s number (6.02 × 10²³) in 2’s complement?",
                answers: [
                    { text: "72", correct: false },
                    { text: "73", correct: true },
                    { text: "100", correct: false },
                    { text: "2048", correct: false }
                ]
            },
            {
                question: "What is the decimal value of the 2’s complement binary number 1010?",
                answers: [
                    { text: "−6", correct: false },
                    { text: "−10", correct: true },
                    { text: "10", correct: false },
                    { text: "6", correct: false }
                ]
            },
            {
                question: "Convert the decimal number 102 into an eight-bit 2’s complement binary number.",
                answers: [
                    { text: "01100110", correct: true },
                    { text: "00110110", correct: false },
                    { text: "11000101", correct: false },
                    { text: "10101010", correct: false }
                ]
            },
            {
                question: "If the last digit of a 2’s complement binary number is 0, what can you say about the number?",
                answers: [
                    { text: "The number is negative", correct: false },
                    { text: "The number is even", correct: true },
                    { text: "The number is odd", correct: false },
                    { text: "The number is positive", correct: false }
                ]
            },
            {
                question: "Convert the binary number 11111110 into decimal.",
                answers: [
                    { text: "−2", correct: true },
                    { text: "−1", correct: false },
                    { text: "2", correct: false },
                    { text: "1", correct: false }
                ]
            },
            {
                question: "Add the following two-bit patterns: 1011 + 0001. What is the result in binary?",
                answers: [
                    { text: "1100", correct: true },
                    { text: "1010", correct: false },
                    { text: "1000", correct: false },
                    { text: "1110", correct: false }
                ]
            },
            {
                question: "What is the result of shifting the binary number 1010 one bit to the right?",
                answers: [
                    { text: "1011", correct: false },
                    { text: "1101", correct: false },
                    { text: "0101", correct: true },
                    { text: "0010", correct: false }
                ]
            },
            {
                question: "Add the 2’s complement representation of 7 (0111) to the 2’s complement representation of −7 (1001). What is the result?",
                answers: [
                    { text: "0000", correct: true },
                    { text: "1111", correct: false },
                    { text: "0001", correct: false },
                    { text: "1100", correct: false }
                ]
            },
            {
                "question": "What does an N-type transistor act as when the gate = 1?",
                "answers": [
                    { "text": "Open circuit", "correct": false },
                    { "text": "Closed circuit", "correct": true },
                    { "text": "Depends on the source voltage", "correct": false },
                    { "text": "Closed circuit", "correct": false }
                ]
            },
            {
                "question": "What does a P-type transistor act as when the gate = 0?",
                "answers": [
                    { "text": "Closed circuit", "correct": false },
                    { "text": "Open circuit", "correct": false },
                    { "text": "Closed circuit", "correct": true },
                    { "text": "Undefined", "correct": false }
                ]
            },
            {
                "question": "How many different two-input logic functions are possible?",
                "answers": [
                    { "text": "8", "correct": false },
                    { "text": "12", "correct": false },
                    { "text": "16", "correct": true },
                    { "text": "32", "correct": false }
                ]
            },
            {
                "question": "What is the logical value of OUT when IN = 1 in a circuit designed to output 0 for this input?",
                "answers": [
                    { "text": "0", "correct": false },
                    { "text": "1", "correct": true },
                    { "text": "Undefined", "correct": false },
                    { "text": "None", "correct": false }
                ]
            },
            {
                "question": "For the logic equation Y = NOT(A AND (B OR C)), what type of circuit can implement it?",
                "answers": [
                    { "text": "NAND logic", "correct": false },
                    { "text": "OR logic", "correct": false },
                    { "text": "Transistor-level logic", "correct": true },
                    { "text": "XOR logic", "correct": false }
                ]
            },
            {
                "question": "What is the output of a two-input NOR gate when both inputs are 0?",
                "answers": [
                    { "text": "0", "correct": false },
                    { "text": "1", "correct": true },
                    { "text": "Depends on the circuit", "correct": false },
                    { "text": "Undefined", "correct": false }
                ]
            },
            {
                "question": "What does the circuit NOT(NOT(A) OR NOT(B)) implement?",
                "answers": [
                    { "text": "NOR gate", "correct": false },
                    { "text": "NAND gate", "correct": false },
                    { "text": "AND gate", "correct": true },
                    { "text": "XOR gate", "correct": false }
                ]
            },
            {
                "question": "What is the flaw in the inverter circuit with swapped P-type and N-type transistors?",
                "answers": [
                    { "text": "The output values are inverted.", "correct": true },
                    { "text": "It outputs undefined values.", "correct": false },
                    { "text": "It always outputs 1.", "correct": false },
                    { "text": "It shorts the circuit.", "correct": false }
                ]
            },
            {
                "question": "How many output lines does a 5-input decoder have?",
                "answers": [
                    { "text": "8", "correct": false },
                    { "text": "16", "correct": false },
                    { "text": "32", "correct": true },
                    { "text": "64", "correct": false }
                ]
            },
            {
                "question": "What is the correct output for the truth table row (A=1, B=0) for NOT(NOT(A) OR NOT(B))?",
                "answers": [
                    { "text": "0", "correct": false },
                    { "text": "1", "correct": true },
                    { "text": "Undefined", "correct": false },
                    { "text": "None", "correct": false }
                ]
            },
            {
                "question": "What is the sum in binary for A=0111 and B=1011 using a full adder?",
                "answers": [
                    { "text": "10010", "correct": false },
                    { "text": "10010 with carry 1", "correct": true },
                    { "text": "01110", "correct": false },
                    { "text": "Undefined", "correct": false }
                ]
            },
            {
                "question": "What gate corresponds to NOT(NOT(A) OR NOT(B))?",
                "answers": [
                    { "text": "OR gate", "correct": false },
                    { "text": "NOR gate", "correct": false },
                    { "text": "AND gate", "correct": true },
                    { "text": "NAND gate", "correct": false }
                ]
            },
            {
                "question": "How many select lines does a 16-input multiplexer require?",
                "answers": [
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": false },
                    { "text": "4", "correct": false },
                    { "text": "5", "correct": true }
                ]
            },
            {
                "question": "In a six-input AND gate, what values of A, B, C, D, E, and F give an output of 1?",
                "answers": [
                    { "text": "All inputs = 1", "correct": true },
                    { "text": "At least one input = 1", "correct": false },
                    { "text": "Any three inputs = 1", "correct": false },
                    { "text": "Undefined", "correct": false }
                ]
            },
            {
                "question": "What does the exclusive-OR gate output when both inputs are 1?",
                "answers": [
                    { "text": "0", "correct": false },
                    { "text": "1", "correct": true },
                    { "text": "Undefined", "correct": false },
                    { "text": "None", "correct": false }
                ]
            },
            {
                "question": "How many nibbles of storage are in a memory with a 14-bit address?",
                "answers": [
                    { "text": "2048", "correct": false },
                    { "text": "4096", "correct": true },
                    { "text": "8192", "correct": false },
                    { "text": "16384", "correct": false }
                ]
            },
            {
                "question": "What is the output of a two-input AND gate when both inputs are 1?",
                "answers": [
                    { "text": "0", "correct": false },
                    { "text": "1", "correct": true },
                    { "text": "Undefined", "correct": false },
                    { "text": "None", "correct": false }
                ]
            },
            {
                "question": "How many rows will a truth table with four inputs have?",
                "answers": [
                    { "text": "8", "correct": false },
                    { "text": "16", "correct": true },
                    { "text": "32", "correct": false },
                    { "text": "64", "correct": false }
                ]
            },
            {
                "question": "Which of the following is a feature of a decoder?",
                "answers": [
                    { "text": "Multiplexes inputs", "correct": false },
                    { "text": "Converts binary to active lines", "correct": true },
                    { "text": "Generates all possible outputs", "correct": false },
                    { "text": "None", "correct": false }
                ]
            },
            {
                "question": "What does an XOR gate output when both inputs are 0?",
                "answers": [
                    { "text": "0", "correct": true },
                    { "text": "1", "correct": false },
                    { "text": "Undefined", "correct": false },
                    { "text": "None", "correct": false }
                ]
            },
            {
                "question": "What is the output of a three-input AND gate when A = 1, B = 0, C = 1?",
                "answers": [
                    { "text": "1", "correct": false },
                    { "text": "0", "correct": true },
                    { "text": "Undefined", "correct": false },
                    { "text": "None", "correct": false }
                ]
            },
            {
                "question": "How many rows does a truth table for a three-input XOR gate have?",
                "answers": [
                    { "text": "4", "correct": false },
                    { "text": "8", "correct": true },
                    { "text": "16", "correct": false },
                    { "text": "32", "correct": false }
                ]
            },
            {
                "question": "What type of logic gate has the truth table A = 0, B = 0, OUT = 1; A = 1, B = 1, OUT = 0?",
                "answers": [
                    { "text": "AND gate", "correct": false },
                    { "text": "NOR gate", "correct": false },
                    { "text": "XOR gate", "correct": true },
                    { "text": "NAND gate", "correct": false }
                ]
            },
            {
                "question": "For a 4-to-1 multiplexer, how many select lines are needed?",
                "answers": [
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": true },
                    { "text": "3", "correct": false },
                    { "text": "4", "correct": false }
                ]
            },
            {
                "question": "What is the logic value of a two-input OR gate when A = 0, B = 1?",
                "answers": [
                    { "text": "0", "correct": false },
                    { "text": "1", "correct": true },
                    { "text": "Undefined", "correct": false },
                    { "text": "None", "correct": false }
                ]
            },
            {
                "question": "In a logic circuit, if A = 1, B = 1, and the output Z is 0, which gate is it likely to be?",
                "answers": [
                    { "text": "AND", "correct": false },
                    { "text": "OR", "correct": false },
                    { "text": "NAND", "correct": true },
                    { "text": "NOR", "correct": false }
                ]
            },
            {
                "question": "How many inputs does a 16-to-1 multiplexer have?",
                "answers": [
                    { "text": "8", "correct": false },
                    { "text": "16", "correct": false },
                    { "text": "16 with 4 select lines", "correct": true },
                    { "text": "32", "correct": false }
                ]
            },
            {
                "question": "What is the output of a NOR gate when both inputs are 1?",
                "answers": [
                    { "text": "0", "correct": true },
                    { "text": "0", "correct": false },
                    { "text": "Undefined", "correct": false },
                    { "text": "1", "correct": false }
                ]
            },
            {
                "question": "Which logic gate outputs 1 only when all inputs are 1?",
                "answers": [
                    { "text": "OR gate", "correct": false },
                    { "text": "NOR gate", "correct": false },
                    { "text": "XOR gate", "correct": false },
                    { "text": "AND gate", "correct": true }
                ]
            },
            {
                "question": "Which of the following gates outputs 1 only when both inputs are 0?",
                "answers": [
                    { "text": "NOR gate", "correct": true },
                    { "text": "AND gate", "correct": false },
                    { "text": "XOR gate", "correct": false },
                    { "text": "OR gate", "correct": false }
                ]
            },
            {
                "question": "What is the maximum value that can be represented in two bits for A (A[1:0])?",
                "answers": [
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": true },
                    { "text": "4", "correct": false }
                ]
            },
            {
                "question": "What is the maximum value that can be represented in two bits for B (B[1:0])?",
                "answers": [
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": true },
                    { "text": "4", "correct": false }
                ]
            },
            {
                "question": "What is the maximum possible value of Y when multiplying two 2-bit numbers A[1:0] and B[1:0]?",
                "answers": [
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": false },
                    { "text": "6", "correct": true },
                    { "text": "9", "correct": false }
                ]
            },
            {
                "question": "What is the number of required bits to represent the maximum value of Y?",
                "answers": [
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": true },
                    { "text": "3", "correct": false },
                    { "text": "4", "correct": false }
                ]
            },
            {
                "question": "What is the truth table for a one-bit comparator with inputs A and B and outputs G, E, and L (Greater, Equal, Less)?",
                "answers": [
                    { "text": "G=1 if A > B, E=1 if A = B, L=1 if A < B", "correct": true },
                    { "text": "G=1 if A = B, E=1 if A > B, L=1 if A < B", "correct": false },
                    { "text": "G=0 if A > B, E=0 if A = B, L=0 if A < B", "correct": false },
                    { "text": "G=0 if A = B, E=0 if A > B, L=0 if A < B", "correct": false }
                ]
            },
            {
                "question": "What is the propagation delay for the two-input mux?",
                "answers": [
                    { "text": "1 gate delay", "correct": false },
                    { "text": "2 gate delays", "correct": true },
                    { "text": "3 gate delays", "correct": false },
                    { "text": "4 gate delays", "correct": false }
                ]
            },
            {
                "question": "What is the propagation delay for a one-bit full adder?",
                "answers": [
                    { "text": "1 gate delay", "correct": false },
                    { "text": "2 gate delays", "correct": true },
                    { "text": "3 gate delays", "correct": false },
                    { "text": "4 gate delays", "correct": false }
                ]
            },
            {
                "question": "What is the propagation delay for a four-bit adder?",
                "answers": [
                    { "text": "1 gate delay", "correct": false },
                    { "text": "2 gate delays", "correct": false },
                    { "text": "4 gate delays", "correct": true },
                    { "text": "5 gate delays", "correct": false }
                ]
            },
            {
                "question": "What would be the propagation delay for a 32-bit adder?",
                "answers": [
                    { "text": "4 gate delays", "correct": false },
                    { "text": "8 gate delays", "correct": true },
                    { "text": "32 gate delays", "correct": false },
                    { "text": "64 gate delays", "correct": false }
                ]
            },
            {
                "question": "Can a 3-to-8 decoder and two 6-input OR gates be used to construct a full adder?",
                "answers": [
                    { "text": "Yes", "correct": true },
                    { "text": "No", "correct": false }
                ]
            },
            {
                "question": "What is the purpose of a comparator circuit in digital logic?",
                "answers": [
                    { "text": "To add two binary numbers", "correct": false },
                    { "text": "To compare two binary numbers and output whether one is greater, equal, or less", "correct": true },
                    { "text": "To store a binary value", "correct": false },
                    { "text": "To multiply two binary numbers", "correct": false }
                ]
            },
            {
                "question": "What is the purpose of the address space in a memory system?",
                "answers": [
                    { "text": "To store data values", "correct": false },
                    { "text": "To identify the range of memory addresses", "correct": true },
                    { "text": "To determine the number of bits in the memory", "correct": false },
                    { "text": "To handle input/output operations", "correct": false }
                ]
            },
            {
                "question": "What is the difference between a memory address and addressability?",
                "answers": [
                    { "text": "Memory address refers to the specific location, while addressability refers to how many bits can be addressed per location", "correct": true },
                    { "text": "Memory address is a byte, while addressability refers to the data size in bits", "correct": false },
                    { "text": "Memory address refers to the data size, while addressability refers to location specifics", "correct": false },
                    { "text": "There is no difference", "correct": false }
                ]
            },
            {
                "question": "How many address lines are needed to address 60 memory locations?",
                "answers": [
                    { "text": "4", "correct": false },
                    { "text": "5", "correct": true },
                    { "text": "6", "correct": false },
                    { "text": "7", "correct": false }
                ]
            },
            {
                "question": "What is the minimum width of the program counter required to address 60 memory locations?",
                "answers": [
                    { "text": "5 bits", "correct": true },
                    { "text": "6 bits", "correct": false },
                    { "text": "7 bits", "correct": false },
                    { "text": "8 bits", "correct": false }
                ]
            },
            {
                "question": "How many bits of storage does a memory addressed by 22 bits and 3-bit addressable contain?",
                "answers": [
                    { "text": "3 bits", "correct": false },
                    { "text": "64 bits", "correct": false },
                    { "text": "128 bits", "correct": false },
                    { "text": "192 bits", "correct": true }
                ]
            },
            {
                "question": "What is the output of a NOT gate when the input is 1?",
                "answers": [
                    { "text": "0", "correct": true },
                    { "text": "1", "correct": false },
                    { "text": "Undefined", "correct": false },
                    { "text": "Error", "correct": false }
                ]
            },
            {
                "question": "What is the output of an AND gate when both inputs are 1?",
                "answers": [
                    { "text": "0", "correct": false },
                    { "text": "1", "correct": true },
                    { "text": "Undefined", "correct": false },
                    { "text": "Error", "correct": false }
                ]
            },
            {
                "question": "What is the output of an OR gate when both inputs are 0?",
                "answers": [
                    { "text": "0", "correct": true },
                    { "text": "1", "correct": false },
                    { "text": "Undefined", "correct": false },
                    { "text": "Error", "correct": false }
                ]
            },
            {
                "question": "Which of the following statements is true about a NAND gate?",
                "answers": [
                    { "text": "It produces a 1 when both inputs are 1", "correct": false },
                    { "text": "It is a combination of NOT and AND gates", "correct": true },
                    { "text": "It can be used to construct any other gate", "correct": true },
                    { "text": "Both B and C", "correct": true }
                ]
            },
            {
                question: "Which of the following are the components of the von Neumann model?",
                answers: [
                    { text: "CPU, Memory, Input Devices, Output Devices, Control Unit", correct: false },
                    { text: "Memory, ALU, Control Unit, I/O Devices, Processor", correct: true },
                    { text: "Processor, Register, ALU, I/O Devices, Bus", correct: false },
                    { text: "ALU, Memory, Register, Bus, Output Device", correct: false },
                ]
            },
            {
                question: "How do the memory and processing unit communicate in the von Neumann model?",
                answers: [
                    { text: "Through registers and control signals", correct: false },
                    { text: "Through direct memory access (DMA)", correct: false },
                    { text: "Via the system bus", correct: true },
                    { text: "Via a dedicated control line", correct: false },
                ]
            },
            {
                question: "Why is the name 'instruction pointer' more insightful than 'program counter'?",
                answers: [
                    { text: "It specifically points to the next instruction in memory", correct: true },
                    { text: "It tracks memory locations for data processing", correct: false },
                    { text: "It stores the address of the current instruction", correct: false },
                    { text: "It refers to the next memory location for program execution", correct: false },
                ]
            },
            {
                question: "What does the word length of a computer determine?",
                answers: [
                    { text: "The maximum number of instructions that can be executed", correct: false },
                    { text: "The number of bits the CPU can process at a time", correct: true },
                    { text: "The number of registers in the CPU", correct: false },
                    { text: "The maximum size of the program that can be loaded into memory", correct: false },
                ]
            },
            {
                question: "What is the maximum number that can be represented with a 2-bit signed integer?",
                answers: [
                    { text: "1", correct: false },
                    { text: "2", correct: false },
                    { text: "3", correct: true },
                    { text: "4", correct: false },
                ]
            },
            {
                question: "In the von Neumann model, which of the following is an example of an instruction?",
                answers: [
                    { text: "Data that is stored in memory", correct: false },
                    { text: "A program that controls the computer", correct: false },
                    { text: "A binary pattern that the processor can decode and execute", correct: true },
                    { text: "A series of memory addresses", correct: false },
                ]
            },
            {
                question: "What are the two components of an instruction in the von Neumann model?",
                answers: [
                    { text: "Opcode and Data", correct: false },
                    { text: "Opcode and Address", correct: false },
                    { text: "Data and Address", correct: false },
                    { text: "Opcode and Operand", correct: true },
                ]
            },
            {
                question: "What is the range of values that can be represented by a 32-bit immediate value in a 32-bit instruction format (2’s complement)?",
                answers: [
                    { text: "-32768 to 32767", correct: false },
                    { text: "-2147483648 to 2147483647", correct: true },
                    { text: "0 to 65535", correct: false },
                    { text: "0 to 4294967295", correct: false },
                ]
            },
            {
                question: "How many bits are required to represent 225 opcodes in a 32-bit instruction?",
                answers: [
                    { text: "7 bits", correct: true },
                    { text: "8 bits", correct: false },
                    { text: "9 bits", correct: false },
                    { text: "10 bits", correct: false },
                ]
            },
            {
                question: "What is the purpose of the FETCH phase in the instruction cycle?",
                answers: [
                    { text: "To decode the instruction", correct: false },
                    { text: "To execute the instruction", correct: false },
                    { text: "To load the instruction into the instruction register (IR)", correct: true },
                    { text: "To store the result of the instruction", correct: false },
                ]
            },
            {
                question: "Which of the following is the correct sequence of phases in the instruction cycle?",
                answers: [
                    { text: "Fetch, Decode, Execute, Store", correct: true },
                    { text: "Fetch, Execute, Decode, Store", correct: false },
                    { text: "Decode, Fetch, Store, Execute", correct: false },
                    { text: "Execute, Fetch, Store, Decode", correct: false },
                ]
            },
            {
                question: "In the instruction cycle, during which phase is the Program Counter (PC) updated?",
                answers: [
                    { text: "Fetch phase", correct: true },
                    { text: "Decode phase", correct: false },
                    { text: "Execute phase", correct: false },
                    { text: "Store phase", correct: false },
                ]
            },
            {
                question: "How many cycles are required for an IA-32 “ADD [eax], edx” instruction, assuming one cycle per phase unless a memory access is needed?",
                answers: [
                    { text: "4 cycles", correct: false },
                    { text: "5 cycles", correct: true },
                    { text: "6 cycles", correct: false },
                    { text: "7 cycles", correct: false },
                ]
            },
            {
                question: "If a HALT instruction clears the RUN latch, what instruction is needed to set the RUN latch to reinitiate the instruction cycle?",
                answers: [
                    { text: "JUMP instruction", correct: false },
                    { text: "HALT instruction", correct: false },
                    { text: "NOP instruction", correct: false },
                    { text: "START instruction", correct: true },
                ]
            },
            {
                question: "What is the minimum number of bits required to represent the destination register (DR) in a 32-bit instruction with 120 registers?",
                answers: [
                    { text: "6 bits", correct: false },
                    { text: "7 bits", correct: true },
                    { text: "8 bits", correct: false },
                    { text: "10 bits", correct: false },
                ]
            },
            {
                "question": "Which category does the ADD instruction fall under in LC-3?",
                "answers": [
                    { "text": "Operate instruction", "correct": true },
                    { "text": "Data movement instruction", "correct": false },
                    { "text": "Control instruction", "correct": false },
                    { "text": "None of the above", "correct": false }
                ]
            },
            {
                "question": "What does the size of the Memory Address Register (MAR) and Memory Data Register (MDR) depend on when the addressability is 64 bits?",
                "answers": [
                    { "text": "MAR is 16 bits, MDR is 64 bits", "correct": false },
                    { "text": "MAR is 64 bits, MDR is 64 bits", "correct": true },
                    { "text": "MAR is 32 bits, MDR is 64 bits", "correct": false },
                    { "text": "MAR is 64 bits, MDR is 32 bits", "correct": false }
                ]
            },
            {
                "question": "What is the distinguishing characteristic of a loop termination element that uses an element (besides a counter)?",
                "answers": [
                    { "text": "It terminates when the register is zero", "correct": false },
                    { "text": "It terminates when a specific condition is met", "correct": true },
                    { "text": "It terminates after a fixed number of iterations", "correct": false },
                    { "text": "It terminates based on an interrupt signal", "correct": false }
                ]
            },
            {
                "question": "In a memory consisting of 256 locations, each containing 16 bits, how many bits are needed for the address?",
                "answers": [
                    { "text": "8 bits", "correct": true },
                    { "text": "16 bits", "correct": false },
                    { "text": "12 bits", "correct": false },
                    { "text": "10 bits", "correct": false }
                ]
            },
            {
                "question": "If you use PC-relative addressing mode and want to allow control transfer 20 locations away, how many bits are needed for the PC-relative offset?",
                "answers": [
                    { "text": "6 bits", "correct": false },
                    { "text": "8 bits", "correct": true },
                    { "text": "4 bits", "correct": false },
                    { "text": "5 bits", "correct": false }
                ]
            },
            {
                "question": "What is an addressing mode?",
                "answers": [
                    { "text": "A method of encoding data for memory access", "correct": false },
                    { "text": "A type of operation performed by an instruction", "correct": false },
                    { "text": "A way to specify operand location in an instruction", "correct": true },
                    { "text": "A technique for control flow in an instruction", "correct": false }
                ]
            },
            {
                "question": "Which addressing mode does the ADD instruction use in the LC-3?",
                "answers": [
                    { "text": "Immediate", "correct": false },
                    { "text": "Register", "correct": true },
                    { "text": "PC-relative", "correct": false },
                    { "text": "Indirect", "correct": false }
                ]
            },
            {
                "question": "What is the maximum number that can be represented literally in an LC-3 ADD instruction?",
                "answers": [
                    { "text": "256", "correct": false },
                    { "text": "64", "correct": false },
                    { "text": "15", "correct": false },
                    { "text": "31", "correct": true }
                ]
            },
            {
                "question": "Which of the following is a potential NOP instruction in LC-3?",
                "answers": [
                    { "text": "0000 0000 00000000", "correct": true },
                    { "text": "0001 001 001 1 00000", "correct": false },
                    { "text": "0000 111 000000001", "correct": false },
                    { "text": "0001 000 000 1 00001", "correct": false }
                ]
            },
            {
                "question": "What is the effect of the LC-3 instruction ADD R2, R0, R1 if R0 and R1 both contain unsigned integers?",
                "answers": [
                    { "text": "R2 will store the sum of R0 and R1", "correct": true },
                    { "text": "R2 will store a negative value", "correct": false },
                    { "text": "R2 will store an overflow error", "correct": false },
                    { "text": "R2 will be undefined", "correct": false }
                ]
            },
            {
                "question": "How would you perform R1 ← R2 - R3 using only three LC-3 instructions?",
                "answers": [
                    { "text": "Use an ADD instruction with a negative immediate value", "correct": true },
                    { "text": "Use an AND instruction to simulate subtraction", "correct": false },
                    { "text": "Use a sequence of MOVE instructions", "correct": false },
                    { "text": "LC-3 cannot perform this operation", "correct": false }
                ]
            },
            {
                "question": "In the LC-3, what is the addressing mode used for the LEA instruction?",
                "answers": [
                    { "text": "Immediate", "correct": false },
                    { "text": "Register", "correct": false },
                    { "text": "PC-relative", "correct": true },
                    { "text": "Indirect", "correct": false }
                ]
            },
            {
                "question": "How many memory accesses are required by the LC-3 during the processing of the LDI instruction?",
                "answers": [
                    { "text": "2", "correct": false },
                    { "text": "3", "correct": true },
                    { "text": "1", "correct": false },
                    { "text": "4", "correct": false }
                ]
            },
            {
                "question": "What does the signal A in the control structure of the LC-3 architecture do?",
                "answers": [
                    { "text": "It controls the ALU operation", "correct": false },
                    { "text": "It gates the memory access", "correct": false },
                    { "text": "It determines the condition codes", "correct": true },
                    { "text": "It determines the branch condition", "correct": false }
                ]
            },
            {
                "question": "The LC-3 supports how many TRAP service routines?",
                "answers": [
                    { "text": "128", "correct": true },
                    { "text": "64", "correct": false },
                    { "text": "256", "correct": false },
                    { "text": "512", "correct": false }
                ]
            },
            {
                "question": "How many bits would be required for the PC-relative offset if the LD instruction in LC-3 is restricted to ±32 locations?",
                "answers": [
                    { "text": "7 bits", "correct": false },
                    { "text": "9 bits", "correct": true },
                    { "text": "5 bits", "correct": false },
                    { "text": "6 bits", "correct": false }
                ]
            },
            {
                "question": "If the condition codes are N=0, Z=0, P=1, what will the values be after the execution of this sequence of instructions?",
                "answers": [
                    { "text": "N=1, Z=0, P=0", "correct": false },
                    { "text": "N=0, Z=1, P=0", "correct": true },
                    { "text": "N=0, Z=1, P=1", "correct": false },
                    { "text": "N=0, Z=0, P=1", "correct": false }
                ]
            },
            {
                "question": "What is the effect of the instruction LDR R2, R4, #3 in LC-3?",
                "answers": [
                    { "text": "It loads data from memory at address R4 + 3 into R2", "correct": true },
                    { "text": "It stores data from R4 to memory at address 3", "correct": false },
                    { "text": "It moves data from R4 to R2", "correct": false },
                    { "text": "It adds 3 to R4 and loads the result into R2", "correct": false }
                ]
            },
            {
                "question": "What is the largest address that the LDR instruction can load from, given that the base register R4 contains the value x4011 and the offset is sign-extended?",
                "answers": [
                    { "text": "x7FFF", "correct": true },
                    { "text": "x40FF", "correct": false },
                    { "text": "x4411", "correct": false },
                    { "text": "x401F", "correct": false }
                ]
            },
            {
                "question": "What does the instruction ADD R3, R2, R1 do?",
                "answers": [
                    { "text": "Adds the values in R2 and R1 and stores the result in R3", "correct": true },
                    { "text": "Subtracts the value in R1 from R2 and stores it in R3", "correct": false },
                    { "text": "Stores the value in R2 into R3", "correct": false },
                    { "text": "Compares R2 and R1", "correct": false }
                ]
            },
            {
                "question": "What is the new range of addresses that can be loaded using the LD instruction if we change the offset to 7 bits?",
                "answers": [
                    { "text": "±64 addresses", "correct": true },
                    { "text": "±128 addresses", "correct": false },
                    { "text": "±32 addresses", "correct": false },
                    { "text": "±256 addresses", "correct": false }
                ]
            },
            {
                "question": "Which instruction could be used to clear the contents of register R2?",
                "answers": [
                    { "text": "AND R2, R2, #0", "correct": true },
                    { "text": "ADD R2, R2, #0", "correct": false },
                    { "text": "MOV R2, #0", "correct": false },
                    { "text": "XOR R2, R2, R2", "correct": false }
                ]
            },
            {
                "question": "What is the effect of the instruction LD R1, x4000?",
                "answers": [
                    { "text": "Loads data from memory address x4000 into R1", "correct": true },
                    { "text": "Loads the value x4000 into R1", "correct": false },
                    { "text": "Stores data from R1 to memory address x4000", "correct": false },
                    { "text": "Moves data from R1 to address x4000", "correct": false }
                ]
            },
            {
                "question": "In the LC-3, what is the purpose of the TRAP instruction?",
                "answers": [
                    { "text": "It halts program execution", "correct": false },
                    { "text": "It transfers control to an operating system service routine", "correct": true },
                    { "text": "It performs an arithmetic operation", "correct": false },
                    { "text": "It loads a value into a register", "correct": false }
                ]
            },
            {
                "question": "How many bits of a branch instruction are required to specify a PC-relative offset of 20 locations in LC-3?",
                "answers": [
                    { "text": "5 bits", "correct": false },
                    { "text": "6 bits", "correct": true },
                    { "text": "7 bits", "correct": false },
                    { "text": "9 bits", "correct": false }
                ]
            },
            {
                "question": "Which of the following instructions is an operate instruction in the LC-3?",
                "answers": [
                    { "text": "ADD", "correct": true },
                    { "text": "JMP", "correct": false },
                    { "text": "LEA", "correct": false },
                    { "text": "NOT", "correct": false }
                ]
            },
            {
                "question": "If a memory's addressability is 64 bits, what is the size of the MAR and MDR?",
                "answers": [
                    { "text": "16 bits", "correct": false },
                    { "text": "32 bits", "correct": false },
                    { "text": "64 bits", "correct": true },
                    { "text": "128 bits", "correct": false }
                ]
            },
            {
                "question": "What distinguishes a loop termination element when using a counter?",
                "answers": [
                    { "text": "A memory address", "correct": false },
                    { "text": "A condition that terminates after a specified number of iterations", "correct": true },
                    { "text": "An interrupt signal", "correct": false },
                    { "text": "A comparison with zero", "correct": false }
                ]
            },
            {
                "question": "In a memory of 256 locations, each containing 16 bits, how many bits are required for the address?",
                "answers": [
                    { "text": "8 bits", "correct": true },
                    { "text": "10 bits", "correct": false },
                    { "text": "12 bits", "correct": false },
                    { "text": "16 bits", "correct": false }
                ]
            },
            {
                "question": "If we use PC-relative addressing mode and want to control transfer 20 locations away, how many bits of a branch instruction are needed to specify the offset?",
                "answers": [
                    { "text": "4 bits", "correct": false },
                    { "text": "5 bits", "correct": true },
                    { "text": "6 bits", "correct": false },
                    { "text": "9 bits", "correct": false }
                ]
            },
            {
                "question": "What are the five addressing modes in the LC-3?",
                "answers": [
                    { "text": "Direct, Indirect, Indexed, Register, PC-relative", "correct": false },
                    { "text": "Immediate, Direct, Register, PC-relative, Indirect", "correct": true },
                    { "text": "Register, Memory, Immediate, Index, Jump", "correct": false },
                    { "text": "Immediate, Indirect, Branch, Register, Direct", "correct": false }
                ]
            },
            {
                "question": "Which of the following LC-3 instructions can be used to determine whether machine 2 is busy?",
                "answers": [
                    { "text": "AND R3, R2, #1", "correct": false },
                    { "text": "AND R3, R2, #4", "correct": true },
                    { "text": "OR R3, R2, #2", "correct": false },
                    { "text": "ADD R3, R2, #3", "correct": false }
                ]
            },
            {
                "question": "The largest positive number that can be represented literally within an LC-3 ADD instruction is:",
                "answers": [
                    { "text": "15", "correct": false },
                    { "text": "255", "correct": false },
                    { "text": "32767", "correct": true },
                    { "text": "65535", "correct": false }
                ]
            },
            {
                "question": "What is the problem with increasing the number of registers in the LC-3 ADD instruction to 32?",
                "answers": [
                    { "text": "The instruction would be too large.", "correct": true },
                    { "text": "The address space is insufficient.", "correct": false },
                    { "text": "The instruction format is not flexible enough.", "correct": false },
                    { "text": "There is no problem; it works fine.", "correct": false }
                ]
            },
            {
                "question": "Which of the following LC-3 instructions could serve as a NOP instruction?",
                "answers": [
                    { "text": "0001 001 001 1 00000", "correct": false },
                    { "text": "0000 111 000000001", "correct": false },
                    { "text": "0000 000 000000000", "correct": true },
                    { "text": "0101 001 010 000 101", "correct": false }
                ]
            },
            {
                "question": "What does the ADD instruction do that the others do not?",
                "answers": [
                    { "text": "It performs an arithmetic operation.", "correct": true },
                    { "text": "It stores the result in memory.", "correct": false },
                    { "text": "It performs a logical operation.", "correct": false },
                    { "text": "It alters the program counter.", "correct": false }
                ]
            },
            {
                "question": "Which instruction in the LC-3 can subtract a constant number from a register?",
                "answers": [
                    { "text": "ADD", "correct": false },
                    { "text": "SUB", "correct": false },
                    { "text": "NOT", "correct": false },
                    { "text": "There is no subtraction instruction in the LC-3.", "correct": true }
                ]
            },
            {
                "question": "The LDR instruction uses which type of addressing mode?",
                "answers": [
                    { "text": "Register", "correct": false },
                    { "text": "Immediate", "correct": false },
                    { "text": "Direct", "correct": true },
                    { "text": "PC-relative", "correct": false }
                ]
            },
            {
                "question": "If a value is stored in R0 and needs to be copied to R1, which instruction could be used?",
                "answers": [
                    { "text": "ADD R1, R0, #0", "correct": true },
                    { "text": "AND R1, R0, #0", "correct": false },
                    { "text": "MOV R1, R0", "correct": false },
                    { "text": "LDI R1, R0", "correct": false }
                ]
            },
            {
                "question": "How many bits are required for the PC-relative offset in the LD instruction if it can load data only ±32 locations away?",
                "answers": [
                    { "text": "5 bits", "correct": false },
                    { "text": "6 bits", "correct": true },
                    { "text": "7 bits", "correct": false },
                    { "text": "9 bits", "correct": false }
                ]
            },
            {
                question: "What opcode would the LC-3 use for the instruction `MOVE Ri, Rj` (copy contents of Rj into Ri)?",
                answers: [
                    { text: "0001", correct: false },
                    { text: "1101", correct: true },
                    { text: "0010", correct: false },
                    { text: "0000", correct: false },
                ]
            },
            {
                question: "What does the instruction `0001 000 000 1 00000` do in LC-3?",
                answers: [
                    { text: "Adds #0 to register 0", correct: true },
                    { text: "Copies R0 to R1", correct: false },
                    { text: "Increments register 0 by 1", correct: false },
                    { text: "Branches if N, Z, or P are set", correct: false },
                ]
            },
            {
                question: "What will happen when the instruction `0000 111 000000000` is executed in LC-3?",
                answers: [
                    { text: "It branches to the address PC + #0 if any of N, Z, or P is set", correct: true },
                    { text: "It loads a value into register 1", correct: false },
                    { text: "It increments the value of register 0", correct: false },
                    { text: "It moves the contents of R0 to R1", correct: false },
                ]
            },
            {
                question: "In the LC-3 instruction set, which of the following instructions will load a value from memory into R1 and conditionally branch based on the value?",
                answers: [
                    { text: "0010 001 011111111", correct: true },
                    { text: "0001 000 000 1 00001", correct: false },
                    { text: "0000 111 000000001", correct: false },
                    { text: "1111 0000 0010 0101", correct: false },
                ]
            },
            {
                question: "What is the role of the MAR in the LC-3 instruction cycle when executing a program?",
                answers: [
                    { text: "It stores the value that will be written to memory", correct: false },
                    { text: "It holds the address of the memory being accessed", correct: true },
                    { text: "It holds the instruction fetched from memory", correct: false },
                    { text: "It stores the current value of the program counter", correct: false },
                ]
            },
            {
                question: "After executing the instruction `0001000000000001` in LC-3, which value will be stored in register R0?",
                answers: [
                    { text: "ASCII of lowercase letter", correct: true },
                    { text: "ASCII of uppercase letter", correct: false },
                    { text: "The original value in R0", correct: false },
                    { text: "The complement of R0", correct: false },
                ]
            },
            {
                question: "What causes the PC to be incremented in the LC-3 instruction cycle?",
                answers: [
                    { text: "Fetching an instruction", correct: true },
                    { text: "Completing a memory write", correct: false },
                    { text: "Completing a branch", correct: false },
                    { text: "Executing a JMP instruction", correct: false },
                ]
            },
            {
                question: "In the context of LC-3, what happens during the first state of the instruction cycle?",
                answers: [
                    { text: "The instruction is fetched from memory", correct: false },
                    { text: "The MAR is loaded with the value of PC", correct: true },
                    { text: "The IR is decoded", correct: false },
                    { text: "The ALU performs an operation", correct: false },
                ]
            },
            {
                question: "Which instruction in LC-3 loads the memory data register (MDR) twice during the processing of the instruction?",
                answers: [
                    { text: "LD", correct: false },
                    { text: "LDR", correct: true },
                    { text: "LDI", correct: false },
                    { text: "LEA", correct: false },
                ]
            },
            {
                question: "What condition will cause the program counter (PC) to jump to address x3039 after executing two instructions at x3030 and x3031?",
                answers: [
                    { text: "If the branch is taken based on the Z flag", correct: true },
                    { text: "If the branch is taken based on the N flag", correct: false },
                    { text: "If the branch is taken based on the P flag", correct: false },
                    { text: "If a JMP instruction is executed", correct: false },
                ]
            },
            {
                question: "What opcode in LC-3 uses IR[11:9] as inputs to SR1?",
                answers: [
                    { text: "ADD", correct: true },
                    { text: "AND", correct: false },
                    { text: "BR", correct: false },
                    { text: "LDI", correct: false },
                ]
            },
            {
                question: "Which of the following operations does the instruction `1101 000 DR SR1 SR2` perform?",
                answers: [
                    { text: "DR ← SR1 - SR2", correct: false },
                    { text: "DR ← SR2 - SR1", correct: true },
                    { text: "DR ← SR1 + SR2", correct: false },
                    { text: "DR ← SR2 + SR1", correct: false },
                ]
            },
            {
                question: "What control signal is used in the SR2MUX for the SUBTRACT instruction in LC-3?",
                answers: [
                    { text: "SR2SEL", correct: true },
                    { text: "LD.REG", correct: false },
                    { text: "GateALU", correct: false },
                    { text: "ALUK", correct: false },
                ]
            },
            {
                question: "What does the NOT instruction do in LC-3?",
                answers: [
                    { text: "It inverts the bits of a value in a register", correct: true },
                    { text: "It clears the contents of a register", correct: false },
                    { text: "It loads a value from memory into a register", correct: false },
                    { text: "It sets the N, Z, and P flags", correct: false },
                ]
            },
            {
                question: "Which of the following is used to implement a new instruction with opcode `1101` in the LC-3 architecture?",
                answers: [
                    { text: "Modify the control unit", correct: true },
                    { text: "Rewire the ALU", correct: false },
                    { text: "Add a new register", correct: false },
                    { text: "Modify the memory access cycle", correct: false },
                ]
            },
            {
                question: "What is the opcode for a `BR` instruction in LC-3?",
                answers: [
                    { text: "0001", correct: false },
                    { text: "0000", correct: true },
                    { text: "1101", correct: false },
                    { text: "1100", correct: false },
                ]
            },
            {
                question: "What happens when a program executes an `LD` instruction in LC-3?",
                answers: [
                    { text: "It loads a value from memory into a register", correct: true },
                    { text: "It performs a bitwise AND operation", correct: false },
                    { text: "It shifts data in a register", correct: false },
                    { text: "It jumps to a specific address in memory", correct: false },
                ]
            },
            {
                question: "Which of the following instructions in LC-3 will affect the N, Z, and P flags?",
                answers: [
                    { text: "ADD", correct: true },
                    { text: "BR", correct: false },
                    { text: "JMP", correct: false },
                    { text: "LDI", correct: false },
                ]
            },
            {
                question: "What is the purpose of the ALUK control signal in LC-3?",
                answers: [
                    { text: "To select which operation the ALU performs", correct: true },
                    { text: "To load a value from memory", correct: false },
                    { text: "To increment the program counter", correct: false },
                    { text: "To set the condition codes", correct: false },
                ]
            },
            {
                question: "In LC-3, which instruction is used to perform a conditional branch?",
                answers: [
                    { text: "ADD", correct: false },
                    { text: "BR", correct: true },
                    { text: "JMP", correct: false },
                    { text: "LD", correct: false },
                ]
            },
            {
                question: "In the LC-3 data path, where does the result of adding the sign-extended offset to the incremented PC go?",
                answers: [
                    { text: "To the MAR", correct: false },
                    { text: "To the ALU", correct: false },
                    { text: "To the PC", correct: true },
                    { text: "To the MDR", correct: false },
                ]
            },
            {
                question: "What is the primary role of the IR in the LC-3 instruction cycle?",
                answers: [
                    { text: "To hold the instruction that is fetched from memory.", correct: true },
                    { text: "To store the data from memory during a read operation.", correct: false },
                    { text: "To store the address of the memory location to be accessed.", correct: false },
                    { text: "To store the address of the next instruction.", correct: false },
                ]
            },
            {
                question: "Which instruction uses IR[11:9] to control the source of SR1?",
                answers: [
                    { text: "ADD", correct: true },
                    { text: "AND", correct: false },
                    { text: "LDR", correct: false },
                    { text: "JMP", correct: false },
                ]
            },
            {
                question: "What is the main function of the GateALU signal in the LC-3 data path?",
                answers: [
                    { text: "It controls the selection of the ALU's operation.", correct: true },
                    { text: "It controls the reading of data from memory.", correct: false },
                    { text: "It writes values into registers.", correct: false },
                    { text: "It increments the program counter.", correct: false },
                ]
            },
            {
                question: "What does the TRAP instruction do in LC-3?",
                answers: [
                    { text: "It jumps to a predefined location in memory for system calls.", correct: true },
                    { text: "It performs a conditional branch based on the flags.", correct: false },
                    { text: "It loads a value into a register.", correct: false },
                    { text: "It performs a bitwise logical operation.", correct: false },
                ]
            },
            {
                question: "Can a procedure that is not an algorithm be constructed from the three basic constructs of structured programming?",
                answers: [
                    { text: "Yes, by using just loops", correct: false },
                    { text: "Yes, by using loops, conditions, and sequences", correct: true },
                    { text: "No, because all procedures must be algorithms", correct: false },
                    { text: "No, because structured programming requires algorithms", correct: false },
                ]
            },
            {
                question: "Which of the following LC-3 instructions would subtract two integers if the LC-3 lacks a Subtract instruction?",
                answers: [
                    { text: "ADD with negative operands", correct: true },
                    { text: "AND with both numbers", correct: false },
                    { text: "XOR with a complement of the number", correct: false },
                    { text: "Shift left operation on the numbers", correct: false },
                ]
            },
            {
                question: "What does the LC-3 instruction `x3001 1110 0000 0000 1100` perform?",
                answers: [
                    { text: "Load the value at x3001 into register R1", correct: false },
                    { text: "Branch to address x300C if zero flag is set", correct: true },
                    { text: "Set the machine in an idle state", correct: false },
                    { text: "Increment the value stored in R1 by 4", correct: false },
                ]
            },
            {
                question: "In an LC-3 program, if the value in register R1 is compared to R2, and R1 equals R2, what will be the value placed in R0?",
                answers: [
                    { text: "1", correct: false },
                    { text: "-1", correct: false },
                    { text: "0", correct: true },
                    { text: "R1’s value", correct: false },
                ]
            },
            {
                question: "Which of the following algorithms for multiplying two numbers is preferable?",
                answers: [
                    { text: "Repeated addition of the first number", correct: true },
                    { text: "Repeated addition of the second number", correct: false },
                    { text: "Adding the number to itself", correct: false },
                    { text: "Multiplying using a divide-and-conquer approach", correct: false },
                ]
            },
            {
                question: "In the context of LC-3 programming, what is the purpose of initializing register R2 in the character counting example?",
                answers: [
                    { text: "To store the ASCII value of the character", correct: false },
                    { text: "To prevent garbage values from affecting the program", correct: true },
                    { text: "To perform a calculation on the input string", correct: false },
                    { text: "To store the sum of the characters", correct: false },
                ]
            },
            {
                question: "In LC-3, what is the purpose of using the iteration construct in a program?",
                answers: [
                    { text: "To compare two numbers and store the result", correct: false },
                    { text: "To perform repeated actions until a condition is met", correct: true },
                    { text: "To jump to a specific address in memory", correct: false },
                    { text: "To increment a memory location by 1", correct: false },
                ]
            },
            {
                question: "Which LC-3 instruction would be used to determine if a number stored in R2 is odd?",
                answers: [
                    { text: "BRz", correct: false },
                    { text: "BRp", correct: false },
                    { text: "BRn", correct: false },
                    { text: "AND R2, R2, x1", correct: true },
                ]
            },
            {
                question: "In an LC-3 machine language program, if the program is supposed to display 100 Zs on the screen, which construct would be most appropriate for the task?",
                answers: [
                    { text: "Conditional construct", correct: false },
                    { text: "Iteration construct", correct: true },
                    { text: "Sequence construct", correct: false },
                    { text: "Shift construct", correct: false },
                ]
            },
            {
                question: "In an LC-3 program that is encrypting a message, what would be the result of adding 4 to each character’s ASCII value?",
                answers: [
                    { text: "The message will be shifted to the left by 4", correct: false },
                    { text: "The message will be encoded as numeric values", correct: false },
                    { text: "Each character in the message will change by 4 in ASCII", correct: true },
                    { text: "The message will be converted to uppercase", correct: false },
                ]
            },
            {
                question: "What will be stored in location x3025 after the assembly of the following LC-3 program? PLACE .FILLx45A7 || LDI R3, PLACE",
                answers: [
                    { text: "x45A7", correct: true },
                    { text: "The address of PLACE", correct: false },
                    { text: "x3025", correct: false },
                    { text: "x45A0", correct: false },
                ]
            },
            {
                question: "What value will be contained in R1 after the following LC-3 instruction executes? ASCII LD R1, ASCII",
                answers: [
                    { text: "0x4F08", correct: true },
                    { text: "0x4F00", correct: false },
                    { text: "0x0000", correct: false },
                    { text: "0x0008", correct: false },
                ]
            },
            {
                question: "What is the problem with using \"AND\" as a label in LC-3 assembly?",
                answers: [
                    { text: "It conflicts with a reserved opcode.", correct: true },
                    { text: "It is a syntax error.", correct: false },
                    { text: "It causes a memory access violation.", correct: false },
                    { text: "It causes an infinite loop.", correct: false },
                ]
            },
            {
                question: "What does the pseudo-op .END do?",
                answers: [
                    { text: "It marks the end of the program's execution.", correct: true },
                    { text: "It halts the program.", correct: false },
                    { text: "It reserves memory space.", correct: false },
                    { text: "It ends a function definition.", correct: false },
                ]
            },
            {
                "question": "What type of instruction is \"ADD\" in the LC-3?",
                "answers": [
                    { "text": "Operate Instruction", "correct": true },
                    { "text": "Data Movement Instruction", "correct": false },
                    { "text": "Control Instruction", "correct": false }
                ]
            },
            {
                "question": "What type of instruction is \"JMP\" in the LC-3?",
                "answers": [
                    { "text": "Operate Instruction", "correct": false },
                    { "text": "Data Movement Instruction", "correct": false },
                    { "text": "Control Instruction", "correct": true }
                ]
            },
            {
                "question": "What type of instruction is \"LEA\" in the LC-3?",
                "answers": [
                    { "text": "Operate Instruction", "correct": false },
                    { "text": "Data Movement Instruction", "correct": true },
                    { "text": "Control Instruction", "correct": false }
                ]
            },
            {
                "question": "What type of instruction is \"NOT\" in the LC-3?",
                "answers": [
                    { "text": "Operate Instruction", "correct": true },
                    { "text": "Data Movement Instruction", "correct": false },
                    { "text": "Control Instruction", "correct": false }
                ]
            },
            {
                "question": "Given a memory addressability of 64 bits, what does that tell you about the size of the MAR and MDR?",
                "answers": [
                    { "text": "The size of the MAR is 64 bits, and the MDR is 64 bits.", "correct": true },
                    { "text": "The size of the MAR is 32 bits, and the MDR is 32 bits.", "correct": false },
                    { "text": "The size of the MAR is 16 bits, and the MDR is 16 bits.", "correct": false }
                ]
            },
            {
                "question": "In memory management, what is the distinguishing characteristic of an element used to terminate a loop by an element called a \"flag\"?",
                "answers": [
                    { "text": "It holds a counter value.", "correct": false },
                    { "text": "It indicates whether a condition is met.", "correct": true },
                    { "text": "It stores the address of the next instruction.", "correct": false }
                ]
            },
            {
                "question": "For a memory with 256 locations, each containing 16 bits, how many bits are required for the address?",
                "answers": [
                    { "text": "8 bits", "correct": true },
                    { "text": "16 bits", "correct": false },
                    { "text": "10 bits", "correct": false }
                ]
            },
            {
                "question": "When using PC-relative addressing mode, how many bits of a branch instruction are needed to specify an offset of 20 locations?",
                "answers": [
                    { "text": "5 bits", "correct": true },
                    { "text": "9 bits", "correct": false },
                    { "text": "8 bits", "correct": false }
                ]
            },
            {
                "question": "Which of the following is NOT a common addressing mode in the LC-3?",
                "answers": [
                    { "text": "Immediate addressing", "correct": false },
                    { "text": "Indirect addressing", "correct": false },
                    { "text": "Direct addressing", "correct": true }
                ]
            },
            {
                "question": "What is the largest positive number that can be represented as an immediate value in the LC-3 ADD instruction?",
                "answers": [
                    { "text": "255", "correct": false },
                    { "text": "32767", "correct": true },
                    { "text": "65535", "correct": false }
                ]
            },
            {
                "question": "What is the primary function of the \"NOP\" instruction in an ISA?",
                "answers": [
                    { "text": "It performs no operation but consumes CPU time.", "correct": true },
                    { "text": "It halts the program execution.", "correct": false },
                    { "text": "It causes a memory overflow.", "correct": false }
                ]
            },
            {
                "question": "In the LC-3 architecture, which of the following instructions uses the PC-relative addressing mode?",
                "answers": [
                    { "text": "ADD", "correct": false },
                    { "text": "JMP", "correct": false },
                    { "text": "LD", "correct": true }
                ]
            },
            {
                "question": "Which of the following describes the relationship between the instructions A: 0000111101010101 and B: 0100111101010101?",
                "answers": [
                    { "text": "They perform the same operation.", "correct": false },
                    { "text": "They perform different operations based on the opcode.", "correct": true },
                    { "text": "They are identical in function but differ in their addressing modes.", "correct": false }
                ]
            },
            {
                "question": "What is the result of executing an LC-3 instruction \"ADD R1, R2, R3\" where R2 contains an unsigned value and R3 contains a signed value?",
                "answers": [
                    { "text": "The result is accurate as long as the operands are of the same type.", "correct": false },
                    { "text": "The result may not be accurate due to mismatched operand types.", "correct": true },
                    { "text": "The result will always be correct regardless of operand types.", "correct": false }
                ]
            },
            {
                "question": "What is the maximum size of a branch offset in the LC-3?",
                "answers": [
                    { "text": "±8 bits", "correct": false },
                    { "text": "±16 bits", "correct": false },
                    { "text": "±28 bits", "correct": true }
                ]
            },
            {
                "question": "What is the condition for a conditional branch in the LC-3 to redirect control to a new address?",
                "answers": [
                    { "text": "The condition code must be positive.", "correct": false },
                    { "text": "The condition code must be zero.", "correct": false },
                    { "text": "The condition code must match the specified condition in the branch instruction.", "correct": true }
                ]
            },
            {
                "question": "What type of instruction does the LC-3 use to load data directly from memory to a register?",
                "answers": [
                    { "text": "LD", "correct": true },
                    { "text": "LDI", "correct": false },
                    { "text": "LEA", "correct": false }
                ]
            },
            {
                "question": "Which addressing mode allows the operand to be specified as an offset from the Program Counter (PC)?",
                "answers": [
                    { "text": "PC-relative", "correct": true },
                    { "text": "Register", "correct": false },
                    { "text": "Immediate", "correct": false }
                ]
            },
            {
                "question": "How many bits are required in the PC to address all memory in a system with 64K bytes of memory?",
                "answers": [
                    { "text": "12 bits", "correct": false },
                    { "text": "16 bits", "correct": true },
                    { "text": "18 bits", "correct": false }
                ]
            },
            {
                "question": "Which instruction type in the LC-3 is used for control flow, such as jumps or branches?",
                "answers": [
                    { "text": "Operate", "correct": false },
                    { "text": "Data Movement", "correct": false },
                    { "text": "Control", "correct": true }
                ]
            },
            {
                "question": "What is the primary use of the LEA instruction in the LC-3?",
                "answers": [
                    { "text": "To load an address into a register.", "correct": true },
                    { "text": "To load a value from memory into a register.", "correct": false },
                    { "text": "To perform an arithmetic operation.", "correct": false }
                ]
            },
            {
                "question": "What is the purpose of the \"TRAP\" instruction in the LC-3?",
                "answers": [
                    { "text": "To cause a halt in execution.", "correct": false },
                    { "text": "To trigger a system call or exception.", "correct": true },
                    { "text": "To perform arithmetic operations.", "correct": false }
                ]
            },
            {
                "question": "Which addressing mode would be most appropriate for accessing an array of sequential addresses?",
                "answers": [
                    { "text": "PC-relative", "correct": false },
                    { "text": "Register", "correct": false },
                    { "text": "Indexed", "correct": true }
                ]
            },
            {
                "question": "In the LC-3, which instruction is used for loading indirect data from memory?",
                "answers": [
                    { "text": "LDI", "correct": true },
                    { "text": "LDR", "correct": false },
                    { "text": "LD", "correct": false }
                ]
            },
            {
                "question": "How many bits are used for the offset in the LDR instruction in the LC-3?",
                "answers": [
                    { "text": "6 bits", "correct": true },
                    { "text": "9 bits", "correct": false },
                    { "text": "12 bits", "correct": false }
                ]
            },
            {
                "question": "What does the term \"addressability\" refer to in the context of computer memory?",
                "answers": [
                    { "text": "The total number of memory locations in the system.", "correct": false },
                    { "text": "The number of bits in a single memory location.", "correct": true },
                    { "text": "The speed at which memory can be accessed.", "correct": false }
                ]
            }        
            // ... questions...
        ]
    },
    // science: {
    //     time: 60 * 20, // 20 minutes in seconds
    //     questions: [
    //         {
    //             question: "What is the chemical symbol for water?",
    //             answers: [
    //                 { text: "H2O", correct: true },
    //                 { text: "O2", correct: false },
    //                 { text: "CO2", correct: false },
    //                 { text: "H2", correct: false },
    //             ]
    //         },
    //         // ...other science questions...
    //     ]
    // }
};
const selectedSubject = localStorage.getItem('selectedSubject');
const subjectQuestions = questions[selectedSubject].questions; 
const subjectTime = questions[selectedSubject].time;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizTitleElement = document.getElementById("quiz-title"); 

const backButton = document.getElementById("back-btn"); // Added this line

const timerElement = document.getElementById("time"); 
let timeLeft = localStorage.getItem('timeLeft') ? parseInt(localStorage.getItem('timeLeft')) : subjectTime;
let timerInterval;

let currentQuestionIndex = localStorage.getItem('currentQuestionIndex') ? parseInt(localStorage.getItem('currentQuestionIndex')) : 0; 
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0; 

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = subjectTime; 
    nextButton.innerHTML = "Next";
    startTimer(); 
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = subjectQuestions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    backButton.style.display = currentQuestionIndex > 0 ? "block" : "none"; // Added this line

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        localStorage.setItem('timeLeft', timeLeft); 
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function handleBackButton(){ // Added this function
    if(currentQuestionIndex > 0){
        currentQuestionIndex--;
        showQuestion();
    }
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex); 
}
backButton.addEventListener("click", () => { // Added this event listener
    handleBackButton();
});

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    localStorage.setItem('score', score); 
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex); 
}

function showScore(){
    clearInterval(timerInterval); 
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${subjectQuestions.length}!`; 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    localStorage.clear(); 
}
// Function to get the total number of questions for the selected subject
function getTotalQuestions(subject) {
    return questions[subject] ? questions[subject].questions.length : 0;
}

document.addEventListener('DOMContentLoaded', () => {
    
    const isTimed = JSON.parse(localStorage.getItem('isTimed'));
    const timerElement = document.getElementById('timer');
    
    if (isTimed) {
        timerElement.style.display = 'block';
        startTimer(60 * 20); 
    }
    initializeQuiz();
    
    const selectedSubject = localStorage.getItem('selectedSubject');
    if (selectedSubject) {
        const totalQuestions = getTotalQuestions(selectedSubject);
        document.getElementById('total').textContent = totalQuestions;
    } else {
        document.getElementById('total').textContent = 0;
    }

    // Log the total number of questions in the computerArchitecture array
    console.log(questions.computerArchitecture.questions.length);

    const nextButton = document.getElementById('next-btn');

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < subjectQuestions.length) {
            showQuestion();
        } else {
            showScore();
        }
        localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    }

    nextButton.addEventListener('click', handleNextButton);

    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (nextButton) {
                nextButton.click();
            }
        }
    });

});
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < subjectQuestions.length){ 
        showQuestion();
    }
    else{
        showScore();
    }
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex); 
}


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < subjectQuestions.length) { 
        handleNextButton();
    } 
    else {
        startQuiz();
    }
});
if (timeLeft > 0 && currentQuestionIndex < subjectQuestions.length) { 
    startTimer();
    showQuestion();
} else {
    startQuiz();
}

if (quizTitleElement && selectedSubject) {
    quizTitleElement.innerHTML = `${selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)} Quiz`;
}
function initializeQuiz() {
    // Reset current question index
    let currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex'), 10) || 0;
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);

    // Load the first question
    loadQuestion(currentQuestionIndex);
}

function loadQuestion(index) {
    // Logic to load the question based on the index
    // ...
}

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const timerElement = document.getElementById('time');
    
    const interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            // Handle quiz end due to timeout
        }
    }, 1000);
}







