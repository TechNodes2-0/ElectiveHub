import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { useParams } from "react-router-dom";
import SubjectNavbar from "../SubjectNavbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditSubject = () => {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const subjectId = id;

  const [subjectData, setSubjectData] = useState({
    subjectName: "",
    subjectCode: "",
    subjectDescription: "",
  });

  useEffect(() => {
    fetchSubjectData();
  }, []);

  const fetchSubjectData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/subject/getsubject/${subjectId}`,
        {

          headers: {
            Authorization: `Bearer ${token}`,
          }
        }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
    
      );
console.log(response.data);
setSubjectData(response.data);
    } catch (error) {
  console.error(error);
}
  };

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setSubjectData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

const handleSave = async () => {
  try {
    await axios.put(
      `${import.meta.env.VITE_API_URL}/subject/updateSubject/${subjectId}`,
      subjectData,
      {

        headers: {
          Authorization: `Bearer ${token}`,
        }
      }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        
      );
toast.success("Subject updated successfully!");
    } catch (error) {
  console.error(error);
  toast.error("Failed to update subject.");
}
  };

return (
  <>
    <SubjectNavbar />
    <div className="container mx-auto p-4 bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-white">Edit Subject</h2>
      <form>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Subject Name
          </label>
          <input
            type="text"
            name="subjectName"
            value={subjectData.subjectName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 border-spacing-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Subject Code
          </label>
          <input
            type="text"
            name="subjectCode"
            value={subjectData.subjectCode}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Subject Description
          </label>
          <textarea
            name="subjectDescription"
            value={subjectData.subjectDescription}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </>
);
};

export default EditSubject;
