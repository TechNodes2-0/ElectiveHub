import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import StudentNavbar from "../StudentNavbar";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../Auth/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const StudentForm = () => {
  const { token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.idNumber.trim()) {
      newErrors.idNumber = "ID Number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Make API call to backend to create/update student record
      axios
        .post(`${import.meta.env.VITE_API_URL}/student/addstudent`, formData, {
          

            headers: {
              Authorization: `Bearer ${token}`,
            }
          
        })
        .then((response) => {
          // Handle success response
          console.log(response.data);
          // Reset form data
          setFormData({
            name: "",
            idNumber: "",
            email: "",
            phoneNumber: "",
          });
          // Clear errors
          setErrors({});
          toast.success("Student added successfully!");
        })
        .catch((error) => {
          // Handle error response
          console.error(error);
        });
    }
  };

  return (
    <>
      <StudentNavbar />
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className=" rounded-lg shadow-lg p-8 bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4 w-96 text-white">
            Student Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="idNumber"
                className="block mb-1 font-medium text-white"
              >
                ID Number
              </label>
              <input
                type="text"
                id="idNumber"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                className={`w-full border ${errors.idNumber ? "border-red-500" : "border-gray-300"
                  } rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.idNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.idNumber}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block mb-1 font-medium text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  } rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default StudentForm;
