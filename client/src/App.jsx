import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import PrivateRoutes from "./Pages/PrivateRoutes";
import ErrorBoundary from "./Pages/ErrorBoundary";
import Homepage from "./Pages/HomePage";
import StudentHome from "./Pages/StudentHome";
import StudentForm from "./Components/Student/StudentForm";
import EditStudent from "./Components/Student/EditStudent";
import SubjectNavbar from "./Components/SubjectNavbar";
import SubjectHome from "./Pages/SubjectHome";
import EditSubject from "./Components/Subject/EditSubject";
import SubjectForm from "./Components/Subject/SubjectForm";
import StudentSubject from "./Components/Student/StudentSubject";
import EditStudentSubject from "./Components/Student/EditStudentSubject";
import StudentsForSubject from "./Components/Subject/StudentsForSubject";
import AdminRoutes from "./Pages/AdminRoutes";

import AlanAIComponent from "./alan";
function App() {
  

  // const token = cookies.get("TOKEN");
  return (
    <>
    <AlanAIComponent/>
    {/* <h1>{import.meta.env.VITE_API_URL}</h1> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>



        <Route element={<PrivateRoutes />}>
          <Route
            path="Home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          ></Route>
          <Route   element={<AdminRoutes/>}>
      
          <Route path="/add-subject" element={<SubjectForm />}></Route>
        <Route path="/editsubject/:id" element={<EditSubject />}></Route>
        <Route path="/edit-student-subject/:studentId/:electiveSubjectId" element={<EditStudentSubject />}></Route>
        <Route path="/add-subject-to-student/:id" element={<StudentSubject/>}></Route>
        <Route path="/add-student-to-subject/:id" element={<StudentsForSubject/>}></Route>
          </Route>
          <Route path="Student" element={<StudentHome />}></Route>
          
        </Route>



        <Route
          path="/Login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/Signup"
          element={
            <>
              <Navbar /> <Signup />
            </>
          }
        ></Route>
        <Route path="/add-student" element={<StudentForm />}></Route>
        <Route path="/edit/:id" element={<EditStudent />}></Route>
        <Route path="/Subject" element={<SubjectHome />}></Route>
      
  

      </Routes>
      <Footer />
    </>
  );
}

export default App;
