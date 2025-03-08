import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import BackToTopButton from "../BackToTopButton";

const ElectiveSubjectPage = () => {
  const { token } = useContext(AuthContext);
  console.log("GLobal token", token);
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
          },
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
        `${import.meta.env.VITE_API_URL}/subject/deleteSubject/${
          selectedSubject.subjectCode
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Main content container */}
      <div className="py-10  px-4 mx-auto flex-grow">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">
          Elective Subjects
        </h1>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search subjects..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full border border-gray-300 px-3 py-2 pl-10 rounded"
            />
            <span className="absolute inset-y-0 left-3 flex items-center">
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
            <motion.div
              key={subject.subjectCode}
              className="border-2 rounded-lg border-gray-500 cursor-pointer p-4 text-white flex flex-col hover:scale-105 transition-transform duration-300"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col flex-grow">
                <div className="mb-2">
                  <h2 className="text-xl font-bold">{subject.subjectName}</h2>
                  <p className="text-gray-500">{subject.subjectCode}</p>
                </div>
                <div className="flex-grow overflow-y-auto">
                  <p>{subject.subjectDescription}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-center items-center gap-2 bg-white p-2 rounded">
                <Link
                  to={`/editsubject/${subject.subjectCode}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </Link>
                <Link
                  to={`/add-student-to-subject/${subject._id}`}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  View Students
                </Link>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(subject)}
                  data-modal-toggle="popup-modal"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <div className="relative bg-white rounded-lg shadow max-w-md w-full">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
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
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-4 text-gray-400 w-12 h-12"
                viewBox="0 0 32 32"
                id="delete"
              >
                <path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500">
                Are you sure you want to delete this subject?
              </h3>
              <div className="flex justify-center gap-4">
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                  onClick={confirmDelete}
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5"
                  onClick={cancelDelete}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          © {new Date().getFullYear()} ElectiveHub™. All Rights Reserved.
        </div>
      </footer>

      <BackToTopButton />
    </div>
  );

  
};

export default ElectiveSubjectPage;
