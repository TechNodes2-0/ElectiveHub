import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PieChart from "./PieChart";
import {data} from "./data"
import { AuthContext } from "./Auth/AuthContext";
import Barplot from "./Barplot";
import { CircularPacking} from "./CircularPacking";

const PieChartHoverDemo = ({ width = 900, height = 400 }) => {
  const { token } = useContext(AuthContext);
  const [pieChartData, setPieChartData] = useState([]); // State to store pie chart data

  useEffect(() => {
    if (token) {
      // Fetch the count of students per elective subject
      axios
        .get(`${
            import.meta.env.VITE_API_URL
          }/main/getStudentsForElectiveSubjectCount`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const studentCountData = response.data;
console.log(studentCountData)
          const pieChartData = studentCountData.map((item) => ({
            name: item.subjectName,
            value: item.studentCount,
          }));

          // Set the pie chart data in the component state
          setPieChartData(pieChartData);
        })
        .catch((error) => {
          console.error("Error fetching students per subject:", error);
        });
    }
  }, [token]);

  return (
    <div>
      <h1>Students Per Elective Subject</h1>
      <CircularPacking data={data} width={width} height={height} />
    </div>
  );
};

export default PieChartHoverDemo;
