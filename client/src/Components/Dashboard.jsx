import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth/AuthContext";
import PieChart from "./PieChart";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Barplot from "./Barplot";
import { CircularPacking } from "./CircularPacking";
import { data } from "./data";
import BackToTopButton from "./BackToTopButton";

const   Dashboard = () => {
  const { token } = useContext(AuthContext);
  const numStudents = 100;
  const [pieChartData, setPieChartData] = useState([]);
  const [barplotData, setbarplotData] = useState([]);
  const numSubjects = 10;

  useEffect(() => {
    if (token) {
      axios
        .get(
          `${
            import.meta.env.VITE_API_URL
          }/main/getStudentsForElectiveSubjectCount`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          const studentCountData = response.data;
          const pieChartData = studentCountData.map((item) => ({
            name: item.subjectName,
            value: item.studentCount,
          }));
          setPieChartData(pieChartData);
        })
        .catch((error) => {
          console.error("Error fetching students per subject:", error);
        });
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      axios
        .get(
          `${
            import.meta.env.VITE_API_URL
          }/main/getStudentsForElectiveSubjectTree`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          const inputData = response.data;

          console.log(inputData);

          setbarplotData(inputData);
        })
        .catch((error) => {
          console.error("Error fetching students per subject:", error);
        });
    }
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-4 text-blue-600">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Students Card */}
            <div className="bg-blue-500 p-4 rounded-lg text-white">
              <h2 className="text-lg font-semibold">Total Students</h2>
              <p className="text-4xl">{numStudents}</p>
            </div>

            {/* Subjects Card */}
            <div className="bg-green-500 p-4 rounded-lg text-white">
              <h2 className="text-lg font-semibold">Total Subjects</h2>
              <p className="text-4xl">{numSubjects}</p>
            </div>
            {/* Add more cards as needed */}

            {/* Charts */}
            <div className="col-span-3 ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                <div className="bg-white rounded-lg shadow-md flex items-center justify-center dark:border dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  <PieChart data={pieChartData} width={900} height={400} />
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                <div className="bg-white rounded-lg shadow-md flex items-center justify-center dark:border dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  {/* <Barplot data={pieChartData} width={700} height={400} /> */}
                  <Barplot data={pieChartData} width={700} height={400} /> 
                </div>
              </div>
            </div>

            <div className="col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                <div className="bg-white rounded-lg shadow-md flex items-center justify-center dark:border dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  <CircularPacking data={data} width={700} height={900} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackToTopButton />
      </div>
    </>
  );
};

export default Dashboard;
