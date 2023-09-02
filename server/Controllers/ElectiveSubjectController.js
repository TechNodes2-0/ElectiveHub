const{ Student,ElectiveSubject} = require("../Models/StudentModel");

// Get all elective subjects
exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await ElectiveSubject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single elective subject by ID
exports.getSubjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const subject = await ElectiveSubject.findOne({subjectCode:id});
    if (!subject) {
      return res.status(404).json({ error: 'Elective subject not found' });
    }
    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.addSubject = async (req, res) => {
  try {
    const { subjectName, subjectCode, subjectDescription } = req.body;

    // Create a new ElectiveSubject instance
    const newSubject = new ElectiveSubject({
      subjectName,
      subjectCode,
      subjectDescription,
    });

    // Save the subject to the database
    const savedSubject = await newSubject.save();

    res.json(savedSubject);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};









// Update an elective subject
exports.updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const { subjectName, subjectDescription, subjectCode } = req.body;
console.log(subjectName,subjectDescription,subjectCode);
    const subject = await ElectiveSubject.findOneAndUpdate(
      {subjectCode:id},
      { subjectName, subjectDescription, subjectCode },
      { new: true }
    );
console.log("heelo",subject);
    if (!subject) {
      return res.status(404).json({ error: 'Elective subject not found' });
    }

    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an elective subject
exports.deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const subject = await ElectiveSubject.findOneAndDelete({subjectCode:id});

    if (!subject) {
      return res.status(404).json({ error: 'Elective subject not found' });
    }

    res.json({ message: 'Elective subject deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.insertSubjectDummyData = (req, res) => {
    const dummyData =[
        {
          "subjectName": "AI & Machine Learning",
          "subjectCode": "CS001001",
          "subjectDescription": "This elective subject explores the principles and techniques of artificial intelligence and machine learning, covering topics such as neural networks, deep learning, and data analysis."
        },
        {
          "subjectName": "Cloud Computing",
          "subjectCode": "CS001002",
          "subjectDescription": "This elective subject focuses on the fundamentals of cloud computing, including cloud architecture, virtualization, scalability, and deployment models."
        },
        {
          "subjectName": "Blockchain",
          "subjectCode": "CS001003",
          "subjectDescription": "This elective subject introduces the concept of blockchain technology, covering distributed ledger systems, smart contracts, and decentralized applications."
        },
        {
          "subjectName": "Data Mining",
          "subjectCode": "CS001004",
          "subjectDescription": "This elective subject explores the process of discovering patterns and extracting valuable insights from large datasets, using techniques such as clustering, classification, and association analysis."
        },
        {
          "subjectName": "IoT",
          "subjectCode": "CS001005",
          "subjectDescription": "This elective subject focuses on the Internet of Things (IoT) and its applications, including sensor networks, connectivity, and data analytics for IoT-enabled devices."
        },
        {
          "subjectName": "Cyber Security & Digital Forensic",
          "subjectCode": "CS001006",
          "subjectDescription": "This elective subject covers the principles of cybersecurity, including network security, cryptography, incident response, and digital forensic investigation techniques."
        },
        {
          "subjectName": "Advanced .NET",
          "subjectCode": "CS001007",
          "subjectDescription": "This elective subject dives into advanced topics and techniques for developing applications using the .NET framework, including web development, database connectivity, and security."
        },
        {
          "subjectName": "Advanced Java",
          "subjectCode": "CS001008",
          "subjectDescription": "This elective subject focuses on advanced concepts in Java programming, including advanced data structures, multithreading, GUI development, and web services."
        },
        {
          "subjectName": "Advanced Python",
          "subjectCode": "CS001009",
          "subjectDescription": "This elective subject delves into advanced features and libraries of the Python programming language, including data manipulation, scientific computing, machine learning, and web scraping."
        },
        {
          "subjectName": "Mobile Computing",
          "subjectCode": "CS001010",
          "subjectDescription": "This elective subject explores the development of mobile applications for various platforms, covering topics such as mobile UI design, application frameworks, and mobile app security."
        }
      ]
      
      
  
  
      ElectiveSubject.insertMany(dummyData).then(function () {
        console.log("Successfully saved defult items to DB");
      }).catch(function (err) {
        console.log(err);
      });
      
    
  };