import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth/AuthContext";
import PieChart from "./PieChart";
import axios from 'axios';
import Navbar from "../Components/Navbar"
import Barplot from "./Barplot";
import { CircularPacking } from "./CircularPacking";
import{ data} from "./data"

const Dashboard = () => {
    const { token } = useContext(AuthContext);
    const numStudents = 100;
    const [pieChartData, setPieChartData] = useState([]);
    const [barplotData, setbarplotData] = useState([]);
    const numSubjects = 10;

    useEffect(() => {
        if (token) {
            axios
                .get(`http://localhost:4000/main/getStudentsForElectiveSubjectCount`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
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
                .get(`http://localhost:4000/main/getStudentsForElectiveSubjectTree`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
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
      <  >
      <Navbar/>
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>

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
                    <div   >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                            <div className="bg-white  rounded-lg shadow-md" style={{ width: "100%" }}>
                            
                                <PieChart data={pieChartData} width={900} height={400} />
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4" >
                            <div className="bg-white  rounded-lg shadow-md" >
                               
                                <Barplot data={pieChartData} width={700} height={400} />
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4" >
                            <div className="bg-white  rounded-lg shadow-md" >
                               
                                <CircularPacking data={data} width={700} height={900} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;
