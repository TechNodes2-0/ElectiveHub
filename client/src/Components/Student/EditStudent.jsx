import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Auth/AuthContext";
import StudentNavbar from "../StudentNavbar";
const EditStudent = () => {
  const { id } = useParams();
  const studentId = id;
  const { token } = useContext(AuthContext);
  console.log(token);
  const [studentData, setStudentData] = useState({
    name: "",
    idNumber: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/student/getstudent/${studentId}`,
        {

          headers: {
            Authorization: `Bearer ${token}`,
          }
        }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
      
      );
console.log(response.data[0].name);
setStudentData(response.data[0]);
    } catch (error) {
  console.error(error);
}
  };

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setStudentData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

const handleSave = async () => {
  try {
    await axios.put(
      `${import.meta.env.VITE_API_URL}/student/UpdateStudent/${studentId}`,
      studentData,
      {

        headers: {
          Authorization: `Bearer ${token}`,
        }
      }

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        
      );
toast.success("Student data updated successfully!");
    } catch (error) {
  console.error(error);
  toast.error("Failed to update student data.");
}
  };
return (
  <>
    <StudentNavbar />
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
      <form>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            ID Number
          </label>
          <input
            type="text"
            name="idNumber"
            value={studentData.idNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={studentData.phoneNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
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

export default EditStudent;
