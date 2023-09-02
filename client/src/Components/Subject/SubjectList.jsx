import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ElectiveSubjectPage = () => {

  const { token } = useContext(AuthContext);
  console.log("GLobal token",token);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const [subjects, setSubjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const filteredSubjects = subjects.filter((subject) =>
    subject.subjectName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    
    fetchSubjects();
  }, [token]);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/subject/allsubjects`,
        {

          headers: {
            Authorization: `Bearer ${token}`,
          }
        }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        
      );
setSubjects(response.data);
    } catch (error) {
  console.error(error);
}
  };

const handleDelete = (subject) => {
  setSelectedSubject(subject);
  setShowModal(true);
};

const confirmDelete = async () => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/deleteSubject/${selectedSubject.subjectCode}`,
      {

        headers: {
          Authorization: `Bearer ${token}`,
        }
      }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        
      );
toast.success("Subject deleted successfully!");
fetchSubjects();
    } catch (error) {
  console.error(error);
  toast.error("Failed to delete subject.");
}
setShowModal(false);
  };

const cancelDelete = () => {
  setSelectedSubject(null);
  setShowModal(false);
};

return (
  <div className="flex flex-col items-center bg-gray-900">
    <h1 className="text-2xl font-bold mb-4 text-white">Elective Subjects</h1>
    <div className="mb-4 ml-3">
      <div className="relative">
        <input
          type="text"
          placeholder="Search subjects..."
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

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredSubjects.map((subject) => (
        <div
          key={subject.subjectCode}
          className="border-2 border-white cursor-pointer p-4 rounded text-white mr-2 ml-2"
        >
          <h2 className="text-lg font-bold mb-2">{subject.subjectName}</h2>
          <p className="text-gray-500 mb-4">{subject.subjectCode}</p>
          <p>{subject.subjectDescription}</p>
          <div className="mt-4">
            <Link
              to={`/editsubject/${subject.subjectCode}`}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Edit
            </Link>
            <Link
              to={`/add-student-to-subject/${subject._id}`}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              View Students
            </Link>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleDelete(subject)}
              data-modal-toggle="popup-modal"
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
                d="M10 11V6m0 0 6-6M10 11h6m-6 0H4m6 0v6m0-6V4"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Are you sure you want to delete this subject?
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
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
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

export default ElectiveSubjectPage;
