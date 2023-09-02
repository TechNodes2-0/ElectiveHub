import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentList = ({ token }) => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/student/allstudents`,
        {

          headers: {
            Authorization: `Bearer ${token}`,
          }
        }



      );
      console.log(response.data[0]);
      setStudents(response.data);
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
        `${import.meta.env.VITE_API_URL}/student/DeleteStudent/${selectedStudent.idNumber}`,
        {

          headers: {
            Authorization: `Bearer ${token}`,
          }
        }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        
      );
toast.success("Student deleted successfully!");
fetchStudents();
    } catch (error) {
  console.error(error);
  toast.error("Failed to delete student.");
}
setShowModal(false);
  };

const cancelDelete = () => {
  setSelectedStudent(null);
  setShowModal(false);
};

return (
  <>
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-black text-center">
        Student List
      </h2>
      <div className="mb-4 ml-3">
        <div className="relative ">
          <input
            type="text"
            placeholder="Search Students..."
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 px-3 py-2 pl-8 rounded"
          />
          <span className="absolute top-3 left-2">
            <img
              src="search.png"
              alt="Search Icon"
              className="w-4 h-4 text-gray-500"
            />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className="bg-gray-800 border-blue-500 border-2 border-solid rounded shadow p-4 flex flex-col justify-between text-white"
          >
            <div>
              <h3 className="text-lg font-medium">{student.name}</h3>
              <p className="text-gray-500">ID: {student.idNumber}</p>
              <p className="text-gray-500">Email: {student.email}</p>
              <p className="text-gray-500">Phone: {student.phoneNumber}</p>
            </div>
            <div className="mt-4">
              {/* Add buttons for editing and deleting a student */}
              <Link
                to={{
                  pathname: `/edit/${student.idNumber}`,
                  state: { studentData: student, id: student.idNumber },
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Edit
              </Link>
              <Link
                to={`/add-subject-to-student/${student.idNumber}`}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                View Subjects
              </Link>
              <button
                onClick={() => handleDelete(student)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative bg-white rounded-lg shadow max-w-md">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
              onClick={cancelDelete}
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
            <div className="p-6 text-center bg-gray-900">
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
                  d="M10 11V6m0 0 6-6M10 11h4m-4 0H6"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-white">
                Are you sure you want to delete this student?
              </h3>
              <button
                onClick={confirmDelete}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={cancelDelete}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
);
};

export default StudentList;
