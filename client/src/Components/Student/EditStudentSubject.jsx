import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Auth/AuthContext";
const EditStudentSubject = () => {
  const { token } = useContext(AuthContext);
  console.log("localtoken ------------------>",token)
  console.log("GLOBAL TSOKRN",token);
  const [subjectName, setSubjectName] = useState("");
  const [subjectDescription, setSubjectDescription] = useState("");
  const [subjectCode, setSubjectCode] = useState("");

  const { studentId, electiveSubjectId } = useParams();
  if (studentId) {
    console.log("found", studentId);
  } else {
    console.log("not found");
  }

  useEffect(() => {
    if (studentId && electiveSubjectId) {
      fetchSubjectDetails(studentId);
    }
  }, [studentId, electiveSubjectId]);

  const fetchSubjectDetails = async (studentId) => {
    try {
      if (studentId && electiveSubjectId) {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/main/getElectiveSubjectsForStudent/${studentId}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },

            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          }
        );
        const subject = response.data.find(
          (item) => item.electiveSubject._id === electiveSubjectId
        );

        if (subject) {
          const { subjectName, subjectDescription, subjectCode } =
            subject.electiveSubject;
          setSubjectName(subjectName);
          setSubjectDescription(subjectDescription);
          setSubjectCode(subjectCode);
        }
      }
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/main/editSubjectOfStudent`,
        {
          studentId,
          electiveSubjectId,
          subjectName,
          subjectDescription,
          subjectCode,
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
toast.success("Subject updated successfully!");
fetchSubjectDetails(studentId);
    } catch (error) {
  console.error(error);
  toast.error("Failed to update subject.");
}
  };

return (
  <div>
    <h3>Edit Subject</h3>
    <div>
      <label>Subject Name:</label>
      <input
        type="text"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
    </div>
    <div>
      <label>Subject Description:</label>
      <textarea
        value={subjectDescription}
        onChange={(e) => setSubjectDescription(e.target.value)}
      ></textarea>
    </div>
    <div>
      <label>Subject Code:</label>
      <input
        type="text"
        value={subjectCode}
        onChange={(e) => setSubjectCode(e.target.value)}
      />
    </div>
    <button onClick={handleSave}>Save</button>
  </div>
);
};

export default EditStudentSubject;
