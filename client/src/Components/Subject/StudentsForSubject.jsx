import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SubjectNavbar from "../SubjectNavbar";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

const StudentsForSubject = () => {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const subjectCode = id;
  const [studentsForSubject, setStudentsForSubject] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudentsForSubject(subjectCode);
    // fetchAllStudents();
  }, [subjectCode]);
  useEffect(() => {
    fetchAllStudents();
    // fetchAllStudents();
  }, [studentsForSubject]);

  const fetchStudentsForSubject = async (subjectCode) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/main/getStudentsForElectiveSubject/${subjectCode}`,
        {

          headers: {
            Authorization: `Bearer ${token}`,
          }
        }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        
      );
const students = response.data.map((item) => item.student);
setStudentsForSubject(students);
    } catch (error) {
  console.error(error);
}
  };

const fetchAllStudents = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/student/allstudents`,
      {

        headers: {
          Authorization: `Bearer ${token}`,
        }
      }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        
      );
console.log(studentsForSubject);
const allStudents = response.data.filter((student) => {
  return !studentsForSubject.some(
    (assignedStudent) => assignedStudent._id === student._id
  );
});
console.log(allStudents);

setAllStudents(allStudents);
    } catch (error) {
  console.error(error);
}
  };

const handleCardClick = (student) => {
  setSelectedStudent(student);
};

const assignStudentToSubject = async () => {
  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/main/addStudentToElectiveSubject`,
      {
        studentId: selectedStudent._id,
        electiveSubjectId: subjectCode,
      },
      {

        headers: {
          Authorization: `Bearer ${token}`,
        }
      }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        
      );
// Clear the selected student and refetch the students for the subject
setSelectedStudent(null);
fetchStudentsForSubject(subjectCode);
fetchAllStudents();
    } catch (error) {
  console.error(error);
}
  };

const handleDelete = (student) => {
  setSelectedStudent(student);
  setShowModal(true);
};

const confirmDelete = async () => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/main/removeElectiveSubjectFromStudent`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          studentId: selectedStudent._id,
          electiveSubjectId: subjectCode,
        },
      },
      

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        
      );

// Remove the student from the state
fetchStudentsForSubject(subjectCode);
    } catch (error) {
  console.error(error);
}
setShowModal(false);
  };

const cancelDelete = () => {
  setSelectedStudent(null);
  setShowModal(false);
};
return (
  <div className="bg-gray-900 text-white">
    <SubjectNavbar />

    <h1 className="text-2xl font-bold mb-4 text-center mt-0">
      Students for Subject {subjectCode}
    </h1>

    <h2 className="text-lg font-bold mb-2">Students for Subject:</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {studentsForSubject.map((student) => (
        <div
          key={student._id}
          className="border border-gray-300 p-4 rounded cursor-pointer"
          onClick={() => handleCardClick(student)}
        >
          <h2 className="text-lg font-bold mb-2">{student.name}</h2>
          <p className="text-white">ID: {student.idNumber}</p>
          <p className="text-white">Email: {student.email}</p>
          <p className="text-white">Phone: {student.phoneNumber}</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => handleDelete(student)}
            data-modal-toggle="popup-modal"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-2 mt-4">All Students:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allStudents.map((student) => (
          <div
            key={student._id}
            className={`border border-gray-300 p-4 rounded cursor-pointer ${selectedStudent?._id === student._id ? "bg-gray-800" : ""
              }`}
            onClick={() => handleCardClick(student)}
          >
            <h2 className="text-lg font-bold mb-2">{student.name}</h2>
            <p className="text-white">ID: {student.idNumber}</p>
            <p className="text-white">Email: {student.email}</p>
            <p className="text-white">Phone: {student.phoneNumber}</p>
          </div>
        ))}
      </div>
    </div>

    {selectedStudent && (
      <div>
        <h2 className="text-lg font-bold mt-4">Selected Student</h2>
        <div className="border border-gray-300 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">{selectedStudent.name}</h2>
          <p className="text-white">ID: {selectedStudent.idNumber}</p>
          <p className="text-white">Email: {selectedStudent.email}</p>
          <p className="text-white">Phone: {selectedStudent.phoneNumber}</p>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={assignStudentToSubject}
        >
          Assign Student
        </button>
      </div>
    )}
    {showModal && (
      <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="relative bg-white rounded-lg shadow max-w-md">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            onClick={cancelDelete}
            data-modal-toggle="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-white">
              Are you sure you want to delete this student?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={confirmDelete}
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              onClick={cancelDelete}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default StudentsForSubject;
